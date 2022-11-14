import React from "react";
import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
import flechita from '../../images/diseño/flechita.png'




function NewsletterApuntate() {
    const [t] = useTranslation("global")
    return (
        <div className="d-flex flex-column justify-content-center pb-5 px-3 px-md-0 align-items-center">
            <div className="d-flex col-6 col-xl-5 col-xxl-4 justify-content-strat flechita">
                <img src={flechita} alt="" width={100} />
            </div>
            <div className="d-flex flex-column  align-items-md-start col-md-12 col-lg-10 col-xl-8 col-xxl-7 mb-5 m-md-0 p-4 bg-newsletter-apuntate">
                <p className="mb-0 fs-5 text-center text-md-start ">
                    <b>
                        {t("newsletterApuntate.b")}
                    </b>
                    {t("newsletterApuntate.p1")}

                    {t("newsletterApuntate.p2")}
                </p>
                <NewsletterForm />
            </div>
        </div>
    )
}

export default NewsletterApuntate;