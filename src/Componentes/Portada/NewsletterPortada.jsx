import React from "react";
import News from "../Newsletter/News";
import { useTranslation } from 'react-i18next'

const NewsletterPortada = () => {
    const [t] = useTranslation("global")
    const titulo = t("newsletterPortada.titulo");
    const p1 = t("newsletterPortada.p1");
    const p2 = t("newsletterPortada.p2");

    return (
        <div>
            <News
                estilos='newsletter'
                titulo={titulo}
                p1={p1}
                p2={p2}
                bg={'bg-newsletter'}
            />
        </div>
    )
}

export default NewsletterPortada;