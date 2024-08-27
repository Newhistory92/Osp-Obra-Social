import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./CardAccesoRapido.module.css";

export type CardAccesoRapidoType = {
  className?: string;
  fondo?: string;
  inicio?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propOverflow?: CSSProperties["overflow"];
};

const CardAccesoRapido: NextPage<CardAccesoRapidoType> = memo(
  ({
    className = "",
    propTop,
    propLeft,
    propBackgroundColor,
    fondo,
    propOverflow,
    inicio,
  }) => {
    const cardColoresStyle: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    const rectangleDivStyle: CSSProperties = useMemo(() => {
      return {
        backgroundColor: propBackgroundColor,
      };
    }, [propBackgroundColor]);

    const expedienteBlancoIconStyle: CSSProperties = useMemo(() => {
      return {
        overflow: propOverflow,
      };
    }, [propOverflow]);

    return (
      <div
        className={[styles.cardColores, className].join(" ")}
        style={cardColoresStyle}
      >
        <div className={styles.cardVertical}>
          <div className={styles.cardVerticalChild} style={rectangleDivStyle} />
          <img className={styles.fondoIcon} alt="" src={fondo} />
          <img
            className={styles.expediente3Icon}
            alt=""
            src="/expediente-31.svg"
          />
          <div className={styles.ingreseContenido}>Inicio</div>
          <div className={styles.direccinDelRegistro}>2 de Septiembre</div>
        </div>
        <img
          className={styles.expedienteBlancoIcon}
          loading="lazy"
          alt=""
          src="/expediente-blanco.svg"
          style={expedienteBlancoIconStyle}
        />
        <div className={styles.inicio}>{inicio}</div>
      </div>
    );
  }
);

export default CardAccesoRapido;
