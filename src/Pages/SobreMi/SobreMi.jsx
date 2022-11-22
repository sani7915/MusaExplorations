import React from "react";
import pintandoBouquet from '../../images/diseño/pintando bouquet de flores acuarela_mod.jpg'
import { useTranslation } from "react-i18next";
import Footer from '../../Componentes/Footer/Footer'


const SobreMi = () => {
    const [t] = useTranslation("global")


    return (
        <div>
            <main className="overflow-hidden" >
                <h1 className="d-none d-md-flex m-auto col-md-11 col-lg-10 col-xl-9 col-xxl-8 fs-3 mt-5 mb-3">
                    {t("sobreMi.titulo")}
                </h1>
                <section className="d-flex flex-column flex-lg-row-reverse justify-content-start  mb-lg-5">
                    <div className="col-lg-1 img">
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-11 ">
                        <div className=" d-flex flex-column justify-content-center col-11 col-lg-6 col-xl-5 col-xxl-4 text-box-right">
                            <h1 className="d-md-none">
                                {t("sobreMi.titulo")}
                            </h1>
                            <h6 >
                                {t("sobreMi.h61")}
                            </h6>
                            <p>
                                {t("sobreMi.p1")}
                            </p>
                            <h6 >
                                {t("sobreMi.h62")}
                            </h6>
                            <p>
                                {t("sobreMi.p2")}
                            </p>
                        </div>
                    </div>
                </section>
                <section className="d-flex flex-column flex-lg-row justify-content-start">
                    <div className="col-lg-6 col-xxl-6">
                        <img src={pintandoBouquet} alt="campo de girasoles" className="w-100 bouquet-img" />
                    </div>
                    <div className="d-flex justify-content-center align-items-center col-lg-11 ">
                        <div className="d-flex flex-column justify-content-center col-11 col-lg-7 col-xl-5 col-xxl-5 text-box-left ">
                            <h6 >
                                {t("sobreMi.h63")}
                            </h6>
                            <p>
                                {t("sobreMi.p3")}
                            </p>
                            <h6>
                                {t("sobreMi.h64")}
                            </h6>
                            <p>
                                {t("sobreMi.p4")}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}
export default SobreMi;

