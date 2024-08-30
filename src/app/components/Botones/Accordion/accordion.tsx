import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./accordion.module.css";

export type AccordionType = {
  className?: string;
  title?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
};

const Accordion: NextPage<AccordionType> = memo(
  ({ className = "", title, propMinWidth, propMixBlendMode }) => {
    const title1Style: CSSProperties = useMemo(() => {
      return {
        minWidth: propMinWidth,
        mixBlendMode: propMixBlendMode,
      };
    }, [propMinWidth, propMixBlendMode]);

    return (
      <div className={[styles.accordion3, className].join(" ")}>
        <div className={styles.title} style={title1Style}>
          {title}
        </div>
        <div className={styles.caretDown}>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
        </div>
      </div>
    );
  }
);

export default Accordion;
