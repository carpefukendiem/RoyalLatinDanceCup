// COMPETITION_REGISTRATION_URL — single source of truth for Competition Registration links.
// TODO: Replace this with the registration URL Marco provides.
// Temporary value is the current Competition (formerly Showcase) Registration destination.
window.COMPETITION_REGISTRATION_URL = "https://podiumsystem.mx/acceso/royalLatinDanceCup.aspx";

function applyCompetitionRegistrationLinks() {
  const url = window.COMPETITION_REGISTRATION_URL;
  document.querySelectorAll(".competition-registration-link").forEach(function (link) {
    link.setAttribute("href", url);
  });
}

function initLiteYoutubeTeasers() {
  const teasers = document.querySelectorAll(".lite-youtube");
  if (!teasers.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  teasers.forEach(function (teaser) {
    const videoId = teaser.getAttribute("data-videoid");
    if (!videoId) {
      return;
    }

    if (prefersReducedMotion) {
      teaser.classList.add("lite-youtube--static");
    }

    teaser.addEventListener("click", function () {
      if (teaser.classList.contains("lite-youtube--activated")) {
        return;
      }
      teaser.classList.add("lite-youtube--activated");
      const iframe = document.createElement("iframe");
      iframe.title = teaser.getAttribute("data-title") || "YouTube video";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.src =
        "https://www.youtube.com/embed/" +
        encodeURIComponent(videoId) +
        "?autoplay=1&rel=0";
      teaser.appendChild(iframe);
    });
  });
}

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
    if (!menuContent) {
      return;
    }
    if (menuContent.style.display === 'block') {
      menuContent.style.display = 'none';
    } else {
      menuContent.style.display = 'block';
    }
  }
  
  

  document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
      fetch("/header.html") // Adjust the path if necessary
        .then(response => response.text())
        .then(data => {
          headerPlaceholder.innerHTML = data;
          applyCompetitionRegistrationLinks();
        })
        .catch(err => console.error('Error loading the header:', err));
    } else {
      applyCompetitionRegistrationLinks();
    }
  
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
      fetch("/footer.html") // Adjust the path if necessary
        .then(response => response.text())
        .then(data => {
          footerPlaceholder.innerHTML = data;
        })
        .catch(err => console.error('Error loading the footer:', err));
    }

    const judgeGrid = document.getElementById("judge-grid");
    if (judgeGrid) {
      fetch("/judge-grid.html") // Adjust the path if necessary
        .then(response => response.text())
        .then(data => {
          judgeGrid.innerHTML = data;
        })
        .catch(err => console.error('Error loading the judge grid:', err));
    }

    initLiteYoutubeTeasers();
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
