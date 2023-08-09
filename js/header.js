const navBg = document.querySelector('#nav-links__bg');

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 400) {
    navBg.classList.add('is-open');
    // console.log(`hide`);
  } else {
    // console.log(`open`);
    navBg.classList.remove('is-open');
  }
});
