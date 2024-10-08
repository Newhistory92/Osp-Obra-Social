import type { NextPage } from "next";
import { memo } from "react";
import styles from "./instagram1.module.css";
import Link from "next/link";



const Instagram1: NextPage = memo(() => {
  return (
    <div className={styles.instagram}>
      <div className={styles.instagramChild} />
      <Link href="https://www.instagram.com/obrasocialprovincia?igsh=MWRoNHllcG5wdzA4dA==">
      
      <img className={styles.instgramIcon} alt="Instagram" src="/instgram.svg" />
      </Link>
    </div>
  );
});

export default Instagram1;
