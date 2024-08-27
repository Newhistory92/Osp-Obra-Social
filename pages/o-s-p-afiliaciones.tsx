import type { NextPage } from "next";
import Navbar from "../components/header";
import RedSocial from "../components/RedSocial";
import BotonServicio from "../components/boton-servicio";
import AccordionButton from "../components/accordion-button";
import Requisitos from "../Requisitos";
import Footer from "../components/footer";
import styles from "./o-s-p-afiliaciones.module.css";

const OSPAfiliaciones: NextPage = () => {
  return (
    <div className={styles.ospAfiliaciones}>
      <header className={styles.main}>
        <Navbar
          logoGobiernoWidth="unset"
          logoGobiernoFlex="1"
          headerFlexWrap="wrap"
          headerRowGap="20px"
          frameDivMinWidth="307px"
        />
      </header>
      <img
        className={styles.texturasOsp5Icon}
        alt=""
        src="/texturas-osp-5@2x.png"
      />
      <section className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.cabeceraConIconos}>
            <div className={styles.leftIcons}>
              <img
                className={styles.icons}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className={styles.leftIcons}>
              <div className={styles.socialSearch}>
                <div className={styles.socialMedia}>
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
              <BotonServicio
                showIcono
                text="Servicios"
                info="/servicios-salud.svg"
              />
              <div className={styles.botonServicio}>
                <div className={styles.afiliacionesWrapper}>
                  <img
                    className={styles.afiliacionesIcon}
                    loading="lazy"
                    alt=""
                    src="/afiliaciones.svg"
                  />
                </div>
                <div className={styles.misDocumentos}>Afiliaciones</div>
              </div>
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
                    className={styles.afiliacionesIcon}
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
                info="/formularios-medicos1.svg"
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
              <BotonServicio showIcono text="Consultas" info="/info2@2x.png" />
            </div>
          </div>
          <div className={styles.areaBanner}>
            <img
              className={styles.botonArea}
              loading="lazy"
              alt=""
              src="/boton-area1.svg"
            />
            <div className={styles.areaInfo}>
              <div className={styles.areaTitle}>
                <h1 className={styles.afiliaciones}>Afiliaciones</h1>
              </div>
              <div className={styles.description}>
                <div className={styles.frameParent}>
                  <div className={styles.reaAfiliacionesWrapper}>
                    <h1 className={styles.reaAfiliaciones}>
                      Área Afiliaciones
                    </h1>
                  </div>
                  <div className={styles.paraPresentacinDe}>
                    Para presentación de documentación o retiro de carnet y
                    renovación del plástico  por extravío, hurto o deterioro de
                    carnet, atención presencial primer piso, Box 10, de 7.30 hs
                    a 13:00 hs.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.areaBannerInner}>
              <img className={styles.frameChild} alt="" src="/line-5.svg" />
            </div>
            <div className={styles.requirementInfo}>
              <div className={styles.losTrmitesQueContainer}>
                <p className={styles.losTrmitesQue}>
                  •Los trámites que se realizan por expediente es de manera
                  presencial, primer piso afiliaciones. Atención de 7:30 a 13:00
                  hs. 
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
                  comunicarse con la Oficina de Control de Aportes vía e-mail a 
                  <a
                    className={styles.afiliacionesospgmailcom}
                    href="mailto:aportes.afiliaciones@gmail.com"
                    target="_blank"
                  >
                    <span className={styles.afiliacionesospgmailcom1}>
                      aportes.afiliaciones@gmail.com
                    </span>
                  </a>
                    o vía telefónica al teléfono fijo de D.O.S. (0264) 4304300
                  opción,  opción 7 luego opción 2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.requirementsParent}>
        <div className={styles.requirements}>
          <h3 className={styles.requisitosDeAfiliaciones}>
            Requisitos de afiliaciones
          </h3>
          <div className={styles.accordion}>
            <AccordionButton />
            <div className={styles.accordionContent}>
              <div className={styles.content1}>
                Contenido de Acordeón se carga en el proceso de desarrollo esto
                es solo un ejemplo de funcionalidad.
              </div>
            </div>
          </div>
        </div>
        <Requisitos
          title="02 - Cambio de situación de revista"
          propMinWidth="199px"
          propMixBlendMode="normal"
        />
        <Requisitos
          title="03 - Incorporación de afiliados con licencia sin goce de haberes"
          propMinWidth="360px"
          propMixBlendMode="unset"
        />
        <Requisitos
          title="04 - Menores de 21 años
"
          propMinWidth="139px"
          propMixBlendMode="unset"
        />
        <Requisitos
          title="05 - Hijos mayores de 21 años con discapacidad"
          propMinWidth="270px"
          propMixBlendMode="unset"
        />
        <Requisitos title="06" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="07" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="08" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="09" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="10" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="11" propMinWidth="11px" propMixBlendMode="unset" />
        <Requisitos title="12" propMinWidth="12px" propMixBlendMode="unset" />
        <Requisitos title="13" propMinWidth="12px" propMixBlendMode="unset" />
        <Requisitos title="14" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="15" propMinWidth="12px" propMixBlendMode="unset" />
        <Requisitos title="16" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="17" propMinWidth="12px" propMixBlendMode="unset" />
        <Requisitos title="18" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="19" propMinWidth="12px" propMixBlendMode="unset" />
        <Requisitos title="20" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="21" propMinWidth="11px" propMixBlendMode="unset" />
        <Requisitos title="22" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="23" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="24" propMinWidth="13px" propMixBlendMode="unset" />
        <Requisitos title="25" />
        <div className={styles.frameItem} />
      </section>
      <section className={styles.affiliateInfoWrapper}>
        <div className={styles.affiliateInfo}>
          <h3 className={styles.afiliadosAdherentes}>Afiliados Adherentes</h3>
          <div className={styles.incorporacinDeAfiliadosContainer}>
            <p className={styles.losTrmitesQue}>
              Incorporación de afiliados adherentes de Obra Social Provincia a
              través de las Instituciones Federación de Viñateros y Centro
              Comercial de Santa Lucía.
            </p>
            <p className={styles.losTrmitesQue}>
              Serán postulantes a afiliados adherentes a la Obra Social -
              Provincia todas aquellas personas que opten voluntariamente por
              incorporarse y que cumplan con los siguientes requisitos:
            </p>
            <ol className={styles.noDebernSuperarAlMomento}>
              <li className={styles.noDebernSuperar}>
                No deberán superar al momento de la incorporación los (60) años
                de edad.
              </li>
              <li className={styles.noDebernSuperar}>
                El postulante Titular podrá efectuar las siguientes
                incorporaciones como grupo familiar directo: Contrayente o
                Concubino/a, Hijos Menores de 21 años del afiliado directo,
                Menores en Guarda o Tutela que tuviere el postulante, Hijo
                discapacitado que estuviere a cargo de aquel, Hijos del
                postulante mayores de 21 años y menores de 26 años que cursen
                estudios secundarios, terciarios o universitarios.
              </li>
              <li className={styles.noDebernSuperar}>
                El postulante adherente deberá cumplimentar él y su grupo
                familiar a cargo el examen médico establecido. La D.O.S a través
                del departamento Auditoria Médica se reserva el derecho de
                solicitar los estudios de diagnósticos necesarios para verificar
                el estado actual de salud del solicitante y su grupo familiar.
                Dicho estudio estará a cargo del solicitante.
              </li>
              <li className={styles.noDebernSuperar}>
                Aquellas personas que solicitan su incorporación como adherentes
                a través de las instituciones convenidas y que anteriormente han
                revistado como afiliados de D.O.S gozarán de los beneficios que
                esta brinda en forma inmediata y será requisito indispensable
                solicitar su incorporación dentro del término legal (30 días a
                rt.ll ley 4680) establecido para que exista relación de
                continuidad prevista en la normativa vigente.
              </li>
            </ol>
            <p className={styles.losTrmitesQue}>
              Los requisitos para la afiliación deberán solicitarse ante las
              entidades convenidas:
            </p>
            <p className={styles.losTrmitesQue}>
              Centro Comercial e Industrial de Santa Lucia: Av. Hipólito
              Yrigoyen 2065 este, Santa Lucia, San Juan. Teléfono: 4251462 -
              4254000.
            </p>
            <p className={styles.pacientes}>
              Federación De Viñateros y Productores Agropecuarios de San Juan:
              Caseros 185 norte, Capital, San Juan. Teléfono: 4210924.
            </p>
          </div>
        </div>
      </section>
      <Footer
        footer01AlignSelf="stretch"
        footer01Width="unset"
        footerSocialWidth="unset"
        footerSocialContainerPadding="0px 4px 0px 0px"
        footerSocialContainerAlignSelf="unset"
        footerSocialContainerPosition="unset"
        youtubePosition="relative"
        youtubeMargin="unset"
        youtubeTop="unset"
        youtubeRight="unset"
        youtubeBottom="unset"
        blankLineFontFamily6="Ubuntu"
        paulaAlbarracnDeSarmientoFontFamily3="Ubuntu"
        conmutador0264429604546FontFamily3="Ubuntu"
        fAX02644237333FontFamily3="Ubuntu"
        blankLineFontFamily7="Ubuntu"
        centroCvicoFontFamily3="Ubuntu"
        horariosDeAtencinFontFamily3="Ubuntu"
      />
    </div>
  );
};

export default OSPAfiliaciones;
