# Tasks: Portfolio MVP

**Spec:** [`spec.md`](spec.md) (Aprobado) · **Plan:** [`plan.md`](plan.md)
**Convención:** tareas de 20–30 min máximo, ordenadas por dependencia (Fase 0 → 5). Cada tarea indica los requisitos que cubre (RF/RNF/LC del spec) y cierra solo cuando su criterio "Hecho cuando:" se verifica realmente.

---

## Fase 0 — Contenido real (prerrequisito de publicación)

- [x] **T-01 — Recopilar los datos reales del titular** *(cubre RF-4, RF-5, RF-6; cierra D-2)* ✅ 2026-09-08
  Listado completo de proyectos (nombre, descripción, explicación: problema/stack/implementación, `repoUrl`, `demoUrl` si existe, tags), skills reales agrupadas por categoría, nombre/rol y email de contacto, y perfiles existentes con su URL.
  **Hecho cuando:** existe un documento (chat o archivo) con todos los campos reales de cada proyecto/skill/perfil y el titular lo confirma como definitivo.
  **Resultado:** datos guardados en [`misdatos.md`](misdatos.md) (fuente de verdad de T-01). Incluye 4 proyectos reales con enlaces verificados (Movie Trailer Hub, GeekVault y Reservar Llocs con repo+demo; Alumnalia con demo verificada https://alumnalia.es y repo privado sin enlace), skills completas por categorías, datos personales y contacto (email + GitHub + LinkedIn). Pendientes resueltos el 2026-09-08: Alumnalia se incluye sin repo (privado), web personal no se incluye, teléfono no se publica.

## Fase 1 — Esqueleto HTML

> **Nota para T-02–T-06:** mientras T-01 no esté completada, todo el contenido que se añada en esta fase debe ser **placeholder marcado como tal** (comentario HTML `<!-- PLACEHOLDER: sustituir con datos reales de T-01 -->`), nunca datos ficticios que parezcan reales (Artículo IV, RNF-5).

- [x] **T-02 — Crear el esqueleto semántico de `index.html`** *(cubre RF-1)* ✅ 2026-09-08
  `<!doctype html>` con `lang="es"`, metadatos, `header` (nav + selector de idioma), `main` con las 4 secciones (`#inicio`, `#proyectos`, `#skills`, `#contacto`) y `footer`.
  **Hecho cuando:** la página se sirve con un servidor estático, la estructura semántica es correcta y las 4 secciones existen con sus identificadores.
  **Resultado:** `index.html` creado con estructura semántica completa (`header`/`nav`/`main`/`footer`, 4 secciones con ids, botón de idioma presente para cablear en T-12/T-14). Verificado con `python -m http.server`: HTTP 200 y las 4 secciones presentes. Sin CSS/JS referenciados todavía (se crean en T-08+/T-12+) para evitar 404.

- [x] **T-03 — Contenido del hero en ambos idiomas** *(cubre RF-1, RF-7)* ✅ 2026-09-08
  Quién es el autor, a qué se dedica y llamada a la acción hacia proyectos/contacto, duplicado en bloques `es`/`en` (bloque español visible por defecto; el inglés oculto con el atributo nativo `hidden`, sin depender de CSS).
  **Hecho cuando:** sin JavaScript, el hero se ve completo en español y el texto inglés existe en el documento oculto mediante `hidden`.
  **Resultado:** hero bilingüe añadido con datos reales de [`misdatos.md`](misdatos.md): nombre, rol, presentación (trayectoria electrónica → desarrollo web, SDD), objetivo profesional y 2 CTAs (proyectos/contacto). Bloque `es` visible por defecto y bloque `en` con contenido traducido equivalente oculto vía atributo `hidden` + `lang` correcto en cada bloque. Verificado: HTTP 200 y ambos bloques presentes (`data-lang="es"` visible, `data-lang="en" hidden`). Sin CSS ni JS necesarios para el comportamiento.

- [x] **T-04 — Sección de proyectos: tarjetas bilingües** *(cubre RF-4, LC-3)* ✅ 2026-09-08
  Una tarjeta por proyecto real de T-01: nombre, descripción, explicación, tags, enlaces (`repoUrl` siempre; `demoUrl` solo si existe, sin hueco visual si falta) e imágenes opcionales con `alt` descriptivo.
  **Hecho cuando:** cada tarjeta del HTML contiene los campos completos en `es` y `en`, y los enlaces apuntan a repos/demo reales (verificados que existen).
  **Resultado:** 4 tarjetas (`article.project-card`) añadidas con datos reales de [`misdatos.md`](misdatos.md): Alumnalia (demo verificada, sin repo — privado, LC-3), Movie Trailer Hub, GeekVault y Reservar Llocs (los 3 con repo+demo). Cada tarjeta con bloque `es` visible y bloque `en` oculto vía `hidden`, descripción, explicación (problema/stack/implementación), tags y enlaces con `target="_blank" rel="noopener"`. Sin imágenes todavía (no se aportaron; si se añaden irán con `alt` descriptivo). Verificado: HTTP 200, 4 tarjetas, 12 bloques de idioma (4 tarjetas × 2 + título de sección + hero), 7 enlaces externos únicos.

- [x] **T-05 — Sección de skills bilingüe agrupada** *(cubre RF-5, LC-5)* ✅ 2026-09-08
  Skills de T-01 agrupadas por categorías, solo con tecnologías de uso real.
  **Hecho cuando:** el HTML agrupa las skills por categoría en ambos idiomas y no existe ninguna categoría vacía renderizada.
  **Resultado:** 6 categorías reales de [`misdatos.md`](misdatos.md) añadidas como `div.skill-group` (Front-End; Back-End y bases de datos; Arquitectura, integraciones y librerías; Otros lenguajes; Herramientas y flujo de trabajo; Idiomas). Cada categoría con título y lista `ul.skill-list` en `es` (visible) y `en` (oculto con `hidden`), mismo mecanismo TD-3. Sin categorías vacías y sin tecnologías infladas (solo las reales). Verificado: HTTP 200, 6 grupos, 12 listas (6×2), títulos correctos en ambos idiomas.

- [x] **T-06 — Sección de contacto bilingüe** *(cubre RF-6, LC-4)* ✅ 2026-09-08
  Email como enlace `mailto:` y enlaces solo a los perfiles que existen en T-01.
  **Hecho cuando:** el enlace de email abre el cliente de correo con la dirección correcta y no aparece ningún perfil sin URL.
  **Resultado:** sección de contacto bilingüe con los 3 elementos decididos en T-01: `mailto:futuroelectronico@gmail.com`, GitHub (Rugsoft) y LinkedIn (URL con porcentaje codificado intacta). **Sin teléfono** (decisión: no publicar) y **sin web personal** (decisión: no incluir) — LC-4 aplicado. Cada idioma con su bloque `es`/`en` oculto por `hidden` y texto introductorio traducido. Verificado: HTTP 200, 3 enlaces por idioma, 0 enlaces `tel:`.

- [x] **T-07 — Verificar la página completa sin JavaScript** *(cubre RF-7, LC-1)* ✅ 2026-09-08
  Recorrido de la página con JS desactivado.
  **Hecho cuando:** con JavaScript desactivado se ve todo el contenido en español (el inglés permanece oculto gracias al atributo `hidden`, sin depender de CSS), todos los enlaces (proyectos y contacto) funcionan y no hay huecos vacíos ni errores visibles.
  **Resultado:** verificado en navegador real con la página renderizada (la página no tiene ningún `<script>`: 0 tags, consola y red vacías — sin errores). Contenido completo en español visible: las 4 secciones con contenido (inicio 1.541 chars, proyectos 6.294, skills 3.430, contacto 561). Los 21 bloques `en` ocultos vía `hidden` y los 21 `es` visibles, sin depender de CSS. 28 enlaces operables: 8 anclas internas válidas, 18 externos (repos/demos) y 2 mailto. Sin secciones vacías ni huecos. `lang` del documento: `es`.

## Fase 2 — CSS

- [x] **T-08 — `base.css`: reset mínimo y tokens de diseño** *(cubre RNF-1, TD-5)* ✅ 2026-09-08
  Reset breve + custom properties en `:root` (colores, tipografía, espaciado, radios).
  **Hecho cuando:** `main.css` importa `base.css`, ningún estilo usa valores mágicos de color/espaciado y la página hereda tipografía y colores de las variables.

- [x] **T-09 — `layout.css`: contenedor y secciones mobile-first** *(cubre RNF-3)* ✅ 2026-09-08
  Contenedor central, espaciado entre secciones y base estilizada para ≈375 px.
  **Hecho cuando:** a 375 px de ancho el contenido se lee cómodamente sin desbordes ni scroll horizontal.
  **Resultado:** `assets/css/layout.css` creado e importado en `main.css`: contenedor central (max-width del token, padding inline), secciones con espaciado y separador, hero/proyectos/skills/contacto en flujo vertical de columna única, footer diferenciado, y media query de escritorio (48em) con grid de 2 columnas para proyectos. HTML ajustado: `div.container` envuelve header/main/footer. Verificado en navegador real: 0 elementos desbordando, sin scroll horizontal, contenido legible en columna única a ancho móvil.

- [x] **T-10 — `components.css`: nav, tarjetas y listas** *(cubre RF-1, RF-4, RF-5, RNF-1)* ✅ 2026-09-08
  Estilos de navegación, tarjetas de proyecto y grupos de skills, con estados hover/focus visibles y `alt` correcto respetado en toda imagen.
  **Hecho cuando:** los componentes son distinguibles visualmente y el foco del teclado es claramente visible en todos los elementos interactivos.

  **Resultado:** `assets/css/components.css` creado e importado en `main.css`: nav en flex con hover con fondo, botón de idioma con borde de acento y hover invertido, CTAs del hero tipo botón, tarjetas de proyecto con fondo alternante/borde/radius y tags como chips, skills con marcador ▸ de acento, y refuerzo de foco sobre fondos oscuros. Regla global `:focus-visible` (3px acento) confirmada en CSSOM; 4 reglas `:hover` activas. Sin imágenes aún: requisito `alt` se mantiene para cuando las haya. Verificado en navegador real (captura incluida).
- [x] **T-11 — Escritorio y verificación de contraste** *(cubre RNF-1, RNF-3)* ✅ 2026-09-08
  Media queries hacia pantallas grandes (grid ampliado) y revisión de contraste de texto/fondo. Comprobar también el peso de la página: imágenes optimizadas, sin recursos innecesarios (RNF-2).
  **Hecho cuando:** el layout se ve correcto a 375 px y en escritorio (≥1200 px), las combinaciones de color cumplen contraste suficiente para texto normal y el peso total de la página se mantiene reducido.

  **Resultado:** `layout.css` ampliado con media query ≥75em (1200 px): contenedor a 72rem y hero compacto. Contraste verificado con cálculo WCAG 2.1 real sobre los tokens: todas las combinaciones superan AA (texto 14.56:1, secundario 6.46:1, enlaces 6.67:1, texto sobre tarjetas 13.44:1, texto sobre tags 12.45:1, blanco sobre botón hover 6.67:1). Peso total (RNF-2): HTML 20.2 KB + 3.4 KB CSS = ~23.6 KB, 0 imágenes, 4 recursos. Media queries 48em/75em confirmadas en CSSOM (4+3 reglas); base móvil verificada en T-09. Fase 2 completa.

## Fase 3 — JavaScript i18n

- [x] **T-12 — `i18n.js`: alternar bloques de idioma y actualizar `lang`** *(cubre RF-2)* ✅ 2026-09-08
  Módulo ESM que alterna la visibilidad de los bloques `es`/`en` mediante el atributo `hidden` (el mismo mecanismo de T-03) y actualiza el atributo `lang` del documento, sin recargar la página.
  **Hecho cuando:** al activar el selector, todo el texto visible cambia de idioma sin recarga y el `lang` del `<html>` pasa a `en`/`es` correctamente.
  **Resultado:** `assets/js/i18n.js` (ESM: applyLanguage, currentLanguage, toggleLanguage; alterna `hidden` en los 42 bloques data-lang y actualiza `lang`) + `assets/js/main.js` (cablea `#language-toggle` y sincroniza su etiqueta EN/ES). `index.html` carga `main.js` como módulo. Verificado en navegador real con clics: es→en cambia lang a `en`, 21 bloques en visibles/0 ocultos, botón pasa a «ES»; en→es revierte todo (21/21, botón «EN»). Sin recarga de página y sin errores en consola.
- [x] **T-13 — Persistencia defensiva de la elección de idioma** *(cubre RF-3, LC-2)* ✅ 2026-09-08
  Guardar y leer la preferencia con manejo de errores alrededor del acceso al almacenamiento.
  **Hecho cuando:** tras elegir idioma y recargar, la página arranca en el idioma elegido; con el almacenamiento bloqueado, la página arranca en español sin errores visibles.
  **Resultado:** `i18n.js` ampliado con `loadSavedLanguage()`/`saveLanguage()` (clave `portfolio-lang`), ambas con try/catch defensivo: lectura inválida o bloqueada devuelve `null` (→ español por defecto) y guardado bloqueado se ignora en silencio, sin `alert` ni `console.error`. `main.js` aplica `loadSavedLanguage() ?? currentLanguage()`. `toggleLanguage()` ahora guarda la elección. Verificado en navegador: clic → guardado `en`; recarga → arranca en inglés (21 bloques en visibles, botón «ES»); vuelta a español → guardado `es`. Bloqueo de Storage simulado: `getItem`/`setItem` lanzan y el try/catch los captura sin error visible. Consola limpia en todas las pruebas.
- [x] **T-14 — Cablear el selector en `main.js` y verificar la posición de lectura** *(cubre RF-2, LC-7)* ✅ 2026-09-08
  Conectar el control del selector con `i18n.js` y comprobar el comportamiento con la página a media altura.
  **Hecho cuando:** cambiando de idioma con la página a media altura no se produce salto de scroll.
  **Resultado:** cableado ya activo desde T-12 (botón ↔ toggleLanguage); esta tarea verifica el LC-7 en navegador real: scroll a Proyectos (607px) → cambio de idioma → `window.scrollY` idéntico (salto de scroll: 0px); el desplazamiento visual del contenido es ~26px solo junto al hero (el texto introductorio ES es más largo que EN) y de 1px en Skills — la posición de lectura se mantiene aproximada en todo el documento, nunca salta al inicio. Sin recarga.

- [x] **T-15 — Pruebas de casos límite de i18n** *(cubre LC-1, LC-2, LC-6)* ✅ 2026-09-08
  Probar: JS desactivado, almacenamiento bloqueado y navegador "nuevo" (sin historial ni almacenamiento).
  **Hecho cuando:** sin JS no hay errores y el contenido se ve en español; con almacenamiento bloqueado funciona en español; en navegador nuevo la página arranca en español.
  **Resultado:** LC-6 — con almacenamiento vaciado y recarga completa, la página arranca en español (21 bloques es visibles, botón «EN», storage sigue vacío). LC-2 — localStorage bloqueado (SecurityError simulado): la réplica exacta de la lógica del módulo devuelve null y no lanza; el código servido verificado estructuralmente (try/catch en load y save, sin alert/console.error); página operativa con 21 bloques visibles y consola limpia. LC-1 — HTML estático con es visible/en oculto por `hidden`, sin scripts inline, 28 enlaces nativos operables; lo único inoperable sin JS es el botón de idioma (esperado por el spec). Fase 3 completa.

## Fase 4 — Navegación

> **Bugfix 2026-09-08 (hallado al verificar skills bilingües):** las 6 listas `.skill-list` del inglés se mostraban pese a tener `hidden`: la regla `.skill-list { display: flex }` de components.css (especificidad de autor) anulaba el `display: none` del estilo UA de `[hidden]`. Fix en `base.css`: `[hidden] { display: none !important; }` con comentario explicativo. Re-verificado en navegador: 0 bloques en visibles en español, cambio bidireccional correcto (21/21 en cada idioma) y skills sin duplicados.

- [x] **T-16 — Menú hamburguesa accesible en móvil** *(cubre RF-1, RNF-1, TD-6)* ✅ 2026-09-08
  Botón hamburguesa con `aria-expanded`, panel de enlaces que se muestra/oculta, cierre con Escape y navegación completa por teclado.
  **Hecho cuando:** el menú abre y cierra por clic y por teclado, el estado expandido se declara correctamente y todos sus enlaces son accesibles por tabulación.
  **Resultado:** HTML: botón `#nav-toggle` (3 barras `aria-hidden`, `aria-expanded`, `aria-controls`, aria-label dinámico) + `nav#primary-nav`. JS en `main.js`: alterna `aria-expanded`/`is-open`, Escape cierra y devuelve el foco al botón, clic en enlace cierra el menú; clase `js-enabled` en `<html>` habilita el plegado. CSS: hamburguesa solo en móvil (≤47.99em), panel colapsa solo bajo `.js-enabled` (sin JS la nav queda visible — RF-7), en escritorio hamburguesa oculta. Verificado en navegador (439px): clic abre (aria-expanded=true, panel block), clic cierra, Escape cierra y devuelve foco, clic en enlace cierra y navega; sin JS el panel es visible con enlaces operables.

- [ ] **T-17 — Enlaces en línea en escritorio y fallback sin JS** *(cubre RF-1, RF-7)*
  Media query de escritorio que muestra los enlaces en línea y oculta el botón hamburguesa; sin JavaScript, los enlaces permanecen visibles.
  **Hecho cuando:** en escritorio no aparece el hamburguesa y, sin JavaScript, la navegación es visible y operable en cualquier ancho de pantalla.

## Fase 5 — Verificación y publicación

- [ ] **T-18 — Recorrido completo de la matriz de verificación** *(cubre todos los RF, RNF y LC)*
  Servir el sitio localmente (`npx serve .`) y verificar una a una las filas de la matriz de verificación del plan (§5), más el checklist de AGENTS.md §6.
  **Hecho cuando:** cada fila de la matriz está verificada y marcada, el checklist de AGENTS.md §6 está completo sin excepciones y no hay errores en la consola.

- [ ] **T-19 — Publicar en GitHub Pages y verificar rutas** *(cubre TD-7, RNF-6)*
  Publicar desde `main` (requiere instrucción explícita del titular para push) y comprobar el sitio bajo el subdirectorio de GitHub Pages.
  **Hecho cuando:** el sitio es accesible públicamente, todos los recursos cargan con rutas relativas y tanto ES como EN funcionan en la versión publicada.
