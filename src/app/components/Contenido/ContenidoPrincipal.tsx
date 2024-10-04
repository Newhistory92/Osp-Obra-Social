import type { NextPage } from "next";
import { memo, Suspense, useEffect, useRef, useState  } from "react";
import styles from "./ContenidoPrincipal.module.css";
import Requisitos from "@/app/components/Cards/Requisitos/Requisito/Requisitos";
import BotonSubSubCategoria from "@/app/components/Botones/BotonSubsubCategoria/BotonSubsubCategoria"
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"
import Prestadores from "../Prestador/Tabla";
import CardDelegacion from "../Cards/CardDelegacion/CardDelegacion";
import InformaciondeServicios from "../../../../InformaciondeServicios.json"
import { ProgressBar } from 'primereact/progressbar';
import "primereact/resources/themes/saga-blue/theme.css";
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column'; 
import ErrorBoundary from '@/app/utils/ErrorBoundary';     
export type ContenidoPrincipalType = {
  servicioSeleccionado: string; 
  cardbotonRef: React.RefObject<HTMLDivElement>;
  subSubCategorias: Array<{ titulo: string, contenido: string, subsubcategoria_nombre: string | null, id:number }>; 
};
const ContenidoPrincipal: NextPage<ContenidoPrincipalType> = memo(
  ({ servicioSeleccionado, subSubCategorias,cardbotonRef }) => {
    const [contenidoSeleccionado, setContenidoSeleccionado] = useState<Array<{ titulo: string; contenido: string; id: number }> | null>(null);
    const [subCategoriasAgrupadas, setSubCategoriasAgrupadas] = useState<{ [key: string]: { titulo: string; contenido: string; id: number }[] }>({});
    const [sinSubSubCategoria, setSinSubSubCategoria] = useState<{ titulo: string; contenido: string; id: number }[]>([]);
    const [progress, setProgress] = useState(0);
    const [loadingLocal, setLoadingLocal] = useState(true);
    const activeButton = useAppSelector((state) => state.navbar.activeButton);
    const mostrarDelegacion = useAppSelector((state) => state.navbar.mostrarDelegacion);
    const dispatch = useAppDispatch();
    const items = Array(10).fill({});
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
  
    useEffect(() => {
      if (loadingLocal) {
        const intervalId = setInterval(() => {
          setProgress((prevProgress) => (prevProgress < 50 ? prevProgress + 50 : prevProgress)); 
        }, 500);
        
        return () => clearInterval(intervalId);
      }
    }, [loadingLocal]);
    
    return (
      <section className={styles.ospAfiliacionesInner}>
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
            {servicioSeleccionado.toLowerCase() === "prestadores" &&
              <ErrorBoundary fallback={<div className="ms-5 text-base">Error loading prestadores.</div>}>    
      <Suspense fallback={<DataTable value={items} className="p-datatable-striped ms-5 w-full" >
    <Column field="Especialidad" header="Especialidad" style={{ width: '25%'  }} body={<Skeleton  /> }></Column>
    <Column field="Nombre y Apellido" header="Nombre y Apellido" style={{ width: '25%' }} body={<Skeleton />}></Column>
    <Column field="Matrícula" header="Matrícula" style={{ width: '10%' }} body={<Skeleton />}></Column>
    <Column field="Teléfono" header="Teléfono" style={{ width: '15%' }} body={<Skeleton />}></Column>
    <Column field="Dirección" header="Dirección" style={{ width: '15%' }} body={<Skeleton />}></Column>
    <Column field="Fidelizado" header="Fidelizado" style={{ width: '10%' }} body={<Skeleton />}></Column>
       </DataTable>}>
        <Prestadores />
      </Suspense>
        </ErrorBoundary>  }

            {servicioSeleccionado.toLowerCase() === "pacientes crónicos" && 
            <div className=" max-w-[1000px] mx-auto  md:aspect-[16/9] h-[350px]  ms-5 mt-3 overflow-hidden justify-items-center">
               {loadingLocal && <ProgressBar value={progress} className="mb-3" />}
            <iframe
              src="https://sdf.tandemdigital.net/generador-formulario-cronicos"
              title="Formulario Pacientes Crónicos"
               className="w-full h-full border-0 overflow-hidden"
               onLoad={() => {
                setLoadingLocal(false); 
                setProgress(100);
                
              }}
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