import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./accordion-button.module.css";

export type AccordionButtonType = {
  className?: string;
  vector?: string;

  /** Style props */
  caretUpPadding?: CSSProperties["padding"];
};

const AccordionButton: NextPage<AccordionButtonType> = memo(
  ({ className = "", caretUpPadding, vector }) => {
    const caretUpStyle: CSSProperties = useMemo(() => {
      return {
        padding: caretUpPadding,
      };
    }, [caretUpPadding]);

    return (
      <div className={[styles.accordionButton, className].join(" ")}>
        <div className={styles.title}>{`01 - Empadronamiento `}</div>
        <div className={styles.caretUp} style={caretUpStyle}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector}
          />
        </div>
      </div>
    );
  }
);

export default AccordionButton;
