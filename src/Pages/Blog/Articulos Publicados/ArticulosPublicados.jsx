import React, { useState } from "react";
import ArticuloCard from "./ArticuloCard";
import { articulos } from "./articulosData";

function ArticulosPublicados() {
  const itemsPerPage = 4;
  const totalPaginas = Math.ceil(articulos.length / itemsPerPage);
  const [paginaActual, setPaginaActual] = useState(1);

  const handlePaginaSiguiente = () => {
    setPaginaActual((prevPagina) => Math.min(prevPagina + 1, totalPaginas));
  };

  const handlePaginaAnterior = () => {
    setPaginaActual((prevPagina) => Math.max(prevPagina - 1, 1));
  };

  const startIndex = (paginaActual - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const articulosPaginados = articulos.slice(startIndex, endIndex);

  return (
    <div className="col-11  col-lg-10 col-xl-9 col-xxl-8 m-auto">
      <h3 className="px-2 mb-4 lh-5 fs-1 d-md-none">
        ARTÍCULOS <br />
        PUBLICADOS
      </h3>
      <h3 className=" d-none d-md-block mb-3 arvo-italic  fs-2 ">
        ARTÍCULOS 
        PUBLICADOS
      </h3>
      <div className="d-flex flex-wrap gap-3">
        {articulosPaginados.map((art, index) => (
          <ArticuloCard key={index} art={art} />
        ))}
      </div>
      {articulos.length > 4 && (
        <div className="d-flex justify-content-between mt-3">
          <button
            className="pagination-button m-2"
            onClick={handlePaginaAnterior}
            disabled={paginaActual === 1}
          >
            Anterior
          </button>
          <button
            className="pagination-button m-2"
            onClick={handlePaginaSiguiente}
            disabled={paginaActual === totalPaginas}
          >
             Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default ArticulosPublicados;

