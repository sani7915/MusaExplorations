import React from "react";
import { Link } from "react-router-dom";

const array = [
    { category1: 'Arte original', category2: 'Prints', color: 'color1' },
    { category1: 'Colecciones', category2: 'Patterns', color: 'color2' },
    { category1: 'Pedidos', category2: 'Personalizados', color: 'color3',url:'contacto' },
]

const CardPortada = () => {
    return (
        <div className="d-flex flex-column gap-2 align-items-center flex-md-row justify-content-between arvo p-4 px-md-0 me-md-3 me-lg-0">
            {array.map(lamina => {
                return <div className={`${lamina.color} d-flex flex-column justify-content-center position-relative col-10 col-md-4 text-white text-center fs-3  min-h-400`}>
                    <div className="px-2 mt-3 d-flex flex-column justify-content-center fs-3 ">
                        <p>
                            {lamina.category1}
                        </p>
                        <p>
                            {lamina.category2}
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-end arrow_card_portada ">
                        <Link to={lamina.url} className='text-white bg-arrow'>
                            <i className="fa solid fa-arrow-right fs-5 px-3 align-middle "> </i>
                        </Link>
                    </div>
                </div>
            })
            }
        </div>
    )
}
export default CardPortada;