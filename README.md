# Versionamento3

## Atividade com Manipulação de Vetores e Análise de Dados (JavaScript)

### 📌 Descrição
Este repositório reúne uma série de exercícios focados na manipulação avançada de vetores em JavaScript. O objetivo principal desta atividade foi trabalhar com estruturas de dados sincronizadas (múltiplos vetores compartilhando o mesmo índice) e gerenciar a alocação de dados de forma dinâmica e elástica, mantendo a regra estrita de **não utilizar métodos nativos de Array** (`.push()`, `.filter()`, `.sort()`) e nem funções prontas do objeto `Math` (`Math.max()`, `Math.min()`).

### 🛠️ Ferramentas Utilizadas
* Visual Studio Code
* Git e GitHub
* Navegador Web / Node.js
* JavaScript

### 📋 Exercícios

1️⃣ **Análise de Maior Idade e Posição**
O programa lê a idade de 4 pessoas, armazena-as num vetor e realiza uma varredura comparativa manual. Ao final, identifica qual foi a maior idade digitada e determina exatamente em qual posição do vetor ela foi inserida, realizando o ajuste de exibição para o usuário final.

2️⃣ **Filtro Sincronizado de Funcionários**
Este algoritmo armazena simultaneamente o nome, o sexo e o salário de 5 funcionários em três vetores distintos. Utilizando um único laço de repetição, o sistema varre as estruturas de forma sincronizada através do índice `[i]` e gera uma listagem exclusiva contendo apenas as funcionárias mulheres que recebem um salário superior a R$ 5.000,00.

3️⃣ **Mapeamento Dinâmico de Alturas (Parada Controlada)**
Um sistema que coleta nomes e alturas sem um limite pré-definido de repetições, utilizando a estrutura `do...while`. Como a proibição do `.push()` impede a expansão automática do vetor, foi implementada uma estratégia de vetor com capacidade máxima associada a um contador elástico de posições. No encerramento, o programa calcula a maior e a menor altura e exibe a quem elas pertencem.

### 💡 Objetivo de Aprendizado
* Dominar o uso de múltiplos vetores de forma sincronizada através de um índice comum.
* Implementar algoritmos manuais de busca de extremos (maior e menor valor) sem funções utilitárias.
* Gerenciar a entrada de dados dinâmicos com estruturas de repetição condicionais (`do...while`).
* Compreender a alocação manual de memória e controle de índices em vetores de tamanho fixo.

### 👩‍💻 Autor(a)
Heloísa Gonçalves Silva.
