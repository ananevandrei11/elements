const thumb = document.querySelector('.thumb');
thumb.addEventListener('click', (e) => {
  e.preventDefault();
  let elem = e.target;
  if (elem.closest('.thumb__btn')) {
    let imgSrc = elem.closest('.thumb__btn').getAttribute('data-img');
    let colorBg = elem.closest('.thumb__btn').getAttribute('data-color');
    imgSlider(imgSrc);
    changeCircleColor(colorBg);
  }
});
function imgSlider(img) {
  document.querySelector('.hero__img').src = img;
}
function changeCircleColor(color) {
  const circle = document.querySelector('.page__circle');
  circle.style.backgroundColor = color;
}
