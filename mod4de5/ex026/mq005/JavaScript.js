function navMenu () {
   if (menu.style.display == 'none') {
      menu.style.display = 'flex';
      menuOpen.style.display = 'none';
      menuClose.style.display = 'block';
   } else {
      menu.style.display = 'none';
      menuOpen.style.display = 'block';
      menuClose.style.display = 'none';
   }
}