# Plan: Portfolio MVP

**Spec de referencia:** [`spec.md`](spec.md) (001-portfolio-mvp, estado: Aprobado)
**Estado:** Borrador
**Constitución:** este plan se rige por `constitution.md`. El spec define el QUÉ y el POR QUÉ; este plan define el CÓMO.

---

## 1. Ámbito

Implementar el MVP definido en el spec: una única página bilingüe ES/EN con las 4 secciones (hero, proyectos, skills, contacto), publicable en GitHub Pages, accesible y visible sin JavaScript. Duda D-2 (datos reales) queda como prerrequisito de publicación, gestionado en la Fase 0.

---

## 2. Decisiones técnicas

### TD-1 — Stack vanilla sin build

HTML, CSS y JavaScript vanilla con módulos ESM nativos. Sin frameworks, sin bundler, sin paso de build.

**Justificación:** decisión fundacional del proyecto (AGENTS.md §1, RNF-7). Lo que está en el repo es lo que se sirve.

### TD-2 — Contenido en HTML bilingüe estático (excepción documentada)

Todo el contenido de proyectos, skills y contacto vive directamente en `index.html`, duplicado en español e inglés. **No** se usa `assets/data/` con JSON.

**Justificación:** es una **excepción explícita y documentada** a AGENTS.md §4 (contenido basado en datos). El render desde JSON requiere JavaScript, y el spec exige (RF-7) que todo el contenido sea visible sin JavaScript; sin paso de build no hay forma de pre-renderizar JSON en HTML. El HTML bilingüe estático cumple RF-7 con cero dependencias y es la solución más simple (Artículos I y II). AGENTS.md se actualiza para registrar esta excepción.

**Consecuencia:** añadir un proyecto futuro implica editar `index.html` en ambos idiomas. Si en el futuro se acepta JS como requisito del contenido, se puede migrar a JSON sin cambiar el spec.

### TD-3 — Mecanismo i18n: contenido duplicado y oculto por CSS

El HTML contiene ambos idiomas desde el principio; el español es el visible por defecto. JavaScript alterna la visibilidad de cada bloque de idioma, actualiza `lang` del documento y guarda la elección.

**Justificación:** cumple RF-2 (cambio sin recarga), RF-7 (contenido presente sin JS, en español por defecto) y LC-7 (la posición de lectura se conserva porque el DOM no se regenera). Alternativas descartadas: recargar con parámetro de URL (rompe RF-2) y renderizar por JS (rompe RF-7).

### TD-4 — Persistencia defensiva del idioma

La elección de idioma se guarda en almacenamiento local del navegador, con la lectura envuelta en manejo de errores.

**Justificación:** si el almacenamiento está bloqueado (LC-2), el sitio sigue funcionando en español sin errores visibles (RF-3). La preferencia es local al navegador (LC-6).

### TD-5 — Tema claro único, preparado para tema oscuro

Un único tema claro en el MVP. Todos los colores, tipografía y espaciado viven en custom properties de CSS en `:root`.

**Justificación:** decisión D-1 del spec. Añadir un tema oscuro futuro será definir nuevos valores de las mismas variables, sin tocar componentes.

### TD-6 — Navegación: hamburguesa en móvil con fallback

En móvil, menú hamburguesa que abre/cierra con JavaScript. En escritorio, enlaces en línea. Sin JavaScript, los enlaces de navegación permanecen visibles y operables.

**Justificación:** decisión D-3 del spec. El fallback sin JS mantiene RF-1 y RF-7; el menú usa elementos nativos accesibles (botón con estado expandido declarado, navegación por teclado, RNF-1).

### TD-7 — Despliegue: GitHub Pages desde la raíz

Rutas relativas en todo el proyecto, nombres de archivo en minúsculas seguros para URL, sin herramientas que generen archivos.

**Justificación:** RNF-6 y AGENTS.md §7. El sitio debe funcionar bajo el subdirectorio de GitHub Pages.

---

## 3. Arquitectura de archivos

Estructura según AGENTS.md §4, con la excepción de TD-2 (sin `assets/data/`):

```
/
├── index.html                  (contenido bilingüe, estructura semántica)
├── assets/
│   ├── css/
│   │   ├── base.css            (reset, tokens de diseño en :root)
│   │   ├── layout.css          (grid, contenedores, responsive)
│   │   └── components.css      (botones, tarjetas de proyecto, nav)
│   ├── js/
│   │   ├── main.js             (punto de entrada: nav, wiring)
│   │   └── i18n.js             (selector de idioma, persistencia)
│   └── img/                    (imágenes optimizadas, nombres descriptivos)
├── specs/
│   └── 001-portfolio-mvp/
│       ├── spec.md
│       └── plan.md
├── AGENTS.md
└── constitution.md
```

Reglas: importar CSS desde `main.css`; `<script type="module" src="./assets/js/main.js">` al final del `<head>` o del `<body>`; rutas relativas siempre (TD-7, RNF-6).

---

## 4. Fases de implementación

### Fase 0 — Recopilar contenido real (resuelve D-2)

Requisito previo a la publicación: obtener del titular los proyectos reales (nombre, descripción, explicación, stack, repo, demo), las skills por categoría, el nombre/rol y el email de contacto. Mientras tanto, se trabaja con contenido marcado como placeholder (Artículo IV, RNF-5).

### Fase 1 — Esqueleto HTML (RF-1, RF-4, RF-5, RF-6, RF-7)

- `index.html` semántico: `header` (nav + selector), `main` (secciones hero/proyectos/skills/contacto), `footer`.
- Contenido duplicado en ambos idiomas (TD-3), español visible por defecto.
- Tarjetas de proyecto con enlaces reales; enlaces de contacto reales; perfiles sin URL omitidos (RF-6).
- Al final de esta fase, el sitio completo es legible y navegable sin JavaScript.

### Fase 2 — CSS (RNF-1, RNF-2, RNF-3, TD-5)

- `base.css`: reset mínimo + tokens en `:root` (colores, tipografía, espaciado, radios).
- `layout.css`: contenedor, grid de secciones; base móvil (≈375 px) con media queries hacia escritorio.
- `components.css`: nav, tarjetas de proyecto, listas de skills, estados hover/focus visibles.
- Verificar contraste de las combinaciones elegidas (RNF-1).

### Fase 3 — JavaScript i18n (RF-2, RF-3; LC-1, LC-2, LC-6, LC-7)

- `i18n.js`: alternar bloques `es`/`en`, actualizar `lang` del documento, guardar/leer la preferencia con manejo de errores (TD-4).
- `main.js`: cablear el selector de idioma.
- Verificar que la página no salta de posición al cambiar idioma (LC-7) y que sin JS no hay errores (LC-1).

### Fase 4 — Navegación (D-3, TD-6)

- Menú hamburguesa en móvil: botón con `aria-expanded`, panel de enlaces que se muestra/oculta; cierre con teclado (Escape) y navegación por tabulación.
- En escritorio (media query), enlaces en línea; el botón hamburguesa desaparece.
- Sin JavaScript: los enlaces permanecen visibles y operables.

### Fase 5 — Verificación y publicación

- Recorrer la matriz de verificación (§5) contra el sitio servido localmente (`npx serve .`).
- Ejecutar el checklist de AGENTS.md §6.
- Publicar desde `main` (GitHub Pages) y verificar rutas bajo el subdirectorio (TD-7).

---

## 5. Matriz de verificación

| Requisito / Caso | Cómo se verifica | Fase |
|---|---|---|
| RF-1 | Inspección de la página: 4 secciones en orden, nav funcional | F1, F2 |
| RF-2 | Cambiar idioma manualmente: todo el texto cambia sin recarga; `lang` del documento cambia; sin salto de scroll | F3 |
| RF-3 | Recargar tras elegir idioma: se mantiene la elección; primera visita → español | F3 |
| RF-4 | Revisar cada tarjeta: campos completos, enlaces funcionan, sin demo → sin hueco | F1 |
| RF-5 | Revisar agrupación; verificar que no se renderizan categorías vacías | F1, F2 |
| RF-6 | Email abre cliente de correo; solo perfiles con URL reales aparecen | F1 |
| RF-7 | Abrir el sitio con JavaScript desactivado: contenido completo en español, enlaces operables | F1, F3 |
| RNF-1 | Recorrido por teclado: foco visible en cada elemento, orden lógico, contraste | F2, F4 |
| RNF-2 | Peso de página reducido, imágenes optimizadas, sin JS bloqueante | F2 |
| RNF-3 | Verificación visual a 375 px y escritorio | F2 |
| LC-1 / LC-2 | Probar con JS desactivado y con almacenamiento bloqueado | F3 |
| LC-3 / LC-4 / LC-5 | Probar datos con demo ausente, perfil sin URL y categoría vacía | F1 |
| LC-6 | Probar en un navegador sin historial/almacenamiento | F3 |
| LC-7 | Cambiar idioma con la página a media altura: sin salto | F3 |
| LC-8 | Buscar cadenas sin clave de idioma en el HTML | F5 |

---

## 6. Notas de ejecución

- Servidor local: `npx serve .` o `python -m http.server 8000` (los módulos ESM no funcionan con `file://`).
- Commits pequeños por fase, mensajes en español, sin subir a remoto sin instrucción explícita.
- Si durante la implementación aparece un requisito que contradiga el spec, detenerse y consultar (Artículo VI).
