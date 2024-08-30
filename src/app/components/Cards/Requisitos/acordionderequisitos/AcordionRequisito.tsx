import type { NextPage } from "next";
import { memo } from "react";
import AccordionButton from "@/app/components/Botones/Accordion/AcordionButton/accordion-button";
import CardBotonesSecundarios from "@/app/components/Botones/BotonCard/BotonCardSecund/card-botones-secundarios";
import styles from "./accordion1.module.css";

export type Accordion1Type = {
  className?: string;
};

const Accordion1: NextPage<Accordion1Type> = memo(({ className = "" }) => {
  return (
    <div className={[styles.accordion2, className].join(" ")}>
      <AccordionButton caretUpPadding="7px 4px" vector="/vector2.svg" />
      <div className={styles.accordionContent}>
        <div className={styles.content}>
          <p className={styles.documentacinRequerida}>
            Documentación requerida:    
          </p>
          <ol className={styles.fichaDeAfiliacinDelTitula}>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Ficha de afiliación del titular con todo el grupo familiar a su
                cargo, certificada por el Jefe de Personal de la repartición a
                la cual pertenece.
              </span>
            </li>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Fotocopia de Decreto de designación del agente.
              </span>
            </li>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Fotocopia de DNI del titular y de todos los integrantes del
                grupo familiar.
              </span>
            </li>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Partida de Matrimonio actualizada y legalizada.
              </span>
            </li>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Partida de Nacimiento legalizada de cada uno de los menores a
                incorporar.
              </span>
            </li>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Fotocopia de factura de servicio donde figure el domicilio
                actual. Si no la tuviere, presentar certificado de residencia.
              </span>
            </li>
            <li className={styles.fotocopiaDeDecretoDeDesign}>
              <span className={styles.fichaDeAfiliacin}>
                Fotocopia del último recibo de sueldo del titular.
              </span>
            </li>
          </ol>
          <p className={styles.siAlMomento}>
            Si al momento de afiliarse aún no cuenta con recibo de sueldo,
            deberá presentarlo dentro de los próximos 30 días.
          </p>
          <p className={styles.siAlMomento}>
            En caso de que en el decreto de designación del agente nombrado,
            figure solamente número de expediente, deberá presentar también
            resolución de designación donde figuren datos personales del mismo.
          </p>
          <p className={styles.unaVezReunida}>
            Una vez reunida la documentación, deberá solicitar número para
            AFILIACIONES - Recepción de documentación
          </p>
        </div>
        <CardBotonesSecundarios verIconos />
      </div>
    </div>
  );
});

export default Accordion1;
