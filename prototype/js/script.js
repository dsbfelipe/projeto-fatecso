

//script inputValor

document.getElementById('inputValor').addEventListener('input', function (event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9]/g, '');
    inputValue = (Number(inputValue) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    event.target.value = inputValue;
});



//script input recorrente - recurrent-options

const inputRecorrente = document.getElementById('inputRecorrente');
const recurrentOptions = document.querySelector('.recurrent-options');
const customDateInput = document.getElementById('customDate');
const currentDate = new Date(); // Obtenha a data atual

inputRecorrente.addEventListener('change', function () {
    recurrentOptions.classList.toggle('active', this.checked);

    if (this.checked) {
        customDateInput.valueAsDate = currentDate;
        customDateInput.readOnly = document.getElementById('frequency').value === 'daily';
    } else {
        customDateInput.value = '';
        customDateInput.readOnly = false;
    }
});

document.getElementById('frequency').addEventListener('change', function () {
    customDateInput.readOnly = this.value === 'daily';
});


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

    const frequencySelect = document.getElementById('frequency');
    frequencySelect.selectedIndex = 0;

    const customDateInput = document.getElementById('customDate');
    customDateInput.value = '';
    customDateInput.readOnly = false;
});


//script botao cancelar - resetButton

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    const formElements = document.querySelectorAll('input, select');
    for (const element of formElements) {
        if (element.type === 'text') {
            element.value = '';
        } else if (element.type === 'checkbox') {
            element.checked = false;
        } else if (element.type === 'select') {
            element.selectedIndex = 0;
        }
    }

    // Clear the selected frequency option
    const frequencySelect = document.getElementById('frequency');
    frequencySelect.selectedIndex = 0;

    // Clear the custom date
    const customDateInput = document.getElementById('customDate');
    customDateInput.value = '';
    recurrentOptions.classList.remove('active');
});


//script botao concluir - submitButton

const submitButton = document.getElementById('submitButton');
const formElements = document.querySelectorAll('input, select');

submitButton.addEventListener('click', () => {
    let formIsEmpty = false;

    for (const element of formElements) {
        if (
            (element.type === 'text' && element.value === '') ||
            (element.type === 'select' && element.selectedIndex === 0)
        ) {
            formIsEmpty = true;
            break;
        }
    }
    if (formIsEmpty) {
        alert('Por favor preencha todos os campos');
        return;
    }
    alert('Transação adicionada com sucesso!');
});



//script navegacao bottom menu 
function navegarPara(pagina) {
    window.location.replace(pagina);
}


function trocarPagina(url) {
    window.location.href = url;
}



