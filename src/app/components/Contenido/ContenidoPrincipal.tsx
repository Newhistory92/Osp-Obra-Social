import type { NextPage } from "next";
import { memo, useEffect, useState  } from "react";
import styles from "./ContenidoPrincipal.module.css";
import Requisitos from "@/app/components/Cards/Requisitos/Requisito/Requisitos";
import BotonSubSubCategoria from "@/app/components/Botones/BotonSubsubCategoria/BotonSubsubCategoria"
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"
import Prestadores from "../Prestador/Tabla";
import CardDelegacion from "../Cards/CardDelegacion/CardDelegacion";
import InformaciondeServicios from "../../../../InformaciondeServicios.json"

export type ContenidoPrincipalType = {
  className?: string;
  servicioSeleccionado: string; 
  subSubCategorias: Array<{ titulo: string, contenido: string, subsubcategoria_nombre: string | null, id:number }>; 
};
const ContenidoPrincipal: NextPage<ContenidoPrincipalType> = memo(
  ({ className = "", servicioSeleccionado, subSubCategorias }) => {
    const [contenidoSeleccionado, setContenidoSeleccionado] = useState<{
      titulo: string;
      contenido: string;
      id: number;
    } | null>(null);

    const activeButton = useAppSelector((state) => state.navbar.activeButton);
    const mostrarDelegacion = useAppSelector((state) => state.navbar.mostrarDelegacion);
    const dispatch = useAppDispatch();
    const servicioInfo = InformaciondeServicios.find(
      (servicio) => servicioSeleccionado.trim().toLowerCase() === servicio.servicio.trim().toLowerCase()
    );
    
    useEffect(() => {
      if (!activeButton) {
        setContenidoSeleccionado(null);
      }
    }, [activeButton]);

    // Agrupar subsubcategorias
    const subSubCategoriasAgrupadas = subSubCategorias.reduce(
      (acc: { [key: string]: Array<{ titulo: string; contenido: string; id: number }> }, curr) => {
        const subsubcategoria = curr.subsubcategoria_nombre;
        if (subsubcategoria) {
          if (!acc[subsubcategoria]) {
            acc[subsubcategoria] = [];
          }
          acc[subsubcategoria].push({
            titulo: curr.titulo,
            contenido: curr.contenido,
            id: curr.id,
          });
        }
        return acc;
      },
      {}
    );
    console.log("subSubCategoriasAgrupadas: ", subSubCategoriasAgrupadas);
    
    const handleSubSubCategoriaClick = (subSubCategoriaItems: Array<{ titulo: string; contenido: string; id: number }>) => {
      if (contenidoSeleccionado?.id === subSubCategoriaItems[0].id) {
        setContenidoSeleccionado(null);
        dispatch(setActiveButton(false));
      } else {
        const firstItem = subSubCategoriaItems[0];
        setContenidoSeleccionado({
          titulo: firstItem.titulo,
          contenido: firstItem.contenido,
          id: firstItem.id,
        });
        dispatch(setActiveButton(true));
      }
    };



    return (
      <section className={[styles.ospAfiliacionesInner, className].join(" ")}>
      <div className={styles.areaNavigationParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.areaDescriptionParent}>
            <div className={styles.areaDescription}>
              <div className={styles.frameParent}>
                <div className={styles.reaAfiliacionesWrapper}>
                  <h1 className={styles.reaAfiliaciones}>
                    {servicioSeleccionado}
                  </h1>
                </div>
                {servicioInfo && (
                    <div className={styles.paraPresentacinDe}>
                      {servicioInfo.descripcion}
                    </div>
                  )}
                <div className={styles.areaActionWrapper}>
                  <div className={styles.areaAction}>
                  {Object.keys(subSubCategoriasAgrupadas).map(
                        (subsubcategoria) => (
                          <div key={subsubcategoria}>
                            <BotonSubSubCategoria
                              text={subsubcategoria}
                              registroBlanco="/registro-blanco.svg"
                              onClick={() =>
                                handleSubSubCategoriaClick(
                                  subSubCategoriasAgrupadas[subsubcategoria]
                                )
                              }
                              titulo=""
                              contenido=""
                              id={0}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.lineaDivisoria}></div>
              {servicioInfo && (
                  <div className={styles.losTrmitesQueSeRealizanPWrapper}>
                    <div className={styles.losTrmitesQueContainer}>
                      {servicioInfo.informacionPrimaria && (
                        <p className={styles.losTrmitesQue}>
                          {servicioInfo.informacionPrimaria}
                        </p>
                      )}
                    {servicioInfo.informacionSecundaria && (
                        <p className={styles.losTrmitesQue}>
                          {servicioInfo.informacionSecundaria}
                        </p>
                      )}
                 </div>
                  </div>
                )}
            </div>
          </div>

          <div className={styles.requisitosContainer}>
            {mostrarDelegacion ? (
              <CardDelegacion />
            ) : contenidoSeleccionado ? (
              <Requisitos
                titulo={contenidoSeleccionado.titulo}
                contenido={contenidoSeleccionado.contenido}
              />
            ) : (
              subSubCategorias.length > 0 &&
              !subSubCategorias[0].subsubcategoria_nombre && (
                <Requisitos
                  titulo={subSubCategorias[0].titulo}
                  contenido={subSubCategorias[0].contenido}
                />
              )
            )}
            {servicioSeleccionado.toLowerCase() === "prestadores" && <Prestadores />}
            {servicioSeleccionado.toLowerCase() === "pacientes crónicos" && 
            <div className=" max-w-[1000px] mx-auto  md:aspect-[16/9] h-[350px]  ms-5 mt-3 overflow-hidden justify-items-center">
            <iframe
              src="https://sdf.tandemdigital.net/generador-formulario-cronicos"
              title="Formulario Pacientes Crónicos"
               className="w-full h-full border-0 overflow-hidden"
            />
          </div>
          }
          </div>
        </div>
      </section>
    );
  }
);

export default ContenidoPrincipal;