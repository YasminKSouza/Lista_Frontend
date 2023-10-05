var alunos = [
    { nome: "Rihanna da Silva", notas: [8, 7.5, 9], curso: "Estética e Cosmética" },
    { nome: "Shakira Maria Ribeiro", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "Justin de Souza Bieber", notas: [4, 10, 7], curso: "Música" },
    { nome: "Pedro Álvarez Cabral", notas: [6, 7.6, 7.5], curso: "Administração" },
    { nome: "Clarice Lispector", notas: [6, 7.5, 9.5], curso: "Literatura" },
    { nome: "Maria Leopoldina Bezerra", notas: [1, 9, 10], curso: "Relações Internacionais" },
    { nome: "Luiz Inacio Lula da Silva", notas: [8, 9, 9], curso: "Ciências Sociais" },
    { nome: "Anitta Poderosa Silveira", notas: [4, 4, 9], curso: "Dança Clássica" },
    { nome: "Gustavo Lima e Você", notas: [8, 7.5, 5], curso: "Música" }
];

function calculaMedia(array) {
    for (let aluno of alunos) {
        let media = 0;
        let notas = 0;
        for (let nota of aluno.notas) {
            notas = notas + nota;
        }
        media = notas / (aluno.notas).length
        if (media >= 7) {
            console.log("Nome: " + aluno.nome, "Média: " + media)
        }
    }
}

calculaMedia(alunos);