import type { NextPage } from "next";
import { memo } from "react";
import BotonCard from "./BotonCard";
import styles from "./card-icon-bicolor1.module.css";

export type CardIconBicolor1Type = {
  className?: string;
};

const CardIconBicolor1: NextPage<CardIconBicolor1Type> = memo(
  ({ className = "" }) => {
    return (
      <section className={[styles.cardIconBicolor, className].join(" ")}>
        <div className={styles.noticias}>
          <h2 className={styles.sistemasOnLine}>Sistemas On Line</h2>
        </div>
        <div className={styles.newsButtons}>
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Odontológico"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Diálisis/Sepelio"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Autorizaciones"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Bioquímicos"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente=" Facturación Consultas"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Internados"
            consultaDeExpedienteTextDecoration="none"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Sistema Web de Delegaciones"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Sistema Auditores Bioquímicos"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Sistema de Punto Fijo"
            consultaDeExpedienteTextDecoration="unset"
          />
          <BotonCard
            mostrarIcono
            fondo="/fondo2.svg"
            consultaDeExpediente="Recursos Humanos"
          />
        </div>
      </section>
    );
  }
);

export default CardIconBicolor1;
