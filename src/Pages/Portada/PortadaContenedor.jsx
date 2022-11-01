import React from "react";
import Instagram from "../Portada/Instagram/Instagram"
import HeroPortada from "./HeroPortada";
import NewsletterPortada from '../Portada/NewsletterPortada'

const PortadaContenedor = () => {
    return (
        <div>
            <HeroPortada />
            {/* <NewsletterPortada /> */}
            <NewsletterPortada />
            <Instagram />
        </div>
    )
}
export default PortadaContenedor;
