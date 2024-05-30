document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formcontato__form");
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");
  const modal = document.getElementById("successModal");
  const span = document.getElementsByClassName("close")[0];

  form.addEventListener("submit", function (event) {
    let valid = true;
    clearErrors();

    if (nome.value.trim() === "") {
      showError(nome, "Nome é obrigatório.");
      valid = false;
    }

    if (email.value.trim() === "") {
      showError(email, "E-mail é obrigatório.");
      valid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, "E-mail não é válido.");
      valid = false;
    }

    if (assunto.value.trim() === "") {
      showError(assunto, "Assunto é obrigatório.");
      valid = false;
    }

    if (mensagem.value.trim() === "") {
      showError(mensagem, "Mensagem é obrigatória.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    } else {
      event.preventDefault(); // Para demonstração, evitar que o formulário realmente seja enviado
      modal.style.display = "block";
    }
  });

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.innerText = message;
    input.parentNode.insertBefore(error, input.nextSibling);
    input.classList.add("input-error");
  }

  function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(function (error) {
      error.remove();
    });
    const errorInputs = document.querySelectorAll(".input-error");
    errorInputs.forEach(function (input) {
      input.classList.remove("input-error");
    });
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.[^<>()\[\]\\.,;:\s@"]{2,}))$/i;
    return re.test(email.toLowerCase());
  }
});
