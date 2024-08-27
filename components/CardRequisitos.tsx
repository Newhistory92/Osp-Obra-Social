import type { NextPage } from "next";
import { memo } from "react";
import BotonCard from "./BotonCard";
import styles from "./CardRequisitos.module.css";

export type CardRequisitosType = {
  className?: string;
};

const CardRequisitos: NextPage<CardRequisitosType> = memo(
  ({ className = "" }) => {
    return (
      <section className={[styles.cardIconBicolor, className].join(" ")}>
        <div className={styles.contentContainer}>
          <div className={styles.buttonsContainer}>
            <BotonCard
              mostrarIcono
              fondo="/fondo2.svg"
              consultaDeExpediente="Nutrición "
              consultaDeExpedienteTextDecoration="unset"
            />
            <BotonCard
              mostrarIcono
              fondo="/fondo-1.svg"
              consultaDeExpediente="Sistema On Line"
              consultaDeExpedienteTextDecoration="unset"
            />
            <BotonCard
              mostrarIcono
              fondo="/fondo2.svg"
              consultaDeExpediente="Delegaciones Departamentales"
              consultaDeExpedienteTextDecoration="unset"
            />
            <BotonCard
              mostrarIcono
              fondo="/fondo-1.svg"
              consultaDeExpediente="Internación Geriátrica "
              consultaDeExpedienteTextDecoration="unset"
            />
            <BotonCard
              mostrarIcono
              fondo="/fondo2.svg"
              consultaDeExpediente="Celiaquía "
              consultaDeExpedienteTextDecoration="unset"
            />
            <BotonCard
              mostrarIcono
              fondo="/fondo-1.svg"
              consultaDeExpediente="Internación domiciliaria "
              consultaDeExpedienteTextDecoration="unset"
            />
          </div>
        </div>
      </section>
    );
  }
);

export default CardRequisitos;
