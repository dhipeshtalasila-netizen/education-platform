# EduLearn

EduLearn is a static HTML/CSS/JavaScript education-platform prototype for college students. It provides learning-track pages, course navigation, lesson pages, quizzes, a dashboard, profile/settings screens, and demo browser-based progress.

## Phase 1 status

The `phase-1-frontend-cleanup` branch currently includes:

- A canonical `contact.html` page
- A legacy `contact.hmtl` redirect
- Shared assets in `assets/css/style.css` and `assets/js/main.js`
- Basic project documentation and `.gitignore`
- Improved contact form semantics and shared script handling

Existing pages are being migrated incrementally. Until that migration is complete, some pages still contain legacy inline CSS and scripts.

## Run locally

```bash
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in a browser.

## Important limitation

Login, signup, contact submission, and progress tracking are demo features. They use browser storage or display local confirmation messages; they do not provide secure authentication, server-side persistence, or email delivery.

## Roadmap

1. Migrate remaining pages to shared styles and scripts.
2. Add automated link and HTML validation.
3. Introduce real authentication and a database.
4. Persist courses, lessons, quiz attempts, and progress per user.
5. Add an admin content-management workflow.
