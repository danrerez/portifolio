const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#stacks', label: 'Stacks' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Hero({ nome, papel }) {
  return (
    <header className="hero">
      <p className="eyebrow">portfólio | sistemas de informação | UMC</p>
      <h1 className="selection-frame">
        <span>{nome}</span>
      </h1>
      <p className="hero-role">{papel}</p>
      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
