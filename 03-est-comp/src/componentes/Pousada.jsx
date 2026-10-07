import React, { useState } from 'react'

function Pousada() {

    const [resultado, setResultado] = useState('')

    function Classificar() {

        let dias = Number(prompt("Quantos dias ficará?"))
        let valorDiaria

        if (dias <= 5) {
            valorDiaria = 100
        } else if (dias <= 10) {
            valorDiaria = 90
        } else {
            valorDiaria = 80
        }

        let totalBruto = dias * valorDiaria
        let descontos = totalBruto * 25 / 100
        let multa = 150
        let totalPagar = totalBruto - descontos + multa
        setResultado(totalPagar)
    }
    return (
        <div className='Pousada'>
            <h2>Pousada, Oba!!</h2>
            {/*1: Perguntar quantos dias vai ficar */}
            {/*2: descobrir o valor da diária */}
            {/*3: calcular total bruto */}
            {/*4: calcular desconto */}
            {/*5: calcular total a pagar */}
            {/*6: mostrar resultados */}
            <button onClick={Classificar}>
                Resultado
            </button>
            {resultado}
        </div>

    )
}
export default Pousada