import type { NextPage } from "next";
import React, { useState, useEffect} from "react";
import { memo} from "react";
import BotonCard from "@/app/components/Botones/BotonCard/BotonCard";
import styles from "./CardRequisitos.module.css";
import fetchData  from "@/app/utils/fetchData";
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"

export type CardRequisitosType = {
  className?: string;
  servicioSeleccionado: string;
  onPublicacionesFiltradasChange: (publicaciones: any[]) => void;

};
const apiData = fetchData('/api/Datos/Publicaciones');

const CardRequisitos: NextPage<CardRequisitosType> = memo(({ className = "",servicioSeleccionado,onPublicacionesFiltradasChange }) => {
  const [publicacionesFiltradas, setPublicacionesFiltradas] = useState<any[]>([]);
  const  activeButton  = useAppSelector(state =>  state.navbar.activeButton);
  const dispatch = useAppDispatch(); 
  const data = apiData.read();



useEffect(() => {
  const filtradas = data.publicaciones.filter(
    (publicacion: any) => publicacion.categoria_nombre === servicioSeleccionado
  );
  setPublicacionesFiltradas(filtradas);
}, [servicioSeleccionado, data]);

const handleBotonCardClick = (value: string, id: number) => {
  if (activeButton) {
    // Si el botón activo es el que se está clickeando, limpie el estado global
    dispatch(setActiveButton(false));
  } else {
    
    const filtradas = publicacionesFiltradas.filter(
      (publicacion) => publicacion.subcategoria_nombre === value
    );

    const filtradasFinales = filtradas.map((publicacion) => {
      if (publicacion.subsubcategoria_nombre) {
        return {
          id: publicacion.id,
          titulo: publicacion.titulo,
          contenido: publicacion.contenido,
          subsubcategoria_nombre: publicacion.subsubcategoria_nombre,
        };
      }
      return {
        id: publicacion.id,
        titulo: publicacion.titulo,
        contenido: publicacion.contenido,
        subsubcategoria_nombre: null, 
      };
    });

    onPublicacionesFiltradasChange(filtradasFinales);
  }
};

  return (
    <section className={[styles.cardIconBicolor, className].join(" ")}>
      <div className={styles.contentContainer}>
        <div className={styles.buttonsContainer}>
        {publicacionesFiltradas.map((publicacion: any) => (
            <BotonCard
              key={publicacion.id}
              mostrarIcono
              fondo="/fondo2.svg"
              consultaDeExpediente={publicacion.subcategoria_nombre} 
              consultaDeExpedienteTextDecoration="unset"
              value={publicacion.subcategoria_nombre} 
              onClick={() => handleBotonCardClick(publicacion.subcategoria_nombre, publicacion.id)}
            />
          ))}
          <BotonCard
           
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Alta"
            consultaDeExpedienteTextDecoration="unset"
            value="Alta" onClick={function (value: string): void {
              throw new Error("Function not implemented.");
            } }              
            />
            <BotonCard
          
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Baja"
            consultaDeExpedienteTextDecoration="unset"
            value="Baja" onClick={function (value: string): void {
              throw new Error("Function not implemented.");
            } }             
            />
        </div>
      </div>
    </section>
  );
});

export default CardRequisitos;
