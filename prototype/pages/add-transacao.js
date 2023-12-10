// voltar paginas
function trocarPagina(url) {
    window.location.href = url;
}

//sharing list check all
        const checkAllCheckbox = document.getElementById('check-all');
        const checkItemCheckboxes = document.querySelectorAll('.check-item');

        checkAllCheckbox.addEventListener('change', () => {
          const checked = checkAllCheckbox.checked;
          checkItemCheckboxes.forEach(checkbox => {
            checkbox.checked = checked;
          });
        });


//recorrente

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

// Adicione um ouvinte de mudança ao checkbox
inputRecorrente.addEventListener('change', toggleOptions);

// Adicione um ouvinte de mudança à seleção de frequência
frequencySelect.addEventListener('change', function () {
    customDateInput.readOnly = this.value === 'daily';
});

// Chame a função inicialmente para garantir a configuração correta na inicialização
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