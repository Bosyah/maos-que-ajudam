/* =========================
   FORMULÁRIO E VALIDAÇÃO
========================= */

export function ativarFormulario() {
    const formCadastro = document.getElementById("form-cadastro");

    if (!formCadastro) {
        return;
    }

    formCadastro.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const cpf = document.getElementById("cpf");
        const telefone = document.getElementById("telefone");
        const cep = document.getElementById("cep");
        const interesse = document.getElementById("interesse");
        const mensagem = document.getElementById("mensagem");
        const mensagemForm = document.getElementById("mensagem-form");

        let formularioValido = true;

        const campos = [
            nome,
            email,
            cpf,
            telefone,
            cep,
            interesse
        ];

        campos.forEach(function(campo) {
            campo.classList.remove("campo-erro");
        });

        campos.forEach(function(campo) {
            if (!campo.checkValidity()) {
                campo.classList.add("campo-erro");
                formularioValido = false;
            }
        });

        if (formularioValido) {
            const dadosCadastro = {
                nome: nome.value,
                email: email.value,
                cpf: cpf.value,
                telefone: telefone.value,
                cep: cep.value,
                interesse: interesse.value,
                mensagem: mensagem.value
            };

            localStorage.setItem(
                "dadosCadastro",
                JSON.stringify(dadosCadastro)
            );

            mensagemForm.textContent =
                "Cadastro enviado com sucesso!";

            mensagemForm.className =
                "mensagem-sucesso";

            Swal.fire({
                title: "Cadastro realizado!",
                text: "Seus dados foram salvos com sucesso.",
                icon: "success",
                confirmButtonText: "OK"
            });

        } else {
            mensagemForm.textContent =
                "Verifique os campos destacados e tente novamente.";

            mensagemForm.className =
                "mensagem-erro";
        }
    });
}


/* =========================
   MÁSCARAS DOS CAMPOS
========================= */

export function ativarMascaras() {
    const campoCpf = document.getElementById("cpf");
    const campoTelefone = document.getElementById("telefone");
    const campoCep = document.getElementById("cep");

    if (campoCpf) {
        campoCpf.addEventListener("input", function() {
            let valor = campoCpf.value
                .replace(/\D/g, "")
                .slice(0, 11);

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

            campoCpf.value = valor;
        });
    }

    if (campoTelefone) {
        campoTelefone.addEventListener("input", function() {
            let valor = campoTelefone.value
                .replace(/\D/g, "")
                .slice(0, 11);

            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d{1,4})$/,
                "$1-$2"
            );

            campoTelefone.value = valor;
        });
    }

    if (campoCep) {
        campoCep.addEventListener("input", function() {
            let valor = campoCep.value
                .replace(/\D/g, "")
                .slice(0, 8);

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

            campoCep.value = valor;
        });
    }
}


/* =========================
   RECUPERAÇÃO DO LOCALSTORAGE
========================= */

export function carregarDadosCadastro() {
    const dadosSalvos =
        localStorage.getItem("dadosCadastro");

    if (!dadosSalvos) {
        return;
    }

    const dados = JSON.parse(dadosSalvos);

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const interesse = document.getElementById("interesse");
    const mensagem = document.getElementById("mensagem");

    if (nome) {
        nome.value = dados.nome || "";
    }

    if (email) {
        email.value = dados.email || "";
    }

    if (cpf) {
        cpf.value = dados.cpf || "";
    }

    if (telefone) {
        telefone.value = dados.telefone || "";
    }

    if (cep) {
        cep.value = dados.cep || "";
    }

    if (interesse) {
        interesse.value = dados.interesse || "";
    }

    if (mensagem) {
        mensagem.value = dados.mensagem || "";
    }
}