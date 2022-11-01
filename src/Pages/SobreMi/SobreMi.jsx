import React, { useState } from "react";
import campoDeGirasoles from '../../images/girasoles.jpg';
import pintandoBouquet from '../../images/pintando bouquet de flores acuarela_mod.jpg'

const SobreMi = () => {
    const [showHide, setShowHide] = useState('');

    const onResize = () => {
        if (window.innerWidth < 768) {
            setShowHide(true)
        } else {
            setShowHide(false)
        }
    }
    window.addEventListener('resize', onResize)

    return (
        <div>
            <h1 className={
                !showHide
                    ? "d-flex m-auto col-md-11 col-lg-10 col-xl-8 col-xxl-7 fs-3 mt-5 mb-3 ps-2 arvo"
                    : "visually-hidden"}>
                SOBRE MÍ
            </h1>
            <div className="d-flex flex-column flex-lg-row-reverse justify-content-start mb-lg-5 overflow-hidden">
                <div className="col-lg-7 col-xxl-6 ">
                    <img src={campoDeGirasoles} alt="campo de girasoles" className="w-100 girasoles-img" />

                </div>
                <div className="d-flex justify-content-center align-items-center mb-5 mb-lg-0 col-lg-5 col-xl-4 col-xxl-2 ">
                    <div className="col-11 col-md-10 col-lg-11 p-3 text-box">
                        <h1 className={showHide
                            ? "fs-3 mb-3 arvo"
                            : 'visually-hidden'
                        }>
                            SOBRE MÍ
                        </h1>
                        <h6 className="fw-bold mb-2 mt-2 arvo" >
                            ¡HOLA!
                        </h6>
                        <p className="lh-md">
                            Soy Sandra, y mi historia empieza el día que la acuarela llegó a mi vida y mi mundo cambió.
                            Es una técnica que cada día me enamora más, y con la que disfruto mucho.
                        </p>
                        <h6 className="fw-bold mb-2 arvo">
                            Lo que me inspira
                        </h6>
                        <p className="mb-2 lh-md">
                            Definitivamente mi mayor inspiración la encuentro en la naturaleza: flores, paisajes, un cielo bonito,  el mar, los animallillos...
                            Me gusta transmitir delicadeza y minimalismo en mis acuarelas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-start pb-lg-5 overflow-hidden">
                <div className="col-lg-6 col-xxl-7">
                    <img src={pintandoBouquet} alt="campo de girasoles" className="w-100 img-fluid bouquet-img" />
                </div>
                <div className="d-flex justify-content-center align-items-center col-lg-6 col-xl-6 col-xxl-5 ">
                    <div className="col-11 col-md-10 col-lg-11 p-3 text-box-left ">
                        <h6 className="fw-bold mb-3 arvo" >
                            ¿Qué medios utilizo?
                        </h6>
                        <p className="lh-md">
                            El principal es la acuarela sobre papel de algodón. A menudo lo  complemento con gouache, tinta, ceras, lápices, grafito, pan de oro…
                        </p>
                        <h6 className="fw-bold arvo">
                            Lo que más disfruto de la acuarela
                        </h6>
                        <p className="mb-0 lh-md">
                            Lo que más disfruto de la acuarela
                            Coger la pintura, humedecer la acuarela, fundir el pincel en la mezcla, ver como el agua se posa en el papel, como el pigmento de la acuarela se expande en el agua… cada paso del proceso es un disfrute para mi.
                            Este arte lo aplico a obras tanto originales como reproducciones que pueden utilizarse para un print, estampar una tela, decorar una vajilla bonita….
                            Compartir mi conocimiento con gente que disfruta y se enriquece con su creatividad es otra faceta que también me llena.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SobreMi;

