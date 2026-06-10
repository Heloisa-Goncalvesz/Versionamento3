let idades = new Array(4);
for (let i = 0; i < 4; i++) {
    idades[i] = parseInt(prompt("Digite a idade da " + (i + 1) + " pessoa:"));
}
let maiorIdade = idades[0];
let posicaoMaior = 0;

for (let i = 0; i < 4; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaior = i;
    }    
}
alert("Todas as idades digitadas: " + idades + 
    "\n\nA maior idade digitada foi: " + maiorIdade + " anos." +
    "\nEla foi digitada na " + (posicaoMaior + 1) + " posição.");
