import React from "react";
import Logo from "../microCopmonents/Logo";
import styles from "./header.module.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.container}>
      <div>
        <NavLink to="/profile" activeClassName={styles.active}>
          <Logo />
        </NavLink>
      </div>
      <div className={styles.links}>
        <NavLink to="/edit" activeClassName={styles.active}>
          <h3>
            ed<span>It</span>
          </h3>
        </NavLink>
        <NavLink to="/singin" activeClassName={styles.active}>
          <h3>
            sing<span>In</span>
          </h3>
        </NavLink>
        <NavLink to="/checkin" activeClassName={styles.active}>
          <h3>
            check<span>In</span>
          </h3>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
