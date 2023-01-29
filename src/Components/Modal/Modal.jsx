import React from "react";
import styles from "./Modal.module.css";
import closeIcon from '../../Assets/closeIcon.png'

function Modal({ onClose, id = "modal" }) {

  function handleOutsideClick({ target }) {
    if (target.id === id) {
      onClose();
    }
  }

  return (
    <div className={styles.background} id={id} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.headerModal} onClick={onClose}>
          <img src={closeIcon} alt="" />
        </div>
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Cb4WV4aXBpk"
          title="Trailer oficial"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;
