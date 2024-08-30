import type { NextPage } from "next";
import { memo } from "react";
import styles from "./card-botones-secundarios.module.css";

export type CardBotonesSecundariosType = {
  className?: string;
  verIconos?: boolean;
};

const CardBotonesSecundarios: NextPage<CardBotonesSecundariosType> = memo(
  ({ className = "", verIconos = true }) => {
    return (
      <div className={[styles.cardBotonesSecundarios, className].join(" ")}>
        {verIconos && (
          <img
            className={styles.pdfIcon}
            loading="lazy"
            alt=""
            src="/pdf.svg"
          />
        )}
        <div className={styles.ofrecimientosHsYContainer}>
          <p className={styles.descargar}>Descargar</p>
          <p className={styles.descargar}>Ficha de Afiliación</p>
        </div>
      </div>
    );
  }
);

export default CardBotonesSecundarios;
