import React, { useState } from "react";
import Jarron from '../../images/diseño/jarron de flores acuarela.jpg'
import CardsPortada from "./CardsPortada";
import { useTranslation } from 'react-i18next'



const HeroPortada = () => {
    const [t] = useTranslation("global");
    const [showHide, setShowHide] = useState()

    const widthHeroBannerChange = () => {
        if (window.innerWidth > 1024) {
            setShowHide(false)
        }else{
            setShowHide(true)
    }
    }
    window.addEventListener('resize', widthHeroBannerChange);

    return (
        <div className="container-fluid p-0">
            {showHide
                ? <img src={Jarron} alt="jarron de flores acuarela" className="w-100 jarron-img" />
                : <div className="bg-jarron"></div>
            }
            <div className="container col-11 col-md-10 col-xl-8 col-xxl-7 text-hero bg-white">
                <h1 className="text-center arvo mt-lg-5 p-3 fs-3 m-0">
                    {t("inicio.h1")}
                </h1>
                <div className="mb-5 montserrat ">
                    <p className="fs-5 text-center m-0">
                        {t("inicio.p1")}
                    </p>
                    <p className="fs-5 text-center m-0">
                        {t("inicio.p2")}
                    </p>
                </div>
            </div>

            <div className=" d-flex flex-column align-items-center gap-3 gap-md-0 flex-md-row  justify-content-md-between col-11 col-lg-10 col-xl-8 col-xxl-7 m-auto">
                <CardsPortada />
            </div>
        </div>
    )
}

export default HeroPortada;