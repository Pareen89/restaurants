// on window load drop navigation down
function drop() {
  console.log('licked');
  document.getElementById('containerOne').classList.toggle('stop');
}
let close = document.getElementById('close');
close.addEventListener('click', function() {});
// window.addEventListener('load', slideshow());

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slideshow__images');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
