import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import Facebook from "../RedesSociales/Facebook/facebook";
import X from "../RedesSociales/Tiwtter/x";
import Instagram from "../RedesSociales/Instagram/instagram";
import Youtube from "../RedesSociales/Youtube/youtube";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
  youtubePosition?: string;
  youtubeMargin?: string;
  youtubeTop?: string;
  youtubeRight?: string;
  youtubeBottom?: string;

  /** Style props */
  footer01AlignSelf?: CSSProperties["alignSelf"];
  footer01Width?: CSSProperties["width"];
  footerSocialWidth?: CSSProperties["width"];
  footerSocialContainerPadding?: CSSProperties["padding"];
  footerSocialContainerAlignSelf?: CSSProperties["alignSelf"];
  footerSocialContainerPosition?: CSSProperties["position"];
  blankLineFontFamily?: CSSProperties["fontFamily"];
  paulaAlbarracnDeSarmientoFontFamily?: CSSProperties["fontFamily"];
  conmutador0264429604546FontFamily?: CSSProperties["fontFamily"];
  fAX02644237333FontFamily?: CSSProperties["fontFamily"];
  blankLineFontFamily1?: CSSProperties["fontFamily"];
  centroCvicoFontFamily?: CSSProperties["fontFamily"];
  horariosDeAtencinFontFamily?: CSSProperties["fontFamily"];
  blankLineFontFamily2?: CSSProperties["fontFamily"];
  paulaAlbarracnDeSarmientoFontFamily1?: CSSProperties["fontFamily"];
  conmutador0264429604546FontFamily1?: CSSProperties["fontFamily"];
  fAX02644237333FontFamily1?: CSSProperties["fontFamily"];
  blankLineFontFamily3?: CSSProperties["fontFamily"];
  centroCvicoFontFamily1?: CSSProperties["fontFamily"];
  horariosDeAtencinFontFamily1?: CSSProperties["fontFamily"];
  blankLineFontFamily4?: CSSProperties["fontFamily"];
  paulaAlbarracnDeSarmientoFontFamily2?: CSSProperties["fontFamily"];
  conmutador0264429604546FontFamily2?: CSSProperties["fontFamily"];
  fAX02644237333FontFamily2?: CSSProperties["fontFamily"];
  blankLineFontFamily5?: CSSProperties["fontFamily"];
  centroCvicoFontFamily2?: CSSProperties["fontFamily"];
  horariosDeAtencinFontFamily2?: CSSProperties["fontFamily"];
  blankLineFontFamily6?: CSSProperties["fontFamily"];
  paulaAlbarracnDeSarmientoFontFamily3?: CSSProperties["fontFamily"];
  conmutador0264429604546FontFamily3?: CSSProperties["fontFamily"];
  fAX02644237333FontFamily3?: CSSProperties["fontFamily"];
  blankLineFontFamily7?: CSSProperties["fontFamily"];
  centroCvicoFontFamily3?: CSSProperties["fontFamily"];
  horariosDeAtencinFontFamily3?: CSSProperties["fontFamily"];
};

const Footer: NextPage<FooterType> = memo(
  ({
    className = "",
    footer01AlignSelf,
    footer01Width,
    footerSocialWidth,
    footerSocialContainerPadding,
    footerSocialContainerAlignSelf,
    footerSocialContainerPosition,
    blankLineFontFamily6,
    paulaAlbarracnDeSarmientoFontFamily3,
    conmutador0264429604546FontFamily3,
    fAX02644237333FontFamily3,
    blankLineFontFamily7,
    centroCvicoFontFamily3,
    horariosDeAtencinFontFamily3,
  }) => {
    const footer01Style: CSSProperties = useMemo(() => {
      return {
        alignSelf: footer01AlignSelf,
        width: footer01Width,
      };
    }, [footer01AlignSelf, footer01Width]);

    const footerSocialStyle: CSSProperties = useMemo(() => {
      return {
        width: footerSocialWidth,
      };
    }, [footerSocialWidth]);

    const footerSocialContainerStyle: CSSProperties = useMemo(() => {
      return {
        padding: footerSocialContainerPadding,
        alignSelf: footerSocialContainerAlignSelf,
        position: footerSocialContainerPosition,
      };
    }, [
      footerSocialContainerPadding,
      footerSocialContainerAlignSelf,
      footerSocialContainerPosition,
    ]);

    const blankLineStyle: CSSProperties = useMemo(() => {
      return {
        fontFamily: blankLineFontFamily6,
      };
    }, [blankLineFontFamily6]);

    const paulaAlbarracnDeSarmientoStyle: CSSProperties = useMemo(() => {
      return {
        fontFamily: paulaAlbarracnDeSarmientoFontFamily3,
      };
    }, [paulaAlbarracnDeSarmientoFontFamily3]);

    const conmutador0264429604546Style: CSSProperties = useMemo(() => {
      return {
        fontFamily: conmutador0264429604546FontFamily3,
      };
    }, [conmutador0264429604546FontFamily3]);

    const fAX02644237333Style: CSSProperties = useMemo(() => {
      return {
        fontFamily: fAX02644237333FontFamily3,
      };
    }, [fAX02644237333FontFamily3]);

    const blankLine1Style: CSSProperties = useMemo(() => {
      return {
        fontFamily: blankLineFontFamily7,
      };
    }, [blankLineFontFamily7]);

    const centroCvicoStyle: CSSProperties = useMemo(() => {
      return {
        fontFamily: centroCvicoFontFamily3,
      };
    }, [centroCvicoFontFamily3]);

    const horariosDeAtencinStyle: CSSProperties = useMemo(() => {
      return {
        fontFamily: horariosDeAtencinFontFamily3,
      };
    }, [horariosDeAtencinFontFamily3]);

    return (
      <footer
        className={[styles.footer01, className].join(" ")}
        style={footer01Style}
      >
        <div className={styles.isologoGobSjNegativo0446ceWrapper}>
          <div className={styles.isologoGobSjNegativo0446ce}>
            <div className={styles.capa1}>
              <div className={styles.group}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
                <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerInfo}>
          <img
            className={styles.institucionalBlancoIcon}
            loading="lazy"
            alt=""
            src="/institucional-blanco.svg"
          />
        </div>
        <div className={styles.centroCvicoAvenidaContainer}>
          <span>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span className={styles.horariosDeAtencin}>
                <span>Obra Social Provincia</span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span className={styles.horariosDeAtencin} style={blankLineStyle}>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span
                className={styles.horariosDeAtencin}
                style={paulaAlbarracnDeSarmientoStyle}
              >
                <span>
                Agustín Gnecco 360 (S)- 5400 | San Juan, Argentina
                </span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span
                className={styles.horariosDeAtencin}
                style={conmutador0264429604546Style}
              >
                <span> Teléfono: (0264) 4304300</span>
              </span>
            </p>
           
            <p className={styles.blankLine2}>
              <span
                className={styles.horariosDeAtencin}
                style={blankLine1Style}
              >
                <span>&nbsp;</span>
              </span>
            </p>                               
          </span>
        </div>
        <div className={styles.footerSocial} style={footerSocialStyle}>
          <div
            className={styles.footerSocialContainer}
            style={footerSocialContainerStyle}
          >
            <Facebook />
            
            <Instagram />
           
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;


// export type Footer1Type = {
//   className?: string;
// };

// const Footer1: NextPage<Footer1Type> = memo(({ className = "" }) => {
//   return (
//     <footer className={[styles.footer01, className].join(" ")}>
//       <div className={styles.footerContent}>
//         <div className={styles.isologoGobSjNegativo0446ce}>
//           <div className={styles.capa1}>
//             <div className={styles.group}>
//               <img
//                 className={styles.groupIcon}
//                 loading="lazy"
//                 alt=""
//                 src="/group.svg"
//               />
//               <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.frameParent}>
//         <div className={styles.institucionalBlancoWrapper}>
//           <img
//             className={styles.institucionalBlancoIcon}
//             loading="lazy"
//             alt=""
//             src="/institucional-blanco.svg"
//           />
//         </div>
//         <div className={styles.obraSocialProvinciaContainer}>
//           <p className={styles.obraSocialProvincia}>Obra Social Provincia</p>
//           <p className={styles.obraSocialProvincia}>&nbsp;</p>
//           <p className={styles.obraSocialProvincia}>
//              Agustín Gnecco 360 (S)- 5400 | San Juan, Argentina
//           </p>
//           <p className={styles.obraSocialProvincia}>&nbsp;</p>
//           <p className={styles.obraSocialProvincia}>
//             Teléfonos: (0264) 4304300
//           </p>
//         </div>
//       </div>
//       <div className={styles.footerSocialIconsWrapper}>
//         <div className={styles.footerSocialIcons}>
//           <Facebook />
//           {/* <X /> */}
//           <Instagram />
//           {/* <Youtube
//             youtubePosition="relative"
//             youtubeMargin="unset"
//             youtubeTop="unset"
//             youtubeRight="unset"
//             youtubeBottom="unset"
//           /> */}
//         </div>
//       </div>
//     </footer>
//   );
// });

// export default Footer1;