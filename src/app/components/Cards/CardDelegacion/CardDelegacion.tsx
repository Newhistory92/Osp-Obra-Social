import type { NextPage } from "next";
import { memo } from "react";
import styles from "./CardDelegacion.module.css";
import delegaciones from "../../../../../delegaciones.json"
export type CardDelegacionType = {
  className?: string;
  showIcon?: boolean;
  showBotN?: boolean;
};

const CardDelegacion: NextPage<CardDelegacionType> = memo(
  ({ className = "", showIcon = true, showBotN = true }) => {
    return (
      
        <div className={styles.cardAtpWrapper}> 
          {delegaciones.map((delegacion) => (
            <div key={delegacion.id} className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
              </div>
              <div className={styles.delegacionesWrapper}>
                {showIcon && (
                  <img
                    className={styles.delegacionesIcon}
                    alt=""
                    src="/delegaciones-1.svg"
                  />
                )}
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}> {delegacion.delegacion}</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>{delegacion.domicilio}</p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. {delegacion.telefono}</p>
                <p className={styles.horario0730A}>Horario: {delegacion.horario}</p>
              </div>
              {/* <div className={styles.botonPrincipalWrapper}>
                {showBotN && (
                  <div className={styles.botonPrincipal}>
                    <div className={styles.ingresarCuenta}>
                      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                    </div>
                    <div className={styles.texto}>Ver Ubicación</div>
                  </div>
                )}
              </div> */}
            </div>
          ))}
        </div>
      
    );
  })

export default CardDelegacion;
