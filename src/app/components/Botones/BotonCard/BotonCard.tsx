import type { NextPage } from "next";
import { memo } from "react";
import Image from "next/image";
export type BotonCardType = {
  mostrarIcono?: boolean;
  fondo?: string;
  consultaDeExpediente?: string;
  onClick: (value: string) => void;
  value: string;
};

const BotonCard: NextPage<BotonCardType> = memo(
  ({
    mostrarIcono = true,
    consultaDeExpediente,
    onClick,
    value,
  }) => {
    const handleClick = () => {
      onClick(value);
    };

    return (
      <div
        className="w-full bg-white relative rounded-[15px] shadow-sm flex justify-start items-center px-2 h-[80px] hover:cursor-pointer"
        onClick={handleClick} >
        {mostrarIcono && (
          <Image 
          alt="Boton de Categoria" 
          src="/expediente-3-6.svg"
          width={45}  
          height={45} 
          priority  />
        )}
        <div className="text-[#413E43] font-medium ml-2">
          {consultaDeExpediente}
        </div>
        <div className="absolute w-full bg-[#D31D16] bottom-0 z-50 h-2 rounded-b-md left-0" />
      </div>
    );
  }
);

export default BotonCard;

