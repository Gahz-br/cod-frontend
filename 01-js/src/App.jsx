import './App.css'

function App() {


function Custoigreja() {
  let custoMensal = Number(prompt('O custo da mensal foi: '))
  let dizimosRECEB = Number(prompt('Quanto foi recebido de doações e dizimos: '))
  let quantofalta = custoMensal - dizimosRECEB
  alert('Falta R$' + quantofalta + ' para pagar os complemntos  mensais.')
}

  function larajaT() {
    let laranjInic = Number(prompt('Quantidadede inicial laranjas: '))
    let laranjaFinal = Number(prompt('Quantidade final de laranjas: '))

    let Totallaranjas = laranjInic - laranjaFinal
    alert('Foram vendidas ' +  Totallaranjas + ' Laranjas')
  }

  function JARes() {
    let caminhoes = Number(prompt("Quantidade de caminhões: "))

    let jares = caminhoes * 50
    let vendas = jares * 90
    let transporte = caminhoes * 450
    let lucro = vendas - transporte

    alert("O lucro da temporada será de R$ " + lucro)
  }

  function DEVS() {
    let clt, estagio, pj

    clt = Number(prompt('Quantidade de CLT: '))
    estagio = Number(prompt('Quantidade de Estagiário: '))
    pj = Number(prompt('Quantidade de PJs: '))

    let devsTotais = clt + estagio + pj

    alert('A empresa possui ' + devsTotais + ' desenvolvedores.')
  }

  function trocarSapatos() {
    let qtdPares, precoPar, valorTotal

    qtdPares = Number(prompt('Quantidade de pares: '))
    precoPar = Number(prompt('Preço de cada par: '))

    valorTotal = qtdPares * precoPar

    alert('Valor Total R$ ' + valorTotal.toFixed(2))
  }

  function calcularPontos() {
    let vitorias = Number(prompt('Número de vitórias'))
    let Empates = Number(prompt('Número de Empates'))

    let pontos = vitorias * 3 + Empates * 1

    alert('O time tem ' + pontos + ' pontos')
  }

  function testar() {
    let nome = prompt('Qual o seu nome:')

    let bocaDoSapo = nome

    alert(nome + ', seu nome está na boca do sapo 🐸')
  }

  function calcularMedia() {
    let nota1 = Number(prompt('Qual o valor da primeira nota:'))
    let nota2 = Number(prompt('Qual o valor da segunda nota:'))

    let media = (nota1 + nota2) / 2

    alert('Sua média final: ' + media)
  }

  return (
    <div className="cont-app">

      <h1>JavaScript no React</h1>
      <h2>Exercicios Supimpas</h2>

      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
      <button onClick={DEVS}>Guilherme Portões</button>
      <button onClick={JARes}>Gael e Jarés</button>
      <button onClick={larajaT}>Trajeto Pomar</button>

      <hr />
      <button onClick={Custoigreja}>Igreja custos</button>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>

    </div>
  )
}

export default App