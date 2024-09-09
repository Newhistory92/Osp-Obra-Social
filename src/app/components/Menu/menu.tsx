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
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState<string>("");

  const handleServicioClick = (servicio: string) => {
    setServicioSeleccionado(servicio);
    setMostrarContenido(true); 
  };
  const handleValueChange = (value: string) => {
    setContenidoSeleccionado(value); 
  };
  const handleCerrarClick = () => {
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
                  <input
                    className={styles.queTrmiteO}
                    placeholder="Buscar..."
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
              text="Servicios"
              info="/servicios-salud.svg"
              onClick={() => handleServicioClick("Servicios")}
            />
            <BotonServicio
              showIcono
              text="Afiliaciones"
              info="/afiliaciones.svg"
              onClick={() => handleServicioClick("Afiliaciones")}
            />
            <BotonServicio
              showIcono
              text="Prestadores"
              info="/empleados-publicos.svg"
              onClick={() => handleServicioClick("Prestadores")}
            />
            <BotonServicio
              showIcono
              text="Medicamentos"
              info="/medicamentos.svg"
              onClick={() => handleServicioClick("Medicamentos")}
            />
            <BotonServicio
              showIcono
              text="Farmacia"
              info="/farmacia.svg"
              onClick={() => handleServicioClick("Farmacia")}
            />
            <BotonServicio
              showIcono
              text="Pacientes Crónicos"
              info="/pacientes-cronicos.svg"
              onClick={() => handleServicioClick("Pacientes Crónicos")}
            />

            <BotonServicio
              showIcono
              text="Formularios"
              info="/formularios-medicos.svg"
              onClick={() => handleServicioClick("Formularios")}
            />
            <BotonServicio
              showIcono
              text="Institucional"
              info="/delegaciones.svg"
              onClick={() => handleServicioClick("Institucional")}
            />
            <BotonServicio
              showIcono
              text="Autorizaciones"
              info="/autorizaciones-farmacia.svg"
              onClick={() => handleServicioClick("Autorizaciones")}
            />
            <BotonServicio showIcono text="Consultas" info="/info@2x.png" />
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
            <CardRequisitos onValueChange={handleValueChange} />
            <div className={styles.cabecerarequisito}>
              <ContenidoPrincipal value={contenidoSeleccionado} />
            </div>
          </>
        )}
        <div className={styles.contactParent}>
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
