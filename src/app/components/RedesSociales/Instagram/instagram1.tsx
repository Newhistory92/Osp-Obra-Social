import type { NextPage } from "next";
import { memo } from "react";
import styles from "./instagram1.module.css";
import Link from "next/link";

export type Instagram1Type = {
  className?: string;
};

const Instagram1: NextPage<Instagram1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.instagram, className].join(" ")}>
      <div className={styles.instagramChild} />
      <Link href="https://www.instagram.com/obrasocialprovincia?igsh=MWRoNHllcG5wdzA4dA==">
      
      <img className={styles.instgramIcon} alt="Instagram" src="/instgram.svg" />
      </Link>
    </div>
  );
});

export default Instagram1;
