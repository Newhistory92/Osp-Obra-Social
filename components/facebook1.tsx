import type { NextPage } from "next";
import { memo } from "react";
import styles from "./facebook1.module.css";

export type Facebook1Type = {
  className?: string;
};

const Facebook1: NextPage<Facebook1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.facebook, className].join(" ")}>
      <div className={styles.facebookChild} />
      <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
    </div>
  );
});

export default Facebook1;
