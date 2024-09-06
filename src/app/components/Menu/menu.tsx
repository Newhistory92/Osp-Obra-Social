import type { NextPage } from "next";
import { memo, useState } from "react";
import RedSocial from "../RedesSociales/RedSocial";
import BotonServicio from "../Botones/BotonServicios/boton-servicio";
import CardContacto from "../Cards/Contactos/CardContacto";
import ContenidoPrincipal from "../Contenido/ContenidoPrincipal";
import CardRequisitos from "../Cards/Requisitos/CardRequisitos";
import styles from "./menu.module.css";

export type MenuType = {
  className?: string;
};


const Menu: NextPage<MenuType> = memo(({ className = "" }) => {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string>("Servicios");
 const [contenidoSeleccionado, setContenidoSeleccionado] = useState<
  { titulo: string; contenido: string; subsubcategoria_nombre: string | null ; id: number}[]
>([]);



  const handlePublicacionesFiltradasChange = (publicaciones: any[]) => {
    setContenidoSeleccionado(publicaciones);
  };

    


  const handleServicioClick = (servicio: string) => {
    setContenidoSeleccionado([]); 
    setServicioSeleccionado(servicio);
    setMostrarContenido(true);
  };

 
  const handleCerrarClick = () => {
    setContenidoSeleccionado([]); 
    setMostrarContenido(false); 
  };




  return (
    <section className={[styles.ospLandingInner, className].join(" ")}>
      <div className={styles.cabeceraConIconosParent}>
        <div className={styles.cabeceraConIconos}>
          <div className={styles.headerLeft}>
            <img
              className={styles.headerSpacingIcon}
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className={styles.headerLeft}>
            <div className={styles.socialButtonsContainer}>
              <div className={styles.socialesWrapper}>
                <RedSocial />
              </div>
              <div className={styles.busquedaParent}>
                <div className={styles.busqueda}>
                  <div className={styles.busquedaChild} />
                  <div className={styles.busquedaItem} />
                  <input
                    className={styles.queTrmiteO}
                    placeholder="Que trámite o servicio estás buscando"
                    type="text"
                  />
                </div>
                <img className={styles.lupa2Icon} alt="" src="/lupa-2.svg" />
              </div>
            </div>
          </div>
          <div className={styles.botones}>
            <BotonServicio
              showIcono
              text="Afiliaciones"
              info="/afiliaciones.svg"
              onClick={() => handleServicioClick("afiliaciones")}
            /> 
              <BotonServicio
                showIcono
                text="Prestadores"
                info="/empleados-publicos.svg"
                onClick={() => handleServicioClick("prestadores")}
              />
              <BotonServicio
                showIcono
                text="Coberturas"
                info="/autorizaciones-farmacia1.svg"
                onClick={() => handleServicioClick("Cobertura")}
              />
            <BotonServicio
              showIcono
              text="Servicios"
              info="/servicios-salud.svg"
              onClick={() => handleServicioClick("servicios")}
            />
             <BotonServicio
                showIcono
                text="Programas"
                info="/medicamentos1.svg"
                onClick={() => handleServicioClick("programas")}
              />
          
            <BotonServicio 
            showIcono text="Farmacia y Medicamento" 
            info="/farmacia.svg"   
            onClick={() => handleServicioClick("farmacia y medicamento")} />

            <div className={styles.botonServicio}>
              <div className={styles.pacientesCronicosWrapper}>
                <img
                  className={styles.pacientesCronicosIcon}
                  loading="lazy"
                  alt=""
                  src="/pacientes-cronicos.svg"
                />
              </div>
              <div className={styles.misDocumentos}>
                <p className={styles.pacientes}>Pacientes</p>
                <p className={styles.pacientes}>Crónicos</p>
                
              </div>
            </div>
            <BotonServicio
              showIcono
              text="Formularios"
              info="/formularios-medicos.svg"
              onClick={() => handleServicioClick("formularios")}
            />
            <BotonServicio
              showIcono
              text="Institucional"
              info="/delegaciones.svg"
              onClick={() => handleServicioClick("institucional")}
            />
            
          </div>
          
        </div>
        {mostrarContenido && (
            <>
        <div className={styles.servicesButton} onClick={handleCerrarClick}>
            <img
              className={styles.botonArea}
              loading="lazy"
              alt=""
              src="/boton-area.svg"
              
            />
          <button className={styles.serviciosWrapper}>
              <b className={styles.servicios}>{servicioSeleccionado}</b>
            </button>
          </div>
          <CardRequisitos
        servicioSeleccionado={servicioSeleccionado}
        onPublicacionesFiltradasChange={handlePublicacionesFiltradasChange}
      />
          <div className={styles.cabecerarequisito}>
          <ContenidoPrincipal 
          subSubCategorias={contenidoSeleccionado} 
         servicioSeleccionado={servicioSeleccionado} 
      />
          </div>
          </>
          )}
        <div className={styles.cardVerticalParent}>
          <CardContacto
            textPrncipal="Horario de Atención"
            textSecundario="de Lunes a Viernes de 7hs a 19hs"
            mostrarIcono
            propOverflow="hidden"
            fondo="/fondo.svg"
          />
          <CardContacto
            textPrncipal="Nuestro Telefóno"
            textSecundario=" 0264 4304300 "
            mostrarIcono
            propOverflow="hidden"
            fondo="/fondo.svg"
          />
          <CardContacto
            textPrncipal="Nuestro email"
            textSecundario="obrasocialprovincia @sanjua.gov.ar"
            mostrarIcono
            propOverflow="hidden"
            fondo="/fondo.svg"
          />
          <CardContacto
            textPrncipal="Preguntas Frecuentes"
            textSecundario="accedé a las consultas más frecuentes"
            mostrarIcono
            propOverflow="unset"
            fondo="/fondo.svg"
          />
          <CardContacto
            textPrncipal="Delegaciones"
            textSecundario="conocé nuestras distintas delegaciones"
            mostrarIcono
            fondo="/fondo.svg"
          />
        </div>
      </div>
    </section>
  );
});

export default Menu;
