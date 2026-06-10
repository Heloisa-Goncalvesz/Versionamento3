let nomes = new Array(100);
let alturas = new Array(100);
let totalPessoas = 0;

let continuar;

do {
    nomes[totalPessoas] = prompt("Digite o nome da" + (totalPessoas + 1) + " pessoa:");
    alturas[totalPessoas] = parseFloat(prompt("Digite a altura de " + nomes[totalPessoas] + " (em metros, ex: 1.75):"));
    
    totalPessoas = totalPessoas + 1;

    continuar = prompt("Deseja cadastrar outra pessoa? (S para Sim / N para Não)").toUpperCase();
} while (continuar === "S" && totalPessoas < 100);

let maiorAltura = alturas[0];
let nomeMaior = nomes[0];

let menorAltura = alturas[0];
let nomeMenor = nomes[0];

for (let i = 1; i < totalPessoas; i++) {
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        nomeMaior = nomes[i]
    }
    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        nomeMenor = nomes[i];
    }
}
alert("Resultados do mapeamento de alturas:\n" +
    "\nA maior altura é de " + maiorAltura.toFixed(2) + "m e pertence a: " + nomeMaior +
    "\nA menor altura é de " + menorAltura.toFixed(2) + "m e pertence a: " + nomeMenor);
