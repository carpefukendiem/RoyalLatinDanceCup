window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (!header) {
      return;
    }
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
  
  

  async function loadPartial(targetEl, paths, label) {
    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          continue;
        }
        targetEl.innerHTML = await response.text();
        return true;
      } catch (err) {
        // try next path variant
      }
    }
    console.error(`Error loading the ${label}: no candidate path succeeded`);
    return false;
  }

  document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      loadPartial(headerPlaceholder, ["/header.html", "header.html", "../header.html"], "header");
    }
  
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      loadPartial(footerPlaceholder, ["/footer.html", "footer.html", "../footer.html"], "footer");
    }

    const judgeGrid = document.getElementById("judge-grid");
    if (judgeGrid) {
      loadPartial(judgeGrid, ["/judge-grid.html", "judge-grid.html", "../judge-grid.html"], "judge grid");
    }
  });
  
  function updateCountdown() {
    // Get today's date
    const now = new Date();
    
    // Set the countdown date to two weeks from today
    const countdownDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14).getTime();

    // Calculate the distance between now and the countdown date
    const distance = countdownDate - now.getTime();

    // Time calculations for days, hours, minutes, and seconds
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
      return;
    }

    daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24)) + " Days";
    hoursEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " Hours";
    minutesEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + " Minutes";
    secondsEl.innerText = Math.floor((distance % (1000 * 60)) / 1000) + " Seconds";

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
          countdownEl.innerHTML = "Rules are now live!";
        }
    }
}

// Click Whatapp button and call Marco
function openWhatsAppChat() {
  window.location.href = 'https://wa.me/18057057939'; // Redirects user to WhatsApp chat link
}




// Update the countdown every second
const x = setInterval(updateCountdown, 1000);
