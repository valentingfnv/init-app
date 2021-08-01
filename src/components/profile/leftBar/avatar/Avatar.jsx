import React from 'react'
import avatar from './avatar.module.css'




export default function Avatar () {
    return (
        <div className={avatar.container}>
            <div className={avatar.image}></div>
        </div>
    )
}