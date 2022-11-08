import React from 'react'
import broken_pot from '../../images/diseño/broken pot.svg';

const PopUp = ({ closePopUp, showHidePopUp, resolveReject }) => {
    return (
        <div className={showHidePopUp
            ? 'popUp col-11 col-md-7 col-lg-5 col-xl-4 p-2 animate__animated animate__fadeIn'
            : 'visually-hidden'
        }>
            <div className='d-flex justify-content-end' onClick={closePopUp}>
                <i className='fa-solid fa-close'></i>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center m-3'>
                {resolveReject
                    ? <p className='m-0 text-center fw-bold'>
                        !Tu mensaje fue enviado correctamente!
                    </p>
                    : <div className='d-flex  flex-column align-items-center mt-3'>
                        <img src={broken_pot} alt="broken_pot" width={200} />
                        <p className='mt-3 mb-0 text-center fw-bold'>
                            ¡Ups! Algo ha salido mal
                        </p>
                    </div>
                }
                <div className='col-8 m-3 d-flex align justify-content-center pt-0 p-3'>
                    <button className='form_button_popUp' onClick={closePopUp} >
                        CERRAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopUp