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

  // --- Menu Hambúrguer ---
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  }

  // --- Carrossel de benefícios ---
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');

  if (track && prevButton && nextButton) {
    let scrollAmount = 0;
    const card = track.querySelector('.carousel-card');
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const cardGap = parseInt(cardStyle.marginRight) || 24; // use o valor do seu gap no CSS
    const scrollStep = cardWidth + cardGap;

    // Função para limitar o scroll ao conteúdo
    function updateButtons() {
      prevButton.disabled = scrollAmount <= 0;
      const maxScroll = track.scrollWidth - track.offsetWidth - 2; // margem de segurança
      nextButton.disabled = scrollAmount >= maxScroll;
    }

    nextButton.addEventListener('click', () => {
      scrollAmount += scrollStep;
      const maxScroll = track.scrollWidth - track.offsetWidth;
      if (scrollAmount > maxScroll) scrollAmount = maxScroll;
      track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      updateButtons();
    });

    prevButton.addEventListener('click', () => {
      scrollAmount -= scrollStep;
      if (scrollAmount < 0) scrollAmount = 0;
      track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      updateButtons();
    });

    // Atualiza os botões ao iniciar
    updateButtons();
  }
});
});
