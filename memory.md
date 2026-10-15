# Project Persistent Memory for AI Coding Agents
## FreeWheel Bicycle Service Application (`bicycle-service`)

---

## 1. Project Purpose & Business Context

- **What It Is:** An engineering-driven web platform for **FreeWheel Bicycle Service Center** located in Salem, Tamil Nadu, India.
- **Brand Narrative:** Founded and guided by National Downhill MTB Champion & Manufacturing Engineer **S. Thilothamma** and Master Technician **Gokul Krishnan**.
- **Core Functionality Today:** Public marketing showcase, 20-package service catalog with category filtering, and direct customer intake with automated WhatsApp booking dispatch.
- **Planned Expansion:** Role-based workshop management portal (Mechanic & Admin), customer CRM, bicycle digital health cards with frame serial tracking, QR code job-card generation, and ticket status progression.

---

## 2. Technology Stack & Key Libraries

- **Framework:** Angular `^20.3.27` (Strict Standalone Component architecture, zero NgModules).
- **Builder:** `@angular/build:application` (Vite dev server + esbuild compilation).
- **UI Component Library:** PrimeNG `^20.4.0` with `@primeuix/themes` (Aura theme preset configured in `app.config.ts`).
- **Icons:** PrimeIcons `^8.0.0` (`primeicons/primeicons.css`).
- **Styling Pipeline:** TailwindCSS `^4.3.3` with `@tailwindcss/postcss`.
- **Async & Reactive:** RxJS `~7.8.0`, Angular Signals (`signal`, `computed`, `input`).
- **Language & Runtime:** TypeScript `~5.9.2`, modern browser ECMAScript.

---

## 3. Important Folder Locations

- `src/app/common/service/auth.guard.ts`: Functional route guard checking `sessionStorage.getItem('token')`.
- `src/app/common/function/validation.ts`: `getErrorMessages()`, `markAllControlsAsDirty()`, `formatDateObject()`.
- `src/app/common/directives/scroll-reveal.directive.ts`: IntersectionObserver directive (`appScrollReveal`).
- `src/app/common/input-text/input-text.ts`: Reusable form input component wrapping PrimeNG with validation.
- `src/app/common/column.ts`: `Column` and `Columns` interfaces for metadata-driven dynamic forms/tables.
- `src/app/features/appointment/`: Customer intake form (`appointment.ts`), appointment service, styling.
- `src/app/features/service/`: 20+ Bicycle service packages catalog with category filters (`service.ts`).
- `src/app/features/auth/`: Login component, AuthService, column definitions, register placeholder.
- `src/app/features/landing/`: Brand landing page with subcomponents (`inage`, `about`, `how-it-works`, `why-us`, `booking-cta`).
- `src/service-center-data.ts`: Master catalog data model and comprehensive 19-field customer intake schema.
- `public/config.json`: Runtime configuration holding `"AuthUrl": "https://localhost:7167/"`.

---

## 4. Key Architectural Decisions

1. **Runtime vs Build-Time Configuration:**
   - The application does NOT use Angular `environment.ts` files for backend URLs.
   - It fetches `/config.json` at startup via [AppConfigService](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/app.config.service.ts).
   - This allows environment changes without rebuilding the frontend bundle.

2. **Standalone Everything:**
   - Zero `NgModule` declarations.
   - All components declare their own imports (`imports: [CommonModule, ReactiveFormsModule, ...]`).

3. **WhatsApp-Driven Customer Dispatch:**
   - On booking submission to `/api/demo-requests`, the backend returns a formatted WhatsApp Web URL (`res.whatsAppUrl`).
   - The client triggers `window.open(res.whatsAppUrl, '_blank')` and presents a success toast.

4. **Obsidian Dark Design System:**
   - Global tokens in [styles.scss](file:///c:/Users/gowth/Desktop/bicycle-service/src/styles.scss): Electric Orange (`#ff5a00`), Obsidian black (`#060709`), frosted glass cards (`rgba(14, 16, 22, 0.75)`).

---

## 5. API Endpoints & Contracts

Configured base URL: `https://localhost:7167/` (ASP.NET Core default port).

### 1. `POST /api/demo-requests`
- **Service:** `Appointmentservice.bookAppointment(data)`
- **Request:**
  ```json
  {
    "name": "string",
    "phoneNumber": "string (10 digits)",
    "email": "string",
    "address": "string (optional)"
  }
  ```
- **Response:**
  ```json
  {
    "whatsAppUrl": "string"
  }
  ```

### 2. `POST /api/auth/login`
- **Service:** `AuthService.login(data)`
- **Request:**
  ```json
  {
    "login": "string (email)",
    "Password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string (JWT)"
  }
  ```

---

## 6. Route Structure & Guard Status

| Path | Component | Status | Guard |
| :--- | :--- | :--- | :--- |
| `''` | `Landing` | Active | Open |
| `'service'` | `ServicesComponent` | Active | Open |
| `'appointment'` | `AppointmentComponent` | Active | Open |
| `'login'` | `LoginComponent` | Commented out in `app.routes.ts` | Open |
| `'**'` | Redirects to `''` | Active | Open |

*Note:* `Dashboard` and `RegisterComponent` exist in the codebase but do not have active routes.

---

## 7. Known Bugs, Warnings & Technical Debt

1. **Double Slash URL Glitch in Appointmentservice:**
   - In `public/config.json`, `"AuthUrl": "https://localhost:7167/"` includes a trailing slash.
   - In [appointmentservice.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/appointment/appointmentservice.ts#L13), the call is `this.configService.AuthUrl + '/api/demo-requests'`.
   - This results in `https://localhost:7167//api/demo-requests`. It should be normalized with path stripping.

2. **Unused Import Warning in Landing (`NG8113`):**
   - In [landing.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/landing.ts#L19), `Gallery` is imported and listed in `imports: [...]`.
   - In [landing.html](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/landing.html#L8), `<!-- <app-gallery /> -->` is commented out.
   - Throws compiler warning during `npm run build`.

3. **Dart Sass Deprecation Warning:**
   - In [styles.scss](file:///c:/Users/gowth/Desktop/bicycle-service/src/styles.scss#L1), `@import 'tailwindcss';` uses legacy `@import` which will be removed in Dart Sass 3.0.0.

4. **No Centralized 401 Interceptor:**
   - If an API token expires, requests fail without automatically redirecting the user to `/login`.

---

## 8. Development Commands

- Start local dev server: `npm start` or `ng serve` (runs on `http://localhost:4200`)
- Compile production build: `npm run build` or `ng build` (outputs to `dist/bicycle-service/browser/`)
- Run unit tests: `npm test` or `ng test`

---

## 9. AI Agent Operating Constraints

- **Do Not Break WhatsApp Integration:** The WhatsApp URL redirect on appointment submission is a business-critical lead conversion mechanism.
- **Do Not Introduce NgModules:** Maintain 100% standalone components.
- **Never Hardcode Backend URLs:** Always read from `AppConfigService.AuthUrl`.
- **Maintain Theme Cohesion:** Follow Obsidian Dark (`#060709`) and Electric Orange (`#ff5a00`).
- **Verify Every Build:** Always run `npm run build` before claiming a task is done.
