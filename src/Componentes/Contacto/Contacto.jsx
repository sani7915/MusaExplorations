import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contacto = () => {

    const [btnValue, setBtnValue] = useState('ENVIAR MENSAJE')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setBtnValue('ENVIANDO...')

        emailjs.sendForm('default_service', 'template_7kvhw4i', form.current, '8yPxOUus9ogutU2u8')
            .then((result) => {
                setBtnValue('ENVIAR MENSAJE')
                console.log(result.text);
                alert('registrado Correctamente')
            }, (error) => {
                setBtnValue('ENVIAR MENSAJE')
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="col-11 col-md-11 col-lg-10 col-xl-8 m-auto mt-5 ">
                <h1 className="fs-3 arvo lh-sm ps-md-2">CONTACTO</h1>
            </div>
            <div className='naranjas_back_img'></div>
            <div className="back_form d-flex flex-column col-11 col-md-10 col-xl-8 m-auto position-relative">
                <div className="col-11 col-md-10 col-xl-8 m-auto ">
                    <p className="mt-5">
                        Puedes enviarme tu consulta a través del formulario o escribirme a hola@musadeacuarela.com
                    </p>
                    <form ref={form} onSubmit={sendEmail} className="d-flex flex-column gap-3 mb-5">
                        <input type="text" className="input-style" placeholder="Nombre" name='nombre' />
                        <input type="email" className="input-style" placeholder="Email" name='email' />
                        <input type="text" className="input-style" placeholder="Teléfono" name='telefono' />
                        <textarea className="input-style" placeholder="Mensaje" name='mensaje' />
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