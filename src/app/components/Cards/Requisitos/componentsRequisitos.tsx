// import type { NextPage } from "next";
// import { memo } from "react";
// import Accordion1 from "./acordionderequisitos/AcordionRequisito";
// import Accordion from "@/app/components/Botones/Accordion/accordion";
// import Requisito from "./Requisito/Requisito";
// import styles from "./componentsRequisitos.module.css";

// export type RequisitosType = {
//   className?: string;


// };

// const Requisitos: NextPage<RequisitosType> = memo(
//   ({ className = "" }) => {
//     return (
//       <section className={[styles.accordionContainer, className].join(" ")}>
//         <div className={styles.requisitosDeAfiliacionesParent}>
//           <h3 className={styles.requisitosDeAfiliaciones}>
//             Requisitos de afiliaciones
//           </h3>
//           <Accordion1 />
//         </div>
//         <Accordion
//           title="02 - Cambio de situación de revista"
//           propMinWidth="199px"
//           propMixBlendMode="normal"
//         />
//         <Requisito
//           title="03 - Incorporación de afiliados con licencia sin goce de haberes"
//           propMinWidth="360px"
//           propMixBlendMode="unset"
//         />
//         <Accordion
//           title="04 - Menores de 21 años
// "
//           propMinWidth="139px"
//           propMixBlendMode="unset"
//         />
//         <Accordion
//           title="05 - Hijos mayores de 21 años con discapacidad"
//           propMinWidth="270px"
//           propMixBlendMode="unset"
//         />
//         <Accordion title="06" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="07" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="08" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="09" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="10" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="11" propMinWidth="11px" propMixBlendMode="unset" />
//         <Accordion title="12" propMinWidth="12px" propMixBlendMode="unset" />
//         <Accordion title="13" propMinWidth="12px" propMixBlendMode="unset" />
//         <Accordion title="14" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="15" propMinWidth="12px" propMixBlendMode="unset" />
//         <Accordion title="16" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="17" propMinWidth="12px" propMixBlendMode="unset" />
//         <Accordion title="18" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="19" propMinWidth="12px" propMixBlendMode="unset" />
//         <Accordion title="20" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="21" propMinWidth="11px" propMixBlendMode="unset" />
//         <Accordion title="22" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="23" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="24" propMinWidth="13px" propMixBlendMode="unset" />
//         <Accordion title="25" />
//         <div className={styles.accordionContainerChild} />
//       </section>
//     );
//   }
// );

// export default Requisitos;
import type { NextPage } from "next";
import { memo } from "react";
import React, { useState } from 'react';

import styles from "./componentsRequisitos.module.css";
import { Accordion, AccordionTab } from 'primereact/accordion';
export type RequisitosType = {
  className?: string;


};

const Requisitos: NextPage<RequisitosType> = memo(
  ({ className = "" }) => {
    
    return (
      <div >
          <Accordion  activeIndex={0}>
              <AccordionTab header="02 - Cambio de situación de revista">
                  <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </AccordionTab>
              <AccordionTab header="05 - Hijos mayores de 21 años con discapacidad">
                  <p className="m-0">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                      quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                      sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                      Consectetur, adipisci velit, sed quia non numquam eius modi.
                  </p>
              </AccordionTab>
              <AccordionTab header="04 - Menores de 21 años">
                  <p className="m-0">
                      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                      quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                      mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                  </p>
              </AccordionTab>
       
          </Accordion>
      </div>
  )
}
    );
     

export default Requisitos;
