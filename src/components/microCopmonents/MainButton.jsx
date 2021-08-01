import React from 'react'
import mainButton from './mainButton.module.css'

function MainButton({label}) {
    return (
        <button className={mainButton.button}>{label}</button>
    )
}

export default MainButton



