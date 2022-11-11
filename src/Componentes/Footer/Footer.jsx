import React, { useState,useEffect  } from "react";
import { useTranslation } from 'react-i18next'
import FooterRes from "./FooterRes";
import FooterDesk from "./FooterDesk";

const Footer = () => {
    const [t, i18n] = useTranslation("global");
    const [lenguaje, setLenguaje] = useState('es');
    const [footer, setFooter] = useState();

    let width = window.innerWidth
    useEffect(() => {
        if (width < 992) {
            setFooter(true);
        } else {
            setFooter(false)
        }
    }, [width])

    const algo = () => {
        if (width < 992) {
            setFooter(true);
        } else {
            setFooter(false)
        }
    }


    window.addEventListener('resize', algo)



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
            {footer
                ? <FooterRes cambiarIdioma={cambiarIdioma} t={t} />
                : <FooterDesk cambiarIdioma={cambiarIdioma} t={t} />
            }
        </footer >

    )
}

export default Footer;