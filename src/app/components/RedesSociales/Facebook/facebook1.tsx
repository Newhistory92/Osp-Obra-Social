import type { NextPage } from "next";
import { memo } from "react";
import styles from "./facebook1.module.css";
import Link from "next/link";

export type Facebook1Type = {
  className?: string;
};

const Facebook1: NextPage<Facebook1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.facebook, className].join(" ")}>
      <div className={styles.facebookChild} />
      <Link href="https://www.facebook.com/obrasocial.sanjuan.gob?mibextid=ZbWKwL">
      <img className={styles.facebookIcon} alt="Facebook" src="/facebook.svg" />
      </Link>
    </div>
  );
});

export default Facebook1;
