import React from 'react'
import { useTranslation } from 'react-i18next';

const FormButton = ({ changeBtnValue }) => {
    const [t] = useTranslation("global");
    return (
        <div className="d-flex justify-content-center col-md-4  ">
            <button type="submit" className="form_button">
                {changeBtnValue
                    ? t("newsletterFormBtnValue.Static")
                    : t("newsletterFormBtnValue.Send")
                }
            </button>
        </div>
    )
}

export default FormButton