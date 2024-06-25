// Função de pesquisa nas sessões
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('section-select');

    select.addEventListener('change', () => {
        const selectedSection = select.value;
        if (selectedSection) {
            const sectionElement = document.getElementById(selectedSection);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error('Seção não encontrada:', selectedSection);
            }
        }
    });
});

// Função para adicionar um novo comentário
function addComment() {
    const form = document.querySelector('.comentarios');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target.nome.value;
        const email = event.target.email.value;
        const comment = event.target.comentario.value;

        const commentSection = document.createElement('div');
        commentSection.classList.add('comment');
        commentSection.innerHTML = `
            <p><strong>${name}</strong> (${email})</p>
            <p>${comment}</p>
        `;
        document.getElementById('commentSection').appendChild(commentSection);

        // Limpar o formulário
        form.reset();
    });
}

// Chamar a função addComment quando a página for carregada
document.addEventListener('DOMContentLoaded', addComment);


// Funções assíncronas

// Função para buscar o perfil do GitHub
async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        displayProfile(data);
    } catch (error) {
        console.error('Error fetching GitHub profile:', error);
        displayError('Error fetching GitHub profile.');
    }
}

// Função para exibir o perfil no HTML
function displayProfile(data) {
    const profileDiv = document.getElementById('profile');
    if (data.message === "Not Found") {
        profileDiv.innerHTML = '<p>User not found.</p>';
        return;
    }
    profileDiv.innerHTML = `
        <h2>${data.name} (${data.login})</h2>
        <img src="${data.avatar_url}" alt="${data.login}'s avatar" width="150">
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <a href="${data.html_url}" target="_blank">View Profile on GitHub</a>
    `;
}

// Função para exibir uma mensagem de erro no HTML
function displayError(message) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `<p>${message}</p>`;
}

// Adicionar um evento de submit ao formulário
document.getElementById('github-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    fetchGitHubProfile(username);
});


// Adicionando os eventos e funcionalidades na inicialização
function init() {
    searchSession();
    addComment();
    arrayFunctions();
    stringFunctions();
    fetchGitHubProfile('octocat'); // Exemplo de busca por um perfil do GitHub
}

document.addEventListener('DOMContentLoaded', init);