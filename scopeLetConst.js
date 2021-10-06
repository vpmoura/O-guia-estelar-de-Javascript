//const e let são locais e só funcionam no escopo onde foram criadas

//console.log('> existe x antes do bloco?', x)
let x = 1
{
    x = 0
    console.log('> existe x?', x)
}

console.log('> existe x depois do bloco?', x)