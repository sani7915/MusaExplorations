import React from "react";
import { useTranslation } from "react-i18next";
import ButtonLink from "../Componentes/ButtonLink/ButtonLink";

function Banner() {
  const [t] = useTranslation("global");

  return (
    <section className="d-flex justify-content-center align-items-center banner ">
      <div className="d-flex flex-column align-items-center  col-11 col-lg-10 col-xl-9 col-xxl-8 bg-newsletter-portada ">
        <h3>{t("bannerAdPortada.titulo")}</h3>
        <p className="m-0">{t("bannerAdPortada.p1")}</p>
        <p>{t("bannerAdPortada.p2")}</p>
        <ButtonLink
          to={"https://www.etsy.com/shop/musadeacuarela"}
          btnValue={t("ButtonLinKTienda.btnValue")}
        />
      </div>
    </section>
  );
}

export default Banner;
