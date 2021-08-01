import React from 'react'
import styles from './mainButton.module.css'

function MainButton({label}) {
    return (
        <button className={styles.button}>{label}</button>
    )
}

export default MainButton



