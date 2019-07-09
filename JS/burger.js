var burguerMenu = document.querySelector('header');
var isBurguerOpen = true;

function closeBurguer() {
  burguerMenu.classList.remove('open');
  isBurguerOpen = false;
}
function openBurguer() {
  burguerMenu.classList.add('open');
  isBurguerOpen = true;
}

closeBurguer();

var button = document.getElementById('burger');
button.addEventListener('click', onClick);

var buttonC = document.getElementById('ContactButton');
buttonC.addEventListener('click', onClick)

function onClick(e) {
  //console.log('clickaso')
  if (isBurguerOpen) {
    closeBurguer();
  }
  else {
    openBurguer();
  }
}

var buttonC = document.getElementById('ContactButton');
buttonC.addEventListener('click', onClick)
