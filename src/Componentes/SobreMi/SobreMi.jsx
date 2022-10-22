import React from "react";
import campoDeGirasoles from '../../images/girasoles.png';
import pintandoBouquet from '../../images/pintando bouquet de flores acuarela_mod.jpg'

const SobreMi = () => {
    return (
        <div className=" container-fluid p-0 ">
            <h1 className="fs-3 arvo mt-5 mb-3 ps-2 d-flex flex-column col-md-11 col-lg-10 col-xl-8 m-auto">
                SOBRE MÍ
            </h1>
            <div className="d-flex flex-column-reverse flex-lg-row justify-content-end mb-5">
                <div className="d-flex justify-content-center justify-content-lg-end align-items-center mb-5 mb-lg-0 col-lg-6 col-xl-6">
                    <div className=" col-11 col-md-9 col-lg-11  p-4 bg-white text-box">
                        <h6 className="fw-bold mb-3 mt-2 arvo" >
                            ¡HOLA!
                        </h6>
                        <p >
                            Soy Sandra, y mi historia empieza el día que la acuarela llegó a mi vida y mi mundo cambió.
                            Es una técnica que cada día me enamora más, y con la que disfruto mucho.
                        </p>
                        <h6 className="fw-bold mb-3 arvo">
                            Lo que me inspira
                        </h6>
                        <p className="mb-2">
                            Definitivamente mi mayor inspiración la encuentro en la naturaleza: flores, paisajes, un cielo bonito,  el mar, los animallillos...
                            Me gusta transmitir delicadeza y minimalismo en mis acuarelas.
                        </p>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-6">
                    <img src={campoDeGirasoles} alt="" className="w-100 img-class " />
                </div>
            </div>
            <div className="d-flex flex-column-reverse flex-lg-row-reverse justify-content-end mb-5">
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-5 mb-lg-0 col-xl-6">
                    <div className=" col-11 col-md-9 p-4 bg-white text-box">
                        <h6 className="fw-bold mb-3 mt-2 arvo" >
                            ¿Qué medios utilizo?
                        </h6>
                        <p >
                            El principal es la acuarela sobre papel de algodón. A menudo lo  complemento con gouache, tinta, ceras, lápices, grafito, pan de oro…
                        </p>
                        <h6 className="fw-bold mb-3 arvo">
                            Lo que más disfruto de la acuarela
                        </h6>
                        <p className="mb-2">
                            Coger la pintura, humedecer la acuarela, fundir el pincel en la mezcla, ver como el agua se posa en el papel, como el pigmento de la acuarela se expande en el agua… cada paso del proceso es un disfrute para mi.
                            Este arte lo aplico a obras tanto originales como reproducciones que pueden utilizarse para un print, estampar una tela, decorar una vajilla bonita….
                            Compartir mi conocimiento con gente que disfruta y se enriquece con su creatividad es otra faceta que también me llena.
                        </p>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-6">
                    <img src={pintandoBouquet} alt="" className="w-100 img-class " />
                </div>
            </div>

        </div>
    )
}
export default SobreMi;

