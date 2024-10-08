import type { NextPage } from "next";
import { memo } from "react";
import Facebook from "../RedesSociales/Facebook/facebook";
import Instagram from "../RedesSociales/Instagram/instagram";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer: NextPage = memo(() => {
  return (
    <footer className={styles.footer01}>
      <div className={styles.isologoGobSjNegativo0446ceWrapper}>
        <div className={styles.isologoGobSjNegativo0446ce}>
          <div className={styles.capa1}>
            <div className={styles.group}>
              <Image
                className={styles.groupIcon}
                loading="lazy"
                alt="Group"
                src="/group.svg"
                width={100}  
                 height={100} 
              />
              <Image className={styles.groupIcon1} alt="Group" src="/group-1.svg" width={100}  
          height={100}  />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerInfo}>
        <Image
          className={styles.institucionalBlancoIcon}
          loading="lazy"
          alt="Institucional Blanco"
          src="/institucional-blanco.svg"
          width={100}  
          height={100} 
            
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
            <span className={styles.horariosDeAtencin}>
              <span>Agustín Gnecco 360 (S)- 5400 | San Juan, Argentina</span>
            </span>
          </p>
          
          <p className={styles.casaDeGobiernoDeLaProvinc}>
            <span className={styles.horariosDeAtencin}>
              <span>Teléfono: (0264) 4304300</span>
            </span>
          </p>
        </span>
      </div>
      
      <div className={styles.footerSocial}>
        <div className={styles.footerSocialContainer}>
          <Facebook />
          <Instagram />
        </div>
      </div>
    </footer>
  );
});

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