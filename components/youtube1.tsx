import type { NextPage } from "next";
import { memo } from "react";
import styles from "./youtube1.module.css";

export type Youtube1Type = {
  className?: string;
};

const Youtube1: NextPage<Youtube1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.youtube, className].join(" ")}>
      <div className={styles.youtubeChild} />
      <img className={styles.yputubeIcon} alt="" src="/yputube.svg" />
    </div>
  );
});

export default Youtube1;
