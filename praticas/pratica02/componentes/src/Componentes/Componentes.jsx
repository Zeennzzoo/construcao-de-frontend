import React from 'react'
import ComponentesNomeEspec from './ComponentesNomeEspec'

const Componentes = () => {
    const alunos = [
      {nome:"Enzo", sobrenome:"Costa"},
      {nome:"Pedro", sobrenome:"Kaiser"},
      {nome:"Guilherme", sobrenome:"Segatto"}
    ]

    return (
      <div>
        <ul>
          {alunos.map((aluno, index) => (
            <li key={index}>
              {aluno.nome} {aluno.sobrenome}
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Componentes