import React from 'react'
import styles from './textInput.module.css'


const TextInput = ({label,type}) => {
    
    return (
        <div className={styles.textField}>
            <input type={type} className={styles.textInput} required/>
            <span className={styles.bar}></span>
            <label htmlFor="">{label}</label>
        </div>
        
    )
}

export default TextInput