/*
    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F
*/

//resolução sem função:

// let nota = 0;

// if(nota >= 90){
//     console.log('Você tirou nota A')
// }
// else if(nota >= 80 && nota <= 89){
//     console.log('Você tirou nota B') 
// }
// else if(nota >= 70 && nota <= 79){
//     console.log('Você tirou nota C')
    
// }
// else if(nota >= 60 && nota <= 69){
//     console.log('Você tirou nota D')
// }
// else {
//     console.log('Você tirou nota F')
// }

//resolução com função:

let returnNota = (nota) => {

    if (nota >= 90) {
        console.log('Você tirou nota A')
    }
    else if (nota >= 80 && nota <= 89) {
        console.log('Você tirou nota B')
    }
    else if (nota >= 70 && nota <= 79) {
        console.log('Você tirou nota C')

    }
    else if (nota >= 60 && nota <= 69) {
        console.log('Você tirou nota D')
    }
    else {
        console.log('Você tirou nota F')
    }
}

returnNota(90)
returnNota(45)
returnNota(65)
returnNota(85)
returnNota(60)
returnNota(89)
returnNota(74)
returnNota(55)
returnNota(47)
