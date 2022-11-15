import React, { useContext, createContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
const I18nextContext = createContext()
export const useI18nextContext = () => useContext(I18nextContext)

function I18NextProvider({ children }) {
    const [t, i18n] = useTranslation("global");
    const [lenguaje, setLenguaje] = useState('es');
    const [langBoolean, setLangBoolean] = useState(true);

    const cambiarIdioma = () => {
        if (lenguaje === 'es') {
            setLenguaje('en');
            i18n.changeLanguage('en')
            setLangBoolean(false)
        }
        else {
            setLenguaje('es')
            i18n.changeLanguage('es')
            setLangBoolean(true)
        }
    }

    return (
        <I18nextContext.Provider value=
            {{
                cambiarIdioma,
                t,
                langBoolean
            }}>
            {children}
        </I18nextContext.Provider>
    )
}

export default I18NextProvider;