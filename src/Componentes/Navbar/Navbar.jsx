import React, { useState } from "react";
import logo from '../../images/diseño/logo peq sin texto.svg';
import logoMusa from '../../images/diseño/Musa.svg';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ResponsiveNavbar from "./ResponsiveNavBar";
import { useEffect } from "react";


const Navbar = () => {
    const [t] = useTranslation("global")
    const links = [
        { to: '/', nombre: t("navBar.portada") },
        { to: '/galeria/todos', nombre: t("navBar.galeria") },
        { to: '/tienda', nombre: t("navBar.tienda") },
        { to: '/apuntate', nombre: t("navBar.apuntate") },
        { to: '/sobreMi', nombre: t("navBar.sobreMi") },
        { to: '/contacto', nombre: t("navBar.contacto") },
    ]
    const [initial, setInitial] = useState();
    const [animationUpDown, setAnimationUpDown] = useState();
    const [animationFadeInOut, setAnimationFadeInOut] = useState();


    useEffect(() => {
        setAnimationUpDown('')
        setAnimationFadeInOut('')
        setInitial(true)
    }, [])
    const changeBrand = () => {
        if (window.scrollY > 100 && window.innerWidth >= 768) {
            setInitial(false)
            setAnimationUpDown('animation-Up')
            setAnimationFadeInOut(' animate__animated animate__fadeOut ')
        } else if (window.scrollY === 0) {
            setInitial(true)
            setAnimationUpDown('animation-down')
            setAnimationFadeInOut(' animate__animated animate__fadeIn ')
        }

    }
    window.addEventListener('scroll', changeBrand);

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

            <div className="container-fluid d-none col-md-11 col-lg-10 col-xl-8 col-xxl-7 d-md-flex flex-md-column align-items-center p-2 d-md">
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
                                        <li key={link.nombre} >
                                        
                                            <Link to={link.to} className='nav-link nav-item'>
                                                {link.nombre}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;