// Função de pesquisa nas sessões
function searchSession() {
    const input = document.querySelector('.pesquisa-input');
    const button = document.querySelector('.pesquisa-botao');

    button.addEventListener('click', () => {
        const query = input.value.toLowerCase();
        const sections = ['git e github', 'pré-requisitos', 'passo a passo', 'comandos', 'quiz'];

        sections.forEach((section, index) => {
            if (section.includes(query)) {
                location.href = `#sessao${index + 1}`;
            }
        });
    });
}


// Função para adicionar um novo comentário
function addComment() {
    const form = document.querySelector('.comentarios');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.nome.value;
        const email = event.target.email.value;
        const comment = event.target.comentario.value;

        const commentSection = document.createElement('div');
        commentSection.innerHTML = `
            <p><strong>${name}</strong> (${email})</p>
            <p>${comment}</p>
        `;
        document.body.appendChild(commentSection);
    });
}

// Funções com Arrays
function arrayFunctions() {
    const commands = ['git init', 'git add', 'git commit', 'git push', 'git pull'];
    // Adicionar um comando ao array
    commands.push('git status');
    console.log(commands);

    // Remover o primeiro comando do array
    commands.shift();
    console.log(commands);

    // Iterar sobre o array e mostrar cada comando no console
    commands.forEach(command => console.log(command));
}

// Funções com Strings
function stringFunctions() {
    const sampleText = 'Bem-vindo ao Focus!';
    // Converter o texto para letras maiúsculas
    console.log(sampleText.toUpperCase());

    // Substituir uma palavra no texto
    console.log(sampleText.replace('Focus', 'GitHub'));
}

// Funções assíncronas
async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
    }
}

// Adicionando os eventos e funcionalidades na inicialização
function init() {
    searchSession();
    addComment();
    arrayFunctions();
    stringFunctions();
    fetchGitHubProfile('octocat'); // Exemplo de busca por um perfil do GitHub
}

document.addEventListener('DOMContentLoaded', init);