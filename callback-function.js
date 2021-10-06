//callback function

function sayMyName(name){
    console.log('Antes de executar a função callback')
    name()
    console.log('depois de executar a funcao callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)