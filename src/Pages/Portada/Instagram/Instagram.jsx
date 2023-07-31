import React from "react";
import { useTranslation } from "react-i18next";

const Instagram = () => {
  const [t] = useTranslation("global");

  return (
    <div className=" m-auto col-11 col-lg-10 col-xl-9 col-xxl-8 mt-5">
      <h2 className="fs-3 mb-3 ps-1">{t("instagram")}</h2>
      <p className="fs-4 mb-0 ps-1">@musadeacuarela</p>
      <iframe
        src="https://cdn.lightwidget.com/widgets/e3af85640dd954cf8709da487e6d882a.html"
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{width:'100%',border:'0',overflow:'hidden'}}
        title="lightwidget"
      ></iframe>
    </div>
  );
};

export default Instagram;
