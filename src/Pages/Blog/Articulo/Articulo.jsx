import React from "react";
import { useParams } from "react-router-dom";
import { articulos } from "../Articulos Publicados/articulosData";
import Footer from "../../../Componentes/Footer/Footer";
import { Link } from "react-router-dom";
import ShareButton from "../../../Componentes/ShareButton/ShareButton";
function Articulo() {
  const { title } = useParams();
  const article = articulos.find((element) => element.titulo === title);
  const checkLength = (valor) => {
    if (valor.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="">
      <section className="bg-grey pb-md-4 m-0 ">
          <div className=" col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto pt-4">
            <h1 className="article-title mb-4">{title}</h1>
            <h2 className="mb-4 montserrat">{article.entradilla}</h2>
          </div>
        <div className="d-flex justify-content-center col-md-10 col-lg-9 col-xl-8 col-xxl-7 m-auto mb-2 ">
          <img src={article.mainImg} width={"100%"} alt={article.mainImg} />
        </div>
      </section>

      <div className="col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto d-flex pt-2 pt-md-4 mb-4">
        <ShareButton data={article.dataShare} />
      </div>

      <section
        className={
          checkLength(article.sub1)
            ? "d-none"
            : "col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto"
        }
      >
        <h3 className="montserrat ">{article.sub1}</h3>
        <p className={"mt-4"}>{article.text1}</p>
      </section>
      <section className="col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto mt-4 ">
        <h3 className="montserrat">{article.sub2}</h3>
        <ol className="arvo lh-5 px-4 py-3 m-0">
          {article.Ol.map((item, index) => {
            return (
              <li className="p-0 ms-2" key={index}>
                {item.listItem}
              </li>
            );
          })}
        </ol>
      </section>

      <section
        className={
          checkLength(article.verticalImg)
            ? "d-none"
            : "col-11 col-lg-10 col-xl-9 col-xxl-8 d-flex justify-content-center m-auto my-4 "
        }
      >
        <img
          src={article.verticalImg}
          alt="vertical-img"
          className="article-vertical-img img-fluid"
        />
      </section>
      <section
        className={
          checkLength(article.sub3)
            ? "d-none"
            : "col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto"
        }
      >
        <div className="mt-4 ">
          <h3>{article.sub3}</h3>
        </div>
        <div className=" px-4 px-md-0 py-3">
          <ul className="montserrat ">
            {article.Ul.map((item, index) => {
              return <li key={index}>{item.listItem}</li>;
            })}
          </ul>
        </div>
      </section>
      <section className="col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto">
        <h3
          className={
            checkLength(article.frase) ? "d-none" : "text-center pt-3 pb-5 m-0"
          }
        >
          <i>"{article.frase}</i>"
        </h3>
        <h4 className=" ">{article.subAmazon}</h4>
        {article.AmazonLinks.map((item, index) => {
          return (
            <div
              key={index}
              className="d-flex flex-column align-items-center flex-md-row justify-content-md-between mt-4 "
            >
              <img src={item.img} className="amz-img " alt="img" />
              <p className="mt-4 mb-0 px-md-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="orange-link"
                >
                  {item.textoLink}
                </a>
                {item.textoProducto}
              </p>
            </div>
          );
        })}
      </section>
      <section>
        <div className="col-11 col-lg-10 col-xl-9 col-xxl-8 m-auto mt-5">
          <h3 className=" montserrat mb-md-4">{article.subIframe}</h3>
        </div>
        <div
          className={
            checkLength(article.subIframe)
              ? "d-none"
              : "col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7 m-auto mt-3 "
          }
        >
          <iframe
            className="yt-iframe"
            src={article.youtubeIframe}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto px-4 px-md-0 mt-4 ">
        <div className="line mb-3" />
        <Link to="/Blog" className="nav-link">
          <p className="text-end">Ver todos los articulos del blog</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Articulo;
