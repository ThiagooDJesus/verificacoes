function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

document.addEventListener('DOMContentLoaded', function () {

  const campoCPF = document.getElementById('id_cpf');
  const formulario = document.querySelector('form');

  campoCPF.addEventListener('blur', function () {
    if (validarCPF(campoCPF.value)) {
      campoCPF.style.border = '3px solid green';
    } else {
      campoCPF.style.border = '3px solid red';
    }
  });

  formulario.addEventListener('submit', function (event) {
    if (!validarCPF(campoCPF.value)) {
      event.preventDefault(); 
      console.log('CPF invalido - envio bloqueado');
    }
  });

});

