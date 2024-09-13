import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./BotonCard.module.css";

export type BotonCardType = {
  className?: string;
  mostrarIcono?: boolean;
  fondo?: string;
  consultaDeExpediente?: string;
  onClick: (value: string) => void;
  value: string; 

  /** Style props */
  consultaDeExpedienteTextDecoration?: CSSProperties["textDecoration"];
};

const BotonCard: NextPage<BotonCardType> = memo(
  ({
    className = "",
    mostrarIcono = true,
    fondo,
    consultaDeExpediente,
    consultaDeExpedienteTextDecoration,
    onClick,
    value
  }) => {
    const consultaDeExpedienteStyle: CSSProperties = useMemo(() => {
      return {
        textDecoration: consultaDeExpedienteTextDecoration,
      };
    }, [consultaDeExpedienteTextDecoration]);

    return (
      <div
        className="w-full bg-white relative rounded-[15px] shadow-sm flex justify-start items-center pl-5 h-[80px] hover:cursor-pointer"
        onClick={() => onClick(value)}
      >
        {mostrarIcono && (
          <img
            className={styles.expediente3Icon}
            alt=""
            src="/expediente-3-6.svg"
          />
        )}
        <div
          className="text-[#413E43] font-medium ml-5"
          style={consultaDeExpedienteStyle}
        >
          {consultaDeExpediente}
        </div>
        <div className="absolute w-full bg-[#D31D16] bottom-0 z-50 h-2 rounded-b-md left-0" />
      </div>
    );
  }
);

export default BotonCard;
