import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./BotonCard.module.css";

export type BotonCardType = {
  className?: string;
  mostrarIcono?: boolean;
  fondo?: string;
  consultaDeExpediente?: string;

  /** Style props */
  consultaDeExpedienteTextDecoration?: CSSProperties["textDecoration"];
};

const BotonCard: NextPage<BotonCardType> = memo(
  ({
    className = "",
    mostrarIcono = true,
    fondo,
    consultaDeExpediente,
    consultaDeExpedienteTextDecoration,
  }) => {
    const consultaDeExpedienteStyle: CSSProperties = useMemo(() => {
      return {
        textDecoration: consultaDeExpedienteTextDecoration,
      };
    }, [consultaDeExpedienteTextDecoration]);

    return (
      <div className={[styles.botnPiesNicon, className].join(" ")}>
        <img className={styles.fondoIcon} alt="" src={fondo} />
        {mostrarIcono && (
          <img
            className={styles.expediente3Icon}
            alt=""
            src="/expediente-3-6.svg"
          />
        )}
        <div
          className={styles.consultaDeExpediente}
          style={consultaDeExpedienteStyle}
        >
          {consultaDeExpediente}
        </div>
      </div>
    );
  }
);

export default BotonCard;
