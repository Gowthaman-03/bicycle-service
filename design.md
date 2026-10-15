# UI/UX Design System Specification
## FreeWheel Bicycle Service Application

---

## 1. Design Philosophy

The FreeWheel visual design language merges high-performance **automotive workshop engineering** with modern **dark-mode glassmorphism**. 

Inspired by competitive downhill racing and precision manufacturing engineering, the interface communicates durability, zero-tolerance mechanical accuracy, and premium craftsmanship.

### Core Visual Principles
1. **Obsidian & Electric Orange Palette:** A deep obsidian base (`#060709`) contrasted with high-energy electric orange (`#ff5a00`) accents.
2. **Layered Depth & Glassmorphism:** Subtle translucent backgrounds (`rgba(14, 16, 22, 0.75)`), 14px backdrop blurs, and micro-borders (`rgba(255, 255, 255, 0.07)`).
3. **Mechanical Typography:** Heavy, high-impact uppercase sans-serif headings paired with clean, highly legible body copy.
4. **Fluid Motion & Scroll Revelations:** Staggered reveal animations on scroll (`appScrollReveal`) and hover micro-elevations (`translateY(-5px)`).

---

## 2. Color System & Design Tokens

Verified directly from [styles.scss](file:///c:/Users/gowth/Desktop/bicycle-service/src/styles.scss):

### 2.1 Brand Accent Colors
| Token Name | HEX / RGBA Value | Usage |
| :--- | :--- | :--- |
| `--primary` | `#ff5a00` | Primary action buttons, active tabs, brand icons, key highlights |
| `--primary-hover` | `#ff7426` | Hover state for buttons and interactive badges |
| `--primary-dark` | `#d94700` | Pressed / active state for primary buttons |
| `--primary-glow` | `rgba(255, 90, 0, 0.35)` | Box shadows and glowing outer rings on hover |
| `--primary-soft` | `rgba(255, 90, 0, 0.1)` | Subtle card tinting and secondary button hover fills |
| `--primary-border` | `rgba(255, 90, 0, 0.3)` | Highlight borders on hovered cards and active controls |

### 2.2 Surface & Background Palette
| Token Name | HEX / RGBA Value | Usage |
| :--- | :--- | :--- |
| `--bg-main` | `#060709` | Global root page canvas |
| `--bg-surface` | `#0a0c10` | Section backgrounds and container base |
| `--bg-card` | `rgba(14, 16, 22, 0.75)` | Default blueprint cards with backdrop blur |
| `--bg-card-hover` | `rgba(22, 25, 35, 0.9)` | Hovered cards with higher opacity |
| `--bg-elevated` | `#141720` | Modals, drawers, and elevated dropdown panels |
| `--bg-glass` | `rgba(10, 12, 18, 0.85)` | Sticky header bar with blur |

### 2.3 Typography Colors
| Token Name | HEX Value | Usage |
| :--- | :--- | :--- |
| `--text-primary` | `#ffffff` | Primary headings, button text, important metrics |
| `--text-secondary` | `#c9d1d9` | Subtitles, body descriptions, table text |
| `--text-muted` | `#8b949e` | Labels, placeholders, footnotes, dates |
| `--text-dim` | `#545d68` | Inactive icons, subtle dividers |

### 2.4 Borders & Dividers
| Token Name | RGBA / Value | Usage |
| :--- | :--- | :--- |
| `--border-subtle` | `rgba(255, 255, 255, 0.07)` | Standard card borders and section separators |
| `--border-medium` | `rgba(255, 255, 255, 0.13)` | Input field borders, button outlines |
| `--border-active` | `#ff5a00` | Focused input border, active tab indicator |

---

## 3. Typography & Font Hierarchy

Configured in [index.html](file:///c:/Users/gowth/Desktop/bicycle-service/src/index.html) and [styles.scss](file:///c:/Users/gowth/Desktop/bicycle-service/src/styles.scss):

### 3.1 Font Families
- **Display & Headings:** `'Montserrat', sans-serif` (with Google Fonts imports for `'Bebas Neue'`, `'Archivo Black'`, and `'Outfit'`).
- **Body & Forms:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.

### 3.2 Hierarchy Scale
| Element | Font Family | Size | Weight | Letter Spacing | Transform |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow Tag** | Montserrat | `13px` | 700 | `0.2em` | Uppercase |
| **Section Title** | Montserrat | `clamp(2.2rem, 4.5vw, 3.6rem)` | 900 | `0.02em` | Uppercase |
| **Card Heading (H3)**| Montserrat | `1.25rem - 1.5rem` | 800 | `-0.01em` | Normal / Cap |
| **Body Subtitle** | Inter | `clamp(0.95rem, 1.2vw, 1.1rem)` | 400 | Normal | Normal |
| **Body Standard** | Inter | `16px` | 400 | Normal | Normal |
| **Button Label** | Montserrat | `13px` | 700 | `0.1em` | Uppercase |
| **Caption / Error**| Inter | `12px - 13px` | 500 | Normal | Normal |

---

## 4. UI Components & Interaction States

### 4.1 Buttons

#### Primary Button (`.btn-primary`)
- **Background:** `var(--primary)` (`#ff5a00`)
- **Color:** `#ffffff`
- **Border:** `1px solid var(--primary)`
- **Border Radius:** `4px`
- **Shadow:** `0 4px 20px var(--primary-glow)`
- **Hover State:** Background `#ff7426`, `transform: translateY(-3px)`, shadow `0 10px 30px rgba(255, 90, 0, 0.45)`.
- **Active State:** `transform: translateY(0)`.

#### Secondary Button (`.btn-secondary`)
- **Background:** `rgba(18, 20, 28, 0.6)` with `backdrop-filter: blur(8px)`
- **Color:** `#ffffff`
- **Border:** `1px solid var(--border-medium)`
- **Hover State:** Border `#ff5a00`, color `#ff5a00`, background `var(--primary-soft)`, `transform: translateY(-3px)`.

### 4.2 Blueprint Cards (`.blueprint-card`)
- **Background:** `var(--bg-card)` (`rgba(14, 16, 22, 0.75)`)
- **Backdrop Filter:** `blur(14px)`
- **Border:** `1px solid var(--border-subtle)`
- **Border Radius:** `8px`
- **Hover Transition:** `all 0.35s cubic-bezier(0.16, 1, 0.3, 1)`
- **Hover State:** Background `var(--bg-card-hover)`, border `var(--primary-border)`, `transform: translateY(-5px)`, shadow `0 20px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 90, 0, 0.12)`.

### 4.3 Form Controls & Input Wrapper (`app-input-text`)
- **Container:** Column flex with 8px gap.
- **Label:** `font-semibold`, appends required asterisk (`*`) when validator is present.
- **Input Field:** PrimeNG `pInputText` styled with:
  - Background: `rgba(20, 23, 32, 0.8)`
  - Border: `1px solid rgba(255, 255, 255, 0.12)`
  - Focus Ring: `2px solid var(--primary)` with offset.
  - Invalid State: Border turns red (`#ef4444`), error text rendered via `<small>` tag.
- **Integrated Key Filters:**
  - `int`: Only digits accepted.
  - `num`: Decimal numbers accepted.
  - `money`: Currency decimal formatting.
  - `alpha`: Alphabetic characters only.
  - `alphanum`: Alphanumeric characters only.

### 4.4 Notifications & Alerts
- **Success Alert Pattern:** Floating feedback container with animated icon (`pi pi-check-circle`), auto-dismissing after 6 seconds or on manual close icon click (`pi pi-times`).

### 4.5 Navigation Bar & Mobile Drawer
- **Desktop Navbar:** Floating header bar with 90px height. At `scrollY > 600`, applies `.navbar-scrolled` class with solid blurred obsidian background (`rgba(6, 7, 9, 0.95)`).
- **Mobile Menu Drawer:** Slide-in panel from right (`p-drawer [(visible)]="mobileMenuVisible" position="right"`). Includes workshop logo, stacked navigation links with vector icons, and direct `Book Service Now` primary button.

---

## 5. Layouts & Responsive Breakpoints

### 5.1 Responsive Grid Breakpoints
- **Mobile Devices (< 768px):** Single-column layout. Reduced section padding (`var(--space-3xl)`). Mobile drawer triggered via hamburger button.
- **Tablets (768px - 1024px):** 2-column feature grids.
- **Desktop (> 1024px):** Full multi-column grids (4-column feature bar, 2-column founder pedigree layout, 2-column booking layout). Max container width: `1280px` (`--container-max`).

### 5.2 Layout Breakdown by View
1. **Landing View (`/`):**
   - Parallax Hero section (`app-inage`)
   - 4-Item Advantage Bar
   - Services Overview Grid
   - How It Works Timeline (4 sequential steps)
   - Founder Story & Accolades Showcase
   - Trust & Integrity Grid (Why Cyclists Trust Us)
   - Final Booking CTA Banner
2. **Services Catalog View (`/service`):**
   - Hero header with breadcrumb
   - Featured packages row (4 highlighted cards)
   - Category filter pills (`All Services`, `Maintenance`, `Performance`, `Repair`, `Inspection`, `Special Services`)
   - Complete 20-service card grid with numbered tags and icon badges
   - Persistent booking callout
3. **Appointment View (`/appointment`):**
   - Left column: Card intake form with instant validation
   - Right column: Brand value banner + Live interactive user summary reflecting typed inputs in real-time

---

## 6. Iconography Conventions

The project standardizes on **PrimeIcons (`primeicons/primeicons.css` v8.0.0)**:
- Maintenance / Repairs: `pi pi-wrench`, `pi pi-cog`, `pi pi-sync`
- Performance / Speed: `pi pi-bolt`, `pi pi-sliders-h`, `pi pi-chart-line`
- Brakes & Wheels: `pi pi-circle`, `pi pi-circle-fill`
- Health & Diagnostics: `pi pi-clipboard`, `pi pi-search`, `pi pi-shield`
- Logistics & Contact: `pi pi-map-marker`, `pi pi-phone`, `pi pi-clock`, `pi pi-envelope`
- Navigation: `pi pi-arrow-right`, `pi pi-arrow-down`, `pi pi-bars`, `pi pi-times`

---

## 7. Accessibility & Usability Standards

1. **Reduced Motion Support:**
   In [styles.scss](file:///c:/Users/gowth/Desktop/bicycle-service/src/styles.scss#L380-L398), `@media (prefers-reduced-motion: reduce)` disables all animations and transitions, ensuring instantaneous display for users with motion sensitivity.
2. **High-Contrast Dark Colors:** Body text (`#ffffff` and `#c9d1d9`) achieves > 7:1 contrast ratio against the obsidian background (`#060709`).
3. **Focus States:** Every interactive button and input supports `:focus-visible` with a 2px electric orange outline and 3px offset.
4. **Touch Target Sizing:** Mobile links and drawer interactive buttons have minimum tap heights of 44px.
