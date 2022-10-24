import React from "react";


const Newsletter = () => {
    return (
        <div className="d-flex justify-content-center py-5 px-3 px-md-0  mt-5 newsletter">
            <div className="d-flex flex-column align-items-center col-md-11 col-lg-10 col-xl-8 col-xxl-7 my-5 m-md-0 px-4 py-5 p-md-5 bg-newsletter">
                <h3 className="mb-4 arvo">¡APÚNTATE!</h3>
                <p className="text-center m-0 fs-5 montserrat">
                    Apúntate gratis y recibe periodicamente láminas para descargar y pintar, tips para
                </p>
                <p className="text-center fs-5 montserrat ">
                    mejorar tu técnica, novedades y descuentos exclusivos en la tienda...
                </p>
                <form className="d-flex flex-column flex-md-row justify-content-md-between gap-md-2 mt-2 w-100">
                    <div className="d-flex justify-content-center col-md-4 mb-3">
                        <input type="text" className="input-style  form-control ps-4" placeholder="Nombre" />
                    </div>
                    <div className="d-flex justify-content-center col-md-4 mb-3  ">
                        <input type="email" className="input-style form-control ps-4" placeholder="Email" />
                    </div>
                    <div className="d-flex justify-content-center col-md-4 ">
                        <button type="submit" className="form_button">
                            ¡ME APUNTO!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Newsletter;