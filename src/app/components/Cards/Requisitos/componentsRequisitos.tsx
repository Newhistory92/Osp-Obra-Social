import type { NextPage } from "next";
import { memo } from "react";
import React, { useState } from 'react';
import styles from "./componentsRequisitos.module.css";
import { Accordion, AccordionTab } from 'primereact/accordion';
import Parser from 'html-react-parser';

// Actualizar el tipo de RequisitosType para aceptar título y contenido dinámico
export type RequisitosType = {
  className?: string;
  titulo: string;
  contenido: string;
};

const Requisitos: NextPage<RequisitosType> = memo(
  ({ className = "", titulo, contenido }) => {

    
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
    );
  }
);

export default Requisitos;

