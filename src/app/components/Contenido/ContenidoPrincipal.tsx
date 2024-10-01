import type { NextPage } from "next";
import { memo, useEffect, useRef, useState  } from "react";
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
  cardbotonRef: React.RefObject<HTMLDivElement>;
  subSubCategorias: Array<{ titulo: string, contenido: string, subsubcategoria_nombre: string | null, id:number }>; 
};
const ContenidoPrincipal: NextPage<ContenidoPrincipalType> = memo(
  ({ className = "", servicioSeleccionado, subSubCategorias,cardbotonRef }) => {
    const [contenidoSeleccionado, setContenidoSeleccionado] = useState<Array<{ titulo: string; contenido: string; id: number }> | null>(null);
    const [subCategoriasAgrupadas, setSubCategoriasAgrupadas] = useState<{ [key: string]: { titulo: string; contenido: string; id: number }[] }>({});
    const [sinSubSubCategoria, setSinSubSubCategoria] = useState<{ titulo: string; contenido: string; id: number }[]>([]);
  
    const activeButton = useAppSelector((state) => state.navbar.activeButton);
    const mostrarDelegacion = useAppSelector((state) => state.navbar.mostrarDelegacion);
    const dispatch = useAppDispatch();

    const seviciobotonRef = useRef<HTMLDivElement | null>(null);

    const servicioInfo = InformaciondeServicios.find(
      (servicio) => servicioSeleccionado.trim().toLowerCase() === servicio.servicio.trim().toLowerCase()
    );
    useEffect(() => {
      const agrupadas: { [key: string]: { titulo: string; contenido: string; id: number }[] } = {};
      const sinNombre: { titulo: string; contenido: string; id: number }[] = [];

      subSubCategorias.forEach((sub) => {
        if (sub.subsubcategoria_nombre) {
          if (!agrupadas[sub.subsubcategoria_nombre]) {
            agrupadas[sub.subsubcategoria_nombre] = [];
          }
          agrupadas[sub.subsubcategoria_nombre].push({ titulo: sub.titulo, contenido: sub.contenido, id: sub.id });
        } else {
          sinNombre.push({ titulo: sub.titulo, contenido: sub.contenido, id: sub.id });
        }
      });
    
      setSubCategoriasAgrupadas(agrupadas);
      setSinSubSubCategoria(sinNombre);
    }, [subSubCategorias]);

    const handleSubSubCategoriaClick = (subsubcategoriaNombre: string) => {
      
      if (contenidoSeleccionado) {
        setContenidoSeleccionado(null);
        dispatch(setActiveButton(false));
       
      } else {
        const contenidoDeSub = subCategoriasAgrupadas[subsubcategoriaNombre];
        if (contenidoDeSub) {
        
          
          setContenidoSeleccionado(contenidoDeSub);
          dispatch(setActiveButton(true));
        }
      }
      seviciobotonRef .current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
      if (!activeButton) {
        setContenidoSeleccionado(null);
      }
    }, [activeButton]);

    return (
      <section className={[styles.ospAfiliacionesInner, className].join(" ")}>
      <div className={styles.areaNavigationParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.areaDescriptionParent}>
            <div className={styles.areaDescription}>
              <div className={styles.frameParent}>
                <div className={styles.reaAfiliacionesWrapper} ref={cardbotonRef}>
                  <h1 className={styles.reaAfiliaciones}>
                    {servicioSeleccionado}
                  </h1>
                </div>
                {servicioInfo && (
                    <div className={styles.paraPresentacinDe}>
                      {servicioInfo.descripcion}
                    </div>
                  )}
                <div className={styles.areaActionWrapper} >
                  <div className={styles.areaAction} >
                  {Object.keys(subCategoriasAgrupadas).map((subsubcategoriaNombre) => (
                      <BotonSubSubCategoria
                        key={subsubcategoriaNombre}
                        text={subsubcategoriaNombre}
                        registroBlanco="/registro-blanco.svg"
                        onClick={() => handleSubSubCategoriaClick(subsubcategoriaNombre)}
                        titulo={""}
                        contenido={""}
                        id={0}
                      />
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.lineaDivisoria} ></div>
              {servicioInfo && (
                  <div className={styles.losTrmitesQueSeRealizanPWrapper}  ref={seviciobotonRef  }>
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
                <Requisitos requisitos={contenidoSeleccionado} />
              ) : sinSubSubCategoria.length > 0 ? (
                <Requisitos requisitos={sinSubSubCategoria} />
              ) : null}
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