import React from "react";
import News from '../Newsletter/News'
import { useTranslation } from "react-i18next";

const Apuntate = () => {
    const [t] = useTranslation("global");
const p1 = t("newsletterApuntate.p1")
const p2 = t("newsletterApuntate.p2")

    return(
        <div>
            <News p1={p1} p2={p2} bg={'bg-newsletter-apuntate'}/>
        </div>
    )
}
export default Apuntate;