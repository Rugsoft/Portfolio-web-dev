# AGENTS.md — Portfolio de programador

Guía de trabajo para agentes de código (y para mí mismo) al construir y mantener este proyecto. Léela completa antes de hacer cualquier cambio.

> **Precedencia:** este proyecto tiene una constitución de máxima jerarquía en [`constitution.md`](constitution.md). En caso de conflicto entre esta guía y la constitución, prevalece la constitución.

## 1. Descripción del proyecto

Portfolio personal como programador con:

- **Idiomas:** bilingüe español + inglés, con selector de idioma visible. Todo el texto visible al usuario debe existir en ambos idiomas.
- **Stack:** HTML, CSS y JavaScript vanilla modernos. **Sin frameworks, sin librerías externas de UI, sin paso de build.** Solo módulos ESM nativos (`<script type="module">`).
- **Despliegue:** GitHub Pages desde la rama principal (`main`), sin proceso de compilación: lo que está en el repo es lo que se sirve.

## 2. Secciones principales

El sitio consta de estas secciones (una sola página o navegación simple, según evolucione):

1. **Presentación (hero):** quién soy, qué hago, llamada a la acción (contacto / ver proyectos).
2. **Proyectos:** cada proyecto incluye:
   - Nombre y descripción clara.
   - **Explicación:** qué problema resuelve, qué stack usó y qué se hizo en él.
   - **Enlaces:** demo en vivo (si existe) y repositorio.
3. **Skills:** tecnologías y herramientas organizadas por categorías (lenguajes, frameworks, herramientas, etc.).
4. **Contacto:** enlaces a email, GitHub, LinkedIn u otros perfiles.

## 3. Convenciones de código

### HTML
- HTML semántico: usar `header`, `nav`, `main`, `section`, `article`, `footer`, etc. en lugar de `div` genéricos cuando exista un elemento adecuado.
- Un único `index.html` en la raíz (salvo que se decida otra cosa más adelante; si se añaden páginas, mantener la misma estructura de carpetas).
- Indentación con 2 espacios.

### CSS
- Archivos propios en `assets/css/`, un archivo por preocupación (p. ej. `base.css`, `layout.css`, `components.css`) importados desde un `main.css`.
- Mobile-first: estilos base para móvil, ampliar con media queries hacia pantallas grandes.
- Usar **custom properties** (variables CSS) en `:root` para colores, tipografía y espaciado. Nada de valores mágicos repetidos.
- Nombres de clases en inglés, en kebab-case (p. ej. `project-card`, `skill-list`).

### JavaScript
- Módulos ESM nativos en `assets/js/`, sin bundler. `<script type="module" src="...">` en el HTML.
- JavaScript vanilla: **no** usar jQuery, frameworks ni librerías externas salvo decisión explícita y documentada aquí.
- Nombres de variables/funciones en inglés, camelCase. Comentarios en español si son necesarios.
- Código progresivo: el contenido principal debe ser visible aunque JavaScript falle; JS solo añade interacción (selector de idioma, render de tarjetas, menú móvil).

### Accesibilidad (obligatorio)
- Todo `img` con `alt` descriptivo (o `alt=""` si es decorativa).
- Navegación completa por teclado; nada debe ser operable solo con ratón.
- El atributo `lang` del `<html>` debe cambiar con el idioma activo (`es` / `en`).
- Contraste suficiente y estados de foco visibles.

## 4. Estructura del proyecto

Mantener (y extender) esta estructura. **No inventar carpetas nuevas sin necesidad.**

```
/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── main.js
│   │   └── i18n.js        (lógica de idiomas)
│   ├── img/                (imágenes optimizadas, nombres descriptivos)
│   └── data/               (solo si se decide volver al enfoque basado en datos; ver excepción abajo)
├── specs/                  (especificaciones y planes por feature, formato SDD)
└── AGENTS.md
```

- **EXCEPCIÓN DOCUMENTADA (contenido en HTML estático):** el contenido de proyectos, skills y contacto vive directamente en `index.html`, duplicado en español e inglés. **No** se renderiza desde JSON. Motivo: el spec del MVP (RF-7) exige que todo el contenido sea visible sin JavaScript, y el render desde JSON lo impediría al no haber paso de build. Decisión registrada en `specs/001-portfolio-mvp/plan.md` (TD-2). Si esta restricción cambia, se puede migrar a JSON sin cambiar el spec.
- Añadir archivos solo donde encaje en esta estructura; si algo no encaja, proponer el cambio en el resumen de la tarea.

## 5. Guía de contenido para agentes

### Añadir un proyecto nuevo

Al añadir un proyecto al contenido (en `index.html`, ver excepción de §4), cada entrada debe incluir:

- `name`: nombre del proyecto.
- `description`: descripción breve en ES y EN.
- `explanation`: qué problema resuelve, con qué stack y qué se implementó (también en ES y EN).
- `demoUrl`: enlace a la demo en vivo (opcional si no existe).
- `repoUrl`: enlace al repositorio.
- `tags`: tecnologías principales.
- `image`: ruta relativa a la captura o imagen (opcional).

Las explicaciones deben escribirse en primera persona y de forma concreta, evitando frases genéricas tipo "página web moderna".

**Nunca contenido de relleno.** Un proyecto sin datos reales no se añade: se pide al titular (constitución, Artículo IV). Nunca inventar nombres, URLs ni descripciones que parezcan reales.

#### Procedimiento exacto

1. **Datos.** Rellenar la plantilla de arriba con datos reales y verificar que cada enlace responde HTTP 200.
2. **Captura.** Copiar el archivo a `assets/img/<nombre-del-proyecto>.png` (minúsculas, sin espacios ni acentos, §7). Leer sus dimensiones **reales** y volcarlas en los atributos `width`/`height` del `img` (evita CLS; no estimar). Controlar el peso (RNF-2): por encima de ~300 KB, convertir a WebP o avisar antes de decidir.
3. **Tarjeta.** Duplicar la estructura de un `article.project-card` existente y añadirla al final de `#proyectos`, justo antes de su `</section>`:

   ```html
   <!-- Proyecto N: Nombre (nota: repo privado / sin demo si aplica) -->
   <article class="project-card">
     <div lang="es" data-lang="es">
       <figure class="project-media">
         <img src="./assets/img/nombre.png" alt="Qué se ve en la captura, en español" loading="lazy" decoding="async" width="1860" height="917">
       </figure>
       <h3>Nombre</h3>
       <p class="project-description">Descripción breve en español.</p>
       <p class="project-explanation">Qué problema resuelve, con qué stack y qué se implementó, en primera persona.</p>
       <ul class="project-tags">
         <li>Tecnología</li><li>Otra</li>
       </ul>
       <p class="project-links">
         <a href="https://github.com/usuario/repo" target="_blank" rel="noopener">Repositorio</a>
         <a href="https://demo.example.com" target="_blank" rel="noopener">Ver demo</a>
       </p>
     </div>
     <div lang="en" data-lang="en" hidden>
       <figure class="project-media">
         <img src="./assets/img/nombre.png" alt="What the screenshot shows, in English" loading="lazy" decoding="async" width="1860" height="917">
       </figure>
       <h3>Nombre</h3>
       <p class="project-description">Short description in English.</p>
       <p class="project-explanation">The problem it solves, the stack and what was implemented, in first person.</p>
       <ul class="project-tags">
         <li>Technology</li><li>Another</li>
       </ul>
       <p class="project-links">
         <a href="https://github.com/user/repo" target="_blank" rel="noopener">Repository</a>
         <a href="https://demo.example.com" target="_blank" rel="noopener">View demo</a>
       </p>
     </div>
   </article>
   ```

4. **Invariantes que no se pueden romper** (todo el valor de este procedimiento está aquí):

   - **Dos bloques por tarjeta, siempre**: `data-lang="es"` visible y `data-lang="en"` con `hidden`. Es el mecanismo TD-3; el JS solo alterna ese atributo, no selecciona textos.
   - **LC-8 / RNF-4**: el inglés se escribe en el *mismo* cambio que el español. Nunca dejar un idioma desactualizado, ni siquiera "temporalmente".
   - **Textos de los enlaces traducidos**: `Repositorio`/`Repository`, `Ver demo`/`View demo`.
   - **Etiquetas traducidas solo si son palabras**: `Gamificación`/`Gamification`, `Calendario`/`Calendar`. Los nombres de tecnología (`PHP 8`, `MariaDB`, `MySQL`) van iguales en ambos bloques.
   - **`alt` traducido y descriptivo** en cada bloque (obligatorio, §3).
   - **Correspondencia posicional**: los elementos de `es` y `en` se emparejan por posición. Si se añade un elemento en un idioma, se añade su equivalente en el otro.
   - **Rutas relativas** para assets (`./assets/img/...`); absolutas solo para enlaces externos, para que funcione bajo el subdirectorio de GitHub Pages (§7).
   - **LC-3**: si no hay repo o demo, se omite ese `<a>`. Nunca un enlace roto ni un hueco vacío.
   - **Sin CSS ni JS nuevos**: el grid de 2 columnas de `assets/css/layout.css` y los estilos de `.project-card` ya son genéricos. Con 6 tarjetas quedan 3 filas simétricas en escritorio y una pila limpia en móvil. Solo habría que tocar CSS si se quisiera un layout que no sea la rejilla de 2 columnas.

5. **Verificar** con el checklist de §6, prestando atención a estos puntos concretos: el recuento de `article.project-card` coincide con el número de proyectos; `#proyectos [data-lang="es"]` visibles y `[data-lang="en"][hidden]` están en igual número; ningún `img` roto (`naturalWidth > 0`); sin desbordamiento horizontal a 375 px; el selector de idioma conmuta los bloques nuevos a la vez.

### Añadir skills

- Agrupar por categorías (lenguajes, frameworks, herramientas, conceptos).
- No inflar la lista: solo tecnologías con nivel real de uso.

### Reglas de contenido bilingüe

- **Todo** texto visible debe existir en español e inglés, en el mismo bloque/estructura del documento, con marcado claro por idioma (p. ej. bloques `es` / `en`).
- Al editar un texto en un idioma, actualizar siempre su traducción en el mismo cambio. Nunca dejar un idioma desactualizado.

## 6. Cómo ejecutar y probar

Los módulos ESM no funcionan abriendo el HTML directamente con `file://`. Usar un servidor estático desde la raíz:

```bash
npx serve .
# o bien:
python -m http.server 8000
```

Abrir la URL local que indique el servidor.

### Checklist antes de dar por terminada una tarea

- [ ] El sitio carga sin errores en la consola del navegador.
- [ ] Ambos idiomas (ES y EN) renderizan correctamente y el selector funciona.
- [ ] El layout se ve correcto en móvil (≈375 px) y en escritorio.
- [ ] Los enlaces de proyectos (demo y repo) funcionan.
- [ ] Sin contenido solo en un idioma ni traducciones desincronizadas.

## 7. Despliegue (GitHub Pages)

- Se despliega automáticamente desde `main` (GitHub Pages configurado para servir la raíz del repo).
- **Rutas siempre relativas** (`assets/img/...`, `./assets/js/...`), nunca absolutas con `/`, para que funcione bajo el subdirectorio de GitHub Pages.
- Nombres de archivos y carpetas en **minúsculas**, sin espacios ni acentos (seguros para URLs); usar guiones para separar palabras.
- No añadir pasos de build ni herramientas que generen archivos: el repo sirve tal cual.
