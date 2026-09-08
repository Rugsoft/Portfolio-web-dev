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
