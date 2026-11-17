import React from "react";
import Link from "../components/Link";
import Photo from "../components/Photo";
import Kicker from "../components/Kicker";
import Intro from "../components/Intro";

export default function Coffees() {
  return (
    <>
      <Intro
        label="NOSSOS CAFÉS"
        title={
          <>
            O mundo cabe
            <br />
            em uma boa conversa.
          </>
        }
      >
        Apresentar cafés de qualidade de diferentes lugares do mundo é parte do
        propósito da Lar Café.
      </Intro>
      <section className="wrap cafe-feature">
        <div>
          <Kicker>CAFÉ & ENCONTROS</Kicker>
          <h2>
            Sabores para conhecer.
            <br />
            Um lugar para ficar.
          </h2>
          <p>
            O café é o começo. O ambiente acolhedor e as conversas fazem parte
            da experiência que queremos compartilhar.
          </p>
          <div className="notice">
            <strong>Nosso cardápio está sendo preparado para o site.</strong>
            <p>
              Em breve, esta página reunirá os cafés e suas descrições, após
              confirmação com a cafeteria.
            </p>
          </div>
          <Link to="contato">Veja informações de contato</Link>
        </div>
        <Photo />
      </section>
      <section className="wrap faq">
        <Kicker>ANTES DA SUA VISITA</Kicker>
        <h2>Vamos conversar sobre café?</h2>
        <details>
          <summary>Onde encontro o cardápio atualizado?</summary>
          <p>
            Os itens e as descrições ainda aguardam confirmação dos
            proprietários. O cardápio será incluído aqui após essa revisão.
          </p>
        </details>
        <details>
          <summary>Já posso comprar pelo site?</summary>
          <p>
            Esta versão apresenta a Lar Café. As compras online fazem parte de
            uma etapa futura e ainda não estão disponíveis.
          </p>
        </details>
      </section>
    </>
  );
}
