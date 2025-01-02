// Função para calcular o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para determinar o nível do jogador com base nas vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias <= 20) {
        return "Bronze";
    } else if (vitorias <= 50) {
        return "Prata";
    } else if (vitorias <= 80) {
        return "Ouro";
    } else if (vitorias <= 90) {
        return "Diamante";
    } else if (vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função principal que combina saldo e nível para exibir a mensagem final
function exibirResultado(vitorias, derrotas) {
    let saldo = calcularSaldo(vitorias, derrotas); // Chama a função de saldo
    let nivel = determinarNivel(vitorias);        // Chama a função de nível
    
    console.log(`O Herói tem um saldo de ${saldo} e está no nível ${nivel}.`);
}

// Entrada de dados do usuário
let vitorias = parseInt(prompt("Digite o número de vitórias:"));
let derrotas = parseInt(prompt("Digite o número de derrotas:"));

// Chama a função principal
exibirResultado(vitorias, derrotas);
    
