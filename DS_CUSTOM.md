# DS_CUSTOM — Starter Template

Inventario delle customizzazioni CSS project-specific rispetto al Design System.

**Ultimo aggiornamento:** 10 Lug 2026
**DS Version:** ^0.17.2
**File CSS custom:** `src/app/globals.css` (22 righe, solo body + selection), `src/styles/components.css` (site header + overlay mobile)

---

## Riepilogo

| Metrica | Valore |
|---------|--------|
| Classi custom definite | 6 |
| Override DS | 0 |
| Inline styles | 0 |
| Classi non definite | 0 |
| Compliance | **100% — solo il gap site-header/overlay** |

---

## Classi custom (site shell) — CONTROLLED MODE approvato in chat 10 Lug 2026

Il DS non spedisce una barra di navigazione fissa né un overlay mobile fullscreen (motion decorativo tenuto fuori dal DS). Unica eccezione custom, in `src/styles/components.css`, tutti i valori da token `--ds-*`:

| Classe | Ruolo |
|--------|-------|
| `.site-header` | barra flottante fissa (surface + blur + border + shadow) |
| `.site-nav-link` (+ `:hover`) | link nav desktop, secondary→primary on hover |
| `.site-nav-overlay` (+ `.is-open`) | overlay mobile fullscreen, fade + backdrop blur |
| `.site-nav-overlay__link` (+ `:hover`, stagger `:nth-child`) | link grandi display-font, reveal slide-up |
| `.burger` (+ `.is-open`) | wrapper due-linee dentro `.ds-icon-btn` |
| `.burger__line` | linea che ruota in X su `.is-open` |

Motion rispetta `prefers-reduced-motion`. Overlay a `z-dropdown`, header a `z-sticky` (burger sempre cliccabile).

---

## Note

- Setup base (body background/color/font-family, selection colors) in `globals.css`
- Heading semantici `h1`/`h2` lasciano che gli stili base DS governino font-family + color
- Sidebar brand + SiteHeader/SiteFooter brand usano `.ds-heading-ui`
- Stat numbers usano `.ds-stat-number` (display font, tabular-nums)
- Landing/footer/hero/CTA/feature-grid = 100% classi DS (recipe ds-build), zero custom

---

## Azioni Future

- [ ] Le 6 classi site-shell sono candidate a diventare un layer DS (nav/overlay) se ricorrono nei consumer
