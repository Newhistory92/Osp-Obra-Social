import type { NextPage } from "next";
import Navbar from "../components/header";
import MenuConteiner from "../components/MenuConteiner";
import CardRequisitos from "../components/CardRequisitos";
import ContenidoPrincipal from "../components/ContenidoPrincipal";
import CardIconBicolor1 from "../components/card-icon-bicolor1";
import DelegacionContainer from "../components/DelegacionContainer";
import FooterContainer from "../components/footer-container";
import styles from "./o-s-p-servicios.module.css";

const OSPServicios: NextPage = () => {
  return (
    <div className={styles.ospServicios}>
      <header className={styles.headerContainer}>
        <Navbar
          logoGobiernoWidth="unset"
          logoGobiernoFlex="1"
          headerFlexWrap="wrap"
          headerRowGap="20px"
          frameDivMinWidth="307px"
        />
      </header>
      <img
        className={styles.texturasOsp5Icon}
        alt=""
        src="/texturas-osp-5@2x.png"
      />
      <MenuConteiner />
      <CardRequisitos />
      <ContenidoPrincipal />
      <CardIconBicolor1 />
      <section className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.delegacionesDepartementalesWrapper}>
                <h1 className={styles.delegacionesDepartementales}>
                  <p className={styles.delegaciones}>Delegaciones</p>
                  <p className={styles.delegaciones}>Departementales</p>
                </h1>
              </div>
            </div>
            <div className={styles.enElReaDeNutricinPuedeWrapper}>
              <div className={styles.enElRea}>
                En el área de Nutrición puede recibir asesoramiento en los
                siguientes servicios
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/line-5.svg" />
        <div className={styles.frameDiv}>
          <div className={styles.consultasYTratamientosNutriWrapper}>
            <div className={styles.consultasYTratamientosContainer}>
              <p className={styles.consultasYTratamientos}>
                • Consultas y tratamientos nutricionales.
              </p>
              <p className={styles.consultasYTratamientos}>
                • Sobrepeso y obesidad.
              </p>
              <p className={styles.consultasYTratamientos}>
                • Módulos de sobrepeso y obesidad con tratamientos
                interdisciplinarios en clínicas convenidas.
              </p>
              <p className={styles.consultasYTratamientos}>
                • Cirugías bariátricas: presentación y evaluación.
              </p>
              <p className={styles.consultasYTratamientos}>
                • Soporte nutricional domiciliario.
              </p>
              <p className={styles.consultasYTratamientos}>
                • Bolsón de alimentos aptos para celiacos.
              </p>
              <p className={styles.informesYConsultasAl430430}>
                <b>Informes y consultas al 4304300 (int. 4465)</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <DelegacionContainer />
      <FooterContainer />
    </div>
  );
};

export default OSPServicios;
