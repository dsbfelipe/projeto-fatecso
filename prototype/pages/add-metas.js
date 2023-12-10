function trocarPagina(url) {
    window.location.href = url;
}


//script inputValormeta
function formatarMoeda(input) {
    let inputValue = input.value;

    // Remove caracteres não numéricos
    inputValue = inputValue.replace(/[^0-9]/g, '');

    // Converte para o formato de moeda
    inputValue = (Number(inputValue) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Define o valor formatado de volta no campo de input
    input.value = inputValue;
}



//script para mensagem de concluido metas
function showMessage() {
    originalValues = {}; // Initialize originalValues

    alert("Concluído!"); // You can use other methods to display the message
    const originalPlaceholders = {
        'inputValorMeta': 'R$0,00',
        'valor-meta': 'Valor inicial',
        'nome-meta': 'Nome da meta',
        'data-meta': 'Data final',
        'descricao-meta': 'Descrição'
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
    clearData('inputValorMeta', 'valor-meta', 'nome-meta', 'data-meta', 'descricao-meta');
}

