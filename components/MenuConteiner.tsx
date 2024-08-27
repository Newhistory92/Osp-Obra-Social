import type { NextPage } from "next";
import { memo } from "react";
import RedSocial from "./RedSocial";
import BotonServicio from "./boton-servicio";
import styles from "./MenuConteiner.module.css";

export type MenuConteinerType = {
  className?: string;
};

const MenuConteiner: NextPage<MenuConteinerType> = memo(
  ({ className = "" }) => {
    return (
      <section className={[styles.mainContent, className].join(" ")}>
        <div className={styles.navigationAndContent}>
          <div className={styles.cabeceraConIconos}>
            <div className={styles.navigationLeft}>
              <img
                className={styles.navigationPlaceholderIcon}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className={styles.navigationLeft}>
              <div className={styles.searchBarAndIcons}>
                <div className={styles.socialIconsAndSearch}>
                  <RedSocial />
                </div>
                <div className={styles.searchBar}>
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
              <div className={styles.botonServicio}>
                <div className={styles.buttonContainers}>
                  <img
                    className={styles.serviciosSaludIcon}
                    loading="lazy"
                    alt=""
                    src="/servicios-salud.svg"
                  />
                </div>
                <div className={styles.misDocumentos}>Servicios</div>
              </div>
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
              <div className={styles.botonServicio1}>
                <div className={styles.pacientesCronicosWrapper}>
                  <img
                    className={styles.serviciosSaludIcon}
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
              <BotonServicio showIcono text="Consultas" info="/info1@2x.png" />
            </div>
          </div>
          <div className={styles.servicesButton}>
            <img
              className={styles.botonArea}
              loading="lazy"
              alt=""
              src="/boton-area.svg"
            />
            <button className={styles.serviciosWrapper}>
              <b className={styles.servicios}>Servicios</b>
            </button>
          </div>
        </div>
      </section>
    );
  }
);

export default MenuConteiner;
