// on window load drop navigation down
function drop() {
  console.log('licked');
  document.getElementById('containerOne').classList.toggle('stop');
}
let close = document.getElementById('close');
close.addEventListener('click', function() {});
// window.addEventListener('load', slideshow());

// function slideshow() {
//   let slideIndex = 0;
//   let images = document.getElementsByClassName('slideshow__images');
//   for (let i = 0; i < images.length; i++) {
//     images[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > images.length) {
//     slideIndex = 1;
//   }
//   images[slideIndex - 1].style.display = 'block';
//   setTimeout(slideshow, 3000);
// }
