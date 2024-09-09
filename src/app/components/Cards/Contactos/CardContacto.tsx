import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./CardContacto.module.css";

export type CardContactoType = {
  className?: string;
  textPrncipal?: string;
  textSecundario?: string;
  mostrarIcono?: boolean;
  fondo?: string;

  /** Style props */
  propOverflow?: CSSProperties["overflow"];
};

const CardContacto: NextPage<CardContactoType> = memo(
  ({
    className = "",
    textPrncipal = "Delegaciones",
    textSecundario = "conocé nuestras distintas delegaciones",
    mostrarIcono = true,
    propOverflow,
    fondo,
  }) => {
    const expediente3IconStyle: CSSProperties = useMemo(() => {
      return {
        overflow: propOverflow,
      };
    }, [propOverflow]);

    return (
      <div className={[styles.cardVertical, className].join(" ")}>
        <div className={styles.cardVerticalChild} />
        <div className={styles.cardVerticalInner}>
          <div className={styles.frameParent}>
            <div className={styles.expediente3Wrapper}>
              {mostrarIcono && (
                <img
                  className={styles.expediente3Icon}
                  alt=""
                  src="/expediente-3-4.svg"
                  style={expediente3IconStyle}
                />
              )}
            </div>
            <h3 className={styles.ingreseContenido}>{textPrncipal}</h3>
            <div className={styles.direccinDelRegistroDelEstWrapper}>
              <div className={styles.direccinDelRegistro}>{textSecundario}</div>
            </div>
          </div>
        </div>
        <div className={styles.borderDecoration}></div>
      </div>
    );
  }
);

export default CardContacto;
