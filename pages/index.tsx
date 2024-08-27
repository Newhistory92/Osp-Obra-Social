import type { NextPage } from "next";
import Navbar from "../components/Navbar/header";
import Menu from "../components/Menu/menu";
import EstructuraOrganizacional from "../components/Contenido/Organizacion/estructura-organizacional";
import CardAccesoRapido from "../components/Cards/AccesoRapido/CardAccesoRapido";
import Footer from "../components/Footer/footer";
import styles from "./index.module.css";

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
          <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
          <img
            className={styles.frameItem}
            alt=""
            src="/group-1000007305.svg"
          />
        </div>
      </section>
      <div className={styles.loremIpsumDolorSitAmetConParent}>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Aliquam amet eu tellus pretium
          sed. Cras nibh turpis dictumst dictum. Eleifend mattis ut ac nullam
          aliquam. Enim nunc fermentum nisl sed cursus vel hac.
        </div>
        <div className={styles.quickAccessBackgroundParent}>
          <div className={styles.quickAccessBackground} />
          <h1 className={styles.accesoRpidos}>{`Acceso Rápidos `}</h1>
        </div>
      </div>
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
