import type { NextPage } from "next";
import { memo } from "react";
import styles from "./estructura-organizacional.module.css";

export type EstructuraOrganizacionalType = {
  className?: string;
};

const EstructuraOrganizacional: NextPage<EstructuraOrganizacionalType> = memo(
  ({ className = "" }) => {
    return (
      <div className={[styles.contentBottomContainer, className].join(" ")}>
        <div className={styles.contentBottomContainerChild} />
        <div className={styles.missionContainerParent}>
          <div className={styles.missionContainer}>
            <div className={styles.missionContent}>
              <div className={styles.frameParent}>
                <div className={styles.functionContainerWrapper}>
                  <div className={styles.functionContainer}>
                    <h1 className={styles.misin}>Misión</h1>
                    <h2 className={styles.custodiarYPreservar}>
                      Custodiar y preservar el patrimonio documental provincial,
                      garantizando el derecho de acceso a la información y el
                      asesoramiento técnico a todos los ciudadanos
                    </h2>
                  </div>
                </div>
                <div className={styles.visionContainer}>
                  <div className={styles.visionDivider} />
                  <div className={styles.missionContainer1}>
                    <div className={styles.visionDescription}>
                      <div className={styles.visinWrapper}>
                        <h1 className={styles.visin}>Visión</h1>
                      </div>
                      <h2 className={styles.lograrElPosicionamientoContainer}>
                        <span>
                          <p className={styles.lograrElPosicionamiento}>
                            Lograr el posicionamiento y reconocimiento
                            institucional donde todos los archivos que forman
                            parte del sistema trabajen de manera integral y
                            coordinadamente, a través de la modernización e
                            innovación de la organización en su totalidad.
                          </p>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={styles.functionDivider} />
                <div className={styles.socialFunction}>
                  <h1 className={styles.misin}>Función Social</h1>
                  <h2 className={styles.nuestraInstitucinResguardaContainer}>
                    <span>
                      <p className={styles.lograrElPosicionamiento}>
                        Nuestra institución resguarda información esencial que
                        refleja la historia de nuestra provincia. Esta
                        información resulta crucial para la administración, la
                        investigación, el desarrollo económico, social,
                        científico y tecnológico, el fomento de la cultura y la
                        consolidación de la identidad provincial.
                      </p>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <h1 className={styles.estructuraOrganizacional}>
              Estructura Organizacional
            </h1>
          </div>
          <h2 className={styles.laDireccinDelContainer}>
            <p className={styles.lograrElPosicionamiento}>
              La Dirección del Archivo General de la Provincia y Sistema
              Provincial de Archivos pertenece a la Secretaría de Relaciones
              Institucionales dentro del ámbito del Ministerio de Gobierno.
            </p>
            <p className={styles.lograrElPosicionamiento}>&nbsp;</p>
            <p className={styles.lograrElPosicionamiento}>
              Según lo establece la ley 279-A, nuestra institución está
              conformada por los siguientes departamento
            </p>
          </h2>
        </div>
      </div>
    );
  }
);

export default EstructuraOrganizacional;
