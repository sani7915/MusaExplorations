import React from "react";
import { useTranslation } from 'react-i18next';
import NewsletterForm from "../../Componentes/newsletterForm/NewsletterForm";
import flechita from '../../images/diseño/icono flecha punteada.png'




function NewsletterApuntate() {
    const [t] = useTranslation("global")
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-xl-5">
            <div className="d-flex col-6 col-xl-5 col-xxl-4 justify-content-center justify-content-md-start flechita">
                <img src={flechita} alt={flechita} />
            </div>
            <div className="d-flex flex-column align-items-md-start col-11 col-lg-10 col-xl-9 col-xxl-8 newsletter-apuntate">
                <p>
                    <b>
                        {t("newsletterApuntate.b")}
                    </b>
                    {t("newsletterApuntate.p1")}

                    {t("newsletterApuntate.p2")}
                </p>
                <div className="col-12">
                    <NewsletterForm />
                </div>
            </div>
        </div>
    )
}

export default NewsletterApuntate;