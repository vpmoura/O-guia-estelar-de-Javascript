/* 
    Sistemas de gastos familiar
    
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        *receitas: []
        *despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar se a família está com saldo positivo ou negativo
    seguido do valor do saldo
*/

let gastosFamiliar = {
    receitas: [1245, 856, 8000, 500, 798],
    despesas: [8500, 750, 900, 236, 489]
};
let gastosFamiliar1 = {
    receitas: [46546, 65465, 654563, 54654, 455656],
    despesas: [45644, 9787987, 2277, 257485, 5435]
};
let gastosFamiliar2 = {
    receitas: [634561, 56464, 41333, 444140, 5133],
    despesas: [46464, 32333, 7888, 3654, 4222]
};

let returnSoma = array => {
    let totalSoma = 0;
    for (let value of array){
        totalSoma += value;
    }

    return totalSoma
}

let returnSaldo = (gastosFamiliar) => {
    
    let saldoReceita = returnSoma(gastosFamiliar.receitas)
    let saldoDespesa = returnSoma(gastosFamiliar.despesas)

    let totalGastos = saldoReceita - saldoDespesa;

    if(totalGastos > 0){
        console.log(`O seu saldo está positivo, você possui: ${totalGastos} reais na sua conta`)
    }
    else{
        console.log(`O seu saldo está negativo, você possui: ${totalGastos} reais na sua conta`)
    }

}

console.log(returnSaldo(gastosFamiliar2))