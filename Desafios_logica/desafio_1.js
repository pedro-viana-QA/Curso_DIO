let nivelExperiencia = 1000
while(nivelExperiencia < 12000){
const nomeJogador = "Pedro"
let classificacao = ''
let mensagem1 = "O herói de nome " + nomeJogador +  " está no nível de "
let mensagem2 = " com " + nivelExperiencia.toFixed(2) + " XP" 


if(nivelExperiencia <= 1000){
    classificacao = 'Ferro'
    console.log(mensagem1 + classificacao + mensagem2)
}else if(nivelExperiencia >= 1001 & nivelExperiencia<= 2000){
    classificacao = 'Bronze'
    console.log(mensagem1 + classificacao + mensagem2)
}else if(nivelExperiencia >= 2001 & nivelExperiencia <= 5000){
    classificacao = 'Prata';
    console.log(mensagem1 + classificacao + mensagem2)
}else if(nivelExperiencia >= 5001 & nivelExperiencia <= 7000){
    classificacao = 'Ouro';
    console.log(mensagem1 + classificacao + mensagem2)
}else if(nivelExperiencia >= 7001 & nivelExperiencia<= 8000){
    classificacao = 'Platina';
    console.log(mensagem1 + classificacao + mensagem2)
}else if(nivelExperiencia >= 8001 & nivelExperiencia <= 9000){
    classificacao = 'Ascendente';
    console.log(mensagem1 + classificacao + mensagem2)
}else if(nivelExperiencia >= 9001 & nivelExperiencia <= 10000){
    classificacao = 'Imortal';
    console.log(mensagem1 + classificacao + mensagem2)
}else{
    classificacao = 'Radiante';
    console.log(mensagem1 + classificacao + mensagem2)
}
nivelExperiencia = (nivelExperiencia + 990 )}