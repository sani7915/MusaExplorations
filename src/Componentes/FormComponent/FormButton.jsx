import React from 'react'
import { useTranslation } from 'react-i18next';

const FormButton = ({ changeBtnValue }) => {
    const [t] = useTranslation("global");
    return (
        <div>
            <button type="submit" disabled={!changeBtnValue}  className='form_button'>
                {changeBtnValue
                    ? t("newsletterFormBtnValue.Static")
                    : t("newsletterFormBtnValue.Send")
                }
            </button>
        </div>
    )
}

export default FormButton