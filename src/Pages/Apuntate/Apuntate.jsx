import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import probandoPaleta from '../../images/probando paleta color acuarela.jpg'
import NewsletterApuntate from "./NewsletterApuntate";

const Apuntate = () => {
    const [showHideTitle, setShowHide] = useState()
    const [t] = useTranslation("global");


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
                    ? "d-flex m-auto col-md-11 col-lg-10 col-xl-8 col-xxl-7 fs-3 mt-5  mb-3 arvo"
                    : "visually-hidden"}>
                {t("apuntate.titulo")}
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
                            {t("apuntate.titulo")}
                        </h1>
                        <li className="lh-md ms-2">
                            <p className="mt-2">
                                {t("apuntate.li1")}
                            </p>
                        </li>
                        <li className="mb-2 lh-md ms-2">
                            <p>
                                {t("apuntate.li2")}
                            </p>
                        </li>
                        <li className="mb-2 lh-md ms-2">
                            <p>
                                {t("apuntate.li3")}
                            </p>
                        </li>
                        <li className=" lh-md ms-2">
                            <p>
                                {t("apuntate.li4")}
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