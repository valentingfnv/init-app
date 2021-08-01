import React from 'react'
import textInput from './textInput.module.css'


const TextInput = ({label,type}) => {
    
    return (
        <div className={textInput.textField}>
            <input type={type} className={textInput.textInput} required/>
            <span className={textInput.bar}></span>
            <label htmlFor="">{label}</label>
        </div>
        
    )
}

export default TextInput