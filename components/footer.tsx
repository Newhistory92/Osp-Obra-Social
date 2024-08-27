import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import Facebook from "./facebook";
import X from "./x";
import Instagram from "./instagram";
import Youtube from "./youtube";
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
    youtubePosition,
    youtubeMargin,
    youtubeTop,
    youtubeRight,
    youtubeBottom,
    blankLineFontFamily,
    paulaAlbarracnDeSarmientoFontFamily,
    conmutador0264429604546FontFamily,
    fAX02644237333FontFamily,
    blankLineFontFamily1,
    centroCvicoFontFamily,
    horariosDeAtencinFontFamily,
    blankLineFontFamily2,
    paulaAlbarracnDeSarmientoFontFamily1,
    conmutador0264429604546FontFamily1,
    fAX02644237333FontFamily1,
    blankLineFontFamily3,
    centroCvicoFontFamily1,
    horariosDeAtencinFontFamily1,
    blankLineFontFamily4,
    paulaAlbarracnDeSarmientoFontFamily2,
    conmutador0264429604546FontFamily2,
    fAX02644237333FontFamily2,
    blankLineFontFamily5,
    centroCvicoFontFamily2,
    horariosDeAtencinFontFamily2,
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
                <span>Casa de Gobierno de la Provincia de San Juan</span>
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
                  Paula Albarracín de Sarmiento 134 norte | C.P: 5400 | San Juan
                  | Argentina
                </span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span
                className={styles.horariosDeAtencin}
                style={conmutador0264429604546Style}
              >
                <span>Conmutador: (0264) 429-6045/46</span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span
                className={styles.horariosDeAtencin}
                style={fAX02644237333Style}
              >
                <span>FAX: (0264) 423-7333</span>
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
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span
                className={styles.horariosDeAtencin}
                style={centroCvicoStyle}
              >
                <span>Centro Cívico</span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span>
                <span>
                  Avenida Libertador General San Martín 750 Oeste | C.P: 5400 |
                  San Juan | Argentina
                </span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span>
                <span>Conmutador: (0264) 430-5000</span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span>
                <span className={styles.horariosDeAtencin}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.casaDeGobiernoDeLaProvinc}>
              <span>
                <span
                  className={styles.horariosDeAtencin}
                  style={horariosDeAtencinStyle}
                >
                  Horarios de Atención de 8 a 19 hs.
                </span>
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
            <X />
            <Instagram />
            <Youtube
              youtubePosition={youtubePosition}
              youtubeMargin={youtubeMargin}
              youtubeTop={youtubeTop}
              youtubeRight={youtubeRight}
              youtubeBottom={youtubeBottom}
            />
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
