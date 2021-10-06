//criando array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

//contar elementos de um array
console.log(['a', 'b', 'c'].length)

//Transformar uma cadeia de caracteres em elementos de um array
let word = 'manipulação'
console.log(Array.from(word))

//adicionar um item no final do array
let techs = ['html', 'css', 'js']

techs.push('nodejs')


//adicionar no começo
techs.unshift('sql')

//remover do fim
//techs.pop()

//remover do começo
//techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)

//encontrar a posição de um elemento do array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)
