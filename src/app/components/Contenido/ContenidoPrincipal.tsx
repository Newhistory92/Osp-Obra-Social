import type { NextPage } from "next";
import { memo, useState  } from "react";
import styles from "./ContenidoPrincipal.module.css";
import Requisitos from "@/app/components/Cards/Requisitos/componentsRequisitos";
import BotonSubSubCategoria from "@/app/components/Botones/BotonSubsubCategoria/BotonSubsubCategoria"

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
      id:number
    } | null>(null);

    console.log(contenidoSeleccionado)
    const handleSubSubCategoriaClick = (
      titulo: string,
      contenido: string,
      id: number
    ) => {
      if (contenidoSeleccionado?.id === id) {
        setContenidoSeleccionado(null);
      } else {
        setContenidoSeleccionado({ titulo, contenido, id });
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
                    renovación del plástico por extravío, hurto o deterioro de
                    carnet, atención presencial primer piso, Box 10, de 7.30 hs
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
                        propMinWidth="87px" onClick={function (): void {
                          throw new Error("Function not implemented.");
                        } } titulo={""} contenido={""} id={0} />
                          <BotonSubSubCategoria
                        showIcono={false}
                        text="Afiliaciones"
                        registroBlanco="/registro-blanco.svg"
                        propMinWidth="87px" onClick={function (): void {
                          throw new Error("Function not implemented.");
                        } } titulo={""} contenido={""} id={0} />
                    </div>
                  </div>
                </div>
              </div>
              <img className={styles.frameChild} alt="" src="/line-51.svg" />
              <div className={styles.losTrmitesQueSeRealizanPWrapper}>
                <div className={styles.losTrmitesQueContainer}>
                  <p className={styles.losTrmitesQue}>
                    •Los trámites que se realizan por expediente es de manera
                    presencial, primer piso afiliaciones. Atención de 7:30 a
                    13:00 hs.
                  </p>
                  <p className={styles.losTrmitesQue}>
                    Consultas vía e-mail 
                    <a
                      className={styles.afiliacionesospgmailcom}
                      href="mailto:afiliaciones.osp@gmail.com"
                      target="_blank"
                    >
                      <span className={styles.afiliacionesospgmailcom1}>
                        afiliaciones.osp@gmail.com
                      </span>
                    </a>
                     o telefónicas al número de teléfono fijo de D.OS. (0264)
                    4304300 opción, opción 7 luego opción  1.
                  </p>
                  <p className={styles.pacientes}>
                    En el caso de vencimientos parciales (renovaciones de
                    estudiantes, pensionados, docentes interinos y suplentes),
                    bajas de afiliaciones y reintegros de aportes, usted puede
                    comunicarse con la Oficina de Control de Aportes vía
                    e-mail a 
                    <a
                      className={styles.afiliacionesospgmailcom}
                      href="mailto:aportes.afiliaciones@gmail.com"
                      target="_blank"
                    >
                      <span className={styles.afiliacionesospgmailcom1}>
                        aportes.afiliaciones@gmail.com
                      </span>
                    </a>
                      o vía telefónica al teléfono fijo de D.O.S.
                    (0264) 4304300 opción,  opción 7 luego opción 2.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Muestra los requisitos siempre en su lugar original */}
          <div className={styles.requisitosContainer}>
            {contenidoSeleccionado ? (
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
          </div>
        </div>
      </section>
    );
  }
);

export default ContenidoPrincipal;