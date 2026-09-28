/* =========================
   EVENTOS DA INTERFACE
========================= */

export function ativarEventos() {
    const botaoToast = document.getElementById("botao-toast");
    const botaoModal = document.getElementById("botao-modal");
    const botaoFecharModal = document.getElementById("botao-fechar-modal");

    if (botaoToast) {
        botaoToast.addEventListener("click", mostrarToast);
    }

    if (botaoModal) {
        botaoModal.addEventListener("click", abrirModal);
    }

    if (botaoFecharModal) {
        botaoFecharModal.addEventListener("click", fecharModal);
    }
}

function mostrarToast() {
    const toast = document.getElementById("toast");

    if (toast) {
        toast.classList.add("mostrar");

        setTimeout(function() {
            toast.classList.remove("mostrar");
        }, 3000);
    }
}

function abrirModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.add("mostrar");
    }
}

function fecharModal() {
    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("mostrar");
    }
}