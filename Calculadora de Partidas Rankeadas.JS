// Função para calcular Saldo e determinar nivel do jogador

function calcularRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;


// Determinando o nivel com base no numero de vitórias
let nivel = "" ;
if (vitorias < 10) {
    nivel = "Férro";
}   else if (vitorias <= 20) {
    nivel = "Bronze";
}   else if (vitorias<= 50) {
    nivel = "Prata";
}   else if (vitorias <= 80) {
    nivel = "Ouro";
}   else if (vitorias <=90) {
    nivel ="Diamante";
}   else if (vitorias <= 100) {
    nivel = "Lemdário";
}   else (vitorias >= 101) 
    nivel = "imortal";
}


    
