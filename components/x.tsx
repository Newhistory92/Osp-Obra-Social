import type { NextPage } from "next";
import { memo } from "react";
import styles from "./x.module.css";

export type XType = {
  className?: string;
};

const X: NextPage<XType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.x, className].join(" ")}>
      <div className={styles.xChild} />
      <img className={styles.xIcon} alt="" src="/x-1.svg" />
    </div>
  );
});

export default X;
