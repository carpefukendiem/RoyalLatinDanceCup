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
  
  

  document.addEventListener("DOMContentLoaded", function() {
    // Function to load the Header
    fetch("/header.html") // Adjust the path if necessary
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
      })
      .catch(err => console.error('Error loading the header:', err));
  
    // Function to load the Footer
    fetch("/footer.html") // Adjust the path if necessary
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(err => console.error('Error loading the footer:', err));
  });
  
  AOS.init();