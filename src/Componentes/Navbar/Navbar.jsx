import React from "react";
import logo from '../../images/logo peq sin texto.svg';
import logoMusa from '../../images/Musa.svg';
import hamburguesa from '../../images/hamburguesa.png';
import { Link } from 'react-router-dom'
import { useState } from "react";

const Navbar = () => {
    const [mostrarOcultar, setMostrarOcultar] = useState('');

    const mostrar_ocultar = () => {
        if (window.scrollY && window.innerWidth >= 768 ){
            setMostrarOcultar(true)
        } else {
            setMostrarOcultar(false)
        }
    }

    window.addEventListener('scroll', mostrar_ocultar);

    return (
        <nav className=" navbar navbar-expand-md p-0 montserrat bg-white sticky-top">
            <div className="container-fluid col-md-11 col-lg-10 col-xl-8 d-flex flex-md-column align-items-center p-0">
                <div className="col-5">
                    <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={hamburguesa} alt="" />
                    </button>
                </div>
                <div className={mostrarOcultar ? 'visually-hidden' : 'd-flex justify-content-start justify-content-md-center col-7'}>
                    <Link to={'/'} className="nav-link mb-4 d-flex flex-md-column align-items-center justify-content-center gap-2 ">
                        <img src={logo} alt=""  className='p-0 w-logo mt-3' />
                        <img src={logoMusa} alt="" width={199} className='d-none d-md-block' />
                    </Link>
                </div>

                <div className='container-fluid  d-flex justify-content-center p-0'>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex col justify-content-md-center justify-content-md-between  bg-white align-items-md-center ">
                            <li className={mostrarOcultar ? (window.innerWidth < 768  & 'nav-item' ) : 'visually-hidden'}>
                                <Link to={'/'} className="nav-link " ><img src={logo} alt="" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link" aria-current="page">Portada</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/galeria'} className="nav-link"> Galeria de trabajos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/tienda etsy'} className="nav-link">Tienda Etsy</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/apuntate'} className="nav-link">Apúntate</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/sobreMi'} className="nav-link">Sobre mí</Link>
                            </li>  <li className="nav-item">
                                <Link to={'/contacto'} className="nav-link">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;