import React from "react";

const InputForm = ({ label }) => {
    return (
        <div className="input-group has-validation">
            <div className="form-floating  ">
                <input type="text" className="form-control input-style" id="floatingInputGroup2" placeholder=""   required />
                <label>{label}</label>
            </div>
            <div className="invalid-feedback">
                *Este campo es obligatorio
            </div>
        </div>
    )
}
export default InputForm;