import type { NextPage } from "next";
import { memo } from "react";
import styles from "./instagram.module.css";

export type InstagramType = {
  className?: string;
};

const Instagram: NextPage<InstagramType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.instagram, className].join(" ")}>
      <div className={styles.instagramChild} />
      <img className={styles.instgramIcon} alt="" src="/instgram-1.svg" />
    </div>
  );
});

export default Instagram;
