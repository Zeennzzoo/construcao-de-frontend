import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componentes from './Componentes/Componentes'
import ComponentesNomeEspec from './Componentes/ComponentesNomeEspec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Componentes/>
    <ComponentesNomeEspec/>
    </div>
    
  )
}

export default App
