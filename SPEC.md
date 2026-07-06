# SPEC — Raes Anatomy Physiotherapy Website Clone

## 1. Objective

Rebuild the raesanatomyphysiotherapy.com website as a clean, ownable static site. The rebuilt site must be visually identical to the original on desktop, and significantly better on mobile (mobile-first). All external integrations (booking, review links) must be preserved. The codebase must be simple enough for any developer to pick up with no prior context.

**Primary user:** A non-technical business owner who needs to own and be able to hand off their website code freely.

**Reference site usage:**
- The downloaded mirror (`files/raesanatomyphysiotherapy.com/`) is a **visual and content reference only** — what pages exist, what they look like, what content and images go where
- The existing HTML, CSS, and JS in the mirror must **not** be copied or used as a structural guide
- All code is written fresh, following the conventions in this spec

---

## 2. Pages

33 pages total, mirroring the existing site structure:

### Main pages
| File | Route |
|------|-------|
| `index.html` | Home |
| `about.html` | About — Our Story |
| `services.html` | Services overview |
| `appointments.html` | Book an appointment |
| `locations.html` | Locations overview |
| `pricing.html` | Pricing |
| `contact.html` | Contact |
| `faq.html` | FAQ |
| `cancellation-policy.html` | Cancellation Policy |
| `privacy-policy.html` | Privacy Policy |

### Location pages
| File | Route |
|------|-------|
| `burntisland.html` | Burntisland clinic |
| `glenrothes.html` | Glenrothes clinic |

### Service pages
| File | Route |
|------|-------|
| `back-neck-physiotherapy.html` | Back & Neck Physio |
| `acupuncture.html` | Acupuncture |
| `massage-therapy.html` | Massage Therapy |
| `sport-injury-rehab.html` | Sport Injury Rehab |
| `post-op-rehab.html` | Post-Op Rehab |
| `rehabilitation-movement-coaching.html` | Rehab & Movement Coaching |
| `home-physio.html` | Home Physio |
| `radial-shockwave-therapy.html` | Radial Shockwave Therapy |
| `sports-taping.html` | Sports Taping |
| `strength-conditioning.html` | Strength & Conditioning |
| `vestibular-rehab.html` | Vestibular Rehab |
| `manual-therapy.html` | Manual Therapy |
| `joint-mobilisation.html` | Joint Mobilisation |
| `manipulation.html` | Manipulation |
| `psychology.html` | Psychology |
| `psychology-reviews.html` | Psychology Reviews |

### Team pages
| File | Route |
|------|-------|
| `marcus-rae.html` | Marcus Rae |
| `annabelle-disalvo.html` | Annabelle DiSalvo |
| `marcus-croy.html` | Marcus Croy |
| `fiona.html` | Fiona |
| `lisa.html` | Lisa |

---

## 3. External Integrations to Preserve

All links and embeds must remain exactly as-is:

| Integration | URL |
|---|---|
| Cliniko booking — Burntisland | `https://raes-anatomy-physiotherapy.uk2.cliniko.com/bookings?business_id=1145681423953306269&embedded=true#service` |
| Cliniko booking — Glenrothes | `https://raes-anatomy-physiotherapy.uk2.cliniko.com/bookings?business_id=1816671729100005510` |
| Google Review link | `https://g.page/r/CWOvxIDhhFnZEBM/review` |
| Sara Rae Psychology | `https://www.sararaepsychologicaltherapyfife.com/` |
| Facebook | `https://www.facebook.com/raesanatomyphysio` |
| Phone | `tel:+447588468380` |
| Email | `mailto:info@raesanatomyphysiotherapy.com` |

---

## 4. Tech Stack

- **HTML:** Plain HTML5, semantic elements
- **CSS:** A single shared `css/styles.css` file. Tailwind CDN is permitted if it simplifies the mobile work, but no build step — use the CDN play script only
- **JavaScript:** Vanilla JS only. A single shared `js/main.js` for interactive behaviour (mobile menu toggle, dropdowns). No libraries, no bundlers
- **Assets:** All images served from an `assets/images/` directory
- **No:** React, Vue, Angular, Next.js, Vite, Webpack, npm, or any package manager

---

## 5. Repo Structure

```
/
├── index.html
├── about.html
├── services.html
├── appointments.html
├── locations.html
├── pricing.html
├── contact.html
├── faq.html
├── cancellation-policy.html
├── privacy-policy.html
├── burntisland.html
├── glenrothes.html
├── [service pages].html
├── [team pages].html
├── css/
│   └── styles.css          # all shared styles
├── js/
│   └── main.js             # mobile menu, dropdowns, shared JS
├── assets/
│   └── images/             # all images and icons
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions → GitHub Pages (to be added later)
└── README.md               # how to run locally, how to deploy
```

Rules:
- Every page links to the same `css/styles.css` and `js/main.js`
- No inline `<style>` blocks in HTML
- No inline `onclick` / `onmouseover` — move all JS behaviour to `main.js`
- Image paths are consistent: `assets/images/<filename>`

---

## 6. Shared Components

These are repeated on every page and must be consistent. They live in `css/styles.css` and `js/main.js` — not duplicated per-page:

- **Top info bar** — phone number + email strip at the top
- **Header / nav** — logo, desktop nav with dropdowns, mobile hamburger menu
- **Footer** — contact details, social links, nav links, copyright
- **"Book Appointment" CTA button** — consistent style across pages

---

## 7. Mobile-First Requirements

The current mobile experience is broken. The rebuild must:

- Design all CSS mobile-first (`min-width` media queries, not `max-width`)
- Navigation: hamburger menu that opens a full-width drawer on mobile; dropdowns become accordion-style on mobile
- Touch targets: all buttons and links minimum 44×44px tap area
- Text: readable at 16px base, no horizontal scroll
- Images: `max-width: 100%`, no overflow
- Hero sections: stack vertically on mobile, side-by-side on desktop
- Verify at 375px (iPhone SE), 390px (iPhone 14), and 768px (tablet) breakpoints

---

## 8. Code Style

- Semantic HTML: use `<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`, `<article>` appropriately
- CSS class names: kebab-case, descriptive (`.hero-title`, `.service-card`, `.nav-dropdown`)
- No comments unless the WHY is non-obvious
- No unused CSS classes
- No inline styles in HTML (exception: third-party embeds that require them)
- JS: `const`/`let` only, no `var`; event listeners in `main.js`, not `onclick` attributes

---

## 9. Testing Strategy

No automated test suite (static site). Verification is manual:

- [ ] Open every page at localhost — no broken images, no missing styles
- [ ] Resize to 375px — no horizontal scroll, nav hamburger works, all text readable
- [ ] Click every nav link — correct page loads
- [ ] Click every "Book Appointment" button — opens correct Cliniko URL
- [ ] Click phone/email links — correct `tel:` and `mailto:` fire
- [ ] Click Facebook, Google Review, Sara Rae Psychology links — open correct external URLs
- [ ] Validate HTML on index page via W3C validator

---

## 10. Boundaries

**Always:**
- Preserve all external URLs exactly (Cliniko, Google Review, social links)
- Keep the visual design faithful to the original on desktop
- Prioritise mobile usability

**Ask first before:**
- Changing any visible copy or content
- Removing any page that exists in the current site
- Changing colour scheme or branding

**Never:**
- Add a backend, database, or server-side code
- Add a JS framework or bundler
- Add inline `<style>` blocks or `onclick` attributes to HTML
- Change the Cliniko booking URLs
