import type { NextPage } from "next";
import { memo } from "react";
import styles from "./facebook.module.css";
import Link from "next/link";

export type FacebookType = {
  className?: string;
};

const Facebook: NextPage<FacebookType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.facebook, className].join(" ")}>
      <div className={styles.facebookChild} />
      <Link href="https://www.facebook.com/obrasocial.sanjuan.gob?mibextid=ZbWKwL">
      <img className={styles.facebookIcon} alt="Facebook" src="/facebook-1.svg" />
      </Link>
    </div>
  );
});

export default Facebook;
