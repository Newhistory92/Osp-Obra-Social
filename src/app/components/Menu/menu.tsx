
import { memo, useRef, useState } from "react";
import RedSocial from "../RedesSociales/RedSocial";
import BotonServicio from "../Botones/BotonServicios/boton-servicio";
import CardContacto from "../Cards/Contactos/CardContacto";
import ContenidoPrincipal from "../Contenido/ContenidoPrincipal";
import CardRequisitos from "../Cards/Requisitos/CardRequisitos";
import styles from "./menu.module.css";
import { setActiveButton, setMostrarDelegacion } from '@/app/redux/Slice/navbarSlice';
import { useAppSelector, useAppDispatch } from '@/app/hooks/StoreHook';
import Image from "next/image";


const Menu= memo(( ) => {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string>("Servicios");
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState<
  { titulo: string; contenido: string; subsubcategoria_nombre: string | null ; id: number}[]
>([]);
const activeButton = useAppSelector((state) => state.navbar.activeButton);
const mostrarDelegacion = useAppSelector((state) => state.navbar.mostrarDelegacion);
const dispatch = useAppDispatch();

// para el scroll
const cardRequisitosRef = useRef<HTMLDivElement | null>(null);
const subcategoriaRef = useRef<HTMLDivElement>(null);
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
    cardRequisitosRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
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


  const handleExpediClick = () => {
    window.location.href =
      "https://sj.sanjuan.gob.ar/?uid=CUMV-VIEW-ExpedientesComponent";
  };


  const handleTuVozImportaClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScuTsmhPDvmSUDC20tP8LSPuVni46iNP3m3SJ0dg_QT0VFMhA/viewform?embedded=true%22%20width%3D%22640%22%20height%3D%221606%22%20frameborder%3D%220%22%20marginheight%3D%220%22%20marginwidth%3D%220%22%3ECargando%E2%80%A6%3C%2Fiframe%3E&amp;gxids=7628";
  };

  return (
    <section className={styles.ospLandingInner}>
      <div className={styles.cabeceraConIconosParent}>
        <div className={styles.cabeceraConIconos}>   
          <Image 
          className={styles.headerSpacingIcon}
          alt="Obra Social Provincia"
          src="/frame.svg"
          width={150}  
          height={150} 
          priority  /> 
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
                <Image 
                className={styles.lupa2Icon}
                alt="Lupa"
                src="/lupa-2.svg"
                width={36}  
                height={36} 
                priority /> 
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
              text="Expediente"
              info="/expedienteonline.svg"
              onClick={ handleExpediClick}
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
             
            <div className="flex w-56 gap-2" onClick={handleCerrarClick} ref={cardRequisitosRef}>
              <div className="bg-[#413E43] px-2  rounded-l-md hover:cursor-pointer hover:bg-[#524F54] transition-colors">
                <Image 
                className="h-full"
                alt=""
                src="/boton-area.svg"
                width={25}  
                height={25} 
                style={{ width: "auto", height: "auto" }}
                priority /> 
              </div>
              <button className="w-48 bg-[#D31D16] font-semibold text-white h-10 rounded-r-md hover:cursor-pointer hover:bg-[#E42E27] transition-colors">
                {servicioSeleccionado}
              </button>
            </div>
            
            <CardRequisitos
              servicioSeleccionado={servicioSeleccionado}
              onPublicacionesFiltradasChange={
                handlePublicacionesFiltradasChange
              }
              subcategoriaRef={subcategoriaRef}
            />
            <div className={styles.cabecerarequisito}>
              <ContenidoPrincipal
                subSubCategorias={contenidoSeleccionado}
                servicioSeleccionado={servicioSeleccionado} 
                cardbotonRef={subcategoriaRef}                
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
            fondo="/horario.svg"
          />
          <CardContacto
            textPrncipal="Nuestro Telefóno"
            textSecundario="0264 4304300"
            mostrarIcono
            propOverflow="hidden"
            fondo="/contactotelefono.svg"
          />
          <CardContacto
            textPrncipal="Nuestro email"
            textSecundario="obrasocialprovincia @sanjua.gov.ar"
            mostrarIcono
            propOverflow="hidden"
            fondo="/mail.svg"
          />
           <CardContacto
            textPrncipal="Tu voz Importa"
            textSecundario="Queremos conocer tu experiencia en la última consulta médica"
            mostrarIcono
            propOverflow="unset"
            fondo="/tuvoz.svg"
            onClick={handleTuVozImportaClick} 
          />
          <CardContacto
            textPrncipal="Delegaciones"
            textSecundario="Conocé nuestras distintas delegaciones"
            mostrarIcono
            fondo="/direcciondelegacion.svg"
            onClick={() => {
              handleServicioClick("Servicios");
              dispatch(setMostrarDelegacion(true));
            }}
          />
          <CardContacto
            textPrncipal="Institucion"
            textSecundario="Nuestra Estructura organizacional"
            mostrarIcono
            propOverflow="hidden"
            fondo="/Institucion.svg"
            onClick={() => handleServicioClick("institucional")}
          />
        </div>
      </div>
    </section>
  );
});

export default Menu;
