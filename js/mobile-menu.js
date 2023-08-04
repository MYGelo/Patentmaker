(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const searchGlass = document.querySelector('#searchGlass');

  const searchMenu = document.querySelector('.searchMenu');

  const searchGlassMenu = () => {
    searchMenu.classList.toggle('is-open');

    searchMenu.addEventListener('submit', e => {
      e.preventDefault();
      const {
        elements: { search },
      } = e.currentTarget;

      if (search.value === '') {
        searchMenu.classList.remove('is-open');
        console.log(`nothing entered in search`);
        // alert(`nothing entered in search`);
        e.target.reset();
      } else {
        console.log(search.value);
        // alert(`search :  ${search.value} `);
        searchMenu.classList.remove('is-open');
        e.target.reset();
      }
      searchMenu.removeEventListener('submit', e);
    });
  };

  searchGlass.addEventListener('click', searchGlassMenu);

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
