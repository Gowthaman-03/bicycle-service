# Project Task Tracker & Implementation Backlog
## FreeWheel Bicycle Service Application

---

## 1. Overview & Legend

This task tracker documents completed milestones, active work, and upcoming requirements for the FreeWheel Bicycle Service project. All task states are based on verified analysis of the Angular 20 frontend codebase.

### Status Indicators
- `[x]` **Completed:** Verified implemented, configured, and compiling in code.
- `[ ] In Progress:** Partial implementation present (e.g., UI or service exists, but not fully connected).
- `[ ] Pending:** Planned feature; requirements identified but code not yet written.
- `[ ] Blocked:** Dependent on external components (e.g., ASP.NET Core backend endpoints).
- `[ ] Future Improvement:** Optimization or nice-to-have architectural upgrade.

---

## 2. Tasks by Module

### 2.1 Core Framework & Foundations

- [x] **TSK-COR-001**: Upgrade to Angular 20 with standalone component architecture.
  - **Module:** Core
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** `app.config.ts` initializes standalone router and HTTP providers without `NgModule`.

- [x] **TSK-COR-002**: Integrate PrimeNG 20 with Aura theme preset and PrimeIcons.
  - **Module:** Core / UI
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `@primeuix/themes`, `primeng`
  - **Acceptance Criteria:** Components render with Aura theme and icons display correctly.

- [x] **TSK-COR-003**: Setup TailwindCSS v4 with PostCSS.
  - **Module:** Styling
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `@tailwindcss/postcss`
  - **Acceptance Criteria:** Tailwind utility classes compile without legacy config conflicts.

- [x] **TSK-COR-004**: Implement runtime configuration loader (`AppConfigService`).
  - **Module:** Configuration
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `public/config.json`
  - **Acceptance Criteria:** `AppConfigService` fetches `AuthUrl` at app startup via `HttpClient`.

---

### 2.2 Brand Landing & Marketing (`Landing`)

- [x] **TSK-LND-001**: Build Parallax Hero section (`Inage` component).
  - **Module:** Landing
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Hero renders responsive typography, CTA buttons, and mouse scroll indicator.

- [x] **TSK-LND-002**: Implement 4-pillar feature bar with scroll reveal animation.
  - **Module:** Landing
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** `ScrollRevealDirective`
  - **Acceptance Criteria:** Technicians, Genuine Spares, Fast Service, and All Bike Types cards stagger-fade on viewport entry.

- [x] **TSK-LND-003**: Create Founder Pedigree & National Champion narrative (`About` component).
  - **Module:** Landing
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Displays S. Thilothamma and Gokul Krishnan bios, engineering degrees, and national medals.

- [x] **TSK-LND-004**: Build 4-step workflow timeline (`HowItWorks` component).
  - **Module:** Landing
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Step-by-step handover and servicing timeline renders with arrow connectors.

- [x] **TSK-LND-005**: Build Trust & Integrity card grid (`WhyUs` component).
  - **Module:** Landing
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** 4 blueprint cards detail mechanical integrity, factory tools, and genuine components.

- [x] **TSK-LND-006**: Build final booking CTA banner (`BookingCta` component).
  - **Module:** Landing
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Direct action buttons linking to `/appointment` and direct telephone call link.

- [ ] **TSK-LND-007**: Clean up unused `Gallery` import in `Landing` component.
  - **Module:** Landing
  - **Priority:** Low
  - **Status:** In Progress
  - **Dependencies:** None
  - **Acceptance Criteria:** Either integrate `Gallery` into `landing.html` or remove the unused component import to eliminate the compiler warning `NG8113`.

---

### 2.3 Services Catalog Module (`ServicesComponent`)

- [x] **TSK-SRV-001**: Build full 20-service interactive catalog.
  - **Module:** Services
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Catalog displays cards with icons, service numbers, descriptions, and category badges.

- [x] **TSK-SRV-002**: Implement dynamic category filtering.
  - **Module:** Services
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Clicking category pills (`Maintenance`, `Performance`, `Repair`, `Inspection`, `Special Services`) filters the displayed list instantly.

- [x] **TSK-SRV-003**: Implement Featured Services highlight grid.
  - **Module:** Services
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** 4 packages (`General`, `Premium`, `Race Prep`, `Suspension`) highlighted at top of view.

- [ ] **TSK-SRV-004**: Connect service cards directly to appointment intake preselection.
  - **Module:** Services
  - **Priority:** Medium
  - **Status:** Pending
  - **Dependencies:** `TSK-APT-003`
  - **Acceptance Criteria:** Clicking "Book This Service" passes `serviceId` via query params to the appointment form.

---

### 2.4 Appointment & Customer Intake (`AppointmentComponent`)

- [x] **TSK-APT-001**: Build quick customer intake form (Name, Phone, Email, Address).
  - **Module:** Appointments
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `ReactiveFormsModule`
  - **Acceptance Criteria:** Form validates 10-digit phone number, valid email, and required name.

- [x] **TSK-APT-002**: Implement live intake summary sidebar.
  - **Module:** Appointments
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Sidebar reflects customer input fields in real time with visual status tags.

- [x] **TSK-APT-003**: Connect booking submission to backend API & WhatsApp dispatch.
  - **Module:** Appointments / API
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `${AuthUrl}/api/demo-requests`
  - **Acceptance Criteria:** Successful POST displays toast notification and opens `res.whatsAppUrl` in new window.

- [ ] **TSK-APT-004**: Fix trailing slash bug in `Appointmentservice`.
  - **Module:** Appointments / API
  - **Priority:** High
  - **Status:** Pending
  - **Dependencies:** None
  - **Acceptance Criteria:** Standardize URL construction to prevent `https://localhost:7167//api/demo-requests`.

- [ ] **TSK-APT-005**: Expand intake form to support complete 19-field bicycle specifications.
  - **Module:** Appointments
  - **Priority:** High
  - **Status:** Pending
  - **Dependencies:** `service-center-data.ts`, Backend support
  - **Acceptance Criteria:** Form captures Bicycle Brand, Model, Type, Frame Serial, Drivetrain, Brake Type, Preferred Date, and Budget Cap.

---

### 2.5 Authentication & Authorization (`AuthService`, `LoginComponent`, `authGuard`)

- [x] **TSK-ATH-001**: Implement `AuthService` with login API and token storage.
  - **Module:** Authentication
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `AppConfigService`
  - **Acceptance Criteria:** `login(data)` sends POST request, saves JWT in `sessionStorage`, and provides `getAuthHeader()`.

- [x] **TSK-ATH-002**: Build `LoginComponent` with dynamic column schema.
  - **Module:** Authentication
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `login.column.ts`, `InputTextModule`, `PasswordModule`
  - **Acceptance Criteria:** Form validates email and password, submits credentials, and redirects on success.

- [x] **TSK-ATH-003**: Implement functional `authGuard`.
  - **Module:** Authentication
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** `AuthService`, `Router`
  - **Acceptance Criteria:** Unauthenticated route attempts redirect to `/login` with `returnUrl`.

- [ ] **TSK-ATH-004**: Reactivate `/login` route in `app.routes.ts`.
  - **Module:** Authentication / Routing
  - **Priority:** High
  - **Status:** Pending
  - **Dependencies:** `TSK-ATH-002`
  - **Acceptance Criteria:** `/login` is accessible via browser URL and navigation menu.

- [ ] **TSK-ATH-005**: Implement HTTP 401 Unauthorized Interceptor.
  - **Module:** Authentication / Networking
  - **Priority:** High
  - **Status:** Pending
  - **Dependencies:** `provideHttpClient(withInterceptors(...))`
  - **Acceptance Criteria:** 401 responses automatically clear `sessionStorage` and redirect to `/login`.

- [ ] **TSK-ATH-006**: Complete `RegisterComponent` user registration UI.
  - **Module:** Authentication
  - **Priority:** Medium
  - **Status:** Blocked
  - **Dependencies:** Backend registration endpoint (`POST /api/auth/register`)
  - **Acceptance Criteria:** Functional registration form collecting user name, email, phone, and password.

---

### 2.6 Dashboard, Customers & Service Tickets (Admin / Mechanics)

- [ ] **TSK-DSH-001**: Build Workshop Management Dashboard (`Dashboard`).
  - **Module:** Dashboard
  - **Priority:** High
  - **Status:** Blocked
  - **Dependencies:** Backend Analytics API
  - **Acceptance Criteria:** Displays active ticket counts, bikes in workshop, completed services, and today's deliveries.

- [ ] **TSK-CST-001**: Build Customer CRM Table & Profile View.
  - **Module:** Customers
  - **Priority:** Medium
  - **Status:** Blocked
  - **Dependencies:** Backend Customer API
  - **Acceptance Criteria:** Searchable PrimeNG table listing customers, contact numbers, and registered bikes.

- [ ] **TSK-CYC-001**: Build Cycle Registry & Digital Health Card View.
  - **Module:** Cycles
  - **Priority:** Medium
  - **Status:** Blocked
  - **Dependencies:** Backend Bicycle API
  - **Acceptance Criteria:** Bicycle profile with frame serial, component wear history, and past service logs.

- [ ] **TSK-TCK-001**: Build Service Ticket Kanban / List Manager.
  - **Module:** Service Tickets
  - **Priority:** High
  - **Status:** Blocked
  - **Dependencies:** Backend Ticket API
  - **Acceptance Criteria:** Ticket status transitions: `Intake` -> `Inspection` -> `Parts Awaiting` -> `In Progress` -> `Ready for Delivery` -> `Closed`.

- [ ] **TSK-QRC-001**: Implement QR Code Generation for Bicycle Job Cards.
  - **Module:** QR Codes / Operations
  - **Priority:** Medium
  - **Status:** Blocked
  - **Dependencies:** Backend Ticket & URL generator
  - **Acceptance Criteria:** Generate printable QR code tag linking directly to the cycle's real-time service tracking page.

---

### 2.7 UI/UX & Code Quality Polish

- [x] **TSK-UIX-001**: Build custom Obsidian scrollbar styling.
  - **Module:** UI/UX
  - **Priority:** Low
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Dark 8px scrollbar with electric orange hover effect in Webkit and Firefox.

- [x] **TSK-UIX-002**: Implement `appScrollReveal` directive with IntersectionObserver.
  - **Module:** UI/UX
  - **Priority:** Medium
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Elements animate smoothly when entering viewport without performance drops.

- [ ] **TSK-UIX-003**: Migrate Dart Sass `@import 'tailwindcss';` to modern `@use` syntax.
  - **Module:** Styling / Build
  - **Priority:** Low
  - **Status:** In Progress
  - **Dependencies:** Dart Sass 3.0 readiness
  - **Acceptance Criteria:** Eliminate Dart Sass deprecation warning during `ng build`.

---

### 2.8 Documentation & Delivery

- [x] **TSK-DOC-001**: Create Product Requirements Document (`prd.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** Codebase analysis
  - **Acceptance Criteria:** Detailed business goals, features, and non-functional requirements.

- [x] **TSK-DOC-002**: Create System Architecture Document (`architecture.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** Codebase analysis
  - **Acceptance Criteria:** Architecture diagrams, data models, endpoints, and deployment details.

- [x] **TSK-DOC-003**: Create Development Rules Document (`rules.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Coding standards, safety rules, API rules, and a11y requirements.

- [x] **TSK-DOC-004**: Create UI/UX Design System Specification (`design.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Tokens, colors, typography, component states, and responsive rules.

- [x] **TSK-DOC-005**: Create Task Tracker Document (`task.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Completed
  - **Dependencies:** None
  - **Acceptance Criteria:** Tracked backlog with IDs, priorities, statuses, and acceptance criteria.

- [x] **TSK-DOC-006**: Create Persistent Agent Memory Document (`memory.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Pending
  - **Dependencies:** All analysis files
  - **Acceptance Criteria:** Concise, high-density AI session context.

- [x] **TSK-DOC-007**: Create Comprehensive GitHub README (`README.md`).
  - **Module:** Documentation
  - **Priority:** High
  - **Status:** Pending
  - **Dependencies:** All analysis files
  - **Acceptance Criteria:** Professional repository overview, setup instructions, scripts, and workflows.
