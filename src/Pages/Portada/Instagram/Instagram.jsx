import React from "react";
import { useTranslation } from "react-i18next";

const Instagram = () => {
    const [t] = useTranslation("global")
    return (
        <div className=" m-auto col-11 col-lg-10 col-xl-9 col-xxl-8 mt-5">
            <h2 className="fs-3 mb-3" >
            {t("instagram")}
            </h2>
            <p className="fs-4 mb-0">
                @musadeacuarela
            </p>
            <ul
                className="juicer-feed"
                data-feed-id="musadeacuarela"
                data-origin="embed-code"
                data-style="slider"
                data-columns="4"
                // data-overlay="true"
                data-interval="5000"
            >

            </ul>
        </div>
    )
}
export default Instagram;