/* ============================================
   main.js — punto de entrada de JavaScript
   T-12: cablea el selector de idioma con i18n.js.
   La navegación (menú hamburguesa) llega en T-16.
   ============================================ */

import {
  applyLanguage,
  currentLanguage,
  loadSavedLanguage,
  toggleLanguage,
} from "./i18n.js";

// Estado inicial (RF-3): si el visitante ya eligió idioma en una
// visita anterior, se aplica el suyo; si no, español (el HTML ya
// viene en español por defecto). loadSavedLanguage es defensiva:
// sin almacenamiento disponible devuelve null y queda el español.
applyLanguage(loadSavedLanguage() ?? currentLanguage());

// Selector de idioma: alterna ES/EN sin recargar (RF-2).
// El texto del botón muestra el idioma al que se cambiaría.
const toggleButton = document.getElementById("language-toggle");

function syncButtonLabel() {
  toggleButton.textContent = currentLanguage() === "es" ? "EN" : "ES";
}

toggleButton.addEventListener("click", () => {
  toggleLanguage();
  syncButtonLabel();
});

syncButtonLabel();
