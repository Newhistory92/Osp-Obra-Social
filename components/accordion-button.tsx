import type { NextPage } from "next";
import { memo } from "react";
import styles from "./accordion-button.module.css";

export type AccordionButtonType = {
  className?: string;
};

const AccordionButton: NextPage<AccordionButtonType> = memo(
  ({ className = "" }) => {
    return (
      <div className={[styles.accordionButton, className].join(" ")}>
        <div className={styles.title}>{`01 - Empadronamiento `}</div>
        <div className={styles.caretUp}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    );
  }
);

export default AccordionButton;
