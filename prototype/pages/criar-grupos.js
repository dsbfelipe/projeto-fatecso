
//mudar de pagina
function trocarPagina(url) {
    window.location.href = url;
}


document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o checkbox "Todos"
    var checkboxTodos = document.querySelector(".checkboxTodos input[type='checkbox']");

    // Adiciona um ouvinte de evento para o evento "change"
    checkboxTodos.addEventListener("change", function () {
        // Seleciona todos os checkboxes individuais
        var checkboxesIndividuais = document.querySelectorAll(".labelWithImg input[type='checkbox']");

        // Define o estado dos checkboxes individuais com base no estado do checkbox "Todos"
        checkboxesIndividuais.forEach(function (checkbox) {
            checkbox.checked = checkboxTodos.checked;
        });
    });

    // Adiciona ouvintes de evento para os checkboxes individuais
    var checkboxesIndividuais = document.querySelectorAll(".labelWithImg input[type='checkbox']");
    checkboxesIndividuais.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            // Se algum checkbox individual for desmarcado, desmarca o checkbox "Todos"
            if (!checkbox.checked) {
                checkboxTodos.checked = false;
            }
        });
    });
});



//script para mensagem de concluido 

function showMessage() {
    alert("Grupo criado com sucesso!");
    
    // Limpa a seleção dos checkboxes
    var checkboxes = document.querySelectorAll(".labelWithImg input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    // Limpa a seleção do checkbox "Todos"
    var checkboxTodos = document.querySelector(".checkboxTodos input[type='checkbox']");
    checkboxTodos.checked = false;

    document.getElementById("inputNome").value = "";
}