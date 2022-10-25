import React from "react";
import logo from '../../images/logo peq sin texto.svg';
import logoMusa from '../../images/Musa.svg';
import hamburguesa from '../../images/hamburguesa.png';
import { Link } from 'react-router-dom'
import { useState } from "react";

const links = [
    { to: '/', nombre: 'Portada' },
    { to: '/galeria', nombre: 'Galeria de trabajos' },
    { to: '/tienda', nombre: 'Tienda' },
    { to: '/apuntate', nombre: 'Apúntate' },
    { to: '/sobreMi', nombre: 'Sobre mí' },
    { to: '/contacto', nombre: 'Contacto' },
]

const Navbar = () => {
    const [show_hidde, setShowHidde] = useState('');
    const showHidde = () => {
        if (window.scrollY && window.innerWidth >= 768) {
            setShowHidde(true)
        } else {
            setShowHidde(false)
        }
    }
    window.addEventListener('scroll', showHidde);



    return (
        <nav className="navbar navbar-expand-md p-0 montserrat bg-white sticky-top">
            <div className="container-fluid col-md-11 col-lg-10 col-xl-8 col-xxl-7 d-flex flex-md-column align-items-center p-0">
                <div className="col-5">
                    <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <img src={hamburguesa} alt="" />
                    </button>
                </div>
                <div className=
                    {show_hidde
                        ? 'visually-hidden'
                        : 'd-flex justify-content-start justify-content-md-center col-7'
                    }>
                    <Link to={'/'} className="nav-link d-flex flex-column align-items-center justify-content-center mb-3 gap-2">
                        <img src={logo} alt="logo" className='p-0 w-logo-md mt-3' />
                        <img src={logoMusa} alt="logoMusa" width={199} className='d-none d-md-block' />
                    </Link>
                </div>

                <div className='container-fluid d-flex justify-content-center p-0'>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav col d-flex justify-content-between align-items-md-center">
                            <li className=
                                {show_hidde
                                    ? 'nav-item'
                                    : 'visually-hidden'
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

export default Navbar;