import React from 'react'

const PopUp = ({ ocultar, valor }) => {
    return (
        <div className={valor
            ? 'popUp col-11 col-md-7 col-lg-5 col-xl-4 p-2 animate__animated animate__fadeIn'
            : 'visually-hidden'
        }>
            <div className='d-flex justify-content-end' onClick={ocultar}>
                <i className='fa-solid fa-close'></i>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center m-3 m-xxl-5'>
                <p className='m-0 text-center fw-bold'>
                    !Tu mensaje fue enviado correctamente!
                </p>
                <div className='col-8 m-3 d-flex align justify-content-center p-3'>
                    <button className='form_button_popUp' onClick={ocultar} >
                        CERRAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopUp