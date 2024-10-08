import type { NextPage } from "next";
import Image from "next/image";
import Header from "../app/components/Navbar/header";
import Menu from "../app/components/Menu/menu";
import Footer from "../app/components/Footer/footer";
import styles from "./index.module.css";
import Carrusel from "@/app/components/Carrusel/Carrusel";
import { AccesosRapidos } from "@/app/components/AccesosRapidos/AccesosRapidos";
import VideoCarousel from "@/app/components/CarruselVideo/VideoCarousel";

const OSPLanding: NextPage = () => {
  
  return (
    <div className={styles.ospLanding}>
      <Header />
      <div style={{ height: "100px" }}></div>
      <Image
        className={styles.texturasOsp5Icon}
        alt="Texturas OSP"
        src="/texturas-osp-5_2x.webp"
        width={1920}  
        height={250} 
        sizes="(max-width: 768px) 480px, (max-width: 1200px) 768px, 1920px"
        priority  
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
