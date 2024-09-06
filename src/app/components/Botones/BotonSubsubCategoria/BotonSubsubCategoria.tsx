import type { NextPage } from "next";
import { memo, useMemo, useState, type CSSProperties } from "react";
import styles from "./BotonSubsubCategoria.css";
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"

export type BotonPrincipalType = {
  className?: string;
  showIcono?: boolean;
  text?: string;
  registroBlanco?: string;
  propMinWidth?: CSSProperties["minWidth"];
  onClick: (titulo: string, contenido: string, id: number) => void;
  titulo: string; 
  contenido: string; 
  id: number;
  
}
const BotonPrincipal: NextPage<BotonPrincipalType> = memo(
  ({
    className = "",
    showIcono = false,
    text = "",
    registroBlanco,
    propMinWidth = "87px",
    onClick,
    titulo,
    contenido,
    id,
   
  }) => {
    const textoStyle: CSSProperties = useMemo(() => {
      return {
        minWidth: propMinWidth,
      };
    }, [propMinWidth]);
    
    const  activeButton  = useAppSelector(state =>  state.navbar.activeButton);

    const dispatch = useAppDispatch(); 
    const handleClick = () => {
      dispatch(setActiveButton(!activeButton))
      if (!activeButton) {
        onClick(titulo, contenido,id); 
      } else {
        onClick("", "", id);
      }
    };
    return (
      <button
        className={[styles.botonPrincipal, className].join(" ")}
        onClick={handleClick} 
      >

        
        {showIcono && (
          <img
            className={styles.registroBlancoIcon}
            alt=""
            src={registroBlanco}
          />
        )}
        
        <div className={styles.texto} style={textoStyle}>
          {text}
        </div>
      </button>
    );
  }
);

export default BotonPrincipal;