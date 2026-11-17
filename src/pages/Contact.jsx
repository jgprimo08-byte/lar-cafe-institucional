import React from "react";
import Link from "../components/Link";
import Photo from "../components/Photo";
import Kicker from "../components/Kicker";
import Intro from "../components/Intro";

export default function Contact() {
  return (
    <>
      <Intro
        label="CONTATO"
        title={
          <>
            Toda boa conversa
            <br />
            tem um começo.
          </>
        }
      >
        Estamos preparando as informações para você planejar seu encontro com a
        Lar Café.
      </Intro>
      <section className="wrap contact-grid">
        <div className="contact-card">
          <Kicker>PLANEJE SUA VISITA</Kicker>
          {[
            ["01", "Onde estamos", "Endereço em confirmação."],
            ["02", "Quando vir", "Horários de funcionamento em confirmação."],
            [
              "03",
              "Fale com a gente",
              "Canais oficiais de contato em confirmação.",
            ],
          ].map(([n, t, d]) => (
            <div className="contact-row" key={n}>
              <span className="number">{n}</span>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
              </div>
            </div>
          ))}
          <p className="small">
            Os dados serão disponibilizados após validação com a cafeteria.
          </p>
        </div>
        <figure>
          <Photo />
          <figcaption>
            Esperamos compartilhar bons encontros por aqui.
          </figcaption>
        </figure>
      </section>
      <section className="wrap closing">
        <Kicker>ENQUANTO ISSO</Kicker>
        <h2>
          Conheça a história
          <br />
          por trás do café.
        </h2>
        <Link to="historia">Nossa história</Link>
      </section>
    </>
  );
}
