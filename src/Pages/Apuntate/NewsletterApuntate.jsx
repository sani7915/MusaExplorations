import React from "react";
import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
import flechita from '../../images/diseño/icono flecha punteada.png'




function NewsletterApuntate() {
    const [t] = useTranslation("global")
    return (
        <div className="d-flex flex-column justify-content-center px-3 px-md-0 align-items-center">
            <div className="d-flex col-6 col-xl-5 col-xxl-4 justify-content-strat flechita">
                <img src={flechita} alt={flechita} width={90} />
            </div>
            <div className="d-flex flex-column align-items-md-start col-md-11 col-lg-10 col-xl-9 col-xxl-8 mb-5 m-md-0 px-4 bg-newsletter-apuntate">
                <p className="mb-5 mb-md-3 mt-md-3 ms-md-3 fs-5 mt-5 text-center text-md-start ">
                    <b>
                        {t("newsletterApuntate.b")}
                    </b>
                    {t("newsletterApuntate.p1")}

                    {t("newsletterApuntate.p2")}
                </p>
                <div className="mb-5 mb-md-4 col-12">
                <NewsletterForm />
                </div>
            </div>
        </div>
    )
}

export default NewsletterApuntate;