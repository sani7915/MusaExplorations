import React, { useState } from "react";
import logoVertical from '../../images/diseño/logo vertical.svg';
import logoHorizontal from '../../images/diseño/logo horizontal.svg';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'


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
        <footer className="container-fluid p-0 mt-5 footer">
            <div className="col m-auto d-flex flex-column align-items-center col-md-11 col-lg-10 col-xl-8 col-xxl-7 flex-lg-row">
                <div className="col-11 m-md-0 py-md-4 col-lg-5 ">
                    <div className=" d-md-none d-flex justify-content-center my-3 ">
                        <img src={logoVertical} alt="" />
                    </div>
                    <div className=" d-none d-md-flex justify-content-md-center justify-content-lg-start mb-3 ">
                        <img src={logoHorizontal} alt="" />
                    </div>
                    <p className="montserrat text-center text-lg-start px-1 ">
                        {t("footer.lirica")}
                    </p>
                    <div className="col mt-4">
                        <ul className="d-flex list-unstyled justify-content-evenly">
                            <li>
                                <a href="https://www.instagram.com/musadeacuarela" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-square-instagram fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/musadeacuarela" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-facebook fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCQP-0PT5kxDZgpj1AUu0_tQ" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-youtube fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.es/musadeacuarela" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-pinterest fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col d-flex flex-lg-column  montserrat">
                    <div className="d-flex mb-4">
                        <div className="col-6 p-4 text-end d-none d-lg-block">
                            <ul className="list-unstyled">
                                <li>
                                    <Link to={'/tienda'} className="nav-link">
                                        {t("footer.ul1.tienda")}
                                    </Link>
                                </li>
                                <Link to={'/galeria'} className='nav-link'>
                                    <li> {t("footer.ul1.galeria")}</li>
                                </Link>
                                <Link to={'/contacto'} className='nav-link'>
                                    <li>{t("footer.ul1.pedidos")}</li>
                                </Link>
                                <Link to={'/'} className='nav-link'>
                                    <li>{t("footer.ul1.prints")}</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-6 p-4 text-end d-none d-lg-block" >
                            <ul className="list-unstyled">
                                <Link to={'/'} className='nav-link'>
                                    <li>{t("footer.ul2.acuarelas")}</li>
                                </Link>
                                <Link to={'/'} className='nav-link'>
                                    <li>{t("footer.ul2.patterns")}</li>
                                </Link>
                                <Link to={'/sobreMi'} className='nav-link'>
                                    <li>{t("footer.ul2.SobreMi")}</li>
                                </Link>
                                <Link to={'/contacto'} className='nav-link'>
                                    <li>{t("footer.ul2.contacto")}</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-column ">
                        <p className="change-language m-0 text-center text-lg-end" >
                            {t("footer.language.p")}
                            <u className="pointer">
                                <span type="button" onClick={cambiarIdioma}>
                                    {t("footer.language.span")}
                                </span>
                            </u>
                        </p>
                        <p className="montserrat text-center text-lg-end px-2 pe-md-4 p-lg-0 fs-7">
                            {t("footer.copy")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;