import React from 'react'
import styles from './title.module.css'


export default function Title ({title}) {
    return (
        
        <div className={styles.container}>
            <h3>{title.firstName} {title.lastName}</h3>
            <p>{title.position}</p>
        </div>
    )
}