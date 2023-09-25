// Variavel para armazenar o nome 
let nome = "Batman" // Depois tu troca o nome do heroi

// Agora para o nivel
let xp = 8000 // depois vc muda o nivel

// Estutura de quantidade de XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp < 2000 ) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp < 5000 ) {
    nivel = "Prata";
} else if (xp >= 5001 && 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && 8000 ) {
    nivel = "Platina Diamante";
} else if (xp >= 8001 && 9000 ) {
    nivel = "Ascendente";
} else if (xp >= 9001 && 10000 ) {
    nivel = "Imortal";
} else {
    nivel = "XP fora da faixa válida"
}

// Saida
console.log("O Heroí de nome " + nome + " está no nível de " + nivel)