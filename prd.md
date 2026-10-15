# Product Requirements Document (PRD)
## FreeWheel Bicycle Service Management System

---

## 1. Document Overview & Metadata

- **Product Name:** FreeWheel Bicycle Service Management Platform
- **Application Codebase:** `bicycle-service`
- **Current Version:** `0.0.0` (Active MVP & Foundation Stage)
- **Target Platform:** Web (Desktop, Tablet, Mobile responsive)
- **Primary Market / Operating Geography:** Salem, Tamil Nadu, India (with regional on-site and doorstep coverage)
- **Document Status:** Baseline Verified against Application Codebase

---

## 2. Business Problem & Solution

### 2.1 Business Problem
Traditional cycle service shops and multi-brand bicycle workshops face significant operational bottlenecks:
1. **Opaque & Disorganized Booking:** Customers lack visibility into available maintenance tiers, component overhauls, pricing estimates, and mechanic credentials.
2. **Poor Diagnostic Communication:** High-performance bicycles (carbon race bikes, hydraulic disc bikes, 1x/2x gravel setups, and e-bikes) require precision torque specifications, fluid bleeding, and electronic diagnostics that general bike mechanics do not systematically record.
3. **Friction in Lead Conversion:** High friction intake forms reduce conversions; riders need immediate service confirmation and WhatsApp-connected job card updates.
4. **Disjointed Handover Logistics:** Lack of clear service mode selection (Workshop Drop-off vs. Doorstep Pickup & Delivery vs. Mobile Van Breakdown Assistance) causes scheduling confusion.

### 2.2 Proposed Solution
FreeWheel provides an engineering-grade, digital-first bicycle service platform:
- **Pedigree-Driven Experience:** Rooted in the competitive pedigree of South India's first national downhill mountain biking champion (S. Thilothamma) and master technicians (Gokul Krishnan), delivering trust and zero-tolerance precision.
- **Service Catalog:** Transparent catalog of 20+ specialized services spanning Routine Maintenance, Performance Tuning, Hydraulic/Wheel Repairs, Pre-Purchase Inspections, and Race Day Prep.
- **Fast Lead Intake & Dispatch:** Frictionless booking flow capturing essential rider contact data with immediate dispatch to backend systems and WhatsApp confirmation.
- **Comprehensive Intake Schema:** Standardized 19-field bicycle intake specification covering frame serials, drivetrains, brake types, pre-approved budget caps, and logistics preferences.

---

## 3. Target Users & User Roles

| Role | Description | Access Level & Capabilities |
| :--- | :--- | :--- |
| **Customer / Rider** | Bicycle owners seeking repairs, regular tune-ups, race prep, or emergency breakdown aid. | Public web access: Explore services, view founder credentials, submit service requests, receive WhatsApp notifications. |
| **Service Technician / Mechanic** | Workshop mechanics executing tune-ups, component overhauls, and health audits. | *(Planned / Authenticated)*: Inspect job cards, log checkpoint findings, upload digital diagnostic reports, record parts replacement. |
| **Workshop Admin / Service Manager** | Workshop owner managing schedules, employee assignments, customer records, and invoicing. | *(Planned / Authenticated)*: Dashboard metrics, manage ticket queues, generate QR codes/job cards, edit pricing catalogs. |

---

## 4. Feature Implementation Matrix

To ensure absolute fidelity to the repository codebase, features are categorized by their verified state:

| Feature / Capability | Implementation State | Verification Evidence in Codebase |
| :--- | :--- | :--- |
| **Brand Landing Page** | **Implemented** | [landing.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/landing.ts), [inage.html](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/components/inage/inage.html), [about.html](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/components/about/about.html), [why-us.html](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/components/why-us/why-us.html), [how-it-works.html](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/landing/components/how-it-works/how-it-works.html) |
| **Interactive Services Catalog** | **Implemented** | [service.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/service/service.ts) (20 detailed services, category filter, responsive card grid) |
| **Lead Booking / Intake Flow** | **Implemented** | [appointment.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/appointment/appointment.ts) (Reactive form with name, phone, email, address) |
| **WhatsApp Dispatch Integration** | **Implemented** | [appointment.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/appointment/appointment.ts#L36-L45) (Calls `/api/demo-requests` & launches `res.whatsAppUrl`) |
| **Runtime Remote Configuration** | **Implemented** | [app.config.service.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/app.config.service.ts), [public/config.json](file:///c:/Users/gowth/Desktop/bicycle-service/public/config.json) |
| **User Login (UI & Service)** | **Partially Implemented** | [login.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/auth/login/login.ts), [auth.service.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/auth/auth.service.ts). *(Route currently deactivated in [app.routes.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/app.routes.ts))*. |
| **Authentication Guard** | **Partially Implemented** | [auth.guard.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/common/service/auth.guard.ts) implemented, but commented out in route configuration. |
| **Complete Domain Data Model** | **Implemented (Model only)** | [service-center-data.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/service-center-data.ts) (17 comprehensive services, 19 customer intake field schemas). |
| **User Registration** | **Stub / Placeholder** | [register.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/auth/register/register.ts) exists as empty component template. |
| **Technician / Admin Dashboard** | **Stub / Placeholder** | [dashboard.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/dashboard/dashboard.ts) exists as empty component template. |
| **Customer Management (CRM)** | **Planned / Backend Dependent** | No UI components or endpoints exist in current frontend. |
| **Cycle Registry (Bicycle Profiles)** | **Planned / Backend Dependent** | Partial column definitions exist in [appointment.column.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/appointment/appointment.column.ts) (`CycleId`); UI not yet built. |
| **Service Tickets & Lifecycle States** | **Planned / Backend Dependent** | Awaiting backend API models for Ticket status tracking. |
| **QR Code Generation & Job Cards** | **Planned / Awaiting Backend** | Awaiting backend support and QR printing integration. |
| **Session Expiration / 401 Interceptor**| **Pending Implementation** | `provideHttpClient()` configured in [app.config.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/app.config.ts) without HTTP interceptor. |

---

## 5. Functional Requirements by Module

### 5.1 Public Landing & Brand Pedigree (`Landing`)
- **Hero & Visuals:** Premium dark obsidian aesthetic with parallax blueprint bike graphic, responsive typography, and call-to-action buttons (`Book a Service`, `Explore Services`).
- **Feature Highlights Bar:** Four key value pillars (Expert Technicians, Quality Parts, Fast Service, All Bike Types) animated via `ScrollRevealDirective`.
- **Pedigree & Founder Narrative:** Highlights S. Thilothamma (National Downhill Champion, M.E. Manufacturing Engineer) and Gokul Krishnan (Master Bicycle Technician) with competition accolades and workshop heritage.
- **Workflow Steps:** 4-step user guide (Choose Service & Time -> Drop Off or Mobile Pickup -> Precision Service & Updates -> Test Ride & Ready).
- **Why Choose Us:** Trust cards detailing mechanical integrity, genuine spares, torque calibration, and transparent quotes.
- **Shared Navigation & Footer:**
  - Sticky glassmorphic navbar with scroll state detection (`isScrolled = window.scrollY > 600`).
  - Slide-out mobile navigation drawer powered by PrimeNG `p-drawer`.
  - Comprehensive footer with Salem workshop address, direct telephone link, business hours, and social channels.

### 5.2 Services Catalog Module (`ServicesComponent`)
- **Category Filtering:** Dynamic tab filtering with categories: `All Services`, `Maintenance`, `Performance`, `Repair`, `Inspection`, `Special Services`.
- **Service Details Presentation:** Each service presents a sequential number, PrimeIcon, title, detailed description, and category badge.
- **Featured Highlights:** Visual distinction for featured service packages (`General Bicycle Service`, `Premium Complete Service`, `Performance & Race Service`, `Suspension Service`).
- **Direct Intake Navigation:** Prominent CTA routing interested riders to `/appointment`.

### 5.3 Appointment & Intake Booking Module (`AppointmentComponent`)
- **Form Fields & Validation:**
  - `name`: String, required.
  - `phoneNumber`: String, required, validated strictly against `^[0-9]{10}$` (10-digit format).
  - `email`: String, required, standard email format validation.
  - `address`: String, optional residential/business address.
- **Submission Workflow:**
  - On submit: Form validity is evaluated. If invalid, controls are marked dirty and touched.
  - Submits payload to `${AuthUrl}/api/demo-requests`.
  - Disables submit button with loading state (`isSubmitting = true`).
  - Displays auto-dismissing success toast alert (6-second timeout).
  - Automatically redirects/opens the returned WhatsApp booking URL in a new window (`window.open(res.whatsAppUrl, '_blank')`).
- **Live Summary Sidebar:** Interactive preview panel reflecting entered customer name, phone, email, and address in real-time.

### 5.4 Authentication & Security Module (`AuthService`, `LoginComponent`, `authGuard`)
- **Login Flow:**
  - Accepts `useremail` and `password`.
  - Dynamically configured via [login.column.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/features/auth/login/login.column.ts) using `ReactiveFormsModule`.
  - Dispatches `POST ${AuthUrl}api/auth/login`.
  - Stores JWT session token in `sessionStorage.setItem('token', res.token)`.
  - Redirects to query parameter `returnUrl` or defaults to `/appointment`.
- **Route Guard:**
  - Functional `authGuard` verifies `sessionStorage.getItem('token')`.
  - If unauthenticated, generates redirection tree to `/login` preserving intended URL.
  - *Current Status:* Guard is commented out across routes in [app.routes.ts](file:///c:/Users/gowth/Desktop/bicycle-service/src/app/app.routes.ts) to permit open navigation during frontend review.

### 5.5 Extended Bicycle Service Domain (`service-center-data.ts`)
The project contains an extensive, ready-to-wire intake specification:
1. **Customer Personal Details:** Full Name, Primary Mobile, Alternate Phone, Email, Service Location Address, 6-digit Pincode.
2. **Bicycle Specifications:** Brand/Maker, Model & Year, Bicycle Type (Road, MTB, Hybrid, Gravel, E-Bike, BMX, TT), Frame Serial Number, Drivetrain Type (Single speed, Mechanical derailleur, Electronic Di2/AXS, Internal hub), Brake System Type (Hydraulic disc, Mechanical disc, Rim, Coaster), Wheel Size (29", 27.5", 26", 700c, 24", 20").
3. **Service Selection & Issues:** Selected Service IDs, Primary Issue Description, Urgency Level (Standard 24-48h, Express Same-Day, Race Day Priority), Pre-Approved Parts Replacement Cap (₹ INR).
4. **Scheduling & Logistics:** Preferred Booking Date, Preferred Time Window (Morning, Afternoon, Evening), Service Mode (Drop-off, Doorstep Pickup & Delivery, On-site Mobile Van), Special Rider Notes.

---

## 6. Non-Functional Requirements

### 6.1 Performance & Responsiveness
- **Initial Bundle Size:** Must stay within Angular budget (< 1MB initial warning, < 2MB error). Currently optimized at **707 kB raw total (~154 kB transfer)**.
- **Scroll & Animation Performance:** CSS animations and IntersectionObserver scroll reveal directives must run smoothly at 60 FPS without layout trashing.
- **Cross-Device Usability:** Mobile-first layout adjustments ensuring no viewport horizontal scroll on 320px screens up to 4K ultra-wide monitors.

### 6.2 Security & Data Privacy
- **Client-Side Secrets:** Zero secrets, API keys, or database credentials must exist in client bundles or public repositories.
- **Transport Security:** All communication with backend endpoints must occur over HTTPS (enforced in `public/config.json`).
- **Token Storage:** Authentication tokens reside in `sessionStorage` (cleared on tab close).
- **Input Sanitization:** Automatic trimming on text input blur (`InputTextComponent.onBlur()`) and strict regex filtering (`KeyFilterModule`).

### 6.3 Accessibility & Usability
- High color contrast between Obsidian dark backgrounds (`#060709`, `#0a0c10`) and text (`#ffffff`, `#c9d1d9`).
- Visible focus rings with brand orange outline (`outline: 2px solid var(--primary)`).
- Semantic landmark elements (`<header role="banner">`, `<main>`, `<section>`, `<article>`, `<footer role="contentinfo">`).
- Accessible button icon toggles equipped with `ariaLabel` attributes.

---

## 7. Current Limitations & Pending Roadmap

1. **Backend Dependency:** The application frontend requires an active ASP.NET Core API server running at `https://localhost:7167/`. Without this backend running, appointment booking and authentication fail.
2. **Booking Form Simplicity vs. Domain Model:** The active booking UI only collects 4 customer fields (`name`, `phone`, `email`, `address`), while `service-center-data.ts` defines a 19-field comprehensive bicycle intake form.
3. **Deactivated Routes:** The `/login` route, `Dashboard`, and `RegisterComponent` are not active in `app.routes.ts`.
4. **Missing HTTP Error Interceptor:** There is no centralized `HttpInterceptorFn` to catch 401 Unauthorized responses or display global server error toasts.
5. **URL Formatting Inconsistency:** `Appointmentservice` uses `AuthUrl + '/api/demo-requests'` while `AuthUrl` in `public/config.json` already ends with a slash (`/`), resulting in double slashes (`https://localhost:7167//api/demo-requests`).
