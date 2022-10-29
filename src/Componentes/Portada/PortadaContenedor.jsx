import React from "react";
import Instagram from "../Instagram/Instagram";
import NewsletterPortada from "../Portada/NewsletterPortada";
import HeroPortada from "./HeroPortada";


const PortadaContenedor = () => {
    return (
        <div>
            <HeroPortada />
            <NewsletterPortada/>
            <Instagram />
        </div>
    )
}
export default PortadaContenedor;
