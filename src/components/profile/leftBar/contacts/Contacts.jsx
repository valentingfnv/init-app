import React from 'react'
import styles from './contacts.module.css'



export default function Contacts (props) {
    return (
        <div className={styles.container}>
            <h3>Contacts</h3>
            <ul>
                {props.contactsItem.map(item => <li key={item.id}>{item.name} - {item.value}</li>)}
            </ul>            
        </div>
    )
}