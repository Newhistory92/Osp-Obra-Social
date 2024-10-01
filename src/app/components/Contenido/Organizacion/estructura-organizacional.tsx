import type { NextPage } from "next";
import { memo } from "react";


export type EstructuraOrganizacionalType = {
  className?: string;
};

const EstructuraOrganizacional: NextPage<EstructuraOrganizacionalType> = memo(
  ({ className = "" }) => {
    return (
      <section className="w-full flex flex-col items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-7 lg:px-7 max-w-[1600px]">
          <div className="flex gap-[7px] w-full lg:items-start">
            <div className="w-[3px] min-w-[3px] bg-[#D31D16] rounded-full lg:h-full" />
            <div className="flex flex-col justify-center gap-3 text-start px-9 w-full mt-6">
              <h3 className="text-2xl text-gray-600 font-medium">Misión</h3>
              <span className="text-gray-600 text-base">
                Custodiar y preservar el patrimonio documental provincial,
                garantizando el derecho de acceso a la información y el
                asesoramiento técnico a todos los ciudadanos
              </span>
            </div>
          </div>
          <div className="flex gap-[7px] w-full lg:items-start">
            <div className="w-[3px] min-w-[3px] bg-[#D31D16] rounded-full lg:h-full" />
            <div className="flex flex-col justify-center gap-3 text-start px-9 w-full mt-6">
              <h3 className="text-2xl text-gray-600 font-medium">Visión</h3>
              <span className="text-gray-600 text-base">
                Lograr el posicionamiento y reconocimiento institucional donde
                todos los archivos que forman parte del sistema trabajen de
                manera integral y coordinadamente, a través de la modernización
                e innovación de la organización en su totalidad.
              </span>
            </div>
          </div>
          <div className="flex gap-[7px] w-full lg:items-start">
            <div className="w-[3px] min-w-[3px] bg-[#D31D16] rounded-full lg:h-full" />
            <div className="flex flex-col justify-center gap-3 text-start px-9 w-full mt-6">
              <h3 className="text-2xl text-gray-600 font-medium">
                Función Social
              </h3>
              <span className="text-gray-600 text-base">
                Nuestra institución resguarda información esencial que refleja
                la historia de nuestra provincia. Esta información resulta
                crucial para la administración, la investigación, el desarrollo
                económico, social, científico y tecnológico, el fomento de la
                cultura y la consolidación de la identidad provincial.
              </span>
            </div>
          </div>
        </div>
        <div className="text-start w-full px-7 max-w-[1600px] mt-[36px]">
          <h3 className="text-2xl text-gray-600 font-medium mb-[28px]">
            Estructura organizacional
          </h3>
          <span className="text-gray-600 text-base leading-8">
            La Dirección del Archivo General de la Provincia y Sistema
            Provincial de Archivos pertenece a la Secretaría de Relaciones
            Institucionales dentro del ámbito del Ministerio de Gobierno.
            <br /> Según lo establece la ley 279-A, nuestra institución está
            conformada por los siguientes departamento
          </span>
        </div>
      </section>
    );
  }
);

export default EstructuraOrganizacional;
