import type { NextPage } from "next";
import { memo, useState } from "react";
import RedSocial from "../RedesSociales/RedSocial";
import BotonServicio from "../Botones/BotonServicios/boton-servicio";
import CardContacto from "../Cards/Contactos/CardContacto";
import ContenidoPrincipal from "../Contenido/ContenidoPrincipal";
import CardRequisitos from "../Cards/Requisitos/CardRequisitos";
import styles from "./menu.module.css";
import { setActiveButton, setMostrarDelegacion } from '@/app/redux/Slice/navbarSlice';
import { useAppSelector, useAppDispatch } from '@/app/hooks/StoreHook';

export type MenuType = {
  className?: string;
};

const Menu: NextPage<MenuType> = memo(({ className = "" }) => {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string>("Servicios");
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState<
  { titulo: string; contenido: string; subsubcategoria_nombre: string | null ; id: number}[]
>([]);
const activeButton = useAppSelector((state) => state.navbar.activeButton);
const mostrarDelegacion = useAppSelector((state) => state.navbar.mostrarDelegacion);
const dispatch = useAppDispatch();


  const handlePublicacionesFiltradasChange = (publicaciones: any[]) => {
    setContenidoSeleccionado(publicaciones);
  };

    


  const handleServicioClick = (servicio: string) => {
    setServicioSeleccionado(servicio);
    setMostrarContenido(true);
    setContenidoSeleccionado([]);
    if (activeButton) {
      dispatch(setActiveButton(false)); 
    }
    if (mostrarDelegacion) {
      dispatch(setMostrarDelegacion(false));
    }
  };

  const handleCerrarClick = () => {
    setMostrarContenido(false);
    setServicioSeleccionado("")
    if (activeButton) {
      dispatch(setActiveButton(false)); 
    }
    if (mostrarDelegacion) {
      dispatch(setMostrarDelegacion(false)); 
    } 
  };





  const handleTuVozImportaClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScuTsmhPDvmSUDC20tP8LSPuVni46iNP3m3SJ0dg_QT0VFMhA/viewform?embedded=true%22%20width%3D%22640%22%20height%3D%221606%22%20frameborder%3D%220%22%20marginheight%3D%220%22%20marginwidth%3D%220%22%3ECargando%E2%80%A6%3C%2Fiframe%3E&amp;gxids=7628";
  };

  return (
    <section className={styles.ospLandingInner}>
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
              text="Afiliaciones"
              info="/afiliaciones.svg"
              onClick={() => handleServicioClick("Afiliaciones") }
            />
            <BotonServicio
              showIcono
              text="Prestadores"
              info="/empleados-publicos.svg"
              onClick={() => handleServicioClick("Prestadores")}
            />
            <BotonServicio
              showIcono
              text="Cobertura"
              info="/autorizaciones-farmacia.svg"
              onClick={() => handleServicioClick("Cobertura")}
            />
            <BotonServicio
              showIcono
              text="Servicios"
              info="/servicios-salud.svg"
              onClick={() => handleServicioClick("Servicios")}
            />
            <BotonServicio
              showIcono
              text="Programas"
              info="/medicamentos1.svg"
              onClick={() => handleServicioClick("Programas")}
            />
            <BotonServicio
              showIcono
              text="Farmacia y Medicamento"
              info="/farmacia.svg"
              onClick={() => handleServicioClick("Farmacia y Medicamento")}
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
              onClick={() => handleServicioClick("formulario")}
            />
            <BotonServicio
              showIcono
              text="Institucional"
              info="/delegaciones.svg"
              onClick={() => handleServicioClick("Institucional")}
            />
            <BotonServicio
              showIcono
              text="Sistema Online para Prestadores"
              info="/web.svg"
              onClick={() =>
                handleServicioClick("Sistema Online para Prestadores")
              }
            />
          </div>
        </div>
        
        {mostrarContenido && (
          <>
            <div className="flex h-12 gap-2" onClick={handleCerrarClick}>
              <div className="bg-[#413E43] px-3 py-3 rounded-l-md hover:cursor-pointer hover:bg-[#524F54] transition-colors">
                <img
                  className="h-full"
                  loading="lazy"
                  alt=""
                  src="/boton-area.svg"
                />
              </div>
              <button className="w-56 bg-[#D31D16] font-semibold text-white h-12 rounded-r-md hover:cursor-pointer hover:bg-[#E42E27] transition-colors">
                {servicioSeleccionado}
              </button>
            </div>
            <CardRequisitos
              servicioSeleccionado={servicioSeleccionado}
              onPublicacionesFiltradasChange={
                handlePublicacionesFiltradasChange
              }
            />
            <div className={styles.cabecerarequisito}>
              <ContenidoPrincipal
                subSubCategorias={contenidoSeleccionado}
                servicioSeleccionado={servicioSeleccionado}
              />
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
            textPrncipal="Tu voz Importa"
            textSecundario="Queremos conocer tu experiencia en la última consulta médica"
            mostrarIcono
            propOverflow="unset"
            fondo="/fondo.svg"
            onClick={handleTuVozImportaClick} 
          />
          <CardContacto
            textPrncipal="Delegaciones"
            textSecundario="Conocé nuestras distintas delegaciones"
            mostrarIcono
            fondo="/fondo.svg"
            onClick={() => {
              handleServicioClick("Servicios");
              dispatch(setMostrarDelegacion(true));
            }}
          />
        </div>
      </div>
    </section>
  );
});

export default Menu;
