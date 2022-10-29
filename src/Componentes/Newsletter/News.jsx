import React, { useState, useRef, useEffect } from "react";
import PopUp from "../PopUp/PopUp";
import Input from "../Input";
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'



function News({ estilos, titulo, p1, p2,bg }) {
    const [t] = useTranslation("global")
    const form = useRef();
    const [nombre, setNombre] = useState()
    const [nombreInvalid, setNombreInvalid] = useState(true)
    const [email, setEmail] = useState()
    const [emailInvalid, setEmailInvalid] = useState(true)
    const [showHide, setShowHide] = useState(false)

    const getNombre = (e) => {
        setNombre(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    const ocultarPopUp = () => {
        setShowHide(false)
    }

    useEffect(() => {
        if (nombre !== undefined && nombre.length === 0) {
            setNombreInvalid(false)
        } else { setNombreInvalid(true) }
        if (email !== undefined && email.length === 0) {
            setEmailInvalid(false)
        } else { setEmailInvalid(true) }
    }, [nombre, email])

    const validarCampos = (e) => {
        e.preventDefault();
        if (!nombre) {
            setNombreInvalid(false)
        } else if (!email) {
            setEmailInvalid(false)
        }
        else {
            emailjs.sendForm('form_newsletter', 'template_e72zduq', form.current, '4arb9l-QtOeeHFAC') //D
                .then(() => {
                    form.current.reset()
                    setNombre(!nombre)
                    setEmail(!email)
                    setShowHide(true)
                }, () => {
                    form.current.reset()
                    setNombre(!nombre)
                    setEmail(!email)
                    setShowHide(true)
                });
        }
    }

    return (
        <div className={`d-flex justify-content-center py-5 px-3 px-md-0 mt-5 align-items-center ${estilos}`}>
            <div className={`d-flex flex-column align-items-center col-md-11 col-lg-10 col-xl-8 col-xxl-7 my-5 m-md-0 px-4 py-5 p-md-4 ${bg}`}>
                <h3 className="mb-4 arvo"> {titulo}</h3>
                <p className="text-center m-0 fs-5 montserrat ">
                    {p1}
                </p>
                <p className="text-center fs-5 montserrat ">
                    {p2}
                </p>
                <form ref={form} onSubmit={validarCampos} className="d-flex flex-column flex-md-row justify-content-md-between gap-2  mt-2 w-100">
                    <Input campoInvalido={nombreInvalid} valorInput={getNombre} name={'nombre'} type={'text'} label={t("input.LabelNombre")} />
                    <Input campoInvalido={emailInvalid} valorInput={getEmail} name={'email'} type={'email'} label={t("input.LabelEmail")} />
                    <div className="d-flex justify-content-center col-md-4 ">
                        <button type="submit" className="form_button">
                            {(t("newsletterPortada.btnValueStatic"))}
                        </button>
                    </div>
                </form>
            </div>
            <div className={showHide
                ? "div-negro"
                : 'd-none'
            }>
            </div>
            {showHide
                ? <PopUp ocultar={ocultarPopUp} valor={showHide} />
                : ''
            }
        </div>
    )
}

export default News;