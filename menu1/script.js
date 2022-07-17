const showMenu = (toggleID, navID) => {
  const toggle = document.getElementById(toggleID);
  const nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      nav.classList.toggle('show');
      if (nav.classList.contains('show')) {
        toggle.querySelector('.bx').classList.remove('bx-menu');
        toggle.querySelector('.bx').classList.add('bx-x');
      } else {
        toggle.querySelector('.bx').classList.remove('bx-x');
        toggle.querySelector('.bx').classList.add('bx-menu');
      }
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
