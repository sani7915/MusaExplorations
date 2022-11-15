import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arrow from '../../images/diseño/arrow 1.svg'
const CardsPortada = () => {
    const [t] = useTranslation("global")

    const cardCategory = [
        { p1: t("cardPortada.arte.p1"), p2: t("cardPortada.arte.p2"), bg: 'color1', url: '/galeria/botany' },
        { p1: t("cardPortada.colecciones.p1"), p2: t("cardPortada.colecciones.p2"), bg: 'color2', url: '/galeria/patterns' },
        { p1: t("cardPortada.pedidos.p1"), p2: t("cardPortada.pedidos.p2"), bg: 'color3', url: 'contacto' },
    ]
    return (
        cardCategory.map(card => {
            return (
                <Link to={card.url} key={card.p1} className={`${card.bg} nav-link d-flex flex-column justify-content-center col-11 portada_card`}>
                    <div className=" d-flex flex-column justify-content-center">
                        <h3>
                            {card.p1}
                        </h3>
                        <h3>
                            {card.p2}
                        </h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center portada_card-arrow">
                        <img src={arrow} alt="" />
                    </div>
                </Link>
            )
        })

    )
}
export default CardsPortada;