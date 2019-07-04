// on window load drop navigation down
window.addEventListener('load', () => {
  showSlides();
});

let drop = () => {
  document.getElementById('containerOne').classList.toggle('stop');
};
let close = document.getElementById('close');
close.addEventListener('click', function() {});
// window.addEventListener('load', slideshow());

var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName('slideshow__images');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'flex';

  setTimeout(showSlides, 5000);
  // Change image every 2 seconds
}
// Slideshow
