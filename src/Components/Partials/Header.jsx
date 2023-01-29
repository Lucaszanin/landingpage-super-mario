import React from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/logo-chapeu-mario.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo Super Mário" />
        </div>
        <nav>
          <ul className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/detalhes">Detalhes</Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
