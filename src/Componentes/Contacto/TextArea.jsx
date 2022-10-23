import React from "react";

const TextArea = ({label}) => {
    return (
        <div className="input-group has-validation ">
            <div className="form-floating ">
                <textarea type="textarea" className="form-control input-style  " id="floatingInputGroup2" placeholder="Username" required />
                <label>{label}</label>
            </div>
            <div className="invalid-feedback">
               *Este campo es obligatorio
            </div>
        </div>
    )
}
export default TextArea;