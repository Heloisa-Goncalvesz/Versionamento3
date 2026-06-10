let nomes = new Array(5);
let sexos = new Array(5);
let salarios = new Array(5);

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome do " + (i + 1) + " funcionário:");
    sexos[i] = prompt("Digite o sexo de " + nomes[i] + " (M para Masculino / F para Feminino):").toUpperCase();
    salarios[i] = parseFloat(prompt("Digite o salário de " + nomes[i] + ": R$"));
}

let listaMulheres = "Funcionárias que ganham mais de 5.000,00:\n\n";
let encontrarMulheres = false;

for (let i = 0; i < 5; i++) {
    if (sexos[i] === "F" && salarios[i] > 5000) {
        listaMulheres = listaMulheres + "Nome:" + nomes[i] + " | Salário: R$ " + salarios[i].toFixed(2) + "\n";
        encontrarMulheres = true;
    }    
}

if (encontrarMulheres === false) {
    listaMulheres = "Nenhuma funcionária mulher com o salário acima de 5000,00 foi encontrada"
}
alert(listaMulheres);
