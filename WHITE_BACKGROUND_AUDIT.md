# WHITE BACKGROUND AUDIT — Freewheel Factory

**Auditor:** Antigravity (Static Code Analysis)  
**Date:** 2026-10-20  
**Scope:** Complete `src/` directory, global config, PrimeNG theme, Tailwind/PostCSS setup  
**Method:** Static code analysis only — runtime verification was NOT performed  

---

## 1. Executive Summary

The Freewheel Factory Bicycle Service Centre application is designed as a **dark-themed** application with deep midnight/charcoal surfaces (`#040609`, `#070a12`, `#0d1322`) and an orange accent (`#ff5a00`). The audit identified **7 confirmed findings** and **3 root-cause categories** that produce or risk producing unwanted white/light backgrounds:

| Classification | Count |
|---|---|
| **Unwanted light background** | 1 |
| **Theme inconsistency (PrimeNG light-mode default)** | 1 |
| **Hardcoded semi-transparent white background (login card)** | 1 |
| **Missing body/html background** | 1 |
| **Undefined CSS variable reference** | 1 |
| **Potential issue requiring runtime verification** | 2 |
| **Total** | **7** |

The **#1 Critical issue** is that the PrimeNG Aura theme runs in **light mode by default** because the `.app-dark` selector class is never applied to any DOM element. This means every PrimeNG component (drawer, buttons, inputs, password fields, checkboxes, overlays, panels) renders with Aura's default light surface colors — typically white or near-white backgrounds. This is the single most impactful root cause.

---

## 2. Scope of Inspection

### Files Inspected (31 files)

| Category | Files |
|---|---|
| **Global config** | `angular.json`, `package.json`, `.postcssrc.json`, `index.html`, `main.ts` |
| **Global styles** | `src/styles.scss` |
| **App shell** | `app.ts`, `app.html`, `app.scss`, `app.config.ts`, `app.config.service.ts`, `app.routes.ts` |
| **Shared** | `navbar/navbar.ts`, `navbar.html`, `navbar.scss`, `footer/footer.ts`, `footer.html`, `footer.scss` |
| **Landing** | `landing.ts`, `landing.html`, `landing.scss` |
| **Landing sub-components** | `hero/hero.scss`, `inage/inage.scss`, `services/services.scss`, `how-it-works/how-it-works.scss`, `about/about.scss`, `why-us/why-us.scss`, `gallery/gallery.scss`, `booking-cta/booking-cta.scss`, `testimonials/testimonials.scss`, `testimonials.ts` |
| **Auth** | `login/login.ts`, `login.html`, `login.scss`, `register/register.html`, `register.ts` |
| **Service page** | `service/service.ts`, `service.html`, `service.scss` |
| **Appointment** | `appointment/appointment.ts`, `appointment.html`, `appointment.scss` |
| **Dashboard** | `dashboard/dashboard.ts`, `dashboard.html`, `dashboard.scss` (empty) |
| **Common** | `input-text/input-text.html`, `input-text.ts`, `input-text.scss` (empty) |

### Technology Stack Verified
- Angular 20 (standalone components, default `Emulated` ViewEncapsulation)
- PrimeNG 20.4 with `@primeuix/themes` Aura preset
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- SCSS component styles

---

## 3. Complete Findings

---

### WBA-001 · PrimeNG Aura Theme Running in Light Mode (`.app-dark` Never Applied)

| Field | Value |
|---|---|
| **Finding ID** | WBA-001 |
| **File path** | `src/app/app.config.ts` (Line 27) |
| **Component / route** | All routes — application-wide |
| **Current value** | `darkModeSelector: '.app-dark'` |
| **Root cause** | PrimeNG is configured to activate dark mode when the CSS class `.app-dark` is present on an ancestor element. However, **no code in the entire project adds `.app-dark`** to `<html>`, `<body>`, or any other root element. The class is referenced only in `app.config.ts` (the config declaration itself) and nowhere else. Therefore, PrimeNG renders all its components (buttons, inputs, password fields, checkboxes, drawers, overlay panels, dropdowns, tooltips) using the **Aura light-mode color scheme** — which uses white/near-white surface colors by default. |
| **Classification** | **Theme inconsistency** |
| **Severity** | **Critical** |
| **Recommended fix** | Add the `.app-dark` class to the `<html>` element in `index.html`: `<html lang="en" class="app-dark">`. Alternatively, apply it programmatically in `App` component's constructor or `ngOnInit`. |
| **Affected pages** | Every page that uses PrimeNG components: navbar drawer, login (pInputText, pPassword, pButton, pCheckbox), appointment form (if PrimeNG inputs are added later), any future PrimeNG dialogs/tables/menus. |

---

### WBA-002 · `body` Element Has No Background Color

| Field | Value |
|---|---|
| **Finding ID** | WBA-002 |
| **File path** | `src/styles.scss` (Lines 77–96) |
| **Component / route** | Application-wide (`body`) |
| **Current value** | `body` has `margin: 0`, `padding: 0`, `color`, `font-family`, etc., but **no `background-color` or `background`** — the relevant lines are all **commented out** (lines 80–87). |
| **Root cause** | The `body` element relies on either the browser default (white) or the `color-scheme: dark` on `<html>` (line 73) to set a dark default background. While `color-scheme: dark` hints to browsers to use a dark background, this is not guaranteed across all browsers and versions. A fixed background element `.hero-blue-bg` in `app.html` provides visual coverage, but it uses `position: fixed` and may not cover during initial paint or on routes where it fails to render. |
| **Classification** | **Missing body background** |
| **Severity** | **High** |
| **Recommended fix** | Uncomment or add `background-color: #040609;` (or `var(--bg-void)`) to the `body` rule in `styles.scss`. This provides a guaranteed dark fallback behind all content. |
| **Affected pages** | All pages — especially visible during initial page load flash and on browsers that don't honor `color-scheme: dark`. |

---

### WBA-003 · Testimonials Section — Hardcoded Light Background `#f4f3ef`

| Field | Value |
|---|---|
| **Finding ID** | WBA-003 |
| **File path** | `src/app/features/landing/components/testimonials/testimonials.scss` (Line 2) |
| **Component / route** | Testimonials landing section (currently **not rendered** — `<app-testimonials>` is not imported or used in `landing.html`) |
| **Current value** | `background: #f4f3ef;` |
| **Root cause** | This is a warm light-beige/off-white background hardcoded on the `.testimonials` wrapper. The entire testimonials section also uses black text stroke (`-webkit-text-stroke: 1px #111`) and light border colors (`#d5d4cf`) — it was clearly designed for a **light-theme** context, contradicting the dark design system. |
| **Classification** | **Unwanted light background** |
| **Severity** | **Medium** (currently unused — not in the DOM) |
| **Recommended fix** | If the testimonials section is to be re-enabled, restyle it to match the dark theme: replace `background: #f4f3ef` with `background: transparent` or `var(--bg-void)`, update text colors to use `var(--text-primary)` / `var(--text-secondary)`, and update borders to use `var(--border-subtle)`. |
| **Affected pages** | Landing page (only if `<app-testimonials>` is uncommented) |

---

### WBA-004 · Login Card — Active Semi-Transparent White Background

| Field | Value |
|---|---|
| **Finding ID** | WBA-004 |
| **File path** | `src/app/features/auth/login/login.scss` (Line 325) |
| **Component / route** | Login page (`/login`) — currently **not routed** (route is commented out in `app.routes.ts`) |
| **Current value** | `//   background: #101010;background: rgba(255, 255, 255, 0.2);` |
| **Root cause** | Line 325 contains a malformed comment. The `// background: #101010;` is a valid SCSS comment that disables the dark background, but the `background: rgba(255, 255, 255, 0.2);` on the same line is **not commented out** — it is active CSS. This gives the `.login-card` a 20% white overlay. Combined with `backdrop-filter: blur(10px)` on line 326, this creates a frosted glass effect with a visible white tint. A subsequent `border` and `border-radius` redeclaration on lines 332–333 overrides lines 329, 328, but the background remains. |
| **Classification** | **Hardcoded semi-transparent white background** |
| **Severity** | **Medium** (login route is commented out, so not currently reachable) |
| **Recommended fix** | Replace the active `background: rgba(255, 255, 255, 0.2)` with a dark-appropriate glass card background, e.g., `background: rgba(10, 15, 26, 0.85)` or `var(--bg-card)`. The entire line 325 should be cleaned up. |
| **Affected pages** | Login page (if route is re-enabled) |

---

### WBA-005 · Hero Component Uses Undefined CSS Variable `--bg-main`

| Field | Value |
|---|---|
| **Finding ID** | WBA-005 |
| **File path** | `src/app/features/landing/components/hero/hero.scss` (Line 8) |
| **Component / route** | Hero section (currently **not rendered** — `<app-hero>` is commented out in `landing.html`) |
| **Current value** | `background-color: var(--bg-main);` |
| **Root cause** | The CSS variable `--bg-main` is **never defined** anywhere in the project (not in `:root`, not in any component). When a CSS variable is undefined and no fallback is provided, the `background-color` property becomes `invalid at computed value time` and falls back to the `initial` value, which is `transparent`. This is harmless in this case (transparent is appropriate), but it indicates a stale reference — the variable may have been renamed to `--bg-void` or `--bg-surface`. |
| **Classification** | **Undefined CSS variable reference** |
| **Severity** | **Low** (currently unused — hero component is not rendered) |
| **Recommended fix** | Change to `background-color: var(--bg-void);` or `var(--bg-surface)` to match the design system, or remove the declaration entirely since the hero overlays provide their own coverage. |
| **Affected pages** | Landing hero (only if `<app-hero>` is uncommented) |

---

### WBA-006 · PrimeNG Drawer (Mobile Menu) — Default Panel Background

| Field | Value |
|---|---|
| **Finding ID** | WBA-006 |
| **File path** | `src/app/shared/navbar/navbar.scss` (Lines 164–184) + `navbar.html` (Line 38) |
| **Component / route** | Navbar mobile drawer — all routes on mobile/tablet (<960px) |
| **Current value** | The navbar SCSS applies `background-color: #070a12 !important` and other dark styles via `:host ::ng-deep .custom-mobile-drawer`. However, this depends on the `::ng-deep` override successfully overriding PrimeNG's inline styles. |
| **Root cause** | Since `.app-dark` is not applied (see WBA-001), PrimeNG's `<p-drawer>` renders with the **Aura light theme** surface colors. The `:host ::ng-deep` overrides in `navbar.scss` attempt to forcefully restyle the drawer with `!important` declarations. **This may or may not fully work** depending on Angular's ViewEncapsulation, PrimeNG's inline style priority, and the drawer's internal overlay/mask elements (which are often rendered at the document root, outside the component tree). The overlay/mask behind the drawer is particularly likely to use PrimeNG's default light colors. |
| **Classification** | **Potential issue requiring runtime verification** |
| **Severity** | **High** |
| **Recommended fix** | Apply `.app-dark` globally (fixes WBA-001), which will make the PrimeNG drawer automatically use dark surfaces. The existing `::ng-deep` overrides can then serve as refinements rather than fighting against light defaults. Alternatively, verify at runtime that the mask/overlay behind the drawer is not white. |
| **Affected pages** | All pages on mobile/tablet viewports |

---

### WBA-007 · PrimeNG Input/Password/Button/Checkbox Components — Light Mode Defaults

| Field | Value |
|---|---|
| **Finding ID** | WBA-007 |
| **File path** | `src/app/features/auth/login/login.scss` (Lines 446–570) + `login.html` |
| **Component / route** | Login page (`/login`) — currently not routed |
| **Current value** | The login page uses `pInputText`, `p-password`, `pButton`, and `p-checkbox`, with extensive `::ng-deep` dark overrides (dark backgrounds `#1c1c1c`, dark borders `#363636`, etc.). |
| **Root cause** | Same root cause as WBA-001: without `.app-dark`, these PrimeNG components render with light-mode styles first, then are overridden via `::ng-deep !important`. This approach is **fragile** — PrimeNG component internal DOM structure can change across versions, and `::ng-deep` is a deprecated API. There is a risk of white background flash before styles are applied, or partial overrides missing internal sub-elements. |
| **Classification** | **Potential issue requiring runtime verification** |
| **Severity** | **Medium** (login route currently disabled) |
| **Recommended fix** | Apply `.app-dark` globally. This eliminates the need for most `::ng-deep` overrides, as PrimeNG Aura dark mode already uses dark surfaces for inputs, buttons, and checkboxes. |
| **Affected pages** | Login page (if route is re-enabled) |

---

## 4. Intentional and Non-Issue Items (Not Flagged)

The following patterns were found but are **not** unwanted background issues:

| Pattern | Location | Why it's not a problem |
|---|---|---|
| `color: #ffffff` | Multiple SCSS files | Text color, not background |
| `background: rgba(255, 255, 255, 0.04)` | `appointment.scss` L276, L331, L516 | Near-invisible 4% white tint on input fields — intentional dark-glass effect |
| `background: rgba(255, 255, 255, 0.08)` | `appointment.scss` L286, L343, L698; `service.scss` L351; `hero.scss` L32 | 8% white tint for focus states, grid patterns, hover effects — intentional |
| `background: rgba(255, 255, 255, 0.1)` | `about.scss` L363 | 10% white metric divider — intentional |
| `background: transparent !important` | `styles.scss` L178, `footer.scss` L9, `landing.scss` L15 | Transparent is intentional |
| `::selection { background: var(--primary); color: #ffffff; }` | `styles.scss` L99–102 | Selection highlight — intentional |

---

## 5. Root Causes Shared Across Multiple Findings

### Root Cause A — PrimeNG Dark Mode Not Activated
**Affects:** WBA-001, WBA-006, WBA-007

The `darkModeSelector: '.app-dark'` is configured but the class is never applied to any DOM element. This single missing line of code is the root cause of all PrimeNG-related light background risks. The fix is trivial: add `class="app-dark"` to `<html>` in `index.html`.

### Root Cause B — Missing Global Background Color
**Affects:** WBA-002

The `body` element lacks an explicit `background-color`. The commented-out declarations suggest this was intentional during development iteration, but the current state leaves the body without a guaranteed dark background.

### Root Cause C — Legacy/Unused Components Not Updated to Dark Theme
**Affects:** WBA-003, WBA-004, WBA-005

The testimonials, hero, and login components were either designed for a different (light) theme iteration or were not updated when the design system shifted to the current dark theme. Since these components are currently disabled (commented out in routes or templates), they are low-priority but should be updated before re-enabling.

---

## 6. Routes and UI States Requiring Runtime Verification

> **IMPORTANT:** The following scenarios were **NOT verified at runtime**. Only static code analysis was performed. Runtime testing is required to confirm the actual rendered appearance.

| # | Scenario | Why runtime verification is needed |
|---|---|---|
| 1 | Initial page load | Check for white flash before `.hero-blue-bg` renders (WBA-002) |
| 2 | Browser full refresh on any route | Same as above |
| 3 | Direct URL access to `/service` or `/appointment` | Verify dark backgrounds are present without navigating from landing |
| 4 | Mobile drawer open/close | Verify drawer mask/overlay is dark, not PrimeNG light default (WBA-006) |
| 5 | PrimeNG password toggle eye icon | Check if the toggle icon panel has a light background |
| 6 | Browser "prefers-color-scheme: light" setting | Check if `color-scheme: dark` on `<html>` is sufficient to suppress white backgrounds |
| 7 | Form validation error states | Check if PrimeNG error styling introduces light backgrounds |
| 8 | Route transitions between landing → service → appointment | Verify no white flashes during Angular route animations |
| 9 | Scroll behavior on all viewport sizes | Verify the fixed background element `.hero-blue-bg` covers the full viewport at all scroll positions |
| 10 | Tailwind CSS default styles | Verify Tailwind v4's `@import 'tailwindcss'` doesn't inject any base background color overrides |

---

## 7. Recommended Fixes in Priority Order

### Priority 1 — Critical (Immediate)

| # | Fix | Effort | Impact |
|---|---|---|---|
| **Fix 1** | Add `class="app-dark"` to `<html>` tag in `index.html` | 1 line | Fixes WBA-001, WBA-006, WBA-007 — converts all PrimeNG components to dark mode |
| **Fix 2** | Add `background-color: var(--bg-void);` to `body` in `styles.scss` | 1 line | Fixes WBA-002 — eliminates potential white flash |

### Priority 2 — Medium (Before re-enabling components)

| # | Fix | Effort | Impact |
|---|---|---|---|
| **Fix 3** | Clean up `login.scss` line 325: remove `background: rgba(255, 255, 255, 0.2)`, replace with dark glass background | 1 line | Fixes WBA-004 |
| **Fix 4** | Restyle `testimonials.scss` to dark theme if re-enabling the component | ~15 lines | Fixes WBA-003 |
| **Fix 5** | Replace `var(--bg-main)` with `var(--bg-void)` in `hero.scss` | 1 line | Fixes WBA-005 |

### Priority 3 — Low (Cleanup / Maintenance)

| # | Fix | Effort | Impact |
|---|---|---|---|
| **Fix 6** | After applying Fix 1, review and remove unnecessary `::ng-deep !important` overrides in `login.scss` and `navbar.scss` that were compensating for light-mode PrimeNG | ~20 lines removed | Reduces CSS complexity and fragility |
| **Fix 7** | Add runtime tests: open the dev server and inspect computed backgrounds on all routes/states listed in Section 6 | Testing time | Confirms no remaining issues |

---

## 8. Proposed Implementation Plan

**Estimated total effort:** ~30 minutes for code changes + ~30 minutes for runtime verification

### Phase 1 — Core Fixes (5 minutes)
1. Add `class="app-dark"` to `<html>` in `index.html`
2. Add `background-color: var(--bg-void);` to `body` in `styles.scss`

### Phase 2 — Runtime Verification (30 minutes)
3. Run `ng serve` and test all 10 scenarios from Section 6
4. Inspect computed styles using browser DevTools
5. Document any new findings

### Phase 3 — Component Cleanup (15 minutes)
6. Fix `login.scss` line 325
7. Fix `hero.scss` line 8
8. Restyle `testimonials.scss` (if needed)

### Phase 4 — CSS Cleanup (10 minutes)
9. Review and simplify `::ng-deep` overrides that are now redundant after PrimeNG dark mode is active

---

## 9. Potential Regression Risks

| Risk | Mitigation |
|---|---|
| Adding `.app-dark` changes PrimeNG component colors that were manually overridden | Review all `::ng-deep` rules after applying `.app-dark` — some color overrides may conflict with PrimeNG dark-mode colors |
| `body` background-color may conflict with the `.hero-blue-bg` fixed background layer | Use the same base color (`#040609`) that `.hero-blue-bg` already uses |
| Tailwind v4's base layer may override `body` background | Test after changes; Tailwind v4 with PostCSS does not typically set body backgrounds, but verify |
| Removing `::ng-deep` overrides before confirming PrimeNG dark-mode coverage | Remove overrides one at a time and verify each PrimeNG component still looks correct |
| The testimonials component, if re-enabled without restyling, will clash with the dark theme | Do not uncomment `<app-testimonials>` until it has been restyled |

---

## 10. Verification Checklist

Use this checklist after implementing fixes to confirm all unwanted backgrounds are resolved:

- [ ] `<html>` tag has `class="app-dark"` in `index.html`
- [ ] `body` has `background-color: var(--bg-void)` or equivalent in `styles.scss`
- [ ] Initial page load shows no white flash (check at slow 3G throttling)
- [ ] Full browser refresh on `/` shows dark background immediately
- [ ] Full browser refresh on `/service` shows dark background immediately
- [ ] Full browser refresh on `/appointment` shows dark background immediately
- [ ] Mobile drawer opens with dark background and dark overlay/mask
- [ ] Mobile drawer close button area has no light background
- [ ] PrimeNG input fields (if used) render with dark backgrounds
- [ ] PrimeNG password field toggle icon has dark background
- [ ] PrimeNG buttons render with appropriate dark-theme styling
- [ ] No white/light backgrounds visible when scrolling the entire landing page
- [ ] No white/light backgrounds on the service catalogue page
- [ ] No white/light backgrounds on the appointment booking page
- [ ] Service filter pills have dark backgrounds
- [ ] Blueprint cards have dark glass backgrounds
- [ ] Footer renders on dark background with no light elements
- [ ] No white flash during route navigation (landing → service → appointment → back)
- [ ] Testimonials section remains commented out (or has been restyled)
- [ ] Login page (if re-enabled) shows dark glass card, not white-tinted card
- [ ] Browser "view source" confirms no inline white background styles

---

## Appendix A — Files with No Background Issues Found

The following files were inspected and contain **no** white or light background concerns:

| File | Status |
|---|---|
| `styles.scss` (design system variables) | All variables are dark colors |
| `app.scss` (`.hero-blue-bg`) | Dark background with radial gradients |
| `landing.scss` (`.background` wrapper) | Dark gradients |
| `inage/inage.scss` | No backgrounds (transparent hero) |
| `services/services.scss` | Uses `var(--bg-card)` correctly |
| `how-it-works/how-it-works.scss` | No unwanted backgrounds |
| `about/about.scss` | Dark gradients on cards |
| `why-us/why-us.scss` | Dark card backgrounds |
| `gallery/gallery.scss` | No backgrounds on wrapper |
| `booking-cta/booking-cta.scss` | Dark glass banner |
| `footer/footer.scss` | `background-color: transparent !important` |
| `service/service.scss` | Dark backgrounds throughout |
| `appointment/appointment.scss` | `var(--bg-void)` with dark cards |
| `dashboard/dashboard.scss` | Empty file |
| `register/register.scss` | Empty file |
| `input-text/input-text.scss` | Empty file |

---

## Appendix B — Summary of All Background Declarations

For reference, here is every `background` or `background-color` declaration in the project with its classification:

| File | Line | Declaration | Status |
|---|---|---|---|
| `styles.scss` | 178 | `.section { background: transparent !important; }` | Intentional |
| `app.scss` | 6 | `.hero-blue-bg { background-color: #040609; }` | Dark |
| `landing.scss` | 15 | `.background { background: transparent; }` | Intentional |
| `landing.scss` | 16–20 | `.background { background-image: ...linear-gradient(...#060709...) }` | Dark |
| `testimonials.scss` | 2 | `.testimonials { background: #f4f3ef; }` | **WBA-003** |
| `hero.scss` | 8 | `.hero { background-color: var(--bg-main); }` | **WBA-005** |
| `hero.scss` | 32 | `.hero-grid-pattern { background-image: radial-gradient(rgba(255,255,255,0.08)...) }` | Subtle pattern |
| `hero.scss` | 40 | `.hero-gradient-overlay { background: radial-gradient(...rgba(5,5,5,0.95)...) }` | Dark overlay |
| `about.scss` | 34 | `.founder-card { background: linear-gradient(145deg, rgba(16,19,28,0.85)...) }` | Dark |
| `about.scss` | 155 | `.accolades-container { background: rgba(10,12,18,0.6); }` | Dark |
| `about.scss` | 289 | `.workshop-manifesto { background: radial-gradient(...rgba(14,16,22,0.95)...) }` | Dark |
| `services.scss` | 42 | `.service-feature-card { background: var(--bg-card); }` | Dark |
| `why-us.scss` | 23 | `.benefit-card { background: rgba(14,16,22,0.75); }` | Dark |
| `booking-cta.scss` | 7 | `.booking-cta-banner { background: rgba(14,16,22,0.8); }` | Dark |
| `navbar.scss` | 8 | `.navbar { background: rgba(4,6,9,0.75); }` | Dark |
| `navbar.scss` | 165 | `.custom-mobile-drawer { background-color: #070a12 !important; }` | Dark override |
| `footer.scss` | 9 | `.footer { background-color: transparent !important; }` | Intentional |
| `login.scss` | 325 | `.login-card { background: rgba(255,255,255,0.2); }` | **WBA-004** |
| `login.scss` | 451 | `.p-inputtext { background: #1c1c1c !important; }` | Dark override |
| `login.scss` | 509 | `.p-password-input { background: #1c1c1c !important; }` | Dark override |
| `login.scss` | 561 | `.p-checkbox-box { background: #1c1c1c !important; }` | Dark override |
| `login.scss` | 583 | `.login-button { background: #df3210 !important; }` | Brand color |
| `login.scss` | 685 | `.social-button { background: transparent; }` | Intentional |
| `service.scss` | 21–23 | `.services-hero { background: radial-gradient(...rgba(4,6,9,0.8)...) }` | Dark |
| `service.scss` | 334 | `.filter-pill { background: var(--bg-card); }` | Dark |
| `appointment.scss` | 11 | `.appointment-page { background: var(--bg-void, #040609); }` | Dark |
| `appointment.scss` | 127 | `.booking-card { background: rgba(10,15,26,0.88); }` | Dark |
| `appointment.scss` | 371 | `.book-button { background: linear-gradient(135deg, #ff5a00...) }` | Brand gradient |
| `appointment.scss` | 606 | `.appointment-modal-card { background: #0d1322; }` | Dark |

---

*End of audit. No application source code, styles, or configuration was modified.*
