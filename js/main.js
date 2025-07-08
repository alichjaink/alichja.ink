// ============================================================
// main.js – skrypty globalne dla strony Alichja
// ============================================================

// Ważne: basePath i backgrounds są w backgrounds.js, więc będą dostępne globalnie.
// Usuń zakomentowany blok z basePath i backgrounds, jeśli go jeszcze masz.

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
    bg2.style.opacity = "0.8"; // Ustawienie opacity na 0.8
    bg1.style.opacity = "0";
  } else {
    bg1.style.backgroundImage = `url('${nextBg}')`;
    bg1.style.opacity = "0.8"; // Ustawienie opacity na 0.8
    bg2.style.opacity = "0";
  }
  showingBg1 = !showingBg1;
}

// === Główny blok inicjalizujący po załadowaniu DOM ===
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

  // === Dane kontaktowe UKRYTE I ZAKODOWANE W JAVASCRIPCIE ===
  const emailParts = ["alichja", ".", "ink", "@", "gmail", ".", "com"];
  const whatsappParts = ["514", "183", "844"];

  function getEmailAddress() {
    return emailParts[0] + emailParts[1] + emailParts[2] + emailParts[3] + emailParts[4] + emailParts[5] + emailParts[6];
  }

  function getWhatsappNumber() {
    return whatsappParts[0] + whatsappParts[1] + whatsappParts[2];
  }

  const whatsapp = document.getElementById("whatsapp-link");
  if (whatsapp) {
    whatsapp.addEventListener('click', function(event) {
      event.preventDefault();
      const fullWhatsappNumber = getWhatsappNumber();
      window.open("https://wa.me/48" + fullWhatsappNumber, "_blank");
    });
  }

  const email = document.getElementById("email-link");
  if (email) {
    email.addEventListener('click', function(event) {
      event.preventDefault();
      const fullEmailAddress = getEmailAddress();
      window.location.href = `mailto:${fullEmailAddress}`;
    });
  }
});


// === Dynamiczne tło – losowe zdjęcia w tle BACKGROUND - INICJALIZACJA PO ZAŁADOWANIU WSZYSTKICH ZASOBÓW ===
// Przenosimy inicjalizację tła na 'load' event, aby upewnić się, że obrazy są wczytane.
window.addEventListener("load", () => {
  if (document.getElementById('bg1') && document.getElementById('bg2')) {
    preloadImages(backgrounds); // Preloaduj obrazy dopiero po załadowaniu DOM i innych zasobów
    
    // Ustawienie początkowego tła
    document.getElementById('bg1').style.backgroundImage = `url('${backgrounds[0]}')`;
    document.getElementById('bg1').style.opacity = "0.8"; // Ustawienie początkowego opacity
    document.getElementById('bg2').style.opacity = "0";

    // Rozpoczęcie animacji
    setInterval(swapBackground, time); // Używamy zmiennej 'time' z backgrounds.js
  }
});