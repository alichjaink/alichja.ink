
/**
 * backgrounds.js – generowany automatycznie z src/backgrounds/backgrounds.md przez Eleventy.
 * Nie edytuj ręcznie! Edytuj ustawienia tła tylko przez panel Decap CMS (src/backgrounds/backgrounds.md).
 */

// Czas (w milisekundach) pomiędzy zmianami tła – ustawiany w DECAP CMS (background_time w .md)

const time = 10 * 1000;

// Ustalanie basePath dla podstron w podkatalogach (faq, blog, historia, gallery)
const basePath = window.location.pathname.includes('/faq/') ||
                 window.location.pathname.includes('/blog/') ||
                 window.location.pathname.includes('/historia/') ||
                 window.location.pathname.includes('/Regulations/') ||
                 window.location.pathname.includes('/gallery/') ? '../' : '';

// Tablica 10 ścieżek do grafik tła – statycznie
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
  `${basePath}images/back/10.jpg`
];

// Uwaga! Dalsza logika działania zmiany tła (ustawianie elementów, obsługa swapBackground itp.) znajduje się wyłącznie w pliku main.js.