export default function BrowserCard({ projeto }) {
  return (
    <article className="browser-card">
      <div className="browser-card__bar">
        <span className="browser-card__dot" />
        <span className="browser-card__dot" />
        <span className="browser-card__dot" />
        <span className="browser-card__url">{projeto.url}</span>
      </div>
      <div className="browser-card__body">
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <ul className="tags">
          {projeto.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {projeto.link && (
          <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="btn-link">
            Ver repositório no GitHub &rarr;
          </a>
        )}
      </div>
    </article>
  )
}
