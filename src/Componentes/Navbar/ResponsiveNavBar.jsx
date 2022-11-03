import React, { useState } from "react";
import logo from '../../images/logo peq sin texto.svg';
import hamburguesa from '../../images/hamburguesa.png';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from "react";

const ResponsiveNavbar = () => {
    const [t] = useTranslation("global")
    const links = [
        { to: '/', nombre: t("navBar.portada") },
        { to: '/galeria', nombre: t("navBar.galeria") },
        { to: '/tienda', nombre: t("navBar.tienda") },
        { to: '/apuntate', nombre: t("navBar.apuntate") },
        { to: '/sobreMi', nombre: t("navBar.sobreMi") },
        { to: '/contacto', nombre: t("navBar.contacto") },
    ]
    const [collapse, setCollapse] = useState();
    const [noCollapse, setNoCollapse] = useState('d-none')

    useEffect(() => {
        setTimeout(() => {
            setNoCollapse('d-none')
        }, 5000);
    }, [collapse])

    const chanageBrand = () => {
        if (window.scrollY > 100 && window.innerWidth >= 768) {
            setCollapse(true)
        } else {
            setCollapse(false)
        }
    }
    window.addEventListener('scroll', chanageBrand);




    return (
        <div >
            <div className='container-fluid d-flex  align-items-center d-md-none  py-3 sticky-top'>
                <div className="position-absolute" onClick={() => {
                    setCollapse(!collapse)
                    setNoCollapse('')
                }}>
                    <img src={hamburguesa} alt="" width={45} className='ps-2' />
                </div>
                <Link to={'/'} className='m-auto' >
                    <img src={logo} alt="logo" width={45} />
                </Link>
            </div>
            <ul onClick={() => { setCollapse(!collapse) }} className={collapse ? ` modall animate__animated  animate__fadeIn d-md-none ` : ` modall animate__animated  animate__fadeOut ${noCollapse} d-md-none`}>
                {
                    links.map(link => {
                        return (
                            <li className="nav-item" key={link.nombre} >
                                <Link to={link.to} className="nav-link mb-2">
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