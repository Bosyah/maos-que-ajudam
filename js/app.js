/* =========================
   IMPORTAÇÃO DOS MÓDULOS
========================= */

import { mostrarProjetos } from "./projetos.js";
import { ativarEventos } from "./eventos.js";

import {
    ativarFormulario,
    ativarMascaras,
    carregarDadosCadastro
} from "./formulario.js";


/* =========================
   NAVEGAÇÃO SPA
========================= */

const conteudo = document.getElementById("conteudo");

function carregarPagina(pagina) {
    fetch(pagina)
        .then(function(resposta) {
            return resposta.text();
        })
        .then(function(html) {
            const documento = new DOMParser().parseFromString(
                html,
                "text/html"
            );

            conteudo.innerHTML =
                documento.querySelector("main").innerHTML;

            iniciarPagina();

            history.pushState(
                { pagina: pagina },
                "",
                pagina
            );
        });
}


/* =========================
   HISTÓRICO DO NAVEGADOR
========================= */

window.addEventListener("popstate", function() {
    const pagina =
        location.pathname.split("/").pop();

    fetch(pagina)
        .then(function(resposta) {
            return resposta.text();
        })
        .then(function(html) {
            const documento = new DOMParser().parseFromString(
                html,
                "text/html"
            );

            conteudo.innerHTML =
                documento.querySelector("main").innerHTML;

            iniciarPagina();
        });
});


/* =========================
   ALTO CONTRASTE
========================= */

const botaoContraste =
    document.getElementById("botao-contraste");


/* Carrega a preferência salva anteriormente */
function carregarPreferenciaContraste() {

    const contrasteSalvo =
        localStorage.getItem("altoContraste");

    if (contrasteSalvo === "ativo") {
        document.body.classList.add("alto-contraste");
    } else {
        document.body.classList.remove("alto-contraste");
    }

    atualizarBotaoContraste();
}


/* Atualiza ícone e atributos de acessibilidade */
function atualizarBotaoContraste() {

    if (!botaoContraste) {
        return;
    }

    const contrasteAtivo =
        document.body.classList.contains("alto-contraste");

    botaoContraste.textContent =
        contrasteAtivo ? "☀️" : "🌙";

    botaoContraste.setAttribute(
        "aria-pressed",
        contrasteAtivo
    );

    botaoContraste.setAttribute(
        "aria-label",
        contrasteAtivo
            ? "Desativar alto contraste"
            : "Ativar alto contraste"
    );

    botaoContraste.setAttribute(
        "title",
        contrasteAtivo
            ? "Desativar alto contraste"
            : "Ativar alto contraste"
    );
}


/* Ativa ou desativa o alto contraste */
if (botaoContraste) {

    botaoContraste.addEventListener("click", function() {

        document.body.classList.toggle("alto-contraste");

        const contrasteAtivo =
            document.body.classList.contains("alto-contraste");

        if (contrasteAtivo) {

            localStorage.setItem(
                "altoContraste",
                "ativo"
            );

        } else {

            localStorage.setItem(
                "altoContraste",
                "inativo"
            );
        }

        atualizarBotaoContraste();
    });
}


/* =========================
   INICIALIZAÇÃO DA PÁGINA
========================= */

function iniciarPagina() {
    mostrarProjetos();
    ativarEventos();
    ativarFormulario();
    ativarMascaras();
    carregarDadosCadastro();
}


/* =========================
   DISPONIBILIZAÇÃO PARA O HTML
========================= */

/*
   Como app.js agora é um módulo ES6, suas funções
   não ficam disponíveis globalmente automaticamente.

   Esta linha permite que os links do HTML continuem
   utilizando onclick="carregarPagina(...)"
*/
window.carregarPagina = carregarPagina;


/* =========================
   INICIALIZAÇÃO
========================= */

carregarPreferenciaContraste();
iniciarPagina();