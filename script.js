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

        fetch("/judge-grid.html") // Adjust the path if necessary
          .then(response => response.text())
          .then(data => {
            document.getElementById("judge-grid").innerHTML = data;
          })
          .catch(err => console.error('Error loading the header:', err));
  });
  
  function updateCountdown() {
    // Get today's date
    const now = new Date();
    
    // Set the countdown date to two weeks from today
    const countdownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14).getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now.getTime();

    // Time calculations for days, hours, minutes, and seconds
    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24)) + " Days";
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " Hours";
    document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " Minutes";
    document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000) + " Seconds";

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = "Rules are now live!";
    }
}

// Click Whatapp button and call Marco
function openWhatsAppChat() {
  window.location.href = 'https://wa.me/18057057939'; // Redirects user to WhatsApp chat link
}




// Update the countdown every second
const x = setInterval(updateCountdown, 1000);

  AOS.init();