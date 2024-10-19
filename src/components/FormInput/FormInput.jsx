import { useState } from "react";
import "./FormInput.css"

const FormInput = (props)=>{
    let [focused,setFocused] = useState(false)

    //destructureing props
    const {label,errorMessage,id,value, error_message,status ,...inputProps} = props;
    const handleBlur =(e)=>{
        setFocused(true)
    }
    return(
        <div className="formInput">
            <label className="formInput__label">{label}</label>
            <input className="formInput__input "
            {...inputProps} 
            onBlur={handleBlur}
            focused = {focused.toString()}
            disabled = {status==='submitting'}
            />
            <span className="formInput_error">{errorMessage}</span>
            {error_message && error_message.map((error,index)=>(
                <span key={index} className="formInput_apiError">{error}</span>
            ))}
        </div>
    )
}

export default FormInput;