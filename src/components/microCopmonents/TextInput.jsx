import React from 'react'
import styles from './textInput.module.css'


const TextInput = ({label,type, refs, onChanges,value}) => {
    
    return (
        <div className={styles.textField}>
            <input onChange={onChanges} ref={refs} type={type} className={styles.textInput} value={value} required/>
            <span className={styles.bar}></span>
            <label htmlFor="">{label}</label>
        </div>
        
    )
}

export default TextInput