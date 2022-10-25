import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import naranjas from '../../images/naranjas_mod.jpg'

const Contacto = () => {
    const form = useRef();
    const [btnValue, setBtnValue] = useState('ENVIAR MENSAJE')
    const [nombre, setNombre] = useState(0);
    const [nombreInvalid, setNombreInvalid] = useState(true);
    const [email, setEmail] = useState(0);
    const [emailInvalid, setEmailInvalid] = useState(true)
    const [mensaje, setMensaje] = useState(0)
    const [mensajeInvalid, setMensajeInvalid] = useState(true)

    useEffect(() => {
        if (nombre > 0) {
            setNombreInvalid(true)
        }
        if (email > 0) {
            setEmailInvalid(true)
        } if (mensaje > 0) {
            setMensajeInvalid(true)
        }
    }, [nombre, email, mensaje])

    const validarCampos = (e) => {
        e.preventDefault();
        if (nombre === 0) {
            setNombreInvalid(false)
        } else if (email === 0) {
            setEmailInvalid(false)
        } else if (mensaje === 0) {
            setMensajeInvalid(false)
        } else {

            setBtnValue('ENVIANDO...')

            emailjs.sendForm('default_service', 'template_7kvhw4i', form.current, '8yPxOUus9ogutU2u8')
                .then((result) => {
                    setBtnValue('ENVIAR MENSAJE')
                    form.current.reset()
                    console.log(result.text);
                    alert('registrado Correctamente')
                }, (error) => {
                    setBtnValue('ENVIAR MENSAJE')
                    console.log(error.text);
                });
        }
    }


    return (
        <div className='d-flex flex-column align-items-center justify-content-center p-0'>
            <div className="d-none d-lg-block col-11 col-md-11 col-lg-10 col-xl-8 col-xxl-7 m-auto mt-5 ">
                <h1 className="fs-3 arvo lh-sm ps-md-2">CONTACTO</h1>
            </div>
            <div className='container-fluid px-0 '>
                <img src={naranjas} alt="" className='w-100 naranjas img-fluid' />
            </div>
            <div className="form_contacto d-flex flex-column col-11 col-lg-10 col-xl-8 col-xxl-7">
                <div className='d-flex flex-column align-items-center'>
                    <h1 className="fs-3 arvo lh-sm pt-3 d-lg-none">CONTACTO</h1>
                    <p className="text-center text-md-start px-3 p-md-0 m-0 col-md-10 col-lg-11 col-xl-9 mt-lg-5 fw-bold ">
                        Puedes enviarme tu consulta a través del formulario o escribirme a hola@musadeacuarela.com
                    </p>
                </div>
                <div className="bg_form_contacto col-11 col-xl-9 m-auto p-4 p-lg-0 mt-3 mt-md-0 mb-4 mb-md-5 mt-lg-4">
                    <form ref={form} onSubmit={validarCampos} className="d-flex flex-column gap-3">
                        <div className='input-group'>
                            <div className={
                                nombreInvalid
                                    ? 'form-floating' : 'form-floating is-invalid  '}>
                                <input type="text" onInput={(e) => setNombre(parseInt(e.target.value.length))} className={nombreInvalid ? 'form-control input-style' : 'form-control input-style is-invalid'} placeholder="" name='nombre' />
                                <label>Nombre *</label>
                            </div>
                            <div className="invalid-feedback">
                                *Este campo es obligatorio
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className={emailInvalid ? 'form-floating' : 'form-floating is-invalid  '}>
                                <input type="email" onInput={(e) => setEmail(parseInt(e.target.value.length))} className={emailInvalid ? 'form-control input-style' : 'form-control input-style is-invalid'} placeholder="" name='email' />
                                <label>Email *</label>
                            </div>
                            <div className="invalid-feedback">
                                *Este campo es obligatorio
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className='form-floating'>
                                <input type="text" className='form-control input-style' placeholder="" name='telefono' />
                                <label>Telefono</label>
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className={mensajeInvalid ? 'form-floating' : 'form-floating is-invalid  '}>
                                <textarea type="text" onInput={(e) => setMensaje(parseInt(e.target.value.length))} className={mensajeInvalid ? 'form-control input-style' : 'form-control input-style is-invalid'} placeholder="" name='mensaje' />
                                <label>Mensaje *</label>
                            </div>
                            <div className="invalid-feedback">
                                *Este campo es obligatorio
                            </div>
                        </div>

                        <div className="col col-md-5">
                            <input type='submit' value={btnValue} className="form_button" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contacto;