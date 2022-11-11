import React from "react";
import Instagram from "../Portada/Instagram/Instagram"
import HeroPortada from "./HeroPortada";
import NewsletterPortada from '../Portada/NewsletterPortada'

const PortadaContenedor = () => {
    return (
        <main>
            <HeroPortada />
            <NewsletterPortada />
            <Instagram />
        </main>
    )
}
export default PortadaContenedor;
