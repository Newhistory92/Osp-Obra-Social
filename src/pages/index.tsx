import type { NextPage } from "next";
import Header from "../app/components/Navbar/header";
import Menu from "../app/components/Menu/menu";
import EstructuraOrganizacional from "../app/components/Contenido/Organizacion/estructura-organizacional";
import Footer from "../app/components/Footer/footer";
import styles from "./index.module.css";
import Carrusel from "@/app/components/Carrusel/Carrusel";
import { AccesosRapidos } from "@/app/components/AccesosRapidos/AccesosRapidos";
import VideoCarousel from "@/app/components/CarruselVideo/VideoCarousel";

const OSPLanding: NextPage = () => {
  
  return (
    <div className={styles.ospLanding}>
      <Header />
      <div style={{ height: "188px" }}></div>
      <img
        className={styles.texturasOsp5Icon}
        alt=""
        src="/texturas-osp-5@2x.png"
        />
      <Menu/>

      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <Carrusel />
        </div>
      </section>
      <AccesosRapidos />
      <VideoCarousel/>
      <Footer />
      
    </div>
  );
};

export default OSPLanding;
