//1. Declare uma variável de nome weight
let weight
//2. Que tipo de dado é a variável acima?
console.log(typeof weight)

//3. Declare uma varável e atribua valores para cada um dos dados: name, age, weight, isSubscribed

let person = {
    name: 'Vinicius',
    age: 24,
    weight: 75,
    isSubscribed: true
}

console.log(`${person.name} de idade ${person.age} pesa ${person.weight} kg.`)

//5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

//6. Reatribua valor para a variável acima, colcando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

students = [
    person
]

console.log(students)

//7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])

//8. Crie um novo student e coloque na posição 1 do Array students

const jonh = {
    name: 'John',
    age: 23,
    weight: 74.8
}

students[1] = jonh
console.log(students)