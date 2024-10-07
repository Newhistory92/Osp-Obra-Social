import type { NextPage } from "next";
import React, { useState, useEffect} from "react";
import { memo} from "react";
import BotonCard from "@/app/components/Botones/BotonCard/BotonCard";
import fetchData  from "@/app/utils/fetchData";
import { setActiveButton, setMostrarDelegacion } from '@/app/redux/Slice/navbarSlice';
import { setLoading } from '@/app/redux/Slice/loading';
import { useAppSelector, useAppDispatch } from "@/app/hooks/StoreHook";
import SistemaOnline from "../../../../../sistemaOnline.json";

export type CardRequisitosType = {
  servicioSeleccionado: string;
  onPublicacionesFiltradasChange: (publicaciones: any[]) => void;
  subcategoriaRef: React.RefObject<HTMLDivElement>; 
};

type DataType = {
  publicaciones: { [key: string]: any }[];
};
const apiData = fetchData<DataType>('/api/Datos/Publicaciones');


const CardRequisitos: NextPage<CardRequisitosType> = memo(({servicioSeleccionado,onPublicacionesFiltradasChange,subcategoriaRef}) => {
  const [publicacionesAgrupadas, setPublicacionesAgrupadas] = useState<{ [key: string]: any[] }>({});
  const  activeButton  = useAppSelector(state =>  state.navbar.activeButton);
  const dispatch = useAppDispatch(); 

  

  const fetchDataWithDelay = () => {
    try {
      const data = apiData.read();
      if (data && Object.keys(data).length > 0) {
        // Si `data` ya tiene datos, procesarlos y desactivar el loading
        processFetchedData(data);
        dispatch(setLoading(false));
        return; // Salimos de la función porque ya tenemos los datos
      } else {
        // Si `data` no tiene datos, activar el estado de loading y aplicar el setTimeout
        dispatch(setLoading(true));
      }
    } catch (error) {
      // Si ocurre un error al leer los datos, activar el loading para esperar que se carguen
      dispatch(setLoading(true));
    }
    // Aplicar el setTimeout para esperar los datos después de 3102 ms
    setTimeout(() => {
      try {
        const dataAfterTimeout = apiData.read();
        if (dataAfterTimeout && Object.keys(dataAfterTimeout).length > 0) {
          // Si los datos están disponibles después del timeout, procesarlos y desactivar el loading
          processFetchedData(dataAfterTimeout);
          
          dispatch(setLoading(false));
        }
      } catch (error) {
        console.error('Error fetching data after timeout:', error);
        dispatch(setLoading(true));
      }
    
    }, 3102);
   
  };
  

  const processFetchedData = (data: any) => {
   
    // Filtramos las publicaciones por la categoría seleccionada
    const filtradas = data.publicaciones.filter((publicacion: any) => {
      return publicacion.categoria_nombre.toLowerCase() === servicioSeleccionado.toLowerCase();
    });

    // Agrupamos las publicaciones por subcategoria_nombre
    const agrupadas = filtradas.reduce((acc: any, publicacion: any) => {
      const { subcategoria_nombre } = publicacion;
      if (!acc[subcategoria_nombre]) {
        acc[subcategoria_nombre] = [];
      }
      acc[subcategoria_nombre].push(publicacion);
      return acc;
    }, {});

    setPublicacionesAgrupadas(agrupadas);
   
  }
  useEffect(() => {
    fetchDataWithDelay();
  }, [servicioSeleccionado, dispatch]);

  const handleBotonCardClick = (subcategoria: string,value: string) => {
    const publicacionesSubcategoria = publicacionesAgrupadas[subcategoria] || [];
    
    const filtradasFinales = publicacionesSubcategoria.map((publicacion: any) => ({
      id: publicacion.id,
      titulo: publicacion.titulo,
      contenido: publicacion.contenido,
      subsubcategoria_nombre: publicacion.subsubcategoria_nombre || null,
    }));
    onPublicacionesFiltradasChange(filtradasFinales);
    subcategoriaRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
   

  
  if (value === 'Delegación') {
    dispatch(setMostrarDelegacion(true));
    
  } else {
    // Si se hace clic en cualquier otro botón, poner mostrarDelegacion en false
    dispatch(setMostrarDelegacion(false));
  }
  if (activeButton) {
    dispatch(setActiveButton(false));
  }
};


  const handleRedireccionClick = (url?: string) => {
    if (url) {
      window.location.href = url; 
    }
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
        {Object.keys(publicacionesAgrupadas).map((subcategoria: string) => (
          <BotonCard
            key={subcategoria}
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente={subcategoria}
            value={subcategoria}
            onClick={() => handleBotonCardClick(subcategoria, subcategoria)} 
          />
        ))}
        {servicioSeleccionado.toLowerCase() === "servicios" && (
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Delegación de Partamental"
            value="Delegación"
            onClick={() => handleBotonCardClick("Delegación de Partamental", "Delegación")} 
          />
        )}
        {servicioSeleccionado === "Sistema Online para Prestadores" &&
          SistemaOnline.map((link) => (
            <div key={link.id}>
              <BotonCard
                mostrarIcono
                fondo="/fondo2.svg"
                consultaDeExpediente={link.nombre}
                value={link.nombre}
                onClick={() => handleRedireccionClick(link.url)}
              />
            </div>
          ))}
      </div>
    </section >
  );
});

export default CardRequisitos;