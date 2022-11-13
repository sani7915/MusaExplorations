import React, { useState } from "react";
import logo from '../../images/diseño/logo peq sin texto.svg';
import hamburguesa from '../../images/diseño/hamburguesa.png';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ResponsiveNavbar = () => {
    const [t] = useTranslation("global")
    const links = [
        { to: '/', nombre: t("navBar.portada") },
        { to: '/galeria/todos', nombre: t("navBar.galeria") },
        { to: '/tienda', nombre: t("navBar.tienda") },
        { to: '/apuntate', nombre: t("navBar.apuntate") },
        { to: '/sobreMi', nombre: t("navBar.sobreMi") },
        { to: '/contacto', nombre: t("navBar.contacto") },
    ];
    
    const [collapse, setCollapse] = useState();
    const [noCollapse, setNoCollapse] = useState('d-none')

    const chanageBrand = () => {
        if (window.scrollY && window.innerWidth >= 768) {
            setCollapse(true)
        } else {
            setCollapse(false)
        }
    }
    window.addEventListener('scroll', chanageBrand);




    return (
        <div >
            <div className='container-fluid d-flex align-items-center d-md-none py-3 sticky-top'>
                <div className="position-absolute" onClick={() => {
                    setCollapse(!collapse)
                    setNoCollapse('')
                }}>
                    <img src={hamburguesa} alt={hamburguesa} width={45} className='ps-2' />
                </div>
                <Link to={'/'} className='m-auto' >
                    <img src={logo} alt="logo" width={45} />
                </Link>
            </div>
            <ul onClick={() => { setCollapse(!collapse) }} className={collapse ? ` modall animate__animated  animate__fadeIn d-md-none ` : ` modall animate__animated  animate__fadeOut ${noCollapse} d-md-none`}>
                {
                    links.map(link => {
                        return (
                            <li key={link.nombre} >
                                <Link to={link.to} className=" mb-2 nav-link">
                                    {link.nombre}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ResponsiveNavbar;