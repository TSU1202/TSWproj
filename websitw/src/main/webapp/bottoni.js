/**
 * 
 */
const listaContenitore = document.querySelector('.lista-contenitore');
const scorrimentoSinistra = document.querySelector('.scorrimento-sinistra');
const scorrimentoDestra = document.querySelector('.scorrimento-destra');
const listaPuntata = document.querySelector('.lista-puntata');

scorrimentoSinistra.addEventListener('click', () => {
  listaContenitore.scrollBy({
    left: -100,
    behavior: 'smooth'
  });
});

scorrimentoDestra.addEventListener('click', () => {
  listaContenitore.scrollBy({
    left: 100,
    behavior: 'smooth'
  });
});
