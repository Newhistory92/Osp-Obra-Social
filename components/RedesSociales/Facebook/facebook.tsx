import type { NextPage } from "next";
import { memo } from "react";
import styles from "./facebook.module.css";

export type FacebookType = {
  className?: string;
};

const Facebook: NextPage<FacebookType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.facebook, className].join(" ")}>
      <div className={styles.facebookChild} />
      <img className={styles.facebookIcon} alt="" src="/facebook-1.svg" />
    </div>
  );
});

export default Facebook;
