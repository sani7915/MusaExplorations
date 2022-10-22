import React from "react";
import Jarron from '../../images/jarron de flores acuarela.jpg'
import CardPortada from "./CardPortada";



const HeroPortada = () => {
    return (
        <div className="container-fluid p-0" >
            <img src={Jarron} alt="jarron de flores acuarela" className="img-fluid w-100 mh-596 " />
            <div className="container col-11 col-md-10  marginal bg-white  ">
                <h1 className="text-center arvo mt-lg-5 p-3 fs-3">
                    ARTE EN ACUARELA
                </h1>
                <div className="mb-5 montserrat ">
                    <p className="fs-5 text-center m-0">
                        Creación de piezas bonitas y únicas, de líneas orgánicas y delicadas, que te sacan una
                    </p>
                    <p className="fs-5 text-center m-0">
                        sonrisa cada día al contemplarla, y que ayudan a que hoy seas más feliz que ayer.
                    </p>
                </div>
            </div>
            <div className="col col-md-11 col-lg-10 col-xl-8  m-auto">
                <CardPortada />
            </div>
        </div>
    )
}

export default HeroPortada;