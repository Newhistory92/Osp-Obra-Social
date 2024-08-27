import type { NextPage } from "next";
import { memo } from "react";
import RedSocial from "../RedesSociales/RedSocial";
import BotonServicio from "../Botones/BotonServicios/boton-servicio";
import CardContacto from "../Cards/Contactos/CardContacto";
import styles from "./menu.module.css";

export type MenuType = {
  className?: string;
};

const Menu: NextPage<MenuType> = memo(({ className = "" }) => {
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
              text="Servicios"
              info="/servicios-salud.svg"
            />
            <BotonServicio
              showIcono
              text="Afiliaciones"
              info="/afiliaciones.svg"
            />
            <BotonServicio
              showIcono
              text="Prestadores"
              info="/empleados-publicos.svg"
            />
            <BotonServicio
              showIcono
              text="Medicamentos"
              info="/medicamentos.svg"
            />
            <BotonServicio showIcono text="Farmacia" info="/farmacia.svg" />
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
            />
            <BotonServicio
              showIcono
              text="Institucional"
              info="/delegaciones.svg"
            />
            <BotonServicio
              showIcono
              text="Autorizaciones"
              info="/autorizaciones-farmacia.svg"
            />
            <BotonServicio showIcono text="Consultas" info="/info@2x.png" />
          </div>
        </div>
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
