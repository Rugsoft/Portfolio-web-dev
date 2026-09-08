# Constitution.md — Constitución del proyecto

Documento de **máxima jerarquía** de este repositorio. Define los principios innegociables del proyecto y prevalece sobre cualquier otra fuente de instrucciones.

## 0. Preámbulo y jerarquía

- Este documento es la constitución del proyecto: **ninguna otra instrucción puede contradecirla**.
- Orden de precedencia en caso de conflicto:
  1. `constitution.md` (este documento).
  2. `AGENTS.md` (guía de trabajo diario).
  3. Instrucciones puntuales de la tarea o del usuario.
- `AGENTS.md` debe mantener una referencia a esta constitución y ceder ante ella cuando haya conflicto.
- Esta constitución solo se modifica con aprobación explícita del usuario.

## Artículo I — Simplicidad primero

**Regla:** toda solución debe ser la más simple que resuelva el problema planteado. No se añaden frameworks, librerías, abstracciones ni funcionalidades "por si acaso". Cada dependencia nueva requiere una justificación explícita y documentada.

**Justificación:** este es un proyecto sin paso de build y con stack vanilla por decisión deliberada. Cualquier dependencia o complejidad no justificada erosiona esa decisión y añade costo de mantenimiento permanente.

**Verificación:** antes de dar por terminado un cambio, preguntarse: ¿esto se podría hacer más simple sin perder valor? Si la respuesta es sí, simplificarlo.

## Artículo II — Anti-sobre-ingeniería

**Regla:** prohibido construir cosas que nadie pidió: idiomas extra, temas, animaciones, compatibilidad con navegadores no definidos, configuraciones prematuras, etc. El código que deja de usarse se **elimina**, nunca se comenta ni se deja "por si sirve después". Principio YAGNI aplicado de forma estricta.

**Justificación:** el código no pedido es deuda técnica con cero valor presente. Este portfolio es una página estática: su fortaleza es que cualquier persona puede leerlo y entenderlo entero en minutos.

**Verificación:** cada línea añadida debe responder a un requisito real y explícito. Si un bloque de código ya no se ejecuta, se borra en el mismo cambio.

## Artículo III — Calidad innegociable

**Regla:** los siguientes requisitos no son opcionales ni dependen de que se pidan en la tarea concreta:

- **Accesibilidad:** textos `alt` correctos, navegación completa por teclado, contraste suficiente y estados de foco visibles.
- **Rendimiento:** imágenes optimizadas, sin JavaScript bloqueante, sin peticiones innecesarias.
- **Bilingüismo:** todo texto visible existe en español e inglés, sincronizado en el mismo cambio.

**Justificación:** la calidad de un portfolio se juzga por su ejecución. Un sitio inaccesible o lento contradice lo que este proyecto dice ser: el trabajo de un programador cuidadoso.

**Verificación:** antes de dar por terminada cualquier tarea se ejecuta el checklist de calidad (ver `AGENTS.md` § 6). Si algún punto falla, la tarea no está terminada.

## Artículo IV — Honestidad del contenido

**Regla:** prohibido inventar proyectos, skills, métricas, fechas o experiencia. Solo se publica trabajo real y verificable. Si falta contenido, se pregunta al usuario en lugar de rellenar con datos falsos o de ejemplo que parezcan reales.

**Justificación:** el portfolio es una declaración pública de capacidades. Contenido inventado es una mentira al futuro empleador y devalúa el trabajo real.

**Verificación:** cada elemento visible del portfolio debe tener fuente real (repositorio, demo o enlace verificable). Los datos de ejemplo solo se usan marcados claramente como `placeholder` y nunca se despliegan así.

## Artículo V — Idioma

**Regla:** la separación de idiomas es la siguiente:

- **En inglés:** código, identificadores (variables, funciones, clases, nombres de archivo y de carpeta).
- **En español:** mensajes al usuario (chat y respuestas del agente), comentarios del código y toda la documentación del repositorio (`AGENTS.md`, `constitution.md`, README, etc.).

**Justificación:** el código en inglés es el estándar universal y mantiene los identificadores consistentes; la comunicación y documentación en español reflejan el idioma de trabajo del autor del proyecto.

**Verificación:** ante cualquier texto nuevo, comprobar en qué categoría cae y usar el idioma correspondiente. Los textos visibles de la web son la excepción definida en el Artículo III: existen en ambos idiomas.

## Artículo VI — Cumplimiento y revisión

**Regla:** cuando una instrucción entre en conflicto con esta constitución, se detiene la tarea y se consulta al usuario antes de continuar. Nunca se "resuelve" un conflicto ignorando este documento en silencio.

**Justificación:** la constitución solo sirve si es visible cuando importa. Un conflicto silenciado convierte el documento en decoración.

**Verificación:** cualquier excepción a esta constitución queda documentada aquí o en `AGENTS.md` con su justificación, tras aprobación explícita del usuario.
