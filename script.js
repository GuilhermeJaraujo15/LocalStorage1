// Seleção de elementos
const form = document.getElementById("formInscricao");
const campos = form.querySelectorAll("input, textarea");
const botaoLimpar = document.getElementById("limparManual");

// Nome da chave no localStorage
const STORAGE_KEY = "formularioInscricao";

// =============================
// 1️⃣ SALVAR AUTOMATICAMENTE
// =============================
campos.forEach(campo => {
    campo.addEventListener("input", () => {
        
        const dadosFormulario = {};

        campos.forEach(c => {
            dadosFormulario[c.name] = c.value;
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosFormulario));
    });
});

// =============================
// 2️⃣ RECUPERAR AO CARREGAR
// =============================
window.addEventListener("DOMContentLoaded", () => {
    
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

        campos.forEach(campo => {
            if (dados[campo.name]) {
                campo.value = dados[campo.name];
            }
        });
    }
});

// =============================
// 3️⃣ LIMPAR APÓS ENVIO
// =============================
form.addEventListener("submit", (e) => {
    e.preventDefault(); // simula envio

    alert("Formulário enviado com sucesso!");

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

// =============================
// 4️⃣ LIMPEZA MANUAL
// =============================
botaoLimpar.addEventListener("click", () => {

    const confirmar = confirm("Deseja realmente limpar os dados?");

    if (confirmar) {
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    }
});