import type { NextPage } from "next";
import { memo } from "react";
import styles from "./x1.module.css";

export type X1Type = {
  className?: string;
};

const X1: NextPage<X1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.x, className].join(" ")}>
      <div className={styles.xChild} />
      <img className={styles.xIcon} alt="" src="/x.svg" />
    </div>
  );
});

export default X1;
