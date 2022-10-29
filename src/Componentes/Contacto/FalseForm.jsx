import React from 'react';
import naranjas from '../../images/naranjas_mod.jpg'
import PopUp from '../PopUp/PopUp';
import Input from '../Input';
import { useFormContext } from '../../context/FormContext';

const Contacto = () => {

    const { btnValue,
        nombreInvalid,
        emailInvalid,
        mensajeInvalid,
        showHide,
        getNombre,
        getEmail,
        getMensaje,
        validarCampos, ocultarPopUp, form } = useFormContext();

    // const [btnValue, setBtnValue] = useState('ENVIAR MENSAJE')
    // // const [nombre, setNombre] = useState()
    // const [nombreInvalid, setNombreInvalid] = useState(true)
    // // const [email, setEmail] = useState()
    // const [emailInvalid, setEmailInvalid] = useState(true)
    // // const [mensaje, setMensaje] = useState()
    // const [mensajeInvalid, setMensajeInvalid] = useState(true)
    // const [showHide, setShowHide] = useState(false)

    // const ocultarPopUp = () => {
    //     setShowHide(false)
    // }
    // console.log(getMensaje);



    // useEffect(() => {
    //     if (nombre !== undefined && nombre.length === 0) {
    //         setNombreInvalid(false)
    //     } else { setNombreInvalid(true) }
    //     if (email !== undefined && email.length === 0) {
    //         setEmailInvalid(false)
    //     } else { setEmailInvalid(true) }
    //     if (mensaje !== undefined && mensaje.length === 0) {
    //         setMensajeInvalid(false)
    //     } else { setMensajeInvalid(true) }

    // }, [nombre, email, mensaje])

    // const validarCampos = (e) => {
    //     e.preventDefault();
    //     if (!nombre) {
    //         setNombreInvalid(false)
    //     } else if (!email) {
    //         setEmailInvalid(false)
    //     } else if (!mensaje) {
    //         setMensajeInvalid(false)
    //     }
    //     else {
    //         setBtnValue('ENVIANDO...')

    //         emailjs.sendForm('default_service', 'template_z22mdnp', form.current, 'V0UpoFvwv3OOEjbQ') //B
    //             .then(() => {
    //                 setBtnValue('ENVIAR MENSAJE')
    //                 form.current.reset()
    //                 setNombre(!nombre)
    //                 setEmail(!email)
    //                 setMensaje(!mensaje)
    //                 setShowHide(true)
    //             }, () => {
    //                 setBtnValue('ENVIAR MENSAJE')
    //                 form.current.reset()
    //                 setNombre(!nombre)
    //                 setEmail(!email)
    //                 setMensaje(!mensaje)
    //                 setShowHide(true)
    //             });
    //     }
    // }


    return (
        <div className='d-flex flex-column align-items-center justify-content-center p-0' >
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
                        <Input campoInvalido={nombreInvalid} valorInput={getNombre} name={'nombre'} type={'text'} />
                        <Input campoInvalido={emailInvalid} valorInput={getEmail} name={'email'} type={'email'} />
                        <Input campoInvalido={true} name={'telefono'} type={'text'} />
                        <Input campoInvalido={mensajeInvalid} valorInput={getMensaje} name={'mensaje'} type={'textarea'} />
                        <div className="col col-md-5">
                            <input type='submit' value={btnValue} className="form_button" />
                        </div>
                    </form>
                </div>

            </div>
            <div className='position-absolute d-flex justify-content-center col-12 '>
                {showHide
                    ? <PopUp valor={showHide} ocultar={ocultarPopUp} />
                    : ''}
            </div>
            <div className={showHide
                ? "div-negro"
                : 'd-none'
            }>
            </div>
        </div>
    )
}
export default Contacto;