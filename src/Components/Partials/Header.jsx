import React from "react";
import styles from "./Header.module.css";
import logo from "../../Assets/logo-chapeu-mario.png";

function Header() {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo Super Mário" />
        </div>
        <nav>
          <ul className={styles.nav}>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Detalhes</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
