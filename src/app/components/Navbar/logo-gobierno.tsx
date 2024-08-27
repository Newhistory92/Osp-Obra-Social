import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import styles from "./logo-gobierno.module.css";

export type LogoGobiernoType = {
  className?: string;

  /** Style props */
  logoGobiernoWidth?: CSSProperties["width"];
  logoGobiernoFlex?: CSSProperties["flex"];
};

const LogoGobierno: NextPage<LogoGobiernoType> = memo(
  ({ className = "", logoGobiernoWidth, logoGobiernoFlex }) => {
    const logoGobiernoStyle: CSSProperties = useMemo(() => {
      return {
        width: logoGobiernoWidth,
        flex: logoGobiernoFlex,
      };
    }, [logoGobiernoWidth, logoGobiernoFlex]);

    return (
      <div
        className={[styles.logoGobierno, className].join(" ")}
        style={logoGobiernoStyle}
      >
        <img className={styles.isoIcon} alt="" src="/iso.svg" />
        <div className={styles.sanJuan}>
          <p className={styles.sanJuan1}>
            <b>San Juan</b>
          </p>
          <p className={styles.gobierno}>Gobierno</p>
        </div>
        <div className={styles.trazado26Wrapper}>
          <img className={styles.trazado26Icon} alt="" src="/trazado-26.svg" />
        </div>
        <div className={styles.ministryName}>
          <a className={styles.ministerioHacienda}>
            <p className={styles.ministerioDe}>{`Ministerio de `}</p>
            <p className={styles.salud}>Salud</p>
          </a>
        </div>
      </div>
    );
  }
);

export default LogoGobierno;
