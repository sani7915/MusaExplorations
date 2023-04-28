import React from "react";
import Instagram from "../Portada/Instagram/Instagram";
import HeroPortada from "./HeroPortada";
import NewsletterPortada from "../Portada/NewsletterPortada";
import Footer from "../../Componentes/Footer/Footer";
import Banner from "../../Banner/Banner";

const PortadaContenedor = () => {
  return (
    <main>
      <HeroPortada />
      <Banner />
      <NewsletterPortada />
      <Instagram />
      <Footer />
    </main>
  );
};
export default PortadaContenedor;
