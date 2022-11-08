import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardsPortada = () => {
    const [t] = useTranslation("global")

    const cardCategory = [
        { p1: t("cardPortada.arte.p1"), p2: t("cardPortada.arte.p2"), bg: 'color1' },
        { p1: t("cardPortada.colecciones.p1"), p2: t("cardPortada.colecciones.p2"), bg: 'color2' },
        { p1: t("cardPortada.pedidos.p1"), p2: t("cardPortada.pedidos.p2"), bg: 'color3', url: 'contacto' },
    ]
    return (
        cardCategory.map(card => {
            return (
                <Link to={card.url} key={card.p1} className={`${card.bg} nav-link d-flex flex-column justify-content-center position-relative col-11 col-md-4 text-white text-center fs-3  card_portada-heigth`}>
                
                   
                    <div className="px-2 mt-3 d-flex flex-column justify-content-center fs-4 ">
                        <p className="m-0">
                            {card.p1}
                        </p>
                        <p>
                            {card.p2}
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-end arrow_card_portada ">
                        <div className='text-white bg-arrow'>
                            <i className="fa solid fa-arrow-right fs-5 px-3 align-middle "> </i>
                        </div>
                    </div>
                </Link>
            )
        })

    )
}
export default CardsPortada;