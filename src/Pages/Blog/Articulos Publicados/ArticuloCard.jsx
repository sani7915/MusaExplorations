import React from "react";
import { Link } from "react-router-dom";
// import imgg from "../../../images/diseño/Blog-portada.jpg";

function ArticuloCard({ art }) {
  const { mainImg, titulo, entradilla } = art;
  const truncatedText =
    entradilla.length > 172 ? entradilla.slice(0, 169) + "..." : entradilla;
  const truncatedTitle =
    titulo.length > 81 ? titulo.slice(0, 197) + "..." : titulo;

  return (
    <div className="articulos-card">
      <Link to={"/blog-article/" + titulo} className="nav-link">
        <div className="w-100">
          <img src={mainImg} alt="img" />
        </div>
        <div className="articulos-card-text">
          <h5 className="text-start arvo-italic">{truncatedTitle}</h5>
          <p className="text-start mt-3 montserrat ">{truncatedText}</p>
        </div>
      </Link>
    </div>
  );
}

export default ArticuloCard;
