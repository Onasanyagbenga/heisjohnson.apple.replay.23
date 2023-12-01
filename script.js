// Hamburger
const hamburger = document.getElementById('hamburger') ;
const header = document.querySelector('.hidden-header') ;
hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active');
  header.classList.toggle('active') ;
})
//
