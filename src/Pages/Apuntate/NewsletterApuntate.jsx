import React, { useState } from "react";
// import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
import PopUp from '../../Componentes/PopUp/PopUp';
import flechita from '../../images/flechita.png'




function NewsletterApuntate() {
    // const [t] = useTranslation("global")
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
        <div className="d-flex flex-column justify-content-center pb-5 px-3 px-md-0 align-items-center">
            <div className="d-flex col-6  col-xl-5 col-xxl-4 justify-content-strat flechita">
                    <img src={flechita} alt="" width={100} />
            </div>
            <div className="d-flex flex-column  align-items-md-start col-md-11 col-lg-10 col-xl-8 col-xxl-7 mb-5 m-md-0 p-4 bg-newsletter-apuntate">
                <p className="mb-0 fs-5 text-center text-md-start ">
                    <b>
                        Si sientes que te hace tilín
                    </b>
                        , estaré encantada de que te unas. Recuerda que es gratis y

                </p>
                <p className="fs-5 text-center text-md-start ">
                    puedes darte de baja cuando quieras.
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

export default NewsletterApuntate;