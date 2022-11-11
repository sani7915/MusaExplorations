import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
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
        <section className="d-flex justify-content-center align-items-center newsletter-portada ">
            <div className="d-flex flex-column align-items-center  col-11 col-lg-10 col-xl-9 col-xxl-8 bg-newsletter-portada">
                <h3>
                    {t("newsletterPortada.titulo")}
                </h3>
                <p>
                    {t("newsletterPortada.p1")}
                    {t("newsletterPortada.p2")}
                </p>
                <div className="col-11">
                    <NewsletterForm showPopUp={showPopUp} resolveRej={resolveRej} />
                </div>
            </div>
            {
                showHidePopUp && <div className="div-negro"></div>
            }
            {showHidePopUp
                ? 
                    <PopUp showHidePopUp={showHidePopUp}
                        closePopUp={closePopUp}
                        resolveReject={resolveReject} 
                        textOk={t("popUpText.newsOk")} 
                        textWrong={t("popUpText.error")}
                        buttonText={t("popUpText.button")}/>
                : ''
            }

        </section>
    )
}

export default NewsletterPortada;