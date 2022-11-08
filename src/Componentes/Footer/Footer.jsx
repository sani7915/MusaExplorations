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
        <footer className="container-fluid pt-lg-3 footer">
            <div className="col m-auto d-flex flex-column align-items-center flex-lg-row justify-content-between col-md-11 col-lg-10 col-xl-8 col-xxl-7">
                <div className="col-11 m-md-0 py-md-4 col-lg-5 ">
                    <div className=" d-md-none d-flex justify-content-center my-3 ">
                        <img src={logoVertical} alt="" />
                    </div>
                    <div className=" d-none d-md-flex justify-content-md-center justify-content-lg-start mb-3 ">
                        <img src={logoHorizontal} alt={logoHorizontal} width={350} />
                    </div>
                    <p className="montserrat text-center text-lg-start lh-md">
                        {t("footer.lirica")}
                    </p>
                    <div className="col col-lg-9 mt-4 mb-2">
                        <ul className="d-flex col-md-8 col-lg-12 m-auto list-unstyled justify-content-evenly justify-content-lg-between ">
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
                <div className="col-lg-6 d-flex flex-lg-column  montserrat-500">
                    <div className="d-flex justify-content-between mb-4 footer-li">
                        <div className="text-end d-none d-lg-block">
                            <ul className="list-unstyled d-flex flex-column align-items-end">
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
                        <div className=" text-end d-none d-lg-block" >
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
                        <p className="montserrat text-center text-lg-end px-2 mt-2 pe-md-4 p-lg-0 fs-7">
                            {t("footer.copy")}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;