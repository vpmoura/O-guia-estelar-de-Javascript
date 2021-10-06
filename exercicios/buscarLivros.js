/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//Contar o número de categorias e o número de livros em cada categoria

const numeroCategorias = booksByCategory.length;
console.log(numeroCategorias)

for (let livros of booksByCategory) {
    console.log(`Total de livros da categoria ${livros.category}:`)
    console.log(livros.books.length)
}

//contar o número de autores

const returnNumeroDeAutores = () => {
    let autores = [];

    for (let categoria of booksByCategory) {
        for (let livros of categoria.books) {
            if(autores.indexOf(livros.author) === -1){
                autores.push(livros.author)
            }
        }
    }
    console.log(`Total de autores: ${autores.length}`)
}
returnNumeroDeAutores()
