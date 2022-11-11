import React from 'react'
import broken_pot from '../../images/diseño/broken pot.svg';

const PopUp = ({ closePopUp, showHidePopUp, resolveReject,textOk,textWrong,buttonText }) => {
    return (
        <div className={showHidePopUp
            ? 'popUp col-11 col-md-7 col-lg-5 col-xl-4 p-2 animate__animated animate__fadeIn'
            : 'd-none'
        }>
            <div className='d-flex justify-content-end' onClick={closePopUp}>
                <i className='fa-solid fa-close'></i>
            </div>
            <div className='d-flex flex-column align-items-center '>
                {resolveReject
                    ? <p className='mt-4 m-0 fw-bold'>
                      {textOk}
                    </p>
                    : <div className='d-flex flex-column align-items-center mt-3'>
                        <img src={broken_pot} alt="broken_pot" width={200} />
                        <p className='mt-4 mb-0 text-center fw-bold'>
                           {textWrong}
                        </p>
                    </div>
                }
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='mt-4 mb-5 form_button_popUp' onClick={closePopUp} >
                       {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopUp