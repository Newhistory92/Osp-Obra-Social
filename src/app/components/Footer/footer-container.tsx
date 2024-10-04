import type { NextPage } from "next";
import { memo } from "react";
import Footer from "./footer";
import styles from "./footer-container.module.css";



const FooterContainer: NextPage = memo(() => {
  return (
    <footer className={styles.footerContainer}>
      <Footer />
    </footer>
  );
});

export default FooterContainer;

