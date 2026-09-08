/* ============================================
   main.js — punto de entrada de JavaScript
   T-12: cablea el selector de idioma con i18n.js.
   La navegación (menú hamburguesa) llega en T-16.
   ============================================ */

import { applyLanguage, currentLanguage, toggleLanguage } from "./i18n.js";

// Estado inicial: español (el HTML ya viene así; applyLanguage lo
// deja explícito y sincroniza el atributo lang del documento).
applyLanguage(currentLanguage());

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
