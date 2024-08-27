import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./requisitos.module.css";

export type RequisitosType = {
  className?: string;
  title?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
};

const Requisitos: NextPage<RequisitosType> = memo(
  ({ className = "", title, propMinWidth, propMixBlendMode }) => {
    const titleStyle: CSSProperties = useMemo(() => {
      return {
        minWidth: propMinWidth,
        mixBlendMode: propMixBlendMode,
      };
    }, [propMinWidth, propMixBlendMode]);

    return (
      <div className={[styles.accordion3, className].join(" ")}>
        <div className={styles.title} style={titleStyle}>
          {title}
        </div>
        <div className={styles.caretDown}>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        </div>
      </div>
    );
  }
);

export default Requisitos;
