import React, { useState } from 'react'

function Jogo() {

  const [resultado, setResultado] = useState('')

  function Classificar() {

    let pontos = Number(prompt("Quantos pontos?"))

    if (pontos <= 10) {
      setResultado("Mogo o betinha...")
    }

  }

  return (
    <div className="jogo">
      <h2>Jogo do Mano Juca</h2>

      <button onClick={Classificar}>
        Classificar
      </button>

      {resultado}
    </div>
  )
}

export default Jogo