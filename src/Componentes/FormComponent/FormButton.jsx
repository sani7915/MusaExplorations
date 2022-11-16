import React from 'react'

const FormButton = ({ changeBtnValue,initialValue,sendingValue}) => {
    return (
        <div>
            <button type="submit" disabled={!changeBtnValue}  className='form_button'>
                {changeBtnValue
                    ? initialValue
                    : sendingValue
                }
            </button>
        </div>
    )
}

export default FormButton