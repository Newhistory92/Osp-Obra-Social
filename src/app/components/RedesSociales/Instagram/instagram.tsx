import type { NextPage } from "next";
import { memo } from "react";
import styles from "./instagram.module.css";
import Link from "next/link";

export type InstagramType = {
  className?: string;
};

const Instagram: NextPage<InstagramType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.instagram, className].join(" ")}>
      <div className={styles.instagramChild} />
      <Link href="https://www.instagram.com/obrasocialprovincia?igsh=MWRoNHllcG5wdzA4dA==">
      
      <img className={styles.instgramIcon} alt="Instagram" src="/instgram-1.svg" />
      </Link>
    </div>
  );
});

export default Instagram;
