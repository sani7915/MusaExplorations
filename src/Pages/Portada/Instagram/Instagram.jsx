import React from "react";
import img1 from '../../../images/naranjas en acuarela.jpg'
import img2 from '../../../images/pintando bouquet de flores acuarela_.jpg';
const Instagram = () => {
    return (
        <div className="container mt-5">
            <div className="col-10  m-auto p-4">
                <h3 className="arvo text-center text-lg-start mb-3">LO ÚLTIMO EN INSTAGRAM</h3>
                <p className="fs-5 montserrat text-center text-lg-start">
                    @musadeacuarela
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-4 flex-md-row justify-content-lg-between ">
                    <div className="insta-card col-11 ">
                        <img src={img1} alt="" className="insta-card " />
                    </div>
                    <div className="insta-card ">
                        <img src={img2} alt="" className="insta-card " />
                    </div>
                    <div className="insta-card ">
                        <img src={img1} alt="" className="insta-card" />
                    </div>
                    <div className="insta-card">
                        <img src={img2} alt="" className="insta-card " />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Instagram;