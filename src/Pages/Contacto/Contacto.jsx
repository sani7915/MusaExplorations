import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import naranjas from '../../images/diseño/naranjas_mod.jpg'
import emailjs from '@emailjs/browser';
import Input from '../../Componentes/FormComponent/Input';
import Textarea from '../../Componentes/FormComponent/Textarea';
import FormButton from '../../Componentes/FormComponent/FormButton';
import { useSwalContext } from '../../context/swalCotext';
import broken_pot from '../../images/diseño/broken pot.svg'

const Contacto = () => {
    const { popUpForm } = useSwalContext();
    const [t] = useTranslation("global");
    const form = useRef();
    const [invalidName, setInvalidName] = useState(true);
    const [messageInvalid, setInvalidMessage] = useState(true);
    const [changeBtnValue, setChangeBtnValuue] = useState(true);
    const [invalidEmail, setInvalidEmail] = useState(true);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMensaje] = useState();


    const getNombre = (e) => {
        setName(e.target.value);;
    }
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    const getMensaje = (e) => {
        setMensaje(e.target.value);
    }

    useEffect(() => {
        if (name !== undefined && name.length === 0) {
            setInvalidName(false);
        } else {
            setInvalidName(true);
        }

        if (email !== undefined && email.length === 0) {
            setInvalidEmail(false);
        } else {
            setInvalidEmail(true);
        }

        if (message !== undefined && message.length === 0) {
            setInvalidMessage(false);
        } else {
            setInvalidMessage(true);
        }

    }, [name, email, message]);

    const validarCampos = (e) => {
        e.preventDefault();
        if (!name) {
            setInvalidName(false);
        } else if (!email) {
            setInvalidEmail(false);
        } else if (!message) {
            setInvalidMessage(false);
        }
        else {
            setChangeBtnValuue(false);
            emailjs.sendForm('default_service', 'template_z22mdnp', form.current, 'V0UpoFvwv3OOEjbQ')//B
                .then(() => {
                    form.current.reset();
                    setName(!name);
                    setEmail(!email);
                    setMensaje(!message);
                    setChangeBtnValuue(true);
                }, () => {
                    popUpForm(t("popUpText.contactOk"), t("popUpText.button"))
                    form.current.reset();
                    setName(!name);
                    setEmail(!email);
                    setMensaje(!message);
                    setChangeBtnValuue(true);
                    popUpForm(t("popUpText.error"), t("popUpText.button"), broken_pot);
                });
        }
    }


    return (
        <div className='d-flex flex-column align-items-center justify-content-center p-0' >
            <div className="d-none d-lg-block col-11 col-md-11 col-lg-10 col-xl-8 col-xxl-7 m-auto mt-5 ">
                <h1 className="fs-3 arvo lh-sm ps-md-2">
                    {t("contacto.titulo")}

                </h1>
            </div>
            <div className='container-fluid px-0 '>
                <img src={naranjas} alt={naranjas} className='w-100 naranjas img-fluid' />
            </div>
            <div className="form_contacto d-flex flex-column col-11 col-lg-10 col-xl-8 col-xxl-7">
                <div className='d-flex flex-column align-items-center'>
                    <h1 className="fs-3 arvo lh-sm pt-3 d-lg-none">
                        {t("contacto.titulo")}
                    </h1>
                    <p className="text-center text-md-start px-3 p-md-0 m-0 col-md-10 col-lg-11 col-xl-9 mt-lg-5 fw-bold ">
                        {t("contacto.p1")}
                    </p>
                </div>
                <div className="bg_form_contacto col-11 col-xl-9 m-auto p-4 p-lg-0 mt-3 mt-md-0 mb-4 mb-md-5 mt-lg-4">
                    <form ref={form} onSubmit={validarCampos} className="d-flex flex-column gap-4">
                        <Input
                            campoInvalido={invalidName}
                            valorInput={getNombre}
                            name={'nombre'} type={'text'}
                            label={t("input.LabelNombre")} />
                        <Input
                            campoInvalido={invalidEmail}
                            valorInput={getEmail}
                            name={'email'}
                            type={'email'}
                            label={t("input.LabelEmail")} />
                        <Input
                            campoInvalido={true}
                            name={'telefono'}
                            type={'text'}
                            label={t("input.LabelTelefono")} />
                        <Textarea
                            campoInvalido={messageInvalid}
                            valorInput={getMensaje}
                            name={'mensaje'}
                            type={'textarea'}
                            label={t("input.LabelMensaje")} />
                        <div className='col-md-5'>
                            <FormButton changeBtnValue={changeBtnValue} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Contacto;