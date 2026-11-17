import React from "react";
import Link from "../components/Link";
import Photo from "../components/Photo";
import Kicker from "../components/Kicker";
import Intro from "../components/Intro";

export default function History() {
  return (
    <>
      <Intro
        label="NOSSA HISTÓRIA"
        title={
          <>
            Um café que aproxima.
            <br />
            Uma história que acolhe.
          </>
        }
      >
        Acolhimento, encontros e propósito fazem parte da nossa identidade.
      </Intro>
      <section className="wrap story-grid">
        <figure>
          <Photo />
          <figcaption>
            A Lar Café, pela fotografia original da cafeteria.
          </figcaption>
        </figure>
        <div>
          <Kicker>DE ONDE VIEMOS</Kicker>
          <h2>
            Um espaço para
            <br />
            novos encontros.
          </h2>
          <p>
            Segundo o briefing dos proprietários, a Lar Café surgiu como uma
            extensão de uma ONG que acolhe refugiados de regiões afetadas por
            guerras.
          </p>
          <p>
            O briefing também informa que o lucro da cafeteria é destinado ao
            sustento dessas pessoas.
          </p>
          <aside className="notice">
            <strong>História em revisão</strong>
            <p>
              Este texto aguarda aprovação dos proprietários. O nome da ONG, os
              detalhes da atuação e a destinação dos recursos serão confirmados
              antes da publicação.
            </p>
          </aside>
        </div>
      </section>
      <section className="wrap principles">
        <Kicker>O QUE NOS MOVE</Kicker>
        <div className="three-cols">
          {[
            [
              "01",
              "Acolher",
              "Criar um ambiente em que as pessoas se sintam em casa.",
            ],
            [
              "02",
              "Compartilhar",
              "Apresentar cafés de qualidade de diversos lugares do mundo.",
            ],
            [
              "03",
              "Aproximar",
              "Abrir espaço para uma boa conversa e novas histórias.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="number">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap closing">
        <h2>
          Continue conhecendo
          <br />a nossa casa.
        </h2>
        <Link to="cafes">Nossos cafés</Link>
      </section>
    </>
  );
}
