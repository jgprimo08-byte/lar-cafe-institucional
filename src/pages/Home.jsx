import React from "react";
import Link from "../components/Link";
import Photo from "../components/Photo";
import Kicker from "../components/Kicker";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Kicker>SEJA BEM-VINDO À LAR CAFÉ</Kicker>
          <h1>
            Mais que café.
            <br />
            Um lugar para <em>acolher.</em>
          </h1>
          <p>Café, uma boa conversa e a sensação de estar em casa.</p>
          <div className="actions">
            <Link to="historia">Conheça nossa história</Link>
            <a className="text-link" href="#cafes">
              Explore nossos cafés <span aria-hidden="true">→</span>
            </a>
          </div>
          <span className="hero-note">
            GENUINE COFFEE HOUSE <i /> EST. 2016
          </span>
        </div>
        <figure className="hero-photo">
          <Photo />
          <figcaption>Um olhar para dentro da nossa casa.</figcaption>
        </figure>
      </section>
      <div className="values-strip" aria-label="Valores da Lar Café">
        <span>Café de qualidade</span>
        <b aria-hidden="true">✳</b>
        <span>Conversas que aproximam</span>
        <b aria-hidden="true">✳</b>
        <span>Acolhimento</span>
      </div>
      <section className="wrap story-teaser">
        <div>
          <Kicker>NOSSA ESSÊNCIA</Kicker>
          <h2>
            Tem histórias que começam
            <br />
            com um café.
          </h2>
        </div>
        <div>
          <p>
            A Lar Café tem o acolhimento no centro da sua identidade. Um convite
            para conhecer novos sabores, compartilhar histórias e ficar mais um
            pouco.
          </p>
          <a className="text-link" href="#historia">
            Conheça o que nos move <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <section className="coffee-banner wrap">
        <Kicker>NOSSOS CAFÉS</Kicker>
        <h2>
          Uma pausa.
          <br />
          Muitas possibilidades.
        </h2>
        <p>
          Nosso propósito é apresentar cafés de qualidade de diferentes lugares
          do mundo, em um ambiente acolhedor.
        </p>
        <Link to="cafes">Conheça nossos cafés</Link>
        <span className="decor" aria-hidden="true">
          ✳
        </span>
      </section>
      <section className="wrap closing">
        <Kicker>VAMOS NOS CONHECER?</Kicker>
        <h2>
          O próximo encontro
          <br />
          pode ser aqui.
        </h2>
        <Link to="contato">Informações de contato</Link>
      </section>
    </>
  );
}
