import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
// import Prueba from "../../Componentes/Prueba";
import PopUp from '../../Componentes/PopUp/PopUp';



function NewsletterPortada() {
    const [t] = useTranslation("global")
    const [showHidePopUp, setshowHidePopUp] = useState()
    const [resolveReject, setResolveReject] = useState()


    const closePopUp = () => {
        setshowHidePopUp(false)
    }

    const showPopUp = () => {
        setshowHidePopUp(true)
    }

    const resolveRej = (boolean) => {
        setResolveReject(boolean)
    }

    return (
        <div className="d-flex justify-content-center py-5 px-3 px-md-0 align-items-center newsletter-portada my-5 ">
            <div className="d-flex flex-column align-items-center col-md-11 col-lg-10 col-xl-8 col-xxl-7 my-5 m-md-0 px-4 py-5 p-md-4 bg-newsletter-portada">
                <h3 className="mb-4 arvo ">{t("newsletterPortada.titulo")}</h3>
                <p className="text-center m-0 fs-5  ">
                    {t("newsletterPortada.p1")}
                </p>
                <p className="text-center fs-5 ">
                    {t("newsletterPortada.p2")}
                </p>
                <NewsletterForm showPopUp={showPopUp} resolveRej={resolveRej} />
            </div>
            {showHidePopUp
                ? <PopUp showHidePopUp={showHidePopUp}
                    closePopUp={closePopUp}
                    resolveReject={resolveReject} />
                : ''
            }

        </div>
    )
}

export default NewsletterPortada;