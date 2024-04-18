window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  function toggleMenu() {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'block') {
      menuContent.style.display = 'none';
    } else {
      menuContent.style.display = 'block';
    }
  }
  