import type { NextPage } from "next";
import { memo } from "react";
import styles from "./boton-servicio.module.css";
import { sendGAEvent } from '@next/third-parties/google'

export type BotonServicioType = {
  showIcono?: boolean;
  text?: string;
  info?: string;
  onClick?: () => void;
};

const BotonServicio: NextPage<BotonServicioType> = memo(
  ({  showIcono = true, text = "Consultas", info, onClick }) => {

    const handleClick = () => {
      // Enviar evento a Google Analytics
      sendGAEvent('event', 'buttonClicked', { value: text });
      if (onClick) {
        onClick();
      }
    };

    return (
      <div
      className={styles.botonServicio}
      onClick={handleClick} 
    >
      <div className={styles.infoWrapper}>
        {showIcono && <img className={styles.infoIcon} alt="" src={info} />}
      </div>
      <div className={styles.misDocumentos}>{text}</div>
    </div>
    );
  }
);

export default BotonServicio;
