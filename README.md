# Raes Anatomy Physiotherapy — Website

A clean, ownable static website for Raes Anatomy Physiotherapy. Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools.

## Running locally

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

> **Important:** Always use the local server. Opening HTML files directly (double-clicking) will break styles and assets.

## Repo structure

```
/
├── index.html              # Home page
├── about.html              # About — Our Story
├── services.html           # Services overview
├── appointments.html       # Book an appointment
├── locations.html          # Locations
├── pricing.html            # Pricing
├── contact.html            # Contact
├── faq.html                # FAQ
├── [service pages].html    # One file per service
├── [team pages].html       # One file per team member
├── css/
│   └── styles.css          # All styles — single shared file
├── js/
│   └── main.js             # All JS behaviour — single shared file
├── assets/
│   └── images/             # All images and logos
└── tasks/                  # Build plan and task tracking
```

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch**, branch: `main`, folder: `/ (root)`
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`

For automated deploys on every push, add a `.github/workflows/deploy.yml` with a standard GitHub Pages action.
