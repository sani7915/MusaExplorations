import React, { createContext, useContext, useRef, useState,useEffect } from 'react'
import emailjs from '@emailjs/browser';

const formContext = createContext()
export const useFormContext = () => useContext(formContext);

const FormContext = ({ children }) => {
    const form = useRef();
    const [btnValue, setBtnValue] = useState('ENVIAR MENSAJE')
    const [nombre, setNombre] = useState()
    const [nombreInvalid, setNombreInvalid] = useState(true)
    const [email, setEmail] = useState()
    const [emailInvalid, setEmailInvalid] = useState(true)
    const [mensaje, setMensaje] = useState()
    const [mensajeInvalid, setMensajeInvalid] = useState(true)
    const [showHide, setShowHide] = useState(false)

    const getNombre = (e) => {
        setNombre(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getMensaje = (e) => {
        setMensaje(e.target.value)
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
        if (mensaje !== undefined && mensaje.length === 0) {
            setMensajeInvalid(false)
        } else { setMensajeInvalid(true) }

    }, [nombre, email, mensaje])

    const validarCampos = (e) => {
        e.preventDefault();
        if (!nombre) {
            setNombreInvalid(false)
        } else if (!email) {
            setEmailInvalid(false)
        } else if (!mensaje) {
            setMensajeInvalid(false)
        }
        else {
            setBtnValue('ENVIANDO...')

            emailjs.sendForm('default_service', 'template_z22mdnp', form.current, 'V0UpoFvwv3OOEjbQ') //B
                .then(() => {
                    setBtnValue('ENVIAR MENSAJE')
                    form.current.reset()
                    setNombre(!nombre)
                    setEmail(!email)
                    setMensaje(!mensaje)
                    setShowHide(true)
                }, () => {
                    setBtnValue('ENVIAR MENSAJE')
                    form.current.reset()
                    setNombre(!nombre)
                    setEmail(!email)
                    setMensaje(!mensaje)
                    setShowHide(true)
                });
        }
    }

    // const getTelefono = (e) => {
    //     setMensaje(e.target.value)
    // }
    return (
        <formContext.Provider value={{
            btnValue,
            nombre,
            nombreInvalid,
            email,
            emailInvalid,
            mensaje,
            mensajeInvalid,
            showHide,
            getNombre,
            getEmail,
            getMensaje,
            validarCampos,
            form, ocultarPopUp
        }}>
            {children}
        </formContext.Provider>
    )
}

export default FormContext