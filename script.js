document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(paragraph => {
        paragraph.onclick = () => {
            paragraph.style.backgroundColor = 'gray';
        };

        paragraph.ondblclick = () => {
            paragraph.style.fontSize = '1.2em';
        };
    });
});
// Evento onclick
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').onclick = function() {
        alert('Você clicou no título!');
    };
});

// Evento ondblclick
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('footer').ondblclick = function() {
        alert('Você deu duplo clique no rodapé!');
    };
});
  // Adicionando outra interação: evento onmouseover para o cabeçalho
  const cabecalho = document.querySelector('header');
  cabecalho.addEventListener('mouseover', function() {
      console.log('Mouse sobre o cabeçalho!');
  });
