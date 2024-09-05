import type { NextPage } from "next";
import React, { useState, useEffect, useCallback, useMemo,Suspense} from "react";
import { memo} from "react";
import BotonCard from "@/app/components/Botones/BotonCard/BotonCard";
import styles from "./CardRequisitos.module.css";
import fetchData  from "@/app/utils/fetchData";

export type CardRequisitosType = {
  className?: string;
  servicioSeleccionado: string;
  onPublicacionesFiltradasChange: (publicaciones: any[]) => void;

};
const apiData = fetchData('/api/Datos/Publicaciones');

const CardRequisitos: NextPage<CardRequisitosType> = memo(({ className = "",servicioSeleccionado,onPublicacionesFiltradasChange }) => {
  const [publicacionesFiltradas, setPublicacionesFiltradas] = useState<any[]>([]);
  const data = apiData.read();



console.log( " estas son las publicaciones filtradas",publicacionesFiltradas)
useEffect(() => {
  const filtradas = data.publicaciones.filter(
    (publicacion: any) => publicacion.categoria_nombre === servicioSeleccionado
  );
  setPublicacionesFiltradas(filtradas);
}, [servicioSeleccionado, data]);


const handleBotonCardClick = (value: string) => {
  console.log("Value clicked:", value);

  // Filtra las publicaciones basadas en el valor del botón
  const filtradas = publicacionesFiltradas.filter(
    (publicacion) => publicacion.subcategoria_nombre === value
  );
  
  console.log("Filtradas based on subcategoria_nombre:", filtradas);

  // Filtra aún más basándose en subsubcategoria_nombre si existe
  const filtradasFinales = filtradas.map((publicacion) => {
    if (publicacion.subsubcategoria_nombre) {
      return {
        ...publicacion,
        contenido: publicacion.contenido,
        titulo: publicacion.titulo,
        subsubcategoria_nombre: publicacion.subsubcategoria_nombre
      };
    }
    return {
      ...publicacion,
      titulo: publicacion.titulo,
      subsubcategoria_nombre: publicacion.subsubcategoria_nombre
    };
  });

  console.log("Filtradas finales:", filtradasFinales);

  // Actualiza el estado y notifica al componente padre
  onPublicacionesFiltradasChange(filtradasFinales);
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
              onClick={() => handleBotonCardClick(publicacion.subcategoria_nombre)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default CardRequisitos;
