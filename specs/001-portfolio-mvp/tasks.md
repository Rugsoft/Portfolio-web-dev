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

- [ ] **T-02 — Crear el esqueleto semántico de `index.html`** *(cubre RF-1)*
  `<!doctype html>` con `lang="es"`, metadatos, `header` (nav + selector de idioma), `main` con las 4 secciones (`#inicio`, `#proyectos`, `#skills`, `#contacto`) y `footer`.
  **Hecho cuando:** la página se sirve con un servidor estático, la estructura semántica es correcta y las 4 secciones existen con sus identificadores.

- [ ] **T-03 — Contenido del hero en ambos idiomas** *(cubre RF-1, RF-7)*
  Quién es el autor, a qué se dedica y llamada a la acción hacia proyectos/contacto, duplicado en bloques `es`/`en` (bloque español visible por defecto; el inglés oculto con el atributo nativo `hidden`, sin depender de CSS).
  **Hecho cuando:** sin JavaScript, el hero se ve completo en español y el texto inglés existe en el documento oculto mediante `hidden`.

- [ ] **T-04 — Sección de proyectos: tarjetas bilingües** *(cubre RF-4, LC-3)*
  Una tarjeta por proyecto real de T-01: nombre, descripción, explicación, tags, enlaces (`repoUrl` siempre; `demoUrl` solo si existe, sin hueco visual si falta) e imágenes opcionales con `alt` descriptivo.
  **Hecho cuando:** cada tarjeta del HTML contiene los campos completos en `es` y `en`, y los enlaces apuntan a repos/demo reales (verificados que existen).

- [ ] **T-05 — Sección de skills bilingüe agrupada** *(cubre RF-5, LC-5)*
  Skills de T-01 agrupadas por categorías, solo con tecnologías de uso real.
  **Hecho cuando:** el HTML agrupa las skills por categoría en ambos idiomas y no existe ninguna categoría vacía renderizada.

- [ ] **T-06 — Sección de contacto bilingüe** *(cubre RF-6, LC-4)*
  Email como enlace `mailto:` y enlaces solo a los perfiles que existen en T-01.
  **Hecho cuando:** el enlace de email abre el cliente de correo con la dirección correcta y no aparece ningún perfil sin URL.

- [ ] **T-07 — Verificar la página completa sin JavaScript** *(cubre RF-7, LC-1)*
  Recorrido de la página con JS desactivado.
  **Hecho cuando:** con JavaScript desactivado se ve todo el contenido en español (el inglés permanece oculto gracias al atributo `hidden`, sin depender de CSS), todos los enlaces (proyectos y contacto) funcionan y no hay huecos vacíos ni errores visibles.

## Fase 2 — CSS

- [ ] **T-08 — `base.css`: reset mínimo y tokens de diseño** *(cubre RNF-1, TD-5)*
  Reset breve + custom properties en `:root` (colores, tipografía, espaciado, radios).
  **Hecho cuando:** `main.css` importa `base.css`, ningún estilo usa valores mágicos de color/espaciado y la página hereda tipografía y colores de las variables.

- [ ] **T-09 — `layout.css`: contenedor y secciones mobile-first** *(cubre RNF-3)*
  Contenedor central, espaciado entre secciones y base estilizada para ≈375 px.
  **Hecho cuando:** a 375 px de ancho el contenido se lee cómodamente sin desbordes ni scroll horizontal.

- [ ] **T-10 — `components.css`: nav, tarjetas y listas** *(cubre RF-1, RF-4, RF-5, RNF-1)*
  Estilos de navegación, tarjetas de proyecto y grupos de skills, con estados hover/focus visibles y `alt` correcto respetado en toda imagen.
  **Hecho cuando:** los componentes son distinguibles visualmente y el foco del teclado es claramente visible en todos los elementos interactivos.

- [ ] **T-11 — Escritorio y verificación de contraste** *(cubre RNF-1, RNF-3)*
  Media queries hacia pantallas grandes (grid ampliado) y revisión de contraste de texto/fondo. Comprobar también el peso de la página: imágenes optimizadas, sin recursos innecesarios (RNF-2).
  **Hecho cuando:** el layout se ve correcto a 375 px y en escritorio (≥1200 px), las combinaciones de color cumplen contraste suficiente para texto normal y el peso total de la página se mantiene reducido.

## Fase 3 — JavaScript i18n

- [ ] **T-12 — `i18n.js`: alternar bloques de idioma y actualizar `lang`** *(cubre RF-2)*
  Módulo ESM que alterna la visibilidad de los bloques `es`/`en` mediante el atributo `hidden` (el mismo mecanismo de T-03) y actualiza el atributo `lang` del documento, sin recargar la página.
  **Hecho cuando:** al activar el selector, todo el texto visible cambia de idioma sin recarga y el `lang` del `<html>` pasa a `en`/`es` correctamente.

- [ ] **T-13 — Persistencia defensiva de la elección de idioma** *(cubre RF-3, LC-2)*
  Guardar y leer la preferencia con manejo de errores alrededor del acceso al almacenamiento.
  **Hecho cuando:** tras elegir idioma y recargar, la página arranca en el idioma elegido; con el almacenamiento bloqueado, la página arranca en español sin errores visibles.

- [ ] **T-14 — Cablear el selector en `main.js` y verificar la posición de lectura** *(cubre RF-2, LC-7)*
  Conectar el control del selector con `i18n.js` y comprobar el comportamiento con la página a media altura.
  **Hecho cuando:** cambiando de idioma con la página a media altura no se produce salto de scroll.

- [ ] **T-15 — Pruebas de casos límite de i18n** *(cubre LC-1, LC-2, LC-6)*
  Probar: JS desactivado, almacenamiento bloqueado y navegador "nuevo" (sin historial ni almacenamiento).
  **Hecho cuando:** sin JS no hay errores y el contenido se ve en español; con almacenamiento bloqueado funciona en español; en navegador nuevo la página arranca en español.

## Fase 4 — Navegación

- [ ] **T-16 — Menú hamburguesa accesible en móvil** *(cubre RF-1, RNF-1, TD-6)*
  Botón hamburguesa con `aria-expanded`, panel de enlaces que se muestra/oculta, cierre con Escape y navegación completa por teclado.
  **Hecho cuando:** el menú abre y cierra por clic y por teclado, el estado expandido se declara correctamente y todos sus enlaces son accesibles por tabulación.

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
