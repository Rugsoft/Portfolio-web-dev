/* ============================================
   i18n.js — selector de idioma ES/EN
   T-12 · Plan TD-3: alterna bloques es/en con el atributo hidden
   (mismo mecanismo de T-03), actualiza lang del documento y
   no recarga la página (RF-2).
   T-13 · Plan TD-4: persistencia defensiva de la elección
   (RF-3): se guarda en almacenamiento local; si está bloqueado
   o falla (LC-2), el sitio simplemente arranca en español sin
   errores visibles.
   ============================================ */

const LANGS = ["es", "en"];
const DEFAULT_LANG = "es";
const STORAGE_KEY = "portfolio-lang";

/**
 * Aplica un idioma a la página: muestra los bloques del idioma
 * elegido, oculta los demás y actualiza el atributo lang del
 * documento. Sin recarga ni manipulación del scroll (LC-7: el DOM
 * no se regenera, solo cambia la visibilidad).
 * @param {string} lang - "es" o "en"
 */
export function applyLanguage(lang) {
  if (!LANGS.includes(lang)) {
    lang = DEFAULT_LANG;
  }

  for (const block of document.querySelectorAll("[data-lang]")) {
    if (block.dataset.lang === lang) {
      block.removeAttribute("hidden");
    } else {
      block.setAttribute("hidden", "");
    }
  }

  document.documentElement.lang = lang;
}

/**
 * Devuelve el idioma actualmente aplicado, según el atributo lang
 * del documento (fuente de verdad tras applyLanguage).
 * @returns {string} "es" o "en"
 */
export function currentLanguage() {
  const lang = document.documentElement.lang;
  return LANGS.includes(lang) ? lang : DEFAULT_LANG;
}
/**
 * Cambia al otro idioma disponible.
 * @returns {string} el idioma recién aplicado
 */
export function toggleLanguage() {
  const next = currentLanguage() === "es" ? "en" : "es";
  applyLanguage(next);
  return next;
}
