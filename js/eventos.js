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


/* =========================
   NOTIFICAÇÃO TOAST
========================= */

function mostrarToast() {
    const toast = document.getElementById("toast");

    if (toast) {
        toast.classList.add("mostrar");

        setTimeout(function() {
            toast.classList.remove("mostrar");
        }, 3000);
    }
}


/* =========================
   MODAL ACESSÍVEL
========================= */

function abrirModal() {
    const modal = document.getElementById("modal");
    const botaoFecharModal =
        document.getElementById("botao-fechar-modal");

    if (modal) {
        modal.classList.add("mostrar");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        if (botaoFecharModal) {
            botaoFecharModal.focus();
        }
    }
}


function fecharModal() {
    const modal = document.getElementById("modal");
    const botaoModal =
        document.getElementById("botao-modal");

    if (modal) {
        modal.classList.remove("mostrar");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        if (botaoModal) {
            botaoModal.focus();
        }
    }
}


/* =========================
   NAVEGAÇÃO PELO TECLADO
========================= */

document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("modal");

    if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("mostrar")
    ) {
        fecharModal();
    }
});