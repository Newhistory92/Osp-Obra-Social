import type { NextPage } from "next";
import React, { useState, useEffect} from "react";
import { memo} from "react";
import BotonCard from "@/app/components/Botones/BotonCard/BotonCard";
import styles from "./CardRequisitos.module.css";
import fetchData  from "@/app/utils/fetchData";
import { setActiveButton, setMostrarDelegacion } from '@/app/redux/Slice/navbarSlice';
import { useAppSelector, useAppDispatch } from "@/app/hooks/StoreHook";
import SistemaOnline from "../../../../../sistemaOnline.json";

export type CardRequisitosType = {
  className?: string;
  servicioSeleccionado: string;
  onPublicacionesFiltradasChange: (publicaciones: any[]) => void;

};
const apiData = fetchData('/api/Datos/Publicaciones');


const CardRequisitos: NextPage<CardRequisitosType> = memo(({ className = "",servicioSeleccionado,onPublicacionesFiltradasChange }) => {
  const [publicacionesAgrupadas, setPublicacionesAgrupadas] = useState<{ [key: string]: any[] }>({});
  const  activeButton  = useAppSelector(state =>  state.navbar.activeButton);
  const dispatch = useAppDispatch(); 
  const data = apiData.read();
 
  useEffect(() => {
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
  }, [servicioSeleccionado, data]);
 
  
  
  const handleBotonCardClick = (subcategoria: string) => {
    const publicacionesSubcategoria = publicacionesAgrupadas[subcategoria] || [];
    
    const filtradasFinales = publicacionesSubcategoria.map((publicacion: any) => ({
      id: publicacion.id,
      titulo: publicacion.titulo,
      contenido: publicacion.contenido,
      subsubcategoria_nombre: publicacion.subsubcategoria_nombre || null,
    }));

    onPublicacionesFiltradasChange(filtradasFinales);

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
            consultaDeExpedienteTextDecoration="unset"
            value={subcategoria}
            onClick={() => handleBotonCardClick(subcategoria)}
          />
        ))}

        {/* Botón para "Delegación de Partamental" */}
        {servicioSeleccionado.toLowerCase() === "servicios" && (
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Delegación de Partamental"
            consultaDeExpedienteTextDecoration="unset"
            value="Delegación"
            onClick={() => handleBotonCardClick("Delegación")}
          />
        )}

        {/* Botones de "Sistema Online para Prestadores" */}
        {servicioSeleccionado === "Sistema Online para Prestadores" &&
          SistemaOnline.map((link) => (
            <div key={link.id}>
              <BotonCard
                mostrarIcono
                fondo="/fondo2.svg"
                consultaDeExpediente={link.nombre}
                consultaDeExpedienteTextDecoration="unset"
                value={link.nombre}
                onClick={() => handleRedireccionClick(link.url)}
              />
            </div>
          ))}
      </div>
    </section>
  );
});

export default CardRequisitos;