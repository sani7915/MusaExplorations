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
                data-gutter="30" //separa
                data-per="6"
                data-truncate="500"
                data-style="slider"
                data-origin="embed-code"
                data-pages="1"
                data-columns="4"
                // data-after="updateFilters()"
                data-overlay="true"
                data-interval="5000"
            // data-starting-at="2022-08-01" data-ending-at="2022-10-01"
            >

            </ul>
        </div>
    )
}
export default Instagram;