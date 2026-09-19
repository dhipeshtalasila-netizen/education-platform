# EduLearn

EduLearn is a static front-end education platform for college students. It includes landing pages, course exploration, dashboard views, login/signup screens, and settings pages focused on coding, B.Tech, BBA, and B.Com learning tracks.

## Current status

This project is currently a prototype/front-end demo. The main goal of this phase is cleanup and structure improvement before moving to a real data-backed learning platform.

## Tech stack

- HTML
- CSS
- JavaScript
- Local browser storage for demo state

## Key features

- Landing page with learning categories
- Dashboard view
- Login and signup pages
- Course pages for multiple learning tracks
- Settings page with theme and preference toggles
- Demo progress tracking using browser storage

## Repo structure

```text
.
├── about.html
├── bba.html
├── bcom.html
├── btech.html
├── coding.html
├── contact.html
├── contact.hmtl
├── courses.html
├── dashboard.html
├── forgot-password.html
├── index.html
├── lesson1.html
├── lesson2.html
├── lesson3.html
├── lesson4.html
├── lesson5.html
├── login.html
├── math.html
├── profile.html
├── python-*.html
├── quiz.html
├── settings.html
├── signup.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── README.md
└── .gitignore
```

## Run locally

Because this is a static HTML project, you can open the files directly in a browser or run a local web server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

- `contact.hmtl` is kept for backward compatibility while `contact.html` is the canonical file.
- The project is intentionally simple at this stage and is designed to be upgraded into a full-stack education platform in future phases.

## Planned improvements

1. Fix all broken and inconsistent page links
2. Standardize shared layout and styles
3. Add real authentication and data persistence
4. Replace static demo progress with a real backend
5. Add quizzes, assessments, and admin tools
6. Move to a production-ready full-stack architecture

## Contributing

Use a feature branch and keep changes focused. This repo is set up for incremental improvement.
