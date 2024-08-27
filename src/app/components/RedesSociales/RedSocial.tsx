import type { NextPage } from "next";
import { memo } from "react";
import Facebook1 from "./Facebook/facebook1";
import X1 from "./Tiwtter/x1";
import Instagram1 from "./Instagram/instagram1";
import Youtube1 from "./Youtube/youtube1";
import styles from "./RedSocial.module.css";

export type RedSocialType = {
  className?: string;
};

const RedSocial: NextPage<RedSocialType> = memo(({ className = "" }) => {
  return (
    <div className={[styles.sociales, className].join(" ")}>
      <Facebook1 />
      <X1 />
      <Instagram1 />
      <Youtube1 />
    </div>
  );
});

export default RedSocial;
