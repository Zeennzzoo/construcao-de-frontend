import React from 'react'

const ComponentesNomeEspec = () => {
    const alunos = [
        {nome:"Enzo", sobrenome:"Costa"},
        {nome:"Pedro", sobrenome:"Kaiser"},
        {nome:"Guilherme", sobrenome:"Segatto"}
    ]
    const index = 2
    const aluno = alunos[index]
    return (
    <div>
        <h1>{aluno.nome} {aluno.sobrenome}</h1>
    </div>
  )
}

export default ComponentesNomeEspec