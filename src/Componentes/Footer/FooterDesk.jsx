import React from 'react'
import logoHorizontal from '../../images/diseño/logo horizontal.svg';
import { Link } from 'react-router-dom'


function FooterDesk({ cambiarIdioma, t}) {

    return (
        <div className='d-none d-lg-flex flex-column align-items-center'>
            <div className='col-lg-10 col-xl-9 col-xxl-8  '>
                <div className="d-flex justify-content-between cont-1">
                    <div className="col-lg-5">
                        <div className='footer_logo-horizontal'>
                            <img src={logoHorizontal} alt={logoHorizontal} />
                        </div>
                        <p className="col-10 footer_lyric">
                            {t("footer.lirica")}
                        </p>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="d-flex justify-content-between col-11 footer-ul">
                            <div>
                                <ul>
                                    <li>
                                        <Link to={'/tienda'} className="nav-link">
                                            {t("footer.ul1.tienda")}
                                        </Link>
                                    </li>
                                    <Link to={'/galeria/todos'} className='nav-link'>
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
                            <div className=" text-end " >
                                <ul>
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
                    </div>
                </div>
                <div className='d-flex justify-content-between cont-2'>
                    <ul className="d-flex col-4 justify-content-between redes">
                        <li>
                            <a href="https://www.instagram.com/musadeacuarela" target='_blank' rel="noreferrer" >
                                <i className="fa-brands fa-square-instagram "></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/musadeacuarela" target='_blank' rel="noreferrer" >
                                <i className="fa-brands fa-facebook "></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCQP-0PT5kxDZgpj1AUu0_tQ" target='_blank' rel="noreferrer" >
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.es/musadeacuarela" target='_blank' rel="noreferrer" >
                                <i className="fa-brands fa-pinterest "></i>
                            </a>
                        </li>
                    </ul>
                    <div className='d-flex flex-column align-items-end'>
                        <p className="change-language">
                            {t("footer.language.p")}
                            <span type="button" onClick={cambiarIdioma}>
                                {t("footer.language.span")}
                            </span>
                        </p>
                        <p className="copy col-11  col-xl-12 ">
                            {t("footer.copy")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterDesk;