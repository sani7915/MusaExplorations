import React from "react";
import Instagram from "../Instagram/Instagram";
import Newsletter from "../Newsletter/Newsletter";
import HeroPortada from "./HeroPortada";

const Portada = () => {
    return (
        <div>
            <HeroPortada />
            <div className="container-fluid p-4 mt-5 newsletter">
                <Newsletter />
            </div>
            <Instagram />
        </div>
    )
}
export default Portada;