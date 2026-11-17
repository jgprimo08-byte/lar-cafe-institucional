import React, { useEffect, useRef, useState } from "react";
import { pages } from "./data/navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import History from "./pages/History";
import Coffees from "./pages/Coffees";
import Contact from "./pages/Contact";
const path = () => location.hash.slice(1) || "inicio";

export default function App() {
  const [route, setRoute] = useState(path);
  const [open, setOpen] = useState(false);
  const main = useRef(null);
  useEffect(() => {
    const update = () => {
      setRoute(path());
      setOpen(false);
      window.scrollTo(0, 0);
      requestAnimationFrame(() => main.current?.focus({ preventScroll: true }));
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    document.title =
      "Lar Café — " +
      (pages.find((p) => p[0] === route)?.[1] || "Página não encontrada");
  }, [route]);
  const current = pages.some((p) => p[0] === route);
  return (
    <>
      <a
        className="skip"
        href="#conteudo"
        onClick={(e) => {
          e.preventDefault();
          main.current.focus();
        }}
      >
        Pular para o conteúdo
      </a>
      <header>
        <div className="header-inner">
          <a href="#inicio" aria-label="Lar Café — Início">
            <Logo />
          </a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "Fechar ×" : "Menu ☰"}
          </button>
          <nav
            id="navigation"
            className={open ? "open" : ""}
            aria-label="Navegação principal"
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
            }}
          >
            {pages.map(([id, title]) => (
              <a
                key={id}
                href={"#" + id}
                aria-current={route === id ? "page" : undefined}
              >
                {title}
              </a>
            ))}
          </nav>
          <a href="#contato" className="header-link">
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
      <main ref={main} tabIndex="-1" id="conteudo">
        {route === "inicio" ? (
          <Home />
        ) : route === "historia" ? (
          <History />
        ) : route === "cafes" ? (
          <Coffees />
        ) : route === "contato" ? (
          <Contact />
        ) : (
          <section className="wrap closing">
            <h1>Página não encontrada</h1>
            <Link to="inicio">Voltar ao início</Link>
          </section>
        )}
      </main>
      <footer>
        <div className="wrap footer-top">
          <div>
            <a href="#inicio" aria-label="Lar Café — voltar ao início">
              <Logo />
            </a>
            <p>Café, acolhimento e boas conversas.</p>
          </div>
          <nav aria-label="Navegação do rodapé">
            {pages.map(([id, title]) => (
              <a key={id} href={"#" + id}>
                {title}
              </a>
            ))}
          </nav>
          <a
            className="back-top"
            href={current ? "#" + route : "#inicio"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Voltar ao topo ↑
          </a>
        </div>
        <div className="wrap footer-bottom">
          <span>Lar Café · Genuine Coffee House</span>
          <span>Protótipo acadêmico A2 · Conteúdo em validação</span>
        </div>
      </footer>
    </>
  );
}
