import React from "react";
import logo from '../../images/diseño/logo peq sin texto.svg';
import logoMusa from '../../images/diseño/Musa.svg';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ResponsiveNavbar from "./ResponsiveNavBar";
import { useNavbarContext } from "../../context/NavbarContext";


const Navbar = () => {
    const [t] = useTranslation("global")
    const {
        initial,
        animationUpDown,
        animationFadeInOut,
    } = useNavbarContext();

    const links = [
        { to: '/', nombre: t("navBar.portada"), href: '#' },
        { to: '/gallery/all', nombre: t("navBar.galeria"), href: '#' },
        { to: '/signUp', nombre: t("navBar.apuntate"), href: '#' },
        { to: '/aboutMe', nombre: t("navBar.sobreMi"), href: '#' },
        { to: '/contact', nombre: t("navBar.contacto"), href: '#' },
    ]

    return (
        <nav className={initial
            ? `montserrat sticky-top shadow-sm nav-bar ${animationUpDown}`
            : `montserrat sticky-top shadow-sm nav-bar ${animationUpDown}`}>
            <ResponsiveNavbar />
            <div className="d-flex justify-content-center">
                <Link to={'/'} className={initial
                    ? ` d-none d-md-flex flex-md-column align-items-md-center my-3 gap-2 ${animationFadeInOut}`
                    : `d-none d-md-flex flex-md-column align-items-md-center mt-2 gap-2 ${animationFadeInOut}`}  >
                    <img src={logo} alt={logo} width={63} />
                    <img src={logoMusa} alt={logoMusa} />
                </Link>
            </div>

            <div className="container-fluid d-none col-md-11 col-lg-10 col-xl-9 col-xxl-8 d-md-flex flex-md-column align-items-center px-0 py-2" >
                <div className='container-fluid d-flex justify-content-center p-0 '>
                    <div className="navbar-collapse">
                        <ul className={initial
                            ? "d-flex justify-content-between align-items-center list-unstyled m-0"
                            : 'd-flex justify-content-between align-items-md-center list-unstyled m-0'} >
                            <li className=
                                {!initial
                                    ? 'animate__animated animate__fadeIn'
                                    : 'd-none'
                                }>
                                <Link to={'/'} className="nav-link">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </li>
                            {
                                links.map(link => {
                                    return (
                                        <li key={link.nombre}>
                                            <Link to={link.to} className='nav-link nav-item '>
                                                {link.nombre}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <a href={'https://www.etsy.com/shop/musadeacuarela'} target={"_blank"} rel="noreferrer" className="nav-link">
                                    {t("navBar.tienda")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;