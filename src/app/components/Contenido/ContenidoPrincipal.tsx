import type { NextPage } from "next";
import { memo, useEffect, useState  } from "react";
import styles from "./ContenidoPrincipal.module.css";
import Requisitos from "@/app/components/Cards/Requisitos/componentsRequisitos";
import BotonSubSubCategoria from "@/app/components/Botones/BotonSubsubCategoria/BotonSubsubCategoria"
import  {setActiveButton}  from '@/app/redux/Slice/navbarSlice';
import {useAppSelector,useAppDispatch} from "@/app/hooks/StoreHook"
import Prestadores from "../Prestador/Tabla";
import CardDelegacion from "../Cards/CardDelegacion/CardDelegacion";

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
 console.log(mostrarDelegacion)

 useEffect(() => {
  console.log("mostrarDelegacion: ", mostrarDelegacion); // Verificar cambios en el estado
}, [mostrarDelegacion]);
    useEffect(() => {
      if (activeButton === false) {
        setContenidoSeleccionado(null); 
      }
    }, [activeButton]);

    const handleSubSubCategoriaClick = (
      titulo: string,
      contenido: string,
      id: number
    ) => {
      if (contenidoSeleccionado?.id === id) {
        setContenidoSeleccionado(null);
        dispatch(setActiveButton(false)); 
      } else {
        setContenidoSeleccionado({ titulo, contenido, id });
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
                  <div className={styles.paraPresentacinDe}>
                    {/* Texto estático */}
                    Para presentación de documentación o retiro de carnet y
                    renovación del plástico por extravío, hurto o deterioro de
                    carnet, atención presencial primer piso, Box 10, de 7.30 hs
                    a 13:00 hs.
                  </div>
                  <div className={styles.areaActionWrapper}>
                    <div className={styles.areaAction}>
                      {subSubCategorias.map((subSubCategoria, index) => (
                        <div key={index}>
                          <BotonSubSubCategoria
                            showIcono={true}
                            text={subSubCategoria.subsubcategoria_nombre || ""}
                            registroBlanco="/registro-blanco.svg"
                            propMinWidth="87px"
                            onClick={handleSubSubCategoriaClick}
                            titulo={subSubCategoria.titulo}
                            contenido={subSubCategoria.contenido}
                            id={subSubCategoria.id}
                          />
                        </div>
                      ))}

                      <BotonSubSubCategoria
                        showIcono={false}
                        text="Afiliaciones"
                        registroBlanco="/registro-blanco.svg"
                        propMinWidth="87px"
                        onClick={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        titulo={""}
                        contenido={""}
                        id={0}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.frameChild} alt="" src="/line-51.svg" />
              <div className={styles.losTrmitesQueSeRealizanPWrapper}>
                <div className={styles.losTrmitesQueContainer}>
                  <p className={styles.losTrmitesQue}>
                    •Los trámites que se realizan por expediente es de manera
                    presencial, primer piso afiliaciones. Atención de 7:30 a
                    13:00 hs.
                  </p>
                </div>
              </div>
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
            {servicioSeleccionado === "prestadores" && <Prestadores />}
          </div>
        </div>
      </section>
    );
  }
);

export default ContenidoPrincipal;
