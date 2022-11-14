import React from "react";
import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";



function NewsletterPortada() {
    const [t] = useTranslation("global")

   

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
                    <NewsletterForm/>
                </div>
            </div>
        </section>
    )
}

export default NewsletterPortada;