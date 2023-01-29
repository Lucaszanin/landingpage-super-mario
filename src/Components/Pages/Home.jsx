import React, { useState } from "react";
import Header from "../Partials/Header";
import styles from "./Home.module.css";
import titulo from "../../Assets/titulo.png";
import mario from "../../Assets/super-mario-chars.png";
import video from "../../video/video-mario.mp4";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

function Home() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className={styles.backgroundVideo}>
        <video className={styles.video} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Header />
      <main className={`${styles.main} container`}>
        <section className={`${styles.contentLeft}`}>
          <img src={titulo} alt="Titulo do filme" />
          <p>
            Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão
            parar no reino dos cogumelos, governado pela Princesa Peach, mas
            ameaçado pelo rei dos Koopas, que faz de tudo para conseguir reinar
            em todos os lugares.
          </p>
          <Button onClick={()=> setModal(true)}/>
        </section>
        <section className={styles.contentRight}>
          <img src={mario} alt="Imagem da turma do Super Mario" />
        </section>
      </main>
      {modal ? <Modal onClose={() => setModal(false)} /> : null}
    </div>
  );
}

export default Home;
