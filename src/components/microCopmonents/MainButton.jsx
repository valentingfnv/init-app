import React from 'react'
import styles from './mainButton.module.css'

function MainButton({label, ref, onClick}) {
    return (
        <button onClick={onClick} ref={ref} className={styles.button}>{label}</button>
    )
}

export default MainButton



