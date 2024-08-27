import type { NextPage } from "next";
import { memo } from "react";
import styles from "./instagram1.module.css";

export type Instagram1Type = {
  className?: string;
};

const Instagram1: NextPage<Instagram1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.instagram, className].join(" ")}>
      <div className={styles.instagramChild} />
      <img className={styles.instgramIcon} alt="" src="/instgram.svg" />
    </div>
  );
});

export default Instagram1;
