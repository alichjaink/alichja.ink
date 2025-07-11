// ============================================================
// main.js – skrypty globalne dla strony Alichja
//
// Opis kluczowych zmiennych i funkcji:
// - basePath, backgrounds – obsługa ścieżek i losowania tła
// - preloadImages, swapBackground – logika dynamicznego tła
// - .fade-in – animacja pojawiania się sekcji
// - obsługa aktywnej nawigacji, walidacja formularza
//
// Zmiana logiki basePath lub backgrounds wpływa na widoczność tła na podstronach.
// ============================================================
// main.js – skrypty globalne dla strony Alichja

document.addEventListener("DOMContentLoaded", () => {
  // === Dynamiczne podświetlanie aktywnej sekcji w nawigacji ===
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-main a[href^='#']");

  function activateNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const offsetTop = section.offsetTop - 100;
      const offsetHeight = section.offsetHeight;
      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        const currentLink = document.querySelector(`.nav-main a[href="#${section.id}"]`);
        if (currentLink) currentLink.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", activateNav);
  activateNav();

  // === Efekt fade-in sekcji przy przewijaniu ===
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => observer.observe(el));

  // === Walidacja formularza kontaktowego ===
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.name?.value?.trim();
      const email = form.email?.value?.trim();
      const message = form.message?.value?.trim();
      if (!name || !email || !message) {
        e.preventDefault();
        alert("Wypełnij wszystkie pola formularza.");
      }
    });
  }
});




// === Dynamiczne tło – losowe zdjęcia w tle BACKGROUND ===
/* // Ustalanie basePath dla podstron w podkatalogach (faq, blog, historia, galery)
Przeniesione do backgrounds.js
const basePath = window.location.pathname.includes('/faq/') ||
                 window.location.pathname.includes('/blog/') ||
                 window.location.pathname.includes('/historia/') ||
                 window.location.pathname.includes('/Regulations/') ||
                 window.location.pathname.includes('/galery/') ? '../' : '';

 const backgrounds = [
  `${basePath}images/back/1.jpg`,
  `${basePath}images/back/2.jpg`,
  `${basePath}images/back/3.jpg`,
  `${basePath}images/back/4.jpg`,
  `${basePath}images/back/5.jpg`,
  `${basePath}images/back/6.jpg`,
  `${basePath}images/back/7.jpg`,
  `${basePath}images/back/8.jpg`,
  `${basePath}images/back/9.jpg`,
  `${basePath}images/back/10.jpg`,
]; */


let current = 0;
let showingBg1 = true;

function preloadImages(paths) {
  paths.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function swapBackground() {
  if (!document.getElementById('bg1') || !document.getElementById('bg2')) return;
  let next;
  do {
    next = Math.floor(Math.random() * backgrounds.length);
  } while (next === current);
  current = next;
  const nextBg = backgrounds[current];
  const bg1 = document.getElementById('bg1');
  const bg2 = document.getElementById('bg2');
  if (showingBg1) {
    bg2.style.backgroundImage = `url('${nextBg}')`;
    bg2.style.opacity = "0.8";
    bg1.style.opacity = "0";
  } else {
    bg1.style.backgroundImage = `url('${nextBg}')`;
    bg1.style.opacity = "0.8";
    bg2.style.opacity = "0";
  }
  showingBg1 = !showingBg1;
}

preloadImages(backgrounds);

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('bg1') && document.getElementById('bg2')) {
    document.getElementById('bg1').style.backgroundImage = `url('${backgrounds[0]}')`;
    document.getElementById('bg1').style.opacity = "0.8";
    document.getElementById('bg2').style.opacity = "0";
    setInterval(swapBackground, 10000);
  }
});



// ============================================================
  // Dane kontaktowe UKRYTE I ZAKODOWANE W JAVASCRIPCIE
// ============================================================
document.addEventListener("DOMContentLoaded", function () {

  const emailParts = ["alichja", ".", "ink", "@", "gmail", ".", "com"];
  const whatsappParts = ["514", "183", "844"]; // Możesz podzielić na dowolne fragmenty

  // Funkcja do składania e-maila
  function getEmailAddress() {
    return emailParts[0] + emailParts[1] + emailParts[2] + emailParts[3] + emailParts[4] + emailParts[5] + emailParts[6];
  }

  // Funkcja do składania numeru WhatsApp
  function getWhatsappNumber() {
    return whatsappParts[0] + whatsappParts[1] + whatsappParts[2];
  }

  // WhatsApp
  const whatsapp = document.getElementById("whatsapp-link");
  if (whatsapp) {
    whatsapp.addEventListener('click', function(event) {
      event.preventDefault(); // Zapobiega domyślnej akcji linku
      const fullWhatsappNumber = getWhatsappNumber(); // Składanie numeru
      window.open("https://wa.me/48" + fullWhatsappNumber, "_blank"); // Otwiera link w nowej karcie
    });
  }

  // E-mail
  const email = document.getElementById("email-link");
  if (email) {
    email.addEventListener('click', function(event) {
      event.preventDefault(); // Zapobiega domyślnej akcji linku
      const fullEmailAddress = getEmailAddress(); // Składanie e-maila
      window.location.href = `mailto:${fullEmailAddress}`; // Otwiera klienta poczty
    });
  }
});