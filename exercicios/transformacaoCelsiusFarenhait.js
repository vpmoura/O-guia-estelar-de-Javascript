/* 
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

//verificação temperatura

function transformaGrau(grau){

    const grauCelsiusTrue = grau.toUpperCase().includes('C');
    const grauFarenheitTrue = grau.toUpperCase().includes('F');

    if(!grauCelsiusTrue && !grauFarenheitTrue){
        throw new Error('Temperatura não identificada')
    }

    //fluxo ideal, F -> C
    let grauAtualizado = Number(grau.toUpperCase().replace('F', ''));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9;
    let simboloGrau = 'C'

    //fluxo alternativo, C -> F
    if(grauCelsiusTrue){
        grauAtualizado = Number(grau.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9/5 + 32;
        simboloGrau = 'F'
    }

    return formula(grauAtualizado) + simboloGrau
}

try {
    console.log(transformaGrau('10C'))
    console.log(transformaGrau('50F'))
    transformGrau('50Z')
} catch (error) {
    console.log(error.message)
}