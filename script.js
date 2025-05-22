document.addEventListener("DOMContentLoaded", function () {
  // --- Parte do pagamento ---
  const pagamento = document.getElementById("pagamento");

  const pixCampos = document.getElementById("pix-campos");
  const cartaoCampos = document.getElementById("cartao-campos");
  const boletoCampos = document.getElementById("boleto-campos");

  if (pagamento) {
    pagamento.addEventListener("change", function () {
      const valor = pagamento.value;

      pixCampos.style.display = "none";
      cartaoCampos.style.display = "none";
      boletoCampos.style.display = "none";

      if (valor === "pix") {
        pixCampos.style.display = "block";
      } else if (valor === "cartao") {
        cartaoCampos.style.display = "block";
      } else if (valor === "boleto") {
        boletoCampos.style.display = "block";
      }
    });
  }

  const formCompra = document.querySelector("form");
  if (formCompra && pagamento) {
    formCompra.addEventListener("submit", function (e) {
      e.preventDefault();

      Swal.fire({
        icon: 'success',
        title: 'Pedido enviado!',
        text: 'Seu pedido foi realizado com sucesso. Em breve entraremos em contato.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00aaff'
      });

      formCompra.reset();
      pixCampos.style.display = "none";
      cartaoCampos.style.display = "none";
      boletoCampos.style.display = "none";
    });
  }

  // --- Parte do formulário de contato ---
  const formContato = document.getElementById("form-contato");

  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();

      Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada!',
        text: 'Recebemos sua mensagem. Em breve responderemos.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00aaff'
      });

      formContato.reset();
    });
  }
  const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
}

});
