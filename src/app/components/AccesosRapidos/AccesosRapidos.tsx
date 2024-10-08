import Image from "next/image";

export const AccesosRapidos = () => {
  return (
    <section className="w-full bg-white py-12 xl:px-[300px] px-7">
      <div className="flex flex-col lg:flex-row h-full w-full items-center gap-32">
        <div className="lg:w-1/2 w-full h-full flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl lg:text-5xl font-bold">Accesos Rápidos</h2>
          <span className="font-medium text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nemo molestias inventore aliquam culpa minus repellendus, repellat
            eos at dignissimos perferendis rem debitis? Reprehenderit culpa
            assumenda a nisi molestias tempora?
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 lg:gap-5 lg:w-1/2 w-full justify-center">
          {/* <a
            href="#"
            className="w-full no-underline hover:cursor-pointer hover:bg-[#E42E27] transition-colors h-36 bg-[#D31D16] rounded-md flex flex-col justify-center items-center gap-3"
          >
            <img src="madre_hijo.png" className="w-16" alt="madre_hijo" />
            <span className="text-lg font-medium text-white">PAIMN</span>
          </a> */}
          {/* <a
            href="#"
            className="w-full no-underline hover:cursor-pointer hover:bg-[#524F54] transition-colors  h-36 bg-[#413E43] rounded-md flex flex-col justify-center items-center gap-3"
          >
            <img src="afiliaciones.png" className="w-12" alt="afiliaciones" />
            <span className="text-lg font-medium text-white">Afiliaciones</span>
          </a> */}
          {/* <a
            href="#"
            className="w-full no-underline hover:cursor-pointer hover:bg-[#E42E27] transition-colors h-36 bg-[#D31D16] rounded-md flex flex-col justify-center items-center gap-3"
          >
            <img src="prestadores.png" className="w-12" alt="prestadores" />
            <span className="text-lg font-medium text-white">Prestadores</span>
          </a> */}
          <a
            href="https://sj.sanjuan.gob.ar/?uid=CUMV-VIEW-ExpedientesComponent"
            className="w-full no-underline hover:cursor-pointer hover:bg-[#524F54] transition-colors h-36 bg-[#413E43] rounded-md flex flex-col justify-center items-center gap-3"
          >
            <Image 
            src="/expedientes.webp" 
            className="w-12" 
            alt="expedientes"
            width={100}  
            height={35}
            priority />
            <span className="text-lg font-medium text-white">Expedientes</span>
          </a>
        </div>
      </div>
    </section>
  );
};
