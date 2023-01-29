import React from "react";
import Header from "../Partials/Header";
import styles from "./Detalhes.module.css";

function Detalhes() {
  return (
    <div className={styles.body}>
      <Header />
      <main>
        <section className={`container ${styles.section}`}>
          <h1 className={styles.title}>
            Super Mario Bros - O filme' ganha novo trailer; ASSISTA
          </h1>
          <h3 className={styles.subTitle}>
            Vídeo mostra mais de Chris Pratt como a voz do encanador da
            Nintendo, além de Jack Black como Bowser e Anya Taylor-Joy como a
            princesa Peach. Estreia está prevista para 2023.
          </h3>
          <div className="content">
            <iframe
              id="video"
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/Cb4WV4aXBpk?autoplay=1&controls=0&loop=1"
              title="Trailer oficial"
              frameborder="1"
              allow="autplay"
            ></iframe>
          </div>
          <div>
            <p className={styles.details}>
              "Super Mario Bros - O filme" ganhou um trailer novo nesta
              terça-feira (29). Assista acima. No vídeo em inglês, é possível
              ouvir um pouco mais da voz de Chris Pratt como o tradicional herói
              dos games, além de entender um pouco mais da história. Na animação
              com estreia prevista para 2023, o encanador da Nintendo precisa
              ajudar a princesa Peach (Anya Taylor-Joy) a defender o Reino do
              Cogumelo contra a invasão do vilão Bowser (Jack Black). Veja
              trailer dublado em português mais abaixo. Além do trio, o elenco
              conta com Charlie Day ("Círculo de fogo") como Luigi e Seth Rogen
              ("O rei leão") como Donkey Kong. A animação é produzida pelo
              estúdio Illumination Entertainment, responsável pela franquia "Meu
              malvado favorito".
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Detalhes;
