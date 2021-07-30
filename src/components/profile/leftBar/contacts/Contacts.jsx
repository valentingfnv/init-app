import React from 'react'
import contacts from './contacts.module.css'

let contactsItem = [
    {id:1, name:'phone', value:'89287634105' },
    {id:2, name:'mail', value:'valentingfnv@yandex.ru' },
    {id:3, name:'telegram', value:'@valentingfnv' }
]

export default function Contacts () {
    return (
        <div className={contacts.container}>
            <h3>Contacts</h3>
            <ul>
                {contactsItem.map(item => <li key={item.id}>{item.name} - {item.value}</li>)}
            </ul>            
        </div>
    )
}