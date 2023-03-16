// tipo de dados
// booleanos

// conversão implicita // == compara só o valor e === compara não so o valor, conpara tudo.
const numero = 456;
const numeroString = "456";
console.log(numero + Number (numeroString));

// conversão explicita

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis