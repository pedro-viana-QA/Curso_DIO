//função que calcula vitorias - derrotas e retorna o resultado
let saldoVitorias = 10
let saldoDerrotas = 8
let nivel
do{
function rankeadas(vitorias,derrotas){
    vitorias = (vitorias - derrotas)
    return vitorias
}

let resultado = rankeadas(saldoVitorias,saldoDerrotas)

rankeadas()

if(resultado <= 10){
    nivel = 'Ferro'
}else if(resultado >= 11 & resultado <=20){
    nivel = 'Bronze'
}else if(resultado >= 21 & resultado <=50){
    nivel = 'Prata'
}else if(resultado >= 51 & resultado <=80){
    nivel = 'Ouro'
}else if(resultado >= 81 & resultado <=90){
    nivel = 'Diamante'
}else if(resultado >= 91 & resultado <=100){
    nivel ='Lendário'
}else{
    nivel = 'Imortal'
}

saldoVitorias = (saldoVitorias + 20)
saldoDerrotas = (saldoDerrotas + 8)

//exibindo o valor depois da variável nível receber valor
//código alterado para add o uso de interpolação de strings
console.log(`O Herói tem saldo de ${resultado} vitórias e está no nível de ${nivel}`)

}while((saldoVitorias - saldoDerrotas) < 115)