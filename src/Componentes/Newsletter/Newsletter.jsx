import React from "react";


const Newsletter = () => {
    return (
        <div className="bg-white d-flex flex-column align-items-center  my-5 m-md-0 px-4 py-5 p-md-5 col-md-11 col-lg-10 col-xl-8    ">
            <h3 className="arvo mb-4">¡APÚNTATE!</h3>
            <p className="montserrat m-0 text-center fs-5">
                Apúntate gratis y recibe periodicamente láminas para descargar y pintar, tips para
            </p>
            <p className="text-center montserrat fs-5">
                mejorar tu técnica, novedades y descuentos exclusivos en la tienda...
            </p>
            <form action="" className="d-flex gap-md-2 flex-column flex-md-row mt-2 justify-content-md-between w-100">
                <div className="mb-3 d-flex justify-content-center col-md-4 ">
                    <input type="text" className="input-style ps-4" placeholder="Nombre" />
                </div>
                <div className="mb-3  d-flex justify-content-center  col-md-4">
                    <input type="email" className="input-style ps-4" placeholder="Email" />
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <button type="submit" className="form_button">
                        ¡ME APUNTO!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Newsletter;