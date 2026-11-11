export default function Frame({ id, rotulo, titulo, children }) {
  return (
    <section id={id} className="frame" data-frame-label={rotulo}>
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}
