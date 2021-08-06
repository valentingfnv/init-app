import React from 'react'
import styles from './textInput.module.css'


const TextInput = ({label,type, refs, onChange}) => {
    
    return (
        <div className={styles.textField}>
            <input onChange={onChange} ref={refs} type={type} className={styles.textInput} required/>
            <span className={styles.bar}></span>
            <label htmlFor="">{label}</label>
        </div>
        
    )
}

export default TextInput