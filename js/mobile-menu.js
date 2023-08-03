(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const searchGlass = document.querySelector('#searchGlass');
  const searchMenu = document.querySelector('.searchMenu');
  const searchBtn = document.querySelector('#searchBtn');

  const searchGlassMenu = () => {
    console.log('click search');

    const isMenuOpen = searchGlass.getAttribute('aria-expanded') === 'true' || false;
    searchGlass.setAttribute('aria-expanded', !isMenuOpen);

    searchMenu.classList.toggle('is-open');
  };

  const searchBtnPress = () => {
    console.log(`srearch BTN`);
    searchGlassMenu();
  };

  searchGlass.addEventListener('click', searchGlassMenu);
  searchBtn.addEventListener('click', searchBtnPress);

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1240px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
