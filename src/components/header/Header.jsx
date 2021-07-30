import React from 'react'
import Logo from '../microCopmonents/Logo'
import header from './header.module.css'

import {NavLink} from "react-router-dom";




function Header () {
    return (
        <header className={header.container}>
            <NavLink to='/profile'><Logo /></NavLink>
            <NavLink to='/singin'>singIn</NavLink>
        </header>
    )
}

export default Header