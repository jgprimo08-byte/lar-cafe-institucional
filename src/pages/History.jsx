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
            A Lar Café nasceu como uma extensão de uma ONG que acolhe pessoas
            refugiadas de regiões afetadas por guerras. Foi desse compromisso com
            o cuidado e a solidariedade que surgiu a ideia de uma cafeteria: um
            espaço onde o acolhimento também pudesse acontecer ao redor de uma
            mesa, entre um café e uma boa conversa.
          </p>
          <p>
            Nossa proposta é apresentar cafés de qualidade de diferentes lugares
            do mundo em um ambiente que faça as pessoas se sentirem em casa.
            Queremos que cada encontro seja uma oportunidade de compartilhar
            histórias, conhecer novos sabores e criar vínculos.
          </p>
          <p>
            Esse propósito vai além da cafeteria. O lucro da Lar Café é destinado
            ao sustento das pessoas acolhidas pela ONG, contribuindo para a
            continuidade desse trabalho.
          </p>
          <p>
            É isso que dá sentido ao nosso nome: ser um lugar de encontro, cuidado
            e pertencimento. Um lar para boas conversas — e para histórias que
            continuam a ser escritas.
          </p>
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
