import React from "react";
import Jarron from '../../images/jarron de flores acuarela.jpg'

const HeroPortada = () => {
    return (
        <div className="container-fluid p-0 ">
            <img src={Jarron} alt="jarron de flores acuarela" className="img-fluid w-100 mh-596 " />
            <div className="container col-11 col-md-10 marginal bg-white  ">
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
            <div className="d-flex flex-column gap-1 gap-md-2 align-items-center flex-md-row col-md-9 m-auto justify-content-between arvo">
                <div className=" color1 d-flex flex-column justify-content-center position-relative col-10 col-md-4 text-white text-center fs-3 mb-3 min-h-400 ">
                    <div className="px-2 mt-4 d-flex flex-column justify-content-center  ">
                        <p>
                            Arte original
                        </p>
                        <p>
                            & Prints
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-end arrow_card_portada ">
                        <i className="fa solid fa-arrow-right fs-6 back px-3 py-1">

                        </i>
                    </div>
                </div>
                <div className="color2 d-flex flex-column justify-content-center position-relative col-10 col-md-4 text-white text-center fs-3 mb-3 min-h-400 ">
                    <div className="px-2 mt-4 d-flex flex-column justify-content-center  ">
                        <p>
                            Colecciones
                        </p>
                        <p>
                            & Patterns
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-end arrow_card_portada ">
                        <i className="fa solid fa-arrow-right fs-6 back px-3 py-1">

                        </i>
                    </div>
                </div>
                <div className="color3 d-flex flex-column justify-content-center position-relative col-10 col-md-4 text-white text-center fs-3 mb-3 min-h-400 ">
                    <div className="px-2 mt-4 d-flex flex-column justify-content-center  ">
                        <p>
                            Pedidos
                        </p>
                        <p>
                            Personalizados
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-end arrow_card_portada ">
                        <i className="fa solid fa-arrow-right fs-6 back px-3 py-1">

                        </i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroPortada;