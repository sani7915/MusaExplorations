import React from "react";
import { useTranslation } from "react-i18next";

const Instagram = () => {
  const [t] = useTranslation("global");
  return (
    <div className=" m-auto col-11 col-lg-10 col-xl-9 col-xxl-8 mt-5">
      <h2 className="fs-3 mb-3">{t("instagram")}</h2>
      <p className="fs-4 mb-0">@musadeacuarela</p>
      <div
        id="widbox"
        style={{ width: "100%", height: "100%" }}
        data-widbox-widget-id="c8DLvqJZjInob5THJgZz"
      ></div>
    </div>
  );
};
export default Instagram;
