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
