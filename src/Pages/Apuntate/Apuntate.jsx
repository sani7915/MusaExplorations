import React, { useState } from "react";
// import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
// import { useTranslation } from "react-i18next";
import probandoPaleta from '../../images/probando paleta color acuarela.jpg'
import NewsletterApuntate from "./NewsletterApuntate";

const Apuntate = () => {
    const [showHideTitle, setShowHide] = useState()
    // const [t] = useTranslation("global");
    // const p1 = t("newsletterApuntate.p1")
    // const p2 = t("newsletterApuntate.p2")

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
                !showHideTitle
                    ? "d-flex m-auto col-md-11 col-lg-10 col-xl-8 col-xxl-7 fs-3 mt-5 mb-3 arvo"
                    : "visually-hidden"}>
                APÚNTATE
            </h1>
            <div className="d-flex flex-column flex-lg-row-reverse align-items-center overflow-hidden">
                <div className="col-lg-7 col-xxl-6 ">
                    <img src={probandoPaleta} alt="campo de girasoles" className="w-100 girasoles-img" />
                </div>
                <div className="d-flex justify-content-center align-items-center col-lg-7 col-xl-6 col-xxl-5">
                    <ul className=" d-flex flex-column justify-content-evenly mb-0 col-11  col-lg-11 p-4 text-box-apuntate">
                        <h1 className={showHideTitle
                            ? "fs-3 mb-3 arvo text-center"
                            : 'visually-hidden'
                        }>
                            APÚNTATE
                        </h1>
                        <li className="lh-md ms-2">
                            <p className="mt-2">
                                Recibir láminas bonitas para poder descargarlas y pintarlas con tu técnica favorita
                            </p>
                        </li>
                        <li className="mb-2 lh-md ms-2">
                            <p>
                                Descubrir tips fáciles de implementar para adentrarte y mejorar en el mundo de la acuarela
                            </p>
                        </li>
                        <li className="mb-2 lh-md ms-2">
                            <p>
                                Formar parte de un grupo que comparte tu pasión por lo natural, orgánico, delicado...
                            </p>
                        </li>
                        <li className=" lh-md ms-2">
                            <p>
                                Enterarte antes que nadie de lanzamientos y ediciones limitadas de láminas y colecciones
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
          
                <NewsletterApuntate />
        </div>
    )
}
export default Apuntate;