import React from 'react'

const FormButton = ({ changeBtnValue,initialValue,sendingValue}) => {
    return (
        <>
            <button type="submit" disabled={!changeBtnValue}  className='form_button'>
                {changeBtnValue
                    ? initialValue
                    : sendingValue
                }
            </button>
        </>
    )
}

export default FormButton