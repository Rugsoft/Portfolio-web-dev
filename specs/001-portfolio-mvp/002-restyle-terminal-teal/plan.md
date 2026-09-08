# Plan — Restyle «Terminal Teal» (spec 002)

## 1. Objetivo

Aplicar el sistema de diseño **«Terminal Teal»** del proyecto de Stitch
*Developer Portfolio Design System* (`projects/13687165189959747688`) al
portfolio, manteniendo intactas las garantías del spec MVP:

- Sin frameworks ni build (AGENTS.md): solo CSS propio y Google Fonts CDN.
- Progresivo: todo visible sin JS (RF-7); mecanismo de idiomas por `hidden`
  + `[hidden]{display:none !important}` intocable (TD-3).
- Mobile-first y contraste AA verificado (RNF-1/RNF-3); peso de página
  contenido (RNF-2).

## 2. Decisiones (aprobadas por el titular)

| Decisión | Elección |
|---|---|
| Modo de color | Tema oscuro completo |
| Alcance | CSS + toques de HTML (hero terminal, clases mínimas) |
| Tipografías | Inter + JetBrains Mono vía Google Fonts CDN |
| Contenido nuevo | Solo adaptado con datos reales; sin métricas ficticias ni sección de experiencia |

## 3. Fidelidad al diseño de Stitch

**Parcial (paleta, tipografía y componentes), no estructural.** Se adoptan:

- Paleta: `surface #04151f`, `canvas-dark #001e2b`, `brand-green #00ed64`,
  hairline `#1c2d38`, chips mono `#1c2d38/#a8b3bc`, texto `#d3e5f4`.
- Tipografía: Inter (cuerpo/titulares, tracking negativo en display) +
  JetBrains Mono (código, metadata, chips).
- Componentes: pill buttons (primario sólido verde + ghost), tarjetas con
  hairline y hover-glow `rgba(0,237,100,.12)`, chips de stack mono
  uppercase radius 4px, terminal decorativa con barra de 3 puntos.

**No se adoptan:** grid de 12 columnas, tira de métricas, sección de
experiencia, tarjetas claras alternas, code windows adicionales.

## 4. Cambios por archivo

- `index.html`: `<link>` de fuentes con `preconnect`; terminal decorativa
  bilingüe (ES/EN) en el hero con datos reales; sin cambios de contenido
  ni enlaces.
- `base.css`: tokens oscuros mapeados a los nombres de variables existentes
  (`--color-ink` nueva para texto sobre acento; `--font-mono` nueva);
  `--font-size-h1` con `clamp()` y tracking negativo; `prefers-reduced-motion`
  extendido a transiciones.
- `layout.css`: hero y footer en superficie profunda con hairline; resto de
  estructura (contenedor, grid 2 col ≥48em, ≥75em) intacta.
- `components.css`: nav ghost, botón de idioma pill mono, CTAs pill,
  tarjetas con hover-glow y `translateY(-2px)`, chips mono, terminal,
  títulos de skill en mono uppercase.

## 5. Verificación realizada

- Contraste WCAG 2.1 calculado programáticamente: texto/bg 14.38:1,
  muted/bg 6.92:1, accent/bg 11.74:1, ink/botón 10.89:1, chips 6.64:1 —
  todos ≥ AA.
- Sin overflow horizontal; toggle ES/EN (21/21 bloques por idioma) y
  atributo `lang` correctos; `[hidden]` sigue ocultando (RF-7/LC-1).
- Consola limpia; fuentes cargadas (`document.fonts`); peso transferido
  ≈ 17.8 KB locales + fuentes CDN.
