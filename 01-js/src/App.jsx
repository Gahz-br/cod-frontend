import './App.css'

function App() {

  function PetShop() {
  let gramas = Number(prompt('Digite o peso da ração em gramas: '))

  let quilos = gramas / 1000
  let preco = quilos * 10

  alert('O preço da ração é R$ ' + preco.toFixed(2))
}
  
  
  function RomeroBrique() {
  let valorPago = Number(prompt('Quanto Romero pagou na obra? '))

  let lucro = valorPago * 2
  let precoVenda = valorPago + lucro

  alert('O preço de venda da obra será R$ ' + precoVenda.toFixed(2))
}

  function ManoJuca() {

  let salario = Number(prompt('Digite o salário: '))
  let moradia = Number(prompt('Digite o valor da moradia: '))
  let agua = Number(prompt('Digite o valor da água: '))
  let luz = Number(prompt('Digite o valor da luz: '))
  let internet = Number(prompt('Digite o valor da internet: '))
  let gasolina = Number(prompt('Digite o valor da gasolina: '))
  let streamings = Number(prompt('Digite o valor dos streamings: '))
  let telefone = Number(prompt('Digite o valor do telefone: '))
  let outros = Number(prompt('Digite o valor de outros gastos: '))

  let sobra = salario - moradia - agua - luz - internet - gasolina - streamings - telefone - outros

  alert('Mano Jucasobraram R$ ' + sobra.toFixed(2) + ' para guardar.')
}

  function Sarumano() {
    let shows = Number(prompt('Quantos shows estão marcados? '))
    let precoBomba = Number(prompt('Qual o preço de cada bomba de fumaça? '))

    let bombas = shows * 7
    let dinheiro = bombas * precoBomba

    alert('Sarumano precisa comprar ' + bombas + ' bombas de fumaça.')
    alert('Ele precisa mobilizar R$ ' + dinheiro.toFixed(2))
  }

  function CapitaoGanso() {
    let gastos = Number(prompt('Digite o valor dos gastos: '))
    let fatIngressos = Number(prompt('Digite o faturamento com ingressos: '))
    let fatItens = Number(prompt('Digite o faturamento com itens: '))

    let faturamentoTotal = fatIngressos + fatItens
    let lucro = faturamentoTotal - gastos

    let percentual = 0

    if (gastos > 0) {
      percentual = (lucro / gastos) * 100
    }

    alert('Lucro: R$ ' + lucro.toFixed(2))
    alert('Lucro percentual: ' + percentual.toFixed(2) + '%')
  }

  function DonaBete() {
    let bruto = Number(prompt('Digite o faturamento bruto: '))
    let premiacoes = Number(prompt('Digite o valor das premiações: '))
    let presentes = Number(prompt('Digite o valor dos presentes: '))
    let comissoes = Number(prompt('Digite o valor das comissões: '))

    let lucro = bruto - premiacoes - presentes - comissoes

    alert('O lucro da Dona Bete foi de R$ ' + lucro.toFixed(2))
  }

  function freteTeles() {
    let peso = Number(prompt('Digite o peso: '))
    let distancia = Number(prompt('Digite a distância: '))
    let volume = Number(prompt('Digite o volume: '))

    let frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume)

    alert('O valor do frete é R$ ' + frete.toFixed(2))
  }

  function chance() {
    let n = Number(prompt('Quantas vezes o candidato usou o celular? '))

    let chance = (0.1 / (1 + 500 * n)) * 100

    alert('Chance de aprovação: ' + chance + '%')
  }

  function TELES() {
    let pesoBruto = Number(prompt('Digite o peso bruto (kg): '))
    let tara = Number(prompt('Digite a tara (kg): '))

    let carga = pesoBruto - tara

    alert('O peso da carga é ' + carga + ' kg')
  }

  function RECEBEDIA() {
    let salario = Number(prompt('Digite o salário mensal: '))
    let dias = Number(prompt('Digite a quantidade de dias trabalhados: '))

    let salarioDia = salario / dias

    alert('Junin recebe R$ ' + salarioDia.toFixed(2) + ' por dia.')

    let salarioSemanal = salarioDia * 5

    alert('O salário semanal é R$ ' + salarioSemanal.toFixed(2))
  }

  function Custoigreja() {
    let custoMensal = Number(prompt('O custo mensal foi: '))
    let dizimosRECEB = Number(prompt('Quanto foi recebido de doações e dízimos: '))

    let quantofalta = custoMensal - dizimosRECEB

    alert('Falta R$ ' + quantofalta + ' para pagar os custos mensais.')
  }

  function larajaT() {
    let laranjInic = Number(prompt('Quantidade inicial de laranjas: '))
    let laranjaFinal = Number(prompt('Quantidade final de laranjas: '))

    let Totallaranjas = laranjInic - laranjaFinal

    alert('Foram vendidas ' + Totallaranjas + ' laranjas')
  }

  function JARes() {
    let caminhoes = Number(prompt('Quantidade de caminhões: '))

    let jares = caminhoes * 50
    let vendas = jares * 90
    let transporte = caminhoes * 450
    let lucro = vendas - transporte

    alert('O lucro da temporada será de R$ ' + lucro)
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

    let pontos = vitorias * 3 + Empates

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
      <h2>Exercícios Supimpas</h2>

      <button onClick={calcularPontos}>Campeonato</button>
      <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
      <button onClick={DEVS}>Guilherme Portões</button>

      <hr />

      <button onClick={JARes}>Gael e Jarés</button>
      <button onClick={larajaT}>Trajeto Pomar</button>
      <button onClick={Custoigreja}>Igreja custos</button>
      <button onClick={testar}>Testar</button>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={RECEBEDIA}>Dias Trabalhados</button>
      <button onClick={TELES}>Caminhão Carga</button>
      <button onClick={chance}>CHANCES</button>
      <button onClick={freteTeles}>Preço Frete</button>
      <button onClick={DonaBete}>Lucro Bete</button>
      <button onClick={CapitaoGanso}>Capitão Ganso Lucro</button>
      <button onClick={Sarumano}>Sarumano</button>
      <button onClick={ManoJuca}>Contas Juca</button>
      <button onClick={RomeroBrique}>Obra Romero</button>
      <button onClick={PetShop}>Pet Shop Ron Bernardo</button>

    </div>
  )
}

export default App