# Build Plan — Raes Anatomy Physiotherapy Clone

Reference spec: `SPEC.md`
Reference site: `files/raesanatomyphysiotherapy.com/` (visual + content reference only — do not copy code)

---

## Dependency Graph

```
Phase 0: Repo scaffold
    └── Phase 1: Shared foundation (CSS reset, variables, header, footer, main.js)
            └── Phase 2: Home page (index.html) — most complex, validates foundation
                    └── Phase 3: High-priority pages (appointments, about, services, contact, locations, pricing, faq)
                            └── Phase 4: Service pages (14 pages, same layout pattern)
                                    └── Phase 5: Team pages (5 pages, same layout pattern)
                                            └── Phase 6: Location pages + utility pages
                                                    └── Phase 7: Polish — mobile audit, cross-page QA
```

Each phase depends on the previous. Phases 4–6 can be parallelised once Phase 3 establishes the page pattern.

---

## Phase 0 — Repo Scaffold

**Goal:** Clean repo structure in place before any HTML is written.

### Task 0.1 — Create repo skeleton

Create the following structure (empty files where noted):

```
/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/        (copy all images from files/raesanatomyphysiotherapy.com/)
├── README.md
├── SPEC.md            (already exists)
└── tasks/
    └── plan.md        (this file)
```

**Acceptance criteria:**
- [ ] All directories exist
- [ ] All images from reference are copied to `assets/images/`
- [ ] `css/styles.css` and `js/main.js` exist (can be empty)
- [ ] `README.md` explains how to run locally and what the project is

---

## Phase 1 — Shared Foundation

**Goal:** `css/styles.css` and `js/main.js` contain everything that repeats across every page. No page HTML yet.

### Task 1.1 — CSS foundation

In `css/styles.css`, write (mobile-first):

- CSS custom properties (colour palette, spacing scale, font sizes)
  - Primary blue: `#1e3a8a`
  - Accent green: `#48bb78` / `#10b981`
  - Text dark: `#1a202c`
  - Text muted: `#4a5568`
- CSS reset / base styles
- Typography scale (base 16px, heading sizes)
- Utility classes (`.container`, `.btn`, `.btn-primary`, `.btn-secondary`)
- Breakpoints defined as CSS custom properties (mobile: default, tablet: `min-width: 768px`, desktop: `min-width: 1024px`)

**Acceptance criteria:**
- [ ] Custom properties defined for all colours and spacing used across pages
- [ ] `.container` constrains max-width and centres content
- [ ] `.btn` variants render correctly at all breakpoints

### Task 1.2 — Header component (CSS + HTML snippet)

Write the shared header HTML pattern and its CSS. Every page will copy this block.

Header contains (in order):
1. Top info bar — phone (`tel:+447588468380`) and email (`mailto:info@raesanatomyphysiotherapy.com`)
2. Logo (`assets/images/raes_anatomy_logo.png`) linking to `index.html`
3. Desktop nav with dropdowns:
   - Home → `index.html`
   - About → `about.html` (dropdown: Our Story, Marcus Rae, Annabelle DiSalvo, Marcus Croy, Fiona, Lisa)
   - Services → `services.html` (dropdown: Back & Neck Physio, Acupuncture, Massage Therapy, Sport Injury Rehab, Post-Op Rehab, Rehab & Movement Coaching, Home Physio, Radial Shockwave, Sports Taping, Strength & Conditioning, Vestibular Rehab, Manual Therapy, Joint Mobilisation, Manipulation, Psychology)
   - Locations → `locations.html` (dropdown: Burntisland, Glenrothes)
   - Pricing → `pricing.html`
   - FAQ → `faq.html`
   - Contact → `contact.html`
4. "Book Appointment" CTA button → `appointments.html`
5. Hamburger button (mobile only) — toggles mobile nav drawer

Mobile nav: full-width drawer, dropdowns become accordion sections.

**Acceptance criteria:**
- [ ] Desktop: nav links visible, dropdowns open on hover
- [ ] Mobile (375px): hamburger visible, drawer opens/closes, all links accessible
- [ ] No `onclick` attributes in HTML — all behaviour in `main.js`
- [ ] Active page link visually indicated

### Task 1.3 — Footer component (CSS + HTML snippet)

Write the shared footer HTML pattern and its CSS.

Footer contains:
- Logo
- Contact details: address (Burntisland + Glenrothes), phone, email
- Nav links (grouped: Services, Company, Legal)
- Social icons: Facebook, Google Review
- Copyright line

**Acceptance criteria:**
- [ ] Stacks to single column on mobile
- [ ] Two-column layout on desktop
- [ ] All links correct and functional

### Task 1.4 — main.js

Write `js/main.js` with:

- Mobile menu toggle (hamburger open/close)
- Desktop dropdown hover (if CSS alone isn't sufficient)
- Mobile accordion for nav dropdowns
- FAB (floating action button) scroll-to-top or phone CTA if present on reference
- FAQ accordion (for `faq.html` — can be a no-op stub until that page is built)

**Acceptance criteria:**
- [ ] No inline `onclick` or `onmouseover` attributes anywhere — all event listeners attached in `main.js`
- [ ] Mobile menu opens and closes correctly
- [ ] No console errors on page load

### Checkpoint 1 — Foundation review

Before building any pages: open a blank HTML file that includes the header and footer, verify layout at 375px and 1280px. Fix any issues before proceeding.

---

## Phase 2 — Home Page

**Goal:** `index.html` fully built and verified. This page has the most components and validates that the shared foundation works end-to-end.

### Task 2.1 — index.html

Sections (in order, matching reference):
1. Header (shared)
2. Hero — full-width background image (`Homehero.jpeg`), headline, subheadline, two CTA buttons
3. "Why choose us" — 3-column feature cards (Expert Care, Convenient Locations, Comprehensive Services)
4. Services preview — grid of service cards linking to service pages
5. Clinic gallery — 3 photos (`opc1.jpeg`, `opc2.jpeg`, `opc3.jpeg`)
6. "Ready to Start" CTA band — phone button + Contact Us button
7. Insurance logos strip — Aviva, AXA, Cigna, Healix
8. Footer (shared)
9. Floating phone FAB (bottom-right, mobile-prominent)

**Acceptance criteria:**
- [ ] Visually matches reference at 1280px desktop
- [ ] No horizontal scroll at 375px
- [ ] Hero image loads and fills correctly
- [ ] All CTA buttons link to correct pages/URLs
- [ ] FAB renders correctly on mobile

### Checkpoint 2 — Home page review

Visual side-by-side with `http://localhost:8080` (reference). Fix any layout differences before proceeding to Phase 3.

---

## Phase 3 — High-Priority Pages

These 8 pages cover the main user journeys. Build in order — each is slightly simpler than the last.

### Task 3.1 — appointments.html

Two booking cards side by side (Burntisland, Glenrothes), each with Cliniko booking link. Mobile: stacks vertically.

External links:
- Burntisland: `https://raes-anatomy-physiotherapy.uk2.cliniko.com/bookings?business_id=1145681423953306269&embedded=true#service`
- Glenrothes: `https://raes-anatomy-physiotherapy.uk2.cliniko.com/bookings?business_id=1816671729100005510`

### Task 3.2 — about.html

Hero image (`About_Hero_pic.jpeg`), story text, team photo grid.

### Task 3.3 — services.html

Service cards grid — each card links to its individual service page.

### Task 3.4 — contact.html

Contact form (static — no backend, form submits to mailto or is display-only), map embed or address block, contact details.

### Task 3.5 — locations.html

Two location cards (Burntisland, Glenrothes) with address, hours, and booking links.

### Task 3.6 — pricing.html

Pricing table / card layout. Match reference content exactly.

### Task 3.7 — faq.html

FAQ accordion — questions/answers grouped by category. Accordion behaviour handled in `main.js`.

### Task 3.8 — cancellation-policy.html + privacy-policy.html

Simple text/content pages. One layout, copy content from reference.

**Acceptance criteria for all Phase 3 pages:**
- [ ] Correct at 375px (no overflow, readable)
- [ ] Correct at 1280px (matches reference)
- [ ] All internal links navigate correctly
- [ ] All external links open in new tab

### Checkpoint 3 — Core pages review

All 8 pages verified against reference. Navigation between them works fully.

---

## Phase 4 — Service Pages (14 pages)

All service pages share the same layout:
1. Header
2. Hero / page title band with relevant image
3. Content section (description, bullet points, CTA)
4. "Book Appointment" CTA band
5. Footer

Build one service page first (`back-neck-physiotherapy.html`) as the template, verify it, then replicate for the remaining 13:
- `acupuncture.html`
- `massage-therapy.html`
- `sport-injury-rehab.html`
- `post-op-rehab.html`
- `rehabilitation-movement-coaching.html`
- `home-physio.html`
- `radial-shockwave-therapy.html`
- `sports-taping.html`
- `strength-conditioning.html`
- `vestibular-rehab.html`
- `manual-therapy.html`
- `joint-mobilisation.html`
- `manipulation.html`
- `psychology.html`
- `psychology-reviews.html`

**Acceptance criteria:**
- [ ] All 15 service pages render correctly
- [ ] Consistent layout across all (same header/footer/CTA band)
- [ ] `psychology.html` links to Sara Rae Psychology site correctly

---

## Phase 5 — Team Pages (5 pages)

All team pages share the same layout:
1. Header
2. Profile photo + bio
3. Specialisms / qualifications list
4. "Book with [name]" CTA
5. Footer

Pages: `marcus-rae.html`, `annabelle-disalvo.html`, `marcus-croy.html`, `fiona.html`, `lisa.html`

Images: `Marcus_Rae.jpeg`, `Annabelle_Disalvo.jpeg`, `Marcus_Croy.jpeg`, `Pic_placeholder.png` (for Fiona and Lisa)

**Acceptance criteria:**
- [ ] All 5 pages render correctly
- [ ] Profile photos load

---

## Phase 6 — Location Pages + Utility Pages

### Task 6.1 — burntisland.html + glenrothes.html

Each: address, map embed or static map image, opening hours, parking info, booking CTA.

### Task 6.2 — Utility pages already done in Phase 3

`cancellation-policy.html` and `privacy-policy.html` covered in Task 3.8.

---

## Phase 7 — Polish + QA

### Task 7.1 — Mobile audit

Check every page at 375px (iPhone SE):
- [ ] No horizontal scroll
- [ ] All touch targets ≥ 44px
- [ ] Navigation drawer opens/closes cleanly
- [ ] Text readable at base 16px, no tiny text
- [ ] Images don't overflow

### Task 7.2 — Cross-page consistency

- [ ] Every page has identical header and footer HTML
- [ ] Active nav state correct on each page
- [ ] No broken image paths
- [ ] No `onclick` or `onmouseover` attributes remain in any HTML file

### Task 7.3 — Link audit

- [ ] Every internal link resolves to a real page
- [ ] All Cliniko booking URLs present and correct
- [ ] Google Review, Facebook, Sara Rae Psychology links correct
- [ ] Phone and email links correct

### Task 7.4 — README

Final README:
- What this project is
- How to run locally (`python3 -m http.server 8080`)
- Repo structure overview
- How to add a GitHub Actions deploy to GitHub Pages (instructions, not the workflow file itself — unless requested)

---

## Summary

| Phase | Deliverable | Pages |
|---|---|---|
| 0 | Repo scaffold + assets | — |
| 1 | Shared CSS + header + footer + main.js | — |
| 2 | Home page | 1 |
| 3 | Core pages | 8 |
| 4 | Service pages | 15 |
| 5 | Team pages | 5 |
| 6 | Location pages | 2 |
| 7 | QA + polish | all 33 |
