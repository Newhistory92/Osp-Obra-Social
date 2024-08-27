import type { NextPage } from "next";
import { memo } from "react";
import styles from "./ContenidoPrincipal.module.css";

export type ContenidoPrincipalType = {
  className?: string;
};

const ContenidoPrincipal: NextPage<ContenidoPrincipalType> = memo(
  ({ className = "" }) => {
    return (
      <section className={[styles.frameParent, className].join(" ")}>
        <div className={styles.frameWrapper}>
          <div className={styles.contentParent}>
            <div className={styles.content}>
              <div className={styles.container}>
                <h1 className={styles.nutricin}>Nutrición</h1>
              </div>
            </div>
            <div className={styles.container1}>
              <div className={styles.enElRea}>
                En el área de Nutrición puede recibir asesoramiento en los
                siguientes servicios
              </div>
            </div>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/line-5.svg" />
        <div className={styles.bulletPoints}>
          <div className={styles.container2}>
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
    );
  }
);

export default ContenidoPrincipal;
