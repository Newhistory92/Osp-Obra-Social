import type { NextPage } from "next";
import { memo } from "react";
import CardDelegacion from "../../Cards/CardDelegacion/CardDelegacion";
import styles from "./DelegacionContainer.module.css";

export type DelegacionContainerType = {
  className?: string;
};

const DelegacionContainer: NextPage<DelegacionContainerType> = memo(
  ({ className = "" }) => {
    return (
      <section className={[styles.delegationsContainer, className].join(" ")}>
        <div className={styles.delegationsTitle}>
          <h3 className={styles.delegacionesEnLa}>
            Delegaciones en la Provincia
          </h3>
          <div className={styles.delegationCards}>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
            <div className={styles.cardAtp}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <textarea className={styles.frameItem} rows={4} cols={13} />
              </div>
              <div className={styles.delegacionesWrapper}>
                <img
                  className={styles.delegacionesIcon}
                  alt=""
                  src="/delegaciones-1.svg"
                />
              </div>
              <div className={styles.sectorAgropecuarioWrapper}>
                <div className={styles.sectorAgropecuario}>Angaco</div>
              </div>
              <div className={styles.esUnSectorContainer}>
                <p className={styles.repblicaDelLbano}>
                  República del Líbano 511(s) antes de España (Ex Coloso)
                </p>
                <p className={styles.repblicaDelLbano}>&nbsp;</p>
                <p className={styles.repblicaDelLbano}>Tel. 4 97-2202</p>
                <p className={styles.horario0730A}>Horario: 07:30 a 13:30</p>
              </div>
              <div className={styles.botonPrincipalWrapper}>
                <div className={styles.botonPrincipal}>
                  <div className={styles.ingresarCuenta}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.texto}>Ver Ubicación</div>
                </div>
              </div>
            </div>
            <CardDelegacion showIcon showBotN />
          </div>
        </div>
      </section>
    );
  }
);

export default DelegacionContainer;
