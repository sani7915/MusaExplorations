import React from "react";
import FooterRes from "./FooterRes";
import FooterDesk from "./FooterDesk";
import { useI18nextContext } from "../../context/I18NextContext";
const Footer = () => {
const {cambiarIdioma,t}= useI18nextContext();

    return (
        <footer className="container-fluid p-0 footer">
            <FooterRes cambiarIdioma={cambiarIdioma} t={t} />
            <FooterDesk cambiarIdioma={cambiarIdioma} t={t} />
        </footer >

    )
}

export default Footer;