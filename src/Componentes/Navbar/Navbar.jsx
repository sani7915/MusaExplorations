import React, { useState } from "react";
import logo from '../../images/logo peq sin texto.svg';
import logoMusa from '../../images/Musa.svg';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ResponsiveNavbar from "./ResponsiveNavBar";


const Navbar = () => {
    const [t] = useTranslation("global")
    const links = [
        { to: '/', nombre: t("navBar.portada") },
        { to: '/galeria', nombre: t("navBar.galeria") },
        { to: '/tienda', nombre: t("navBar.tienda") },
        { to: '/apuntate', nombre: t("navBar.apuntate") },
        { to: '/sobreMi', nombre: t("navBar.sobreMi") },
        { to: '/contacto', nombre: t("navBar.contacto") },
    ]
    const [initial, setInitial] = useState(true);
    const [collapse, setCollapse] = useState();



    const chanageBrand = () => {
        if (window.scrollY > 200 && window.innerWidth >= 768 
        ) {
            setInitial(false)
            setCollapse('animation')
        } else if (window.scrollY > 10) {
            setCollapse('animation-down')
            setInitial(true)
        }

    }
    window.addEventListener('scroll', chanageBrand);




    return (
        <nav className={initial ? `montserrat  sticky-top shadow-sm nav-bar ${collapse} ` : `montserrat sticky-top shadow-sm nav-bar ${collapse} `}>
            <ResponsiveNavbar />
            <div className={initial
                ? " d-none d-md-flex flex-md-column align-items-md-center my-3 gap-2 animate__animated animate__fadeIn "
                : 'd-none d-md-flex flex-md-column align-items-md-center mt-2 gap-2  animate__animated animate__fadeOut '} >
                <img src={logo} alt={logo} width={63} />
                <img src={logoMusa} alt={logoMusa} />
            </div>

            <div className="container-fluid d-none  col-md-11 col-lg-10 col-xl-8 col-xxl-7 d-md-flex flex-md-column align-items-center p-2 d-md">
                <div className='container-fluid d-flex justify-content-center p-0 '>
                    <div className="navbar-collapse" >
                        <ul className={initial ? "d-flex justify-content-between align-items-center list-unstyled m-0"
                            : 'd-flex justify-content-between align-items-md-center list-unstyled m-0 animate__animated animate__zoomIn'} >
                            <li className=
                                {!initial
                                    ? 'nav-item   animate__animated animate__fadeIn'
                                    : 'd-none'
                                }>
                                <Link to={'/'} className="nav-link">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </li>
                            {
                                links.map(link => {
                                    return (
                                        <li className="nav-item" key={link.nombre}>
                                            <Link to={link.to} className="nav-link">
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

export default  Navbar;