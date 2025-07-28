function configurarCarrossel(idTrack, idEsq, idDir) {
  const track = document.getElementById(idTrack);
  const esquerda = document.getElementById(idEsq);
  const direita = document.getElementById(idDir);

  let indice = 0;

  esquerda.addEventListener('click', () => {
    indice = 0;
    track.style.transform = 'translateX(0%)';
  });

  direita.addEventListener('click', () => {
    indice = 1;
    track.style.transform = 'translateX(-50%)';
  });
}

// Casas
configurarCarrossel('track-casa', 'esquerda', 'direita');

// Prédios
configurarCarrossel('track-predio', 'esquerda-predio', 'direita-predio');

// Terrenos
configurarCarrossel('track-terreno', 'esquerda-terreno', 'direita-terreno');


// Função para verificar a visibilidade do elemento "Quem Somos"

  function animarAoScroll() {
    const elementos = document.querySelectorAll(".quem-somos, .contato");
    const alturaTela = window.innerHeight;

    elementos.forEach((el) => {
      const topo = el.getBoundingClientRect().top;
      const base = el.getBoundingClientRect().bottom;

      if (topo < alturaTela - 100 && base > 100) {
        el.classList.add("aparecer");
      } else {
        el.classList.remove("aparecer");
      }
    });
  }

  window.addEventListener("scroll", animarAoScroll);
  window.addEventListener("load", animarAoScroll);