import React from "react";
import Instagram from "../Portada/Instagram/Instagram"
import HeroPortada from "./HeroPortada";
import NewsletterPortada from '../Portada/NewsletterPortada'
import Footer from "../../Componentes/Footer/Footer";

const PortadaContenedor = () => {
    return (
        <main>
            <HeroPortada />
            <NewsletterPortada />
            <Instagram />
            <Footer/>
        </main>
    )
}
export default PortadaContenedor;
