import React from "react";
import campoDeGirasoles from '../../images/girasoles.png'
const SobreMi = () => {
    return (
        <div className="d-flex flex-column justify-content-end">
            <div className="d-flex flex-column align-items-center align-items-lg-end">
                <img src={campoDeGirasoles} alt="" className="img-fluid" />
            </div>
        </div>
    )
}
export default SobreMi;