export default function Timeline({ titulo, itens }) {
  return (
    <div className="timeline">
      <h3 className="timeline__titulo">{titulo}</h3>
      <ol>
        {itens.map((item) => (
          <li key={item.titulo + item.periodo}>
            <span className="timeline__periodo">{item.periodo}</span>
            <h4>{item.titulo}</h4>
            <p className="timeline__local">{item.local}</p>
            <p className="timeline__descricao">{item.descricao}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
