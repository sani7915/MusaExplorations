import React from "react";
import { useTranslation } from "react-i18next";
import probandoPaleta from '../../images/diseño/probando paleta color acuarela.jpg'
import NewsletterApuntate from "./NewsletterApuntate";

const Apuntate = () => {
    const [t] = useTranslation("global");

    return (
        <div>
            <h1 className={
                "d-none d-md-flex m-auto col-md-11 col-lg-10 col-xl-9 col-xxl-8 fs-3 mt-5 mb-3"}>
                {t("apuntate.titulo")}
            </h1>
            <div className="d-flex flex-column align-items-center flex-lg-row-reverse ">
                <div className="col-lg-7 col-xxl-6 ">
                    <img src={probandoPaleta} alt={probandoPaleta} className="w-100" />
                </div>
                <div className="d-flex justify-content-center col-12 col-lg-7 col-xl-5 ">
                    <ul className=" d-flex flex-column justify-content-evenly p-0 col-11 col-md-11 text-box-apuntate" >
                        <h1 className={
                            "d-md-none text-center"
                        }>
                            {t("apuntate.titulo")}
                        </h1>
                        <li className="mt-md-4">
                            <p>
                                {t("apuntate.li1")}
                            </p>
                        </li>
                        <li >
                            <p>
                                {t("apuntate.li2")}
                            </p>
                        </li>
                        <li >
                            <p>
                                {t("apuntate.li3")}
                            </p>
                        </li>
                        <li className="mb-md-4">
                            <p>
                                {t("apuntate.li4")}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <NewsletterApuntate />
            </div>
        </div>
    )
}
export default Apuntate;