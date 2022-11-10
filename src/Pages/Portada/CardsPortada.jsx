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
                <Link to={card.url} key={card.p1} className={`${card.bg} nav-link d-flex flex-column justify-content-center col-11 portada_card`}>
                    <div className=" d-flex flex-column justify-content-center">
                        <h2>
                            {card.p1}
                        </h2>
                        <h2>
                            {card.p2}
                        </h2>
                    </div>
                    <div className="d-flex justify-content-center align-items-center portada_card-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Link>
            )
        })

    )
}
export default CardsPortada;