import React from "react";
import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Veja o Trailer
    </button>
  );
}

export default Button;
