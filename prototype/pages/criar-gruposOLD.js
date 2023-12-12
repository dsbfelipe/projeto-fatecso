// script checkbox - todos
    document.addEventListener('DOMContentLoaded', function () {
      const checkboxTodos = document.getElementById('checkboxTodos');
      const checkboxes = document.querySelectorAll('.checkboxContainer input[type="checkbox"]:not(#checkboxTodos)');

      checkboxTodos.addEventListener('change', function () {
        checkboxes.forEach(function (checkbox) {
          checkbox.checked = checkboxTodos.checked;
        });
      });

      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
          if (!this.checked) {
            checkboxTodos.checked = false;
          } else {
            const allChecked = Array.from(checkboxes).every(function (input) {
              return input.checked;
            });
            checkboxTodos.checked = allChecked;
          }
        });
      });
    });

    
    //btn  validar grupo
    function validarGrupo() {
      const nomeGrupo = document.getElementById('inputDescricao').value.trim();
      const checkboxes = document.querySelectorAll('.checkboxContainer input[type="checkbox"]:not(#checkboxTodos)');
      let peloMenosUmSelecionado = false;

      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          peloMenosUmSelecionado = true;
        }
      });

      if (nomeGrupo !== '' && peloMenosUmSelecionado) {
        alert('Concluído');
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }