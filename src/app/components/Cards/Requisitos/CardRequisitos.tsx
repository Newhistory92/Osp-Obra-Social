import type { NextPage } from "next";
import { memo} from "react";
import BotonCard from "@/app/components/Botones/BotonCard/BotonCard";
import styles from "./CardRequisitos.module.css";

export type CardRequisitosType = {
  className?: string;
  onValueChange: (value: string) => void;
};

const CardRequisitos: NextPage<CardRequisitosType> = memo(({ className = "", onValueChange }) => {
  const handleBotonCardClick = (value: string) => {
    onValueChange(value); 
  };

  return (
    <section className={[styles.cardIconBicolor, className].join(" ")}>
      <div className={styles.contentContainer}>
        <div className={styles.buttonsContainer}>
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Nutrición"
            consultaDeExpedienteTextDecoration="unset"
            value="Nutrición"
            onClick={handleBotonCardClick}
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo-1.svg"
            consultaDeExpediente="Sistema On Line"
            consultaDeExpedienteTextDecoration="unset"
            value="Sistema On Line"
            onClick={handleBotonCardClick}
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Delegaciones Departamentales"
            consultaDeExpedienteTextDecoration="unset"
            value="Delegaciones Departamentales"
            onClick={handleBotonCardClick}
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo-1.svg"
            consultaDeExpediente="Internación Geriátrica"
            consultaDeExpedienteTextDecoration="unset"
            value="Internación Geriátrica"
            onClick={handleBotonCardClick}
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Celiaquía"
            consultaDeExpedienteTextDecoration="unset"
            value="Celiaquía"
            onClick={handleBotonCardClick}
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo-1.svg"
            consultaDeExpediente="Internación domiciliaria"
            consultaDeExpedienteTextDecoration="unset"
            value="Internación domiciliaria"
            onClick={handleBotonCardClick}
          />
        </div>
      </div>
    </section>
  );
});

export default CardRequisitos;
