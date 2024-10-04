import type { NextPage } from "next";
import { memo} from "react";
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"


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
   className="w-56 bg-[#D31D16]  font-semibold h-12 rounded-md flex items-center justify-center px-2 py-1 space-x-2 m-4 hover:cursor-pointer hover:bg-[#E42E27] transition-colors"
  onClick={handleClick}>
  <div className="text-white ml-3 text-base ">
    {text}
  </div>
</button>

    );
  }
);

export default BotonPrincipal;