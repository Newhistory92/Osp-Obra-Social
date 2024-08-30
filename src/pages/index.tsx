import type { NextPage } from "next";
import Navbar from "../app/components/Navbar/header";
import Menu from "../app/components/Menu/menu";
import EstructuraOrganizacional from "../app/components/Contenido/Organizacion/estructura-organizacional";
import CardAccesoRapido from "../app/components/Cards/AccesoRapido/CardAccesoRapido";
import Footer from "../app/components/Footer/footer";
import styles from "./index.module.css";
import Carrusel from "@/app/components/Carrusel/Carrusel";

const OSPLanding: NextPage = () => {
  return (
    <div className={styles.ospLanding}>
      <header className={styles.mainContent}>
        <Navbar />
      </header>
      <img
        className={styles.texturasOsp5Icon}
        alt=""
        src="/texturas-osp-5@2x.png"
      />
      
      <Menu />
      
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
         <Carrusel/>
          
        </div>
      </section>
      {/* <div className={styles.loremIpsumDolorSitAmetConParent}>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Aliquam amet eu tellus pretium
          sed. Cras nibh turpis dictumst dictum. Eleifend mattis ut ac nullam
          aliquam. Enim nunc fermentum nisl sed cursus vel hac.
        </div>
        <div className={styles.quickAccessBackgroundParent}>
          <div className={styles.quickAccessBackground} />
          <h1 className={styles.accesoRpidos}>{`Acceso Rápidos `}</h1>
        </div>
      </div> */}
      <section className={styles.contentBottomContainerParent}>
        <EstructuraOrganizacional />
        <div className={styles.cardX5Color}>
          <CardAccesoRapido
            propTop="50px"
            propLeft="279.5px"
            propBackgroundColor="#d31d16"
            fondo="/fondo1.svg"
            propOverflow="hidden"
            inicio="Autorizaciones"
          />
          <CardAccesoRapido
            propTop="50px"
            propLeft="578px"
            propBackgroundColor="#413e43"
            fondo="/fondo1.svg"
            propOverflow="hidden"
            inicio="Afiliaciones"
          />
          <CardAccesoRapido
            propTop="239.9px"
            propLeft="279.5px"
            propBackgroundColor="#d31d16"
            fondo="/fondo1.svg"
            propOverflow="hidden"
            inicio="Prestadores"
          />
          <CardAccesoRapido fondo="/fondo1.svg" inicio="Expedientes" />
          <div className={styles.cardColores}>
            <div className={styles.cardVertical}>
              <div className={styles.cardVerticalChild} />
              <img className={styles.fondoIcon} alt="" src="/fondo1.svg" />
              <img
                className={styles.expediente3Icon}
                alt=""
                src="/expediente-31.svg"
              />
              <div className={styles.ingreseContenido}>Inicio</div>
              <div className={styles.direccinDelRegistro}>2 de Septiembre</div>
            </div>
            <img className={styles.billeteraIcon} alt="" src="/billetera.svg" />
            <div className={styles.inicio}>Pagos</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OSPLanding;
