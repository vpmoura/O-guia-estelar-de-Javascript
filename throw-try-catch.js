//throw
function sayMyName(name = ''){
    if(name === ''){
        throw 'Nome é obrigatório'
    }
    console.log(name)
}

//try..catch
try{
    sayMyName('Mayk')
}catch(e){
    console.log(e)
}
console.log('Após o try/catch')