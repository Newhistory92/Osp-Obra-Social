import type { NextPage } from "next";
import { memo } from "react";
import React, { useState } from 'react';
import styles from "./Requisitos.module.css";
import { Accordion, AccordionTab } from 'primereact/accordion';
import Parser from 'html-react-parser';


export type RequisitosType = {
  titulo: string;
  contenido: string;
};

const Requisitos: NextPage<RequisitosType> = memo(
  ({  titulo, contenido }) => {
    const [activeIndex, setActiveIndex] = useState<number | number[]>();
    return (
    //   <div className="w-full p-4">
    //     <Accordion
    //       className="border-b-2 border-red-700 shadow-none"
    //       activeIndex={activeIndex}
    //       onTabChange={(e) => setActiveIndex(e.index)}
    //     >
    //       <AccordionTab
    //         header={
    //           <div className="text-lg font-semibold text-gray-900 no-underline">
    //             {titulo}
    //           </div>
    //         }
    //       >
    //         <div>
    //           {Parser(contenido)}
    //         </div>
    //       </AccordionTab>
    //     </Accordion>
    //   </div>
    // );

    <div className="accordion w-full p-4" id="accordionPanelsStayOpenExample">
    <div className="accordion-item border-b-2 border-red-700 shadow-none">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
      </div>
    </div>
    </div>
    )
  });
  
  export default Requisitos;


// import type { NextPage } from "next";
// import { memo } from "react";
// import React, { useState } from 'react';
// import styles from "./Requisitos.module.css";
// import { Accordion, AccordionTab } from 'primereact/accordion';
// import Parser from 'html-react-parser';

// export type RequisitosType = {
//   requisitos: Array<{
//     titulo: string;
//     contenido: string;
//   }>;
// };

// const Requisitos: NextPage<RequisitosType> = memo(({ Requisitos }) => {
//   const [activeIndex, setActiveIndex] = useState<number | number[]>();

//   return (
//     <div>
//       <Accordion
//         className={styles.accordionContainer}
//         activeIndex={activeIndex}
//         onTabChange={(e) => setActiveIndex(e.index)}
//       >
//         {Requisitos.map((requisito, index) => (
//           <AccordionTab header={Requisitos.titulo} key={index}>
//             {Parser(Requisitos.contenido)}
//           </AccordionTab>
//         ))}
//       </Accordion>
//     </div>
//   );
// });

// export default Requisitos;

