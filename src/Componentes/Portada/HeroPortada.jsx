import React from "react";
import Jarron from '../../images/jarron de flores acuarela.jpg'

const array = [
    { category1: 'Arte original', category2: 'Prints', color: 'color1' },
    { category1: 'Colecciones', category2: 'Patterns', color: 'color2' },
    { category1: 'Pedidos', category2: 'Personalizados', color: 'color3' },
]

const HeroPortada = () => {
    return (
        <div className="container-fluid p-0 clase">
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
            <div className="d-flex flex-column gap-1 gap-md-2 align-items-center flex-md-row col-md-9 col-xl-8 m-auto justify-content-between arvo">
                {array.map(lamina => {

                    return <div className={`${lamina.color} d-flex flex-column justify-content-center position-relative col-10 col-md-4 text-white text-center fs-3 mb-3 min-h-400`}>
                        <div className="px-2 mt-4 d-flex flex-column justify-content-center  ">
                            <p >
                                {lamina.category1}
                            </p>
                            <p>
                                {lamina.category2}
                            </p>
                        </div>
                        <div className="d-flex justify-content-start align-items-end arrow_card_portada ">
                            <i className="fa solid fa-arrow-right fs-6 back px-3 py-1">

                            </i>
                        </div>
                    </div>


                })
                }
            </div>
        </div>
    )
}

export default HeroPortada;