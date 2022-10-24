import React, { useState } from "react";
import logoVertical from '../../images/logo vertical.svg';
import logoHorizontal from '../../images/logo horizontal.svg';
import { Link } from "react-router-dom";

const Footer = () => {
    const [show_hidde, setShowHidde] = useState('');

    const showHidde = () => {
        if (window.innerWidth < 768) {
            setShowHidde(true)
        } else {
            setShowHidde(false)
        }
    }
    window.addEventListener('resize', showHidde)

    return (
        <footer className="container-fluid  bg-footer p-0 mt-5">
            <div className="col m-auto d-flex flex-column align-items-center  col-md-11 col-lg-10 col-xl-8 col-xxl-7 flex-lg-row">
                <div className="col-11 m-md-0 py-md-4 col-lg-5 ">
                    {show_hidde
                        ? <div className="d-flex justify-content-center justify-content-md-start my-3 ">
                            <img src={logoVertical} alt="" />
                        </div>
                        : <div className="d-flex justify-content-center justify-content-lg-start mb-3 ">
                            <img src={logoHorizontal} alt="" />
                        </div>}
                    <p className="montserrat text-center text-lg-start px-1 ">
                        Coger el pincel, humedecer la acuarela, fundir el pincel en la mezcla, ver como el agua se posa en el papel, como el pigmento de la acuarela se expande en el agua… disfrutar de cada paso.
                    </p>
                    <div className="col mt-4">
                        <ul className="d-flex list-unstyled justify-content-evenly">
                            <li>
                                <a href="https://www.instagram.com" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-instagram fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-facebook fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target='_blank' rel="noreferrer" >
                                    <i className="fa-brands fa-youtube fs-1 text-black opacity-75"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com" target='_blank' rel="noreferrer" >
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
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">
                                        Tienda Etsy
                                    </Link>
                                </li>
                                <li>Galeria de trabajos</li>
                                <li> Pedidos personalizados</li>
                                <li>Prints y tarjetas </li>
                            </ul>
                        </div>
                        <div className="col-6 p-4 text-end d-none d-lg-block" >
                            <ul className="list-unstyled">
                                <li>Acuarelas originales</li>
                                <li>Patterns</li>
                                <li>Sobre mi</li>
                                <li>Contacto</li>
                            </ul>
                        </div>
                    </div>
                    <p className="montserrat  text-center text-lg-end px-2 pe-md-4 p-lg-0 fs-7">
                        Copyright 2022. Todos los derechos reservados. Desarrollado por nombre del desarrollador.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;