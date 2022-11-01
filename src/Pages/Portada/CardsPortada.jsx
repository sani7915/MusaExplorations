import React from "react";
import { Link } from "react-router-dom";

const array = [
    { category1: 'Arte original', category2: '& Prints', color: 'color1' },
    { category1: 'Colecciones', category2: '& Patterns', color: 'color2' },
    { category1: 'Pedidos', category2: 'Personalizados', color: 'color3', url: 'contacto' },
]

const CardsPortada = () => {
    return (
            array.map(lamina => {
                return (
                    <div key={lamina.category1} className={`${lamina.color} d-flex flex-column justify-content-center position-relative col-11 col-md-4 text-white text-center fs-3  card_portada-heigth`}>
                        <div className="px-2 mt-3 d-flex flex-column justify-content-center fs-4 ">
                            <p className="m-0">
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
                )
            })
            
    )
}
export default CardsPortada;