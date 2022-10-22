import React from "react";
import Instagram from "../Instagram/Instagram";
import Newsletter from "../Newsletter/Newsletter";
import HeroPortada from "./HeroPortada";

const PortadaContenedor = () => {
    return (
        <div>
            <HeroPortada />
            <div className="py-5 px-3  mt-5 d-flex justify-content-center newsletter">
                <Newsletter />
            </div>
            <Instagram />
        </div>
    )
}
export default PortadaContenedor;