// sctipt voltar paginas
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


//script sharing list check all
const checkAllCheckbox = document.getElementById('check-all');
const checkItemCheckboxes = document.querySelectorAll('.check-item');

checkAllCheckbox.addEventListener('change', () => {
    const checked = checkAllCheckbox.checked;
    checkItemCheckboxes.forEach(checkbox => {
        checkbox.checked = checked;
    });
});



//scipt recorrente-opcoes
const inputRecorrente = document.getElementById('inputRecorrente');
const recurrentOptions = document.querySelector('.recorrente-options');
const customDateInput = document.getElementById('customDate');
const frequencySelect = document.getElementById('frequency');
const currentDate = new Date(); // Obtenha a data atual

// Função para controlar a visibilidade das opções
function toggleOptions() {
    recurrentOptions.style.display = inputRecorrente.checked ? 'block' : 'none';

    if (inputRecorrente.checked) {
        customDateInput.valueAsDate = currentDate;
        customDateInput.readOnly = frequencySelect.value === 'daily';
    } else {
        customDateInput.value = '';
        customDateInput.readOnly = false;
    }
}

inputRecorrente.addEventListener('change', toggleOptions);

frequencySelect.addEventListener('change', function () {
    customDateInput.readOnly = this.value === 'daily';
});

toggleOptions();

const resetButtonForm = document.getElementById('resetButton');
resetButtonForm.addEventListener('click', () => {
    const formElements = document.querySelectorAll('input, select');
    for (const element of formElements) {
        if (element.type === 'text') {
            element.value = '';
        } else if (element.type === 'checkbox') {
            element.checked = false;
        } else if (element.type === 'select-one') {
            element.selectedIndex = 0;
        }
    }

    frequencySelect.selectedIndex = 0;

    customDateInput.value = '';
    customDateInput.readOnly = false;
    recurrentOptions.style.display = 'none';
});




function toggleSharingList() {
    const inputPerfil = document.getElementById('inputPerfil');
    const sharingList = document.getElementById('sharing-list');

    if (inputPerfil.value === '2' || inputPerfil.value === '3' || inputPerfil.value === '4') {
        sharingList.style.display = 'block';
    } else {
        sharingList.style.display = 'none';
    }
}

//funcao btn concluir

function showMessage() {
    // Inicializa originalValues
    const originalValues = {};

    alert("Concluído!"); // Você pode usar outros métodos para exibir a mensagem
    const originalPlaceholders = {
        'inputValorTransacao': 'R$0,00',
        'inputPerfil': 'Selecione',
        'inputTipo': 'Selecione',
        'inputCategoria': 'Selecione',
        'inputDescricao': 'Inserir descrição',
        'customDate': '' // Se desejar limpar a data
    };

    function clearData(...elementIds) {
        elementIds.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                // Armazena o valor original antes de limpar
                originalValues[elementId] = element.value;

                // Atribui o valor do espaço reservado antes de usá-lo
                originalPlaceholders[elementId] = element.placeholder;

                // Limpa o valor e define o espaço reservado de volta para o valor original
                element.value = '';
                element.placeholder = originalPlaceholders[elementId];

                // Ativa o elemento
                element.disabled = false;
            }
        });
    }

    // Limpa os dados para vários campos de entrada
    clearData('inputValorTransacao', 'inputPerfil', 'inputTipo', 'inputCategoria', 'inputDescricao', 'customDate');

    // Desmarca todos os itens de compartilhamento
    const checkItems = document.querySelectorAll('.check-item');
    checkItems.forEach(item => {
        item.checked = false;
    });

    // Desmarca o checkbox "Todos"
    const checkAll = document.getElementById('check-all');
    if (checkAll) {
        checkAll.checked = false;
    }

    // Redefine o estado do checkbox recorrente
    const inputRecorrente = document.getElementById('inputRecorrente');
    if (inputRecorrente) {
        inputRecorrente.checked = false;
    }

    // Oculta a recorrente-options
    const recorrenteOptions = document.querySelector('.recorrente-options');
    if (recorrenteOptions) {
        recorrenteOptions.style.display = 'none';
    }

    // Atualiza o estado do Alpine.js para ocultar a sharing-list
    if (window.Alpine) {
        window.Alpine.effect(() => {
            window.Alpine.store('showSharingList', false);
        });
    }

    const sharingList = document.getElementById('sharing-list');
        sharingList.style.display = 'none';
}