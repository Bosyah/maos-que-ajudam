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

iniciarPagina();