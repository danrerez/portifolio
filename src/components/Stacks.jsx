import { useState } from 'react'

const filtros = [
  { id: 'todas', label: 'Todas' },
  { id: 'umc', label: 'Curso UMC' },
  { id: 'trabalho', label: 'No trabalho' },
]

export default function Stacks({ stacks }) {
  const [filtro, setFiltro] = useState('todas')

  const visiveis = stacks.filter((s) => filtro === 'todas' || s.origem === filtro)
  const areas = [...new Set(visiveis.map((s) => s.area))]
  const contar = (id) => (id === 'todas' ? stacks.length : stacks.filter((s) => s.origem === id).length)

  return (
    <>
      <p className="frame__intro">
        Stacks do curso de Sistemas de Informação da UMC e as que adicionei na prática, desenvolvendo os
        sistemas da Dalsun.
      </p>

      <div className="filtros" role="group" aria-label="Filtrar stacks por origem">
        {filtros.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filtro === f.id}
            className={`filtro ${filtro === f.id ? 'filtro--ativo' : ''}`}
            onClick={() => setFiltro(f.id)}
          >
            {f.label} <span>{contar(f.id)}</span>
          </button>
        ))}
      </div>

      <div className="stacks">
        {areas.map((area) => (
          <div key={area} className="stacks__grupo">
            <h3>{area}</h3>
            <ul>
              {visiveis
                .filter((s) => s.area === area)
                .map((s) => (
                  <li key={s.nome} className={`chip chip--${s.origem}`}>
                    {s.nome}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="legenda">
        <span className="chip chip--umc">Curso UMC</span>
        <span className="chip chip--trabalho">No trabalho</span>
      </p>
    </>
  )
}
