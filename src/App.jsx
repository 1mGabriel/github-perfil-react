import { useState } from 'react'

import Perfil from './components/Perfil/index.jsx'
import ReposList from './components/RepoList/index.jsx'

export function App() {
  const [nomeUsuario, setNomeUsuario] = useState("")
  return(
   <>
   <input type="text" onBlur={(e) =>setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length > 4 &&(
      <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList  nomeUsuario={nomeUsuario}/>
      </>
    )}
   </>
  )
}

export default App
