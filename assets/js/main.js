/* ============================================
   main.js — punto de entrada de JavaScript
   T-12/T-13: selector de idioma con i18n.js.
   T-16: menú hamburguesa accesible (TD-6).
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

/* ============================================
   Menú hamburguesa (T-16, TD-6)
   - aria-expanded declara el estado del panel.
   - Escape cierra y devuelve el foco al botón.
   - Cada enlace del menú lo cierra al navegar.
   - Sin JavaScript el panel permanece visible (RF-7):
     el JS solo añade la capacidad de plegarlo.
   ============================================ */

const navToggle = document.getElementById("nav-toggle");
const primaryNav = document.getElementById("primary-nav");

// Habilita el plegado: sin JS el CSS mantiene la nav visible (RF-7).
document.documentElement.classList.add("js-enabled");

function setMenu(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute(
    "aria-label",
    open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
  );
  primaryNav.classList.toggle("is-open", open);
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

// Escape cierra el menú y devuelve el foco al botón (RNF-1).
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (navToggle.getAttribute("aria-expanded") !== "true") return;
  setMenu(false);
  navToggle.focus();
});

// Navegar con un enlace del menú lo cierra.
primaryNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenu(false);
  }
});
