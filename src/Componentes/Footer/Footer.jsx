import React, { useState,useEffect  } from "react";
import { useTranslation } from 'react-i18next'
import FooterRes from "./FooterRes";
import FooterDesk from "./FooterDesk";

const Footer = () => {
    const [t, i18n] = useTranslation("global");
    const [lenguaje, setLenguaje] = useState('es');


    const cambiarIdioma = () => {
        if (lenguaje === 'es') {
            setLenguaje('en');
            i18n.changeLanguage('en')
        }
        else {
            setLenguaje('es')
            i18n.changeLanguage('es')
        }
    }


    return (
        <footer className="container-fluid p-0 footer">
         
             <FooterRes cambiarIdioma={cambiarIdioma} t={t} />
                <FooterDesk   cambiarIdioma={cambiarIdioma} t={t} />
         
        </footer >

    )
}

export default Footer;