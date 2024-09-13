import type { NextPage } from "next";
import { memo, useMemo, useState, type CSSProperties } from "react";
import styles from "./BotonSubsubCategoria.css";
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"
import registroblanco from "../../../../../public/registro-blanco1.svg"

export type BotonPrincipalType = {

  text?: string;
  registroBlanco?: string;
  onClick: (titulo: string, contenido: string, id: number) => void;
  titulo: string; 
  contenido: string; 
  id: number;
  
}
const BotonPrincipal: NextPage<BotonPrincipalType> = memo(
  ({
    
    text = "",
    registroBlanco,
  
    onClick,
    titulo,
    contenido,
    id,
   
  }) => {
    
    
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
   className="w-56 bg-[#D31D16] font-semibold h-12 rounded-md flex items-center justify-center px-4 py-2 space-x-2 m-4 hover:cursor-pointer hover:bg-[#E42E27] transition-colors"
  onClick={handleClick}
>
  <img
      className="w-6 h-6"
    alt=""
    src={registroBlanco}
  />
  <div className="text-white ml-3 text-base ">
    {text}
  </div>
</button>

    );
  }
);

export default BotonPrincipal;