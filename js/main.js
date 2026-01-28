// スライドメニュー
const header = document.querySelector('#header');
const links = document.querySelectorAll('header a');
const hamburger = document.querySelector('.header__hamburger');
const mask = document.querySelector('#mask');
hamburger.addEventListener('click', () => {
  header.classList.toggle('open');
  if (header.classList.contains('open')) {
    header.classList.add('open');
  } else {
    header.classList.remove('open');
  }
});
mask.addEventListener('click', () => {
  header.classList.remove('open');
});
links.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
  });
});

// スクロール
const toTop = document.querySelector('#to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});
