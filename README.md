# Misha Slipych Portfolio Website

**Engineering • Visualization • Automation**

This repository contains the source, content infrastructure, technical configuration, and long-term documentation for [mishaslipych.com](https://mishaslipych.com).

## Project Vision

This website is more than a portfolio of completed work.

Its long-term purpose is to become an engineering knowledge base that documents:

- Engineering projects
- CAD automation
- Warehouse systems
- Technical visualization
- Product animation
- Interactive engineering tools

The website should grow continuously. Projects demonstrate capability, case studies explain engineering judgment, and articles turn individual experience into reusable professional knowledge.

New content should make the entire website more useful—not simply make it larger.

## Goals

- Showcase engineering work clearly and credibly.
- Document important engineering decisions, constraints, and tradeoffs.
- Publish reusable knowledge from real engineering practice.
- Support recruiting for relevant engineering and technical product roles.
- Support consulting and technical collaboration opportunities.
- Provide a foundation for future engineering products and tools.
- Build a durable personal brand around engineering, visualization, and automation.

## Technology

The website deliberately uses a small, transparent stack:

- Static HTML
- CSS
- Vanilla JavaScript
- No framework
- No build step

The intended production infrastructure is:

- **GitHub** for source control and repository hosting
- **Vercel** for automatic static deployment
- **Cloudflare DNS** for domain management
- **Custom domain:** `mishaslipych.com`
- **Cloudflare Email Routing** for domain email delivery

This architecture keeps the website portable, inexpensive, easy to inspect, and straightforward to maintain.

## Project Structure

```text
.
├── assets/
├── content/
│   ├── articles/
│   ├── case-studies/
│   ├── projects/
│   └── media/
├── docs/
├── templates/
├── 404.html
├── analytics.js
├── index.html
├── robots.txt
├── script.js
├── site.webmanifest
├── sitemap.xml
└── styles.css
```

### `assets/`

Contains public, production-ready website assets. Current examples include the hero image, social sharing image, favicon, PWA icons, and Apple Touch icon.

Only approved and optimized media referenced by published pages should live here. Draft renders and working media belong under `content/media/`.

### `content/`

Contains source content and working media used before publication.

- `content/projects/` contains project drafts and the project Markdown template.
- `content/case-studies/` contains case-study drafts and the case-study Markdown template.
- `content/articles/` contains article drafts and the article Markdown template.
- `content/media/` contains working media organized by content type and production role.

### `docs/`

Contains long-term project documentation, standards, setup instructions, audits, and planning references. This folder explains how the website should be maintained and extended.

### `templates/`

Contains reusable HTML page templates for articles, projects, and case studies. Templates include canonical URLs, structured data, breadcrumb support, favicon references, analytics integration, and the current visual system.

### `case-studies/`

Reserved public output path for published case-study HTML pages. Create it when the first case study is ready to publish. Do not expose links to a case study until its page exists.

### `projects/`

Reserved public output path for published project HTML pages. Project source remains in `content/projects/`; the final browser-ready page belongs here.

### `articles/`

Reserved public output path for published article HTML pages. Article source remains in `content/articles/`; the final browser-ready page belongs here.

## Documentation

The documents in `docs/` serve different purposes and should not be merged casually.

### `brand-guidelines.md`

Defines the visual identity of the Misha Slipych engineering brand: positioning, personality, colors, typography, image direction, rendering style, motion, iconography, and voice.

### `design-content-system.md`

Defines how every future page should be structured and written. It is the primary consistency standard for architecture, content hierarchy, page formats, media ratios, naming, and publishing quality.

### `content-roadmap.md`

Tracks planned project, case-study, article, and technical-note topics. It is a planning document, not a publishing standard.

### `content-workflow.md`

Explains where drafts and media belong, how files should be named, and how content moves from draft to a published HTML page.

### `production-setup.md`

Documents Google Search Console, Bing Webmaster Tools, Google Analytics 4, and Microsoft Clarity setup. It identifies every configuration location and explains how to verify each integration.

### `production-readiness-report.md`

Records the comprehensive first-launch technical audit across SEO, performance, accessibility, UX, portfolio structure, maintainability, and security.

### `final-pre-content-audit.md`

Records the final cleanup and validation state before real portfolio media and detailed content are added.

### `brand-assets-checklist.md`

Tracks the brand assets that should eventually be produced, including the final logo, monogram, wordmark, banners, resume, project covers, and visual style definitions.

## Content System

The website uses several related content types. Choose the smallest format that explains the subject properly.

### Projects

Use a project page for a concise record of a tool, workflow, visualization system, engineering deliverable, or product. A project should explain what it is, why it exists, its main features, technologies, status, and relevant links.

### Case Studies

Use a case study when enough approved material exists to explain the engineering work in depth. Case studies should cover the problem, objectives, constraints, decisions, process, challenges, technical details, verified results, and lessons learned.

### Articles

Use an article for reusable knowledge that can stand independently from one project. Articles should explain methods, patterns, workflows, or recurring engineering problems.

### Technical Notes

Use a technical note for a narrow observation, calculation, test, implementation detail, or workflow decision that is useful but does not require a complete article.

## Media Workflow

Working media belongs under `content/media/`:

- Renders: `content/media/renders/`
- Videos and longer source footage: `content/media/video/`
- Loop-ready animation assets: `content/media/animations/`
- Project media: `content/media/projects/`
- Article images: `content/media/articles/`
- Case-study media: `content/media/case-studies/`
- Screenshots: `content/media/screenshots/`
- Thumbnail working files: `content/media/thumbnails/`
- Logos and identity work: `content/media/logos/`

During production, keep source files, drafts, and unapproved exports in `content/media/`. Before publication:

1. Select approved media.
2. Confirm confidentiality and usage rights.
3. Crop to the required aspect ratio.
4. Export optimized production formats and sizes.
5. Add descriptive alt text or captions.
6. Move the final public files into `assets/`.
7. Update the published HTML to reference the production asset.
8. Verify every reference and responsive state.

Do not move working media into `assets/` merely because it exists. The `assets/` folder should remain a clean representation of what the live website uses.

## Publishing Workflow

```text
Idea
  ↓
Draft
  ↓
Media
  ↓
Review
  ↓
Metadata
  ↓
SEO
  ↓
Publish
  ↓
Add to sitemap
  ↓
Share on LinkedIn
```

### 1. Idea

Add the topic to `docs/content-roadmap.md`. Decide whether it belongs as a project, case study, article, or technical note.

### 2. Draft

Copy the relevant template from `content/` and assign a permanent kebab-case slug.

### 3. Media

Gather approved diagrams, screenshots, renders, animation, or documents in the matching `content/media/` folder.

### 4. Review

Review engineering accuracy, confidentiality, terminology, image permissions, and whether every claim can be supported.

### 5. Metadata

Prepare the page title, description, canonical URL, social image, publication date, and author information.

### 6. SEO

Add Open Graph, Twitter Card, breadcrumb, and appropriate Schema.org structured data. Confirm heading hierarchy and image alt text.

### 7. Publish

Create the browser-ready HTML page from the matching file in `templates/`. Place it in the correct public folder and add approved optimized assets to `assets/`.

### 8. Add to sitemap

Add the final canonical URL to `sitemap.xml`. Never add draft, private, hidden, or placeholder pages.

### 9. Share on LinkedIn

After the deployed URL and social preview are verified, publish a concise professional post linking to the page.

## Future Roadmap

Long-term development may include:

- Detailed engineering case studies
- Warehouse and racking visualization libraries
- Technical articles
- Interactive engineering demonstrations
- Published engineering tools
- Downloadable resume
- Engineering blog
- Searchable technical-note archive
- A connected engineering knowledge base

The priority is durable, useful content rather than publishing volume.

## Design Principles

- Minimal
- Industrial
- Engineering-first
- Dark theme
- Restrained orange accent
- High readability
- Consistent spacing
- Clear hierarchy
- Technical realism

Visual experimentation should never reduce clarity or make a page feel disconnected from the rest of the site.

## Maintenance Principles

- Never break published URLs.
- Never rename published slugs.
- Keep pages lightweight.
- Prefer reusable structures and established templates.
- Document every major architectural decision.
- Avoid unnecessary frameworks and dependencies.
- Keep draft content separate from public assets.
- Do not publish unsupported claims or confidential information.
- Validate metadata, links, structured data, accessibility, and responsive behavior before every release.

## Deployment

```text
Local edits
  ↓
Git commit
  ↓
GitHub push
  ↓
Automatic Vercel deployment
  ↓
Cloudflare DNS
```

1. Make and validate changes locally.
2. Review the intended commit scope.
3. Commit with a concise description of the change.
4. Push the branch or approved production branch to GitHub.
5. Vercel builds and deploys the static files automatically.
6. Cloudflare DNS routes the custom domain to the production deployment.
7. Verify the production URL, assets, metadata, console, and responsive layout.

## Analytics

The repository supports optional production integrations:

- Google Search Console
- Google Analytics 4
- Microsoft Clarity
- Bing Webmaster Tools

Google Analytics and Microsoft Clarity are disabled while their configuration variables are empty. Search Console and Bing verification tags remain commented placeholders until real verification values are available.

Activation and verification instructions are documented in `docs/production-setup.md`. Review applicable privacy and consent requirements before enabling analytics or session recording.

## License

This is a personal portfolio repository.

All engineering work, renders, animations, written content, technical documentation, and related assets remain the intellectual property of Misha Slipych unless explicitly stated otherwise.

No license is granted for reuse, redistribution, modification, or commercial use of portfolio content without written permission.

---

> This website is intended to evolve over many years.
>
> Every new project, article, and case study should strengthen the quality of the portfolio while preserving consistency, clarity, and engineering integrity.
