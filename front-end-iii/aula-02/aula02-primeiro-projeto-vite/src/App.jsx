import './App.css'

const usuario = {
  nome: "Leo",
  sobrenome: "Almeida",
}

const OlaMundo = () => {
  return (
    <h3> Olá mundo :) </h3>
  )
}

const BoasVindasUsuario = () => {
  return (
    <p> Seja bem vindo {usuario.nome} {usuario.sobrenome} </p>
  )
}

/// Componente funcional do React
function App() {
  return (
  <>
    <OlaMundo />
    <BoasVindasUsuario />
  </>
  )
}

export default App