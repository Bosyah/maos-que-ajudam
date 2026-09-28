/* =========================
   PROJETOS DINÂMICOS
========================= */

const projetos = [
    {
        nome: "Campanha de doação",
        categoria: "Doação",
        tipo: "Alimentos",
        descricao: "Realizamos campanhas de arrecadação de alimentos, roupas e outros itens para pessoas em situação de vulnerabilidade."
    }
];

export function mostrarProjetos() {
    const listaProjetos = document.getElementById("lista-projetos");

    if (listaProjetos) {
        listaProjetos.innerHTML = "";

        projetos.forEach(function(projeto) {
            listaProjetos.innerHTML += `
                <span class="badge">${projeto.categoria}</span>
                <span class="badge">${projeto.tipo}</span>

                <div class="alerta sucesso">
                    ${projeto.nome} disponível! Participe e ajude nossa comunidade.
                </div>

                <p>${projeto.descricao}</p>
            `;
        });
    }
}