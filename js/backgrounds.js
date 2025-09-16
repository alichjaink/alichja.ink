
/**
 * backgrounds.js – generowany automatycznie z src/backgrounds/backgrounds.md przez Eleventy.
 * Nie edytuj ręcznie! Edytuj ustawienia tła tylko przez panel Decap CMS (src/backgrounds/backgrounds.md).
 */

// Czas (w milisekundach) pomiędzy zmianami tła – ustawiany w DECAP CMS (background_time w .md)

const time = 5 * 1000;

// Ustalanie basePath dla podstron w podkatalogach (faq, blog, historia, gallery)
const basePath = window.location.pathname.includes('/faq/') ||
                 window.location.pathname.includes('/blog/') ||
                 window.location.pathname.includes('/historia/') ||
                 window.location.pathname.includes('/Regulations/') ||
                 window.location.pathname.includes('/gallery/') ? '../' : '';

// Tablica 10 ścieżek do grafik tła – statycznie
const backgrounds = [
  `/images/back/img_9202.jpg`,
  `/images/back/img_9200.jpg`,
  `/images/back/img_9291.jpg`,
  `/images/back/img_9296.jpg`,
  `/images/back/img_9209.jpg`,
  `/images/back/img_9241.jpg`,
  `/images/back/img_9252.jpg`,
  `/images/back/img_9288.jpg`,
  `/images/back/img_9204.jpg`,
  `/images/back/img_9214.jpg`
];

// Uwaga! Dalsza logika działania zmiany tła (ustawianie elementów, obsługa swapBackground itp.) znajduje się wyłącznie w pliku main.js.