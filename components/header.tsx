import type { NextPage } from "next";
import { memo, useMemo, type CSSProperties } from "react";
import LogoGobierno from "./logo-gobierno";
import styles from "./header.module.css";

export type NavbarType = {
  className?: string;
  logoGobiernoWidth?: string;
  logoGobiernoFlex?: string;

  /** Style props */
  headerFlexWrap?: CSSProperties["flexWrap"];
  headerRowGap?: CSSProperties["rowGap"];
  frameDivMinWidth?: CSSProperties["minWidth"];
};

const Navbar: NextPage<NavbarType> = memo(
  ({
    className = "",
    logoGobiernoWidth,
    logoGobiernoFlex,
    headerFlexWrap,
    headerRowGap,
    frameDivMinWidth,
  }) => {
    const headerStyle: CSSProperties = useMemo(() => {
      return {
        flexWrap: headerFlexWrap,
        rowGap: headerRowGap,
      };
    }, [headerFlexWrap, headerRowGap]);

    const frameDivStyle: CSSProperties = useMemo(() => {
      return {
        minWidth: frameDivMinWidth,
      };
    }, [frameDivMinWidth]);

    return (
      <div className={[styles.header, className].join(" ")} style={headerStyle}>
        <div className={styles.logoGobiernoWrapper} style={frameDivStyle}>
          <LogoGobierno
            logoGobiernoWidth={logoGobiernoWidth}
            logoGobiernoFlex={logoGobiernoFlex}
          />
        </div>
        <div className={styles.cIDILogo}>
          <div className={styles.logoCidiHorizontal}>
            <img
              className={styles.logoCidiHorizontalChild}
              loading="lazy"
              alt=""
              src="/group-85.svg"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Navbar;
