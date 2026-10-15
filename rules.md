# Project Development Rules & Guidelines
## FreeWheel Bicycle Service Application

---

## 1. Scope & Objective

This document defines the strict development standards, architectural boundaries, API guidelines, and safety practices that all human software engineers and AI coding agents must follow when maintaining or expanding the **FreeWheel Bicycle Service** codebase.

---

## 2. Coding Standards

### 2.1 Angular 20+ Standards & Component Conventions
- **Strict Standalone Architecture:** All newly created components, directives, and pipes must be standalone (`standalone: true`). Never introduce `NgModule` wrappers.
- **Signals for Reactive State:** Prefer Angular Signals (`signal()`, `computed()`) for local component state instead of manual subscriptions or mutable class properties.
- **Signal-Based Inputs:** Use `input()` and `input.required()` for component inputs rather than the legacy `@Input()` decorator.
- **Control Flow Syntax:** Always use modern Angular template control flow (`@if`, `@else if`, `@else`, `@for ... track`, `@switch`, `@case`) instead of legacy `*ngIf` and `*ngFor` directives.
- **Strict Typing:**
  - Avoid using `any` across data interfaces, method signatures, and service responses.
  - Define explicit interfaces or types (e.g., in `src/service-center-data.ts` or local feature model files).
  - Explicitly type API response payloads.
- **Naming Conventions:**
  - Components: `kebab-case.ts` (e.g., `input-text.ts`, `services.ts`) with `PascalCase` class name (e.g., `InputTextComponent`, `ServicesComponent`).
  - Services: `feature.service.ts` with `PascalCase` class name (e.g., `AuthService`).
  - Directives: `feature.directive.ts` with camelCase selector (e.g., `appScrollReveal`).
  - Models & Constants: SCREAMING_SNAKE_CASE for master arrays (e.g., `SERVICES_PROVIDED`, `CUSTOMER_INTAKE_DATA_FIELDS`).

### 2.2 Component & Logic Separation
- Keep presentation components lightweight. Delegate HTTP requests, authentication, and state synchronization to dedicated Injectable services in `src/app/common/service` or the respective feature directory.
- For form field definitions and table schema, reuse the `Column` / `Columns` pattern defined in [column.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/common/column.ts).
- For form validation error generation, reuse the centralized `getErrorMessages()` helper in [validation.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/common/function/validation.ts).

---

## 3. Architecture Rules

### 3.1 Folder Structure & Separation of Concerns
Adhere strictly to the established directory hierarchy:
- `src/app/common/`: Reusable, domain-agnostic UI widgets (like `app-input-text`), custom directives (`appScrollReveal`), validation utilities, and shared route guards.
- `src/app/features/`: Domain-specific business verticals (e.g., `appointment`, `service`, `auth`, `dashboard`). Each feature encapsulates its own routes, components, styles, and services.
- `src/app/shared/`: Shared layout shells used across multiple views (`navbar`, `footer`).
- `public/`: Static web assets and runtime configuration files (`config.json`).

### 3.2 Routing & Navigation
- All routes must be registered in [app.routes.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/app.routes.ts).
- Always maintain the wildcard catch-all route `{ path: '**', redirectTo: '' }` at the end of the route array to prevent navigation breaks.
- When activating protected feature routes (such as `Dashboard` or technician portals), protect them using the functional `authGuard` in [auth.guard.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/common/service/auth.guard.ts).

### 3.3 Form Handling & UI Controls
- Use Angular `ReactiveFormsModule` exclusively for complex business forms.
- Re-use the existing custom wrapper [InputTextComponent](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/common/input-text/input-text.ts) (`app-input-text`) for text and numeric inputs to enforce PrimeNG Aura styling, key filtering, and unified error messages.
- Always execute `markAllControlsAsDirty()` or `form.markAllAsTouched()` prior to returning early on invalid form submission.

---

## 4. API Integration & Networking Rules

### 4.1 Base URL & Environment Isolation
- **Never Hardcode API Hostnames:** Do not embed `https://localhost:...` or hardcoded production domains inside components or services.
- Always retrieve the API base URL via `AppConfigService.AuthUrl`:
  ```typescript
  export class FeatureService {
    private configService = inject(AppConfigService);
    private http = inject(HttpClient);

    getData() {
      const baseUrl = this.configService.AuthUrl;
      return this.http.get(`${baseUrl}api/endpoint`);
    }
  }
  ```
- **URL Path Slash Normalization:** Verify trailing slashes when appending endpoints to `AuthUrl` (e.g., ensure `AuthUrl.replace(/\/$/, '') + '/api/...'` to avoid double slashes).

### 4.2 Error Handling & 401 Authorization Expiry
- When implementing HTTP calls, implement both `next` and `error` observers. Reset any loading flags (`isSubmitting = false`) in both branches or via an RxJS `finalize()` operator.
- When the API returns HTTP `401 Unauthorized`:
  1. Purge the invalid token from `sessionStorage.removeItem('token')`.
  2. Redirect the user to the `/login` route with a `returnUrl` query parameter preserving their destination.

### 4.3 Secrets & Sensitive Data
- **Zero Secrets in Frontend:** Never place API secrets, private keys, database connection strings, or administrative master passwords in frontend TypeScript files, JSON configs, or Git-tracked assets.
- Tokens received from login must be retained only in `sessionStorage` (cleared automatically when the browser tab closes).

---

## 5. UI/UX & Design Rules

### 5.1 Obsidian Dark Design Integrity
- The application implements a dark obsidian automotive-grade aesthetic.
- Always use the predefined CSS custom properties defined in [styles.scss](file:///c:/Users/gowth/Desktop/bicycle-service/src/styles.scss):
  - Primary Brand Accent: `var(--primary)` (`#ff5a00` Electric Orange)
  - Surface Background: `var(--bg-main)` (`#060709`) and `var(--bg-card)` (`rgba(14, 16, 22, 0.75)`)
  - Typography: `var(--font-heading)` (Montserrat / Bebas Neue) and `var(--font-body)` (Inter)
  - Borders: `var(--border-subtle)` (`rgba(255, 255, 255, 0.07)`)
- Avoid generic colors (plain red, default green, blue). Use tailored colors with translucent alpha channels.

### 5.2 Micro-Interactions & States
- **Interactive State Feedback:** Every interactive element (buttons, cards, links, tabs) must provide visible `:hover`, `:active`, and `:focus-visible` states.
- **Loading Indicators:** Provide user feedback during asynchronous operations (e.g., `isSubmitting` text state, button disability, or spinners).
- **Form Error States:** Show explicit inline error messages with red/error styling when controls are touched and invalid.

### 5.3 Accessibility (a11y)
- Buttons that only contain vector icons must supply an `aria-label` or `ariaLabel` (as seen on the mobile menu drawer toggle).
- Interactive navigation links must retain legible focus rings (`:focus-visible` with 2px offset).
- Ensure high contrast ratios against dark backgrounds.

---

## 6. Safety & Verification Rules

### 6.1 Preserving Existing Logic
- Do not overwrite or eliminate existing components, services, or styling rules unless explicitly directed by the project owner.
- When expanding features (e.g., adding bicycle fields to the appointment form), preserve existing working behaviors such as WhatsApp URL redirection.

### 6.2 Dependency Management
- Do not install new third-party npm packages without explicit requirement.
- Maximize the use of already installed packages: Angular 20, PrimeNG 20, PrimeIcons 8, TailwindCSS 4, RxJS 7.

### 6.3 Mandatory Build & Verification Verification
- Before submitting any feature completion report, always run:
  ```powershell
  npm run build
  ```
- Verify that the Angular compilation succeeds with zero TypeScript errors.
- Never report a build, test, or migration as successful without executing the actual command and inspecting its output.
