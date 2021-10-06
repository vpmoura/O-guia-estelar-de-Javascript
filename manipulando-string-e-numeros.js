let string = '123'
console.log(Number(string))

let number = 321
console.log(String(number))

//Descobrindo quantidade de caracteres em palavras e números
let word = 'Paralelepipedo'
console.log(word.length)

let number1 = 1234
console.log(String(number1).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto pro vírgula
let number2 = 44564654646.4454887744654
console.log(number2.toFixed(2).replace('.', ','))

//Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word1 = 'programar é muito bacana!'
console.log(word1.toUpperCase())
console.log(word.toLowerCase())

/*Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto
e onde eram espaços, coloque _
*/

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
console.log(myArray)

let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toLowerCase())

//Verificar se o texto contém a palavra Amor
let phrase1 = 'Eu quero amor!'
console.log(phrase1.includes('amor'))