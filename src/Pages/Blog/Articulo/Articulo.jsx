import React from "react";
import { useParams } from "react-router-dom";
import { articulos } from "../Articulos Publicados/articulosData";
function Articulo() {
  const { title } = useParams();
  const article = articulos.find((element) => element.titulo === title);
  console.log(article.Ol);

  return (
    <div className="mb-5">
      <div className="py-5 bg-grey mb-5">
        <div className=" col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto">
        
          <h1 className="article-title mb-5">{title}</h1>
          <h2 className="mb-5">{article.entradilla}</h2>
          <div className="d-flex justify-content-center">
            <img src={article.mainImg} width={"80%"} alt="" />
          </div>
        </div>
      </div>
      <div className=" col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto ">
        <h3>{article.sub1}</h3>
        <p>{article.text1}</p>
        <h3>{article.sub2}</h3>
        <ol>
          {article.Ol.map((item, index) => {
            return <li key={index}>{item.listItem}</li>;
          })}
        </ol>
        <div className=" d-flex justify-content-center my-5 bg-grey w-100">
          <img
            src={article.verticalImg}
            alt=""
            className="article-vertical-img img-fluid"
          />
        </div>
        <h3 className="my-3">{article.sub3}</h3>
        <ul>
          {article.Ul.map((item, index) => {
            return <li key="index">{item.listItem}</li>;
          })}
        </ul>

        <h3 className="text-center my-5">
          <i>"{article.frase}</i>"
        </h3>
        <h4 className=" ">{article.subAmazon}</h4>
        {article.AmazonLinks.map((item, index) => {
          return (
            <div className="d-flex align-items-center my-4 ">
              <img src={item.img} width={"120px"} height={"120px"} alt="img" />
              <p className="ms-3">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.textoLink}
                </a>
                {item.textoProducto}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Articulo;
