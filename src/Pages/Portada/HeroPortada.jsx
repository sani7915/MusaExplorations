import React, { useState } from "react";
import Jarron from '../../images/diseño/jarron de flores acuarela.jpg'
import CardsPortada from "./CardsPortada";
import { useTranslation } from 'react-i18next'
import { useEffect } from "react";



const HeroPortada = () => {
    const [t] = useTranslation("global");
    const [showHide, setShowHide] = useState()
    const [widthScreen] = useState(window.innerWidth)
   
    useEffect(() => {
        if (widthScreen > 1024) {
            setShowHide(false)
        } else {
            setShowHide(true)
        }
    }, [widthScreen]);

    return (
        <div className="container-fluid d-flex flex-column p-0">
            <div className="">
                {showHide
                    ? <img src={Jarron} alt="jarron de flores acuarela" className="w-100 jarron-img" />
                    : <div className="bg-jarron"></div>
                }
            </div>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column col-11 col-md-10 col-lg-10 col-xl-8 col-xxl-7 col- portada_presentacion">
                    <h1>
                        {t("inicio.h1")}
                    </h1>
                    <p>
                        {t("inicio.p1")}
                        {t("inicio.p2")}
                    </p>
                </div>
            </div>

            <div className=" col-md-11 col-lg-10 col-xl-9 col-xxl-8 portada_contenedor-card">
                <CardsPortada />
            </div>
        </div>
    )
}

export default HeroPortada;