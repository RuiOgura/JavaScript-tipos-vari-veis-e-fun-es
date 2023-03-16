//Parametros de funções - serve para receber informações p funcionar corretamente. numero1 e numeor2

function soma(numero1, numero2){
      return numero1 + numero2;
}
console.log (soma(2, 2)); // resultado = 2
console.log (soma(46, 89)); // 135
console.log (soma(-71, 91)); // 20

//parametros e argumentos

function nomeIdade(nome, idade){
      return `Meu nome é ${nome} e minha idade é ${idade} anos.`;
}

console.log (nomeIdade("Rui" , 35))


function multiplica(numero1, numero2){
      return numero1 * numero2;
}
//                              9       x     6  =   54
console.log (multiplica (soma (4, 5) , soma (3, 3)))

// ou

function multiplica(numero1 = 1, numero2 = 2){
      return numero1 * numero2;
}
//                               9    x   2   = 18   
console.log (multiplica (soma (4, 5)))


function cumprimentaPessoa(pessoa){
      console.log(`Oi, ${pessoa}!`)
}
     
cumprimentaPessoa('Talita')

// ou

function cumprimentar(){
      return 'Oi gente!'
}
     
function cumprimentaPessoa(nomePessoa) {
      console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}


     //


cumprimentaPessoa('Fulano') // “Oi gente! Meu nome é Fulano”

function comParametro(param) {
      console.log(param)
  }
  comParametro() //undefined