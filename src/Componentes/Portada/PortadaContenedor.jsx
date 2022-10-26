import React from "react";
import Instagram from "../Instagram/Instagram";
import Newsletter from "../Newsletter/Newsletter";
import HeroPortada from "./HeroPortada";

const PortadaContenedor = () => {
    return (
        <div>
            <HeroPortada />
            <Newsletter />
            <Instagram />
        </div>
    )
}
export default PortadaContenedor;