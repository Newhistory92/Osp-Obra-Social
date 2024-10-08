import React from "react";
import { useAppSelector } from '@/app/hooks/StoreHook';
import Loading from "@/app/components/Loading/loading";
import Image from "next/image";

const Header: React.FC = () => {
  const loading = useAppSelector(state => state.loading.loading);
  return (
    <header
      style={{ padding: "0 20px" }}
      className="w-full fixed bg-white shadow-2xl z-[500] sm:px-20 md:px-32 lg:px-[120px] py-3 h-[60px] flex items-center justify-between text-black"
    >
      <a
        style={{ textDecoration: "none", gap: "20px" }}
        href="https://cidi.sanjuan.gob.ar"
        className="flex h-full items-center"
      >
        <Image
         className="py-4" 
         src="Logo-SJ.svg" 
         alt="Logo San Juan"
         width={120}  
         height={35}
         priority  />
        <div className="w-[2px] md:block hidden rounded-full bg-orange-400 h-[35px]"></div>
        <span
          style={{ color: "var(--gris-principal)" }}
          className="leading-[14.5px] text-start text-sm lg:text-[12.6px] md:block hidden w-[220px]"
        >
          Ministerio de <br />
          <b>Salud</b>
        </span>
      </a>
      <div>
        <a href="https://cidi.sanjuan.gob.ar">
          <Image
           className="w-22" 
           src="Logo-Cidi.svg" 
           alt="Logo CIDI"
           width={110}  
           height={35}
           priority  
           />
        </a>
      </div>
      {loading && <Loading />}
    </header>
  );
};

export default Header;
