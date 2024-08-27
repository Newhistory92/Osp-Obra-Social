import type { NextPage } from "next";
import { memo } from "react";
import Footer from "./footer";
import styles from "./footer-container.module.css";

export type FooterContainerType = {
  className?: string;
};

const FooterContainer: NextPage<FooterContainerType> = memo(
  ({ className = "" }) => {
    return (
      <footer className={[styles.footerContainer, className].join(" ")}>
        <Footer
          footer01AlignSelf="unset"
          footer01Width="1920px"
          footerSocialWidth="165px"
          footerSocialContainerPadding="unset"
          footerSocialContainerAlignSelf="stretch"
          footerSocialContainerPosition="relative"
          youtubePosition="absolute"
          youtubeMargin="0 !important"
          youtubeTop="0px"
          youtubeRight="0px"
          youtubeBottom="0px"
          blankLineFontFamily6="Ubuntu"
          paulaAlbarracnDeSarmientoFontFamily3="Ubuntu"
          conmutador0264429604546FontFamily3="Ubuntu"
          fAX02644237333FontFamily3="Ubuntu"
          blankLineFontFamily7="Ubuntu"
          centroCvicoFontFamily3="Ubuntu"
          horariosDeAtencinFontFamily3="Ubuntu"
        />
      </footer>
    );
  }
);

export default FooterContainer;
