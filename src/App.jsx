import Hero from './components/Hero.jsx'
import Frame from './components/Frame.jsx'
import Timeline from './components/Timeline.jsx'
import Stacks from './components/Stacks.jsx'
import BrowserCard from './components/BrowserCard.jsx'
import { perfil, experiencias, formacao, stacks, projetos, contatos } from './data.js'

export default function App() {
  return (
    <>
      <Hero nome={perfil.nome} papel={perfil.papel} />

      <main>
        <Frame id="sobre" rotulo="sobre" titulo="Sobre mim">
          <div className="sobre">
            {perfil.sobre.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Frame>

        <Frame id="trajetoria" rotulo="trajetória" titulo="Trajetória">
          <div className="trajetoria">
            <Timeline titulo="Experiência" itens={experiencias} />
            <Timeline titulo="Formação" itens={formacao} />
          </div>
        </Frame>

        <Frame id="stacks" rotulo="stacks" titulo="Stacks">
          <Stacks stacks={stacks} />
        </Frame>

        <Frame id="projetos" rotulo="projetos" titulo="Projetos">
          <div className="projetos">
            {projetos.map((p) => (
              <BrowserCard key={p.titulo} projeto={p} />
            ))}
          </div>
        </Frame>

        <Frame id="contato" rotulo="contato" titulo="Contato">
          <ul className="contact-list">
            {contatos.map((c) => (
              <li key={c.rotulo}>
                <span className="contact-label">{c.rotulo}</span>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.texto} <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            ))}
            <li>
              <span className="contact-label">Local</span>
              <span>{perfil.local}</span>
            </li>
          </ul>
        </Frame>
      </main>

      <footer>
        <p>Desenvolvido por {perfil.nome} com React</p>
      </footer>
    </>
  )
}
