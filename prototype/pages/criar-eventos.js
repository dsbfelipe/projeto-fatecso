
//mudar de pagina
function trocarPagina(url) {
    window.location.href = url;
}


//script para mensagem de concluido 

function showMessage() {
    originalValues = {}; // Initialize originalValues

    alert("Evento criado!"); // You can use other methods to display the message
    const originalPlaceholders = {
        'inputNome': 'Nome do evento',
        'inputDescricao': 'Descrição',
        'inputPerfil': 'Selecione',
    };

    function clearData(...elementIds) {
        elementIds.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                // Store the original value before clearing
                originalValues[elementId] = element.value;

                // Assign placeholder value before using it
                originalPlaceholders[elementId] = element.placeholder;

                // Clear the value and set the placeholder back to the original value
                element.value = '';
                element.placeholder = originalPlaceholders[elementId];
            }
        });
    }


    // Clear the data for multiple input fields
    clearData('inputNome', 'inputDescricao', 'inputPerfil', 'inputData');
}

