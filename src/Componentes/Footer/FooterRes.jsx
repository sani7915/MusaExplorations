import React from "react";
import logoVertical from "../../images/diseño/logo vertical.svg";
import { Link } from "react-router-dom";
function FooterRes({ cambiarIdioma, t }) {
  return (
    <div className="d-flex justify-content-center d-lg-none footer">
      <div className="col-11 d-flex flex-column align-items-center">
        <div className="footer_logo-vertical">
          <img src={logoVertical} alt={logoVertical} />
        </div>
        <div className="footer_lyric">
          <p className="m-0">{t("footer.lirica")}</p>
        </div>
        <ul className="col-8 col-md-6 d-flex justify-content-between redes ">
          <li>
            <a
              href="https://www.instagram.com/musadeacuarela"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-instagram "></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/musadeacuarela"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook "></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCQP-0PT5kxDZgpj1AUu0_tQ"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.es/musadeacuarela"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-pinterest "></i>
            </a>
          </li>
        </ul>
        <div className=" change-language">
          <span>
            {t("footer.language.p")}
            <u type="button" onClick={cambiarIdioma}>
              {t("footer.language.span")}
            </u>
          </span>
        </div>
        <Link to={"/privacy-policy"} className=" mt-1 nav-link fs-14">
          <p>{t("footer.privacy-policy")}</p>
        </Link>
        <div className="copy">
          <p>{t("footer.copy")}</p>
        </div>
      </div>
    </div>
  );
}

export default FooterRes;
