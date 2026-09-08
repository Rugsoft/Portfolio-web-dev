# Spec: Portfolio MVP

**ID:** 001-portfolio-mvp
**Estado:** Aprobado
**Constitución:** este spec se rige por `constitution.md`. En caso de conflicto, prevalece la constitución.

---

## 1. Contexto y objetivo

### Contexto

Este proyecto es el portfolio personal de su autor como programador, publicado y accesible públicamente. El portfolio es una declaración pública de capacidades: lo juzgan reclutadores y otros programadores, por lo que la calidad de ejecución (accesibilidad, rendimiento, bilingüismo) es parte esencial del producto, no un extra.

### Objetivo

Publicar una **primera versión útil y publicable (MVP)** del portfolio que:

- Presente al autor (quién es, qué hace) y su llamada a la acción.
- Muestre sus proyectos reales con explicación y enlaces verificables.
- Liste sus skills reales, agrupadas por categorías.
- Ofrezca un contacto directo por email y a sus perfiles existentes.
- Sea bilingüe español/inglés, con español como idioma por defecto.

### Por qué este MVP

El valor central del portfolio es que exista y sea bueno, no que sea completo. Una página con las 4 secciones clave, bilingüe y accesible, publicada pronto y honesta, vale más que un sitio ambicioso sin publicar. Todo lo demás (blog, detalle de proyectos, efectos) se añadirá en iteraciones posteriores solo si aporta valor real.

---

## 2. Requisitos funcionales

### RF-1 — Página única con las 4 secciones

El MVP es una única página que contiene, en orden: presentación (hero), proyectos, skills y contacto.

**Criterios de aceptación (EARS):**

- CUANDO el visitante carga la página, EL SISTEMA DEBERÁ mostrar las 4 secciones (hero, proyectos, skills, contacto) en el orden indicado.
- CUANDO el visitante consulta la sección hero, EL SISTEMA DEBERÁ mostrar quién es el autor, a qué se dedica y una llamada a la acción hacia proyectos y/o contacto.
- DONDE exista una sección de navegación, EL SISTEMA DEBERÁ permitir llegar a cada sección desde ella.

### RF-2 — Selector de idioma ES/EN

El sitio es bilingüe. El visitante puede cambiar todo el texto visible entre español e inglés desde un control visible en cualquier momento.

**Criterios de aceptación (EARS):**

- CUANDO el visitante activa el selector de idioma, EL SISTEMA DEBERÁ sustituir todo el texto visible de la página por el idioma elegido, sin recargar la página.
- CUANDO el idioma activo cambia, EL SISTEMA DEBERÁ reflejar el idioma activo en el atributo de idioma del documento (`es`/`en`).
- CUANDO el visitante activa el selector de idioma, EL SISTEMA DEBERÁ mantener la posición de lectura aproximada del visitante (no debe saltar al inicio de la página).
- SI existe algún texto visible, ENTONCES EL SISTEMA DEBERÁ tenerlo disponible en ambos idiomas: no debe existir texto visible sin traducción.

### RF-3 — Idioma por defecto y persistencia

El idioma por defecto es español y la elección del visitante se recuerda para visitas futuras.

**Criterios de aceptación (EARS):**

- CUANDO un visitante carga la página por primera vez, EL SISTEMA DEBERÁ mostrar la página en español.
- CUANDO el visitante elige un idioma, EL SISTEMA DEBERÁ guardar esa elección en su navegador.
- CUANDO un visitante que ya eligió idioma regresa a la página, EL SISTEMA DEBERÁ mostrarla en el idioma que eligió previamente, no en el de por defecto.
- SI el navegador no permite guardar la elección (almacenamiento bloqueado o no disponible), ENTONCES EL SISTEMA DEBERÁ seguir mostrando el sitio correctamente en español, sin errores visibles.

### RF-4 — Sección de proyectos con contenido real

Cada proyecto se presenta con nombre, descripción, explicación y enlaces verificables. El contenido proviene exclusivamente de proyectos reales del autor (Artículo IV de la constitución).

**Criterios de aceptación (EARS):**

- CUANDO el visitante consulta un proyecto, EL SISTEMA DEBERÁ mostrar: nombre, descripción breve, explicación (qué problema resuelve, con qué stack y qué se implementó) y etiquetas de tecnologías.
- SI un proyecto tiene demo en vivo, ENTONCES EL SISTEMA DEBERÁ mostrar un enlace a ella.
- SI un proyecto no tiene demo, ENTONCES EL SISTEMA DEBERÁ mostrar el proyecto sin enlace de demo y sin hueco visual roto.
- CUANDO el visitante consulta un proyecto, EL SISTEMA DEBERÁ mostrar un enlace a su repositorio.
- SI existe contenido de proyectos, ENTONCES EL SISTEMA DEBERÁ renderizarlo en ambos idiomas con las mismas entradas en cada uno.

### RF-5 — Sección de skills

Skills agrupadas por categorías, solo con tecnologías de uso real.

**Criterios de aceptación (EARS):**

- CUANDO el visitante consulta la sección de skills, EL SISTEMA DEBERÁ mostrar las tecnologías agrupadas por categorías (p. ej. lenguajes, herramientas, conceptos).
- SI una categoría no tiene elementos, ENTONCES EL SISTEMA DEBERÁ no mostrar esa categoría en absoluto.

### RF-6 — Sección de contacto

Contacto por email directo y enlaces a los perfiles que existan realmente hoy.

**Criterios de aceptación (EARS):**

- CUANDO el visitante consulta la sección de contacto, EL SISTEMA DEBERÁ mostrar un enlace de email que abra el cliente de correo con la dirección destinataria.
- CUANDO el visitante consulta la sección de contacto, EL SISTEMA DEBERÁ mostrar enlaces a los perfiles (GitHub, LinkedIn, etc.) que existan en el momento de publicar el MVP.
- SI un perfil no existe o no tiene URL definida, ENTONCES EL SISTEMA DEBERÁ no mostrar ese perfil en absoluto.

### RF-7 — Contenido visible sin JavaScript

El contenido completo debe ser visible aunque JavaScript falle o esté desactivado; JS solo añade interacción.

**Criterios de aceptación (EARS):**

- CUANDO el visitante carga la página sin JavaScript, EL SISTEMA DEBERÁ mostrar todo el contenido en español: hero, proyectos, skills y contacto.
- CUANDO el visitante carga la página sin JavaScript, EL SISTEMA DEBERÁ seguir teniendo operables los enlaces de proyectos y contacto (son enlaces normales).
- CUANDO el visitante carga la página sin JavaScript, EL SISTEMA DEBERÁ mostrar la página sin errores visibles ni huecos vacíos; lo único no operable es el cambio de idioma.

---

## 3. Requisitos no funcionales

- **RNF-1 — Accesibilidad:** el sitio debe ser navegable completamente por teclado, con estados de foco visibles, textos `alt` correctos en las imágenes, contraste suficiente y el idioma del documento correcto en todo momento.
- **RNF-2 — Rendimiento:** la página debe cargar rápido en móvil: imágenes optimizadas, sin recursos innecesarios y sin JavaScript bloqueante.
- **RNF-3 — Responsive:** el diseño debe verse correcto desde móvil (≈375 px) hasta escritorio, mobile-first.
- **RNF-4 — Bilingüismo sincronizado:** cada edición de texto debe actualizar ambos idiomas en el mismo cambio; el spec no acepta versiones desincronizadas.
- **RNF-5 — Honestidad:** todo el contenido publicado debe ser real y verificable (Artículo IV). Los datos de ejemplo solo se permiten como `placeholder` marcado y nunca publicados.
- **RNF-6 — Portabilidad de despliegue:** el sitio debe funcionar publicándose desde la raíz del repositorio en un subdirectorio (rutas relativas, nombres de archivo seguros para URL).
- **RNF-7 — Simplicidad (Artículos I y II):** la implementación debe usar el stack vanilla acordado, sin frameworks ni dependencias, y solo con lo que este spec pide. Nada de soluciones por encima del alcance del MVP.

---

## 4. Casos límite

| # | Caso límite | Comportamiento esperado |
|---|-------------|-------------------------|
| LC-1 | JavaScript desactivado o falla al cargar | Todo el contenido visible en español; enlaces operables; solo el cambio de idioma queda inoperante (RF-7). |
| LC-2 | Almacenamiento del navegador bloqueado (p. ej. modo privado estricto) | La página funciona con el idioma por defecto (español) y sin errores visibles; la elección no se recuerda (RF-3). |
| LC-3 | Proyecto sin demo en vivo | Se muestra el proyecto solo con enlace a repositorio, sin hueco visual roto (RF-4). |
| LC-4 | Perfil de contacto sin URL (p. ej. sin LinkedIn) | Ese perfil no se muestra en absoluto (RF-6). |
| LC-5 | Sección de skills sin elementos en alguna categoría | La categoría vacía no se muestra (RF-5). |
| LC-6 | Primera visita tras elegir idioma en otra sesión/dispositivo | En un dispositivo nuevo sin elección guardada, se muestra español (RF-3): la preferencia es local al navegador, no cuenta global. |
| LC-7 | Cambio de idioma a mitad de la página | El visitante no pierde su posición de lectura aproximada (RF-2). |
| LC-8 | Texto añadido por error solo en un idioma | Es un defecto de calidad: el checklist de finalización lo detecta y bloquea la publicación (RNF-4). |

---

## 5. Fuera de alcance (MVP)

- **Blog / artículos:** escribir o mostrar artículos en el portfolio.
- **Página de detalle por proyecto:** páginas individuales por proyecto; los proyectos enlazan directamente a su repo/demo externo.
- **Animaciones y efectos avanzados:** animaciones de entrada, parallax u otros efectos decorativos. Las transiciones básicas de CSS y estados hover/focus sí están permitidos.
- **Formulario de contacto / backend:** no hay servidor; el contacto es por email y enlaces externos.
- **Multi-página:** el MVP es una única página, aunque la arquitectura no debe impedir añadir páginas después.
- **Contenido ficticio:** nunca. Los proyectos y skills del MVP son los reales del autor.

---

## 6. Criterios de finalización

El MVP se considera terminado cuando:

1. Todos los requisitos funcionales (RF-1 a RF-7) pasan sus criterios EARS.
2. El checklist de calidad de `AGENTS.md` § 6 se completa sin excepciones:
   - Sin errores en la consola del navegador.
   - Ambos idiomas renderizan correctamente y el selector funciona.
   - El layout es correcto en móvil (≈375 px) y en escritorio.
   - Los enlaces de proyectos (demo y repo) funcionan.
   - Sin contenido solo en un idioma ni traducciones desincronizadas.
3. El sitio está publicado y accesible públicamente desde la rama principal.
4. Todo el contenido publicado es real y verificable (Artículo IV).

---

## 7. Dudas abiertas y decisiones

- **D-1 — RESUELTA (2026-09-07) — Tema:** el MVP usa un único tema claro, construido con custom properties de CSS para que un tema oscuro se pueda añadir después sin retrabajo (ver plan.md, TD-5).
- **D-2 [NECESITA ACLARACIÓN] — Datos reales del contenido:** se confirmó que existen proyectos reales, pero falta el listado concreto: qué proyectos (nombre, problema, stack, repo, demo), qué skills reales por categoría, el nombre del titular y la dirección de email de contacto. Este spec define la estructura del contenido, no sus datos; deben aportarse antes de la publicación (Fase 0 del plan).
- **D-3 — RESUELTA (2026-09-07) — Navegación móvil:** menú hamburguesa en pantallas pequeñas (con JavaScript) que colapsa a enlaces en línea en escritorio, con fallback accesible sin JavaScript (ver plan.md, TD-6).
