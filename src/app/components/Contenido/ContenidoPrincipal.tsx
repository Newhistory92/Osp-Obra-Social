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
    console.log(servicioInfo)
    useEffect(() => {
      if (!activeButton) {
        setContenidoSeleccionado(null);
      }
    }, [activeButton]);


   
    
    const handleSubSubCategoriaClick = (
      titulo: string,
      contenido: string,
      id: number,
     
    ) => {
    

      if (contenidoSeleccionado?.id === id) {
        setContenidoSeleccionado(null);
        dispatch(setActiveButton(false)); 
      } else {
        setContenidoSeleccionado({ titulo, contenido, id });
        dispatch(setActiveButton(true)); 
      }
    
  };

 // solo para datos estaticos
 const handleAfiliacionClick = () => {
  setContenidoSeleccionado({
    titulo: "Afiliación",
    contenido: "Aquí va la información estática relacionada con el trámite de afiliación.",
    id: 0, // Un ID estático para esta acción
  });
  dispatch(setActiveButton(true)); // Activar el botón si es necesario
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
                  {subSubCategorias
                        .filter(
                          (subSubCategoria) =>
                            subSubCategoria.subsubcategoria_nombre &&
                            subSubCategoria.subsubcategoria_nombre.trim() !== ""
                        )
                        .map((subSubCategoria) => (
                          <div key={subSubCategoria.id}>
                            <BotonSubSubCategoria                            
                              text={subSubCategoria.subsubcategoria_nombre || ""}
                              registroBlanco="/registro-blanco.svg"                            
                              onClick={() => handleSubSubCategoriaClick(
                                subSubCategoria.titulo,
                                subSubCategoria.contenido,
                                subSubCategoria.id
                              )} titulo={""} contenido={""} id={0}                            
                            />
                          </div>
                        ))}
                           <BotonSubSubCategoria
                         
                        text="Afiliación"
                        registroBlanco="/registro-blanco.svg"
                        onClick={handleAfiliacionClick} // Usar la nueva función de manejo de clic
                        titulo={""}
                        contenido={""}
                        id={0}
                           />
                              <BotonSubSubCategoria 
                        text="Afiliación"
                        registroBlanco="/registro-blanco.svg"
                       
                        onClick={handleAfiliacionClick} // Usar la nueva función de manejo de clic
                        titulo={""}
                        contenido={""}
                        id={0}
                           />
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
            <iframe
            src="https://sdf.tandemdigital.net/generador-formulario-cronicos"
            width="1300px"
            height="300px"
            title="Formulario Pacientes Crónicos"
          />}
          </div>
          
        </div>
      </section>
    );
  }
);

export default ContenidoPrincipal;