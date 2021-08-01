import React from "react";
import Logo from "../microCopmonents/Logo";
import header from "./header.module.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={header.container}>
      <div>
        <NavLink to="/profile">
          <Logo />
        </NavLink>
      </div>
      <div className={header.links}>
        <NavLink to="/singin"><h3>sing<span>In</span></h3></NavLink>
        <NavLink to="checkin"><h3>check<span>In</span></h3></NavLink>
      </div>
    </header>
  );
}

export default Header;
