# Content Workflow

## Content Locations

- New case-study drafts go in `content/case-studies/`. Start from `content/case-studies/template.md`.
- New project drafts and project-page source content go in `content/projects/`. Start from `content/projects/template.md`.
- New article drafts go in `content/articles/`. Start from `content/articles/template.md`.
- Published HTML pages can be created from the matching files in `templates/` and placed in the corresponding public path, such as `case-studies/`, `projects/`, or `articles/`.

## Media Locations

- Article images go in `content/media/articles/` while content is being prepared.
- Case-study media goes in `content/media/case-studies/`.
- Project media goes in `content/media/projects/`.
- Shared hero media, logos, animations, screenshots, and renders go in their matching folders under `content/media/`.
- Move only approved, production-ready assets into the website's public `assets/` directory when publishing.

## Image Naming

Use lowercase kebab-case with a descriptive subject and optional sequence number:

- `pallet-rack-builder-configurator-01.webp`
- `rack-sign-generator-output-02.png`
- `cantilever-assembly-exploded-view.webp`

Include the project or article slug first. Avoid spaces, generic names such as `image1`, and dates unless the date is meaningful.

## File Naming

- Use lowercase kebab-case for Markdown and HTML files.
- Keep the filename aligned with the page slug.
- Examples: `pallet-rack-builder.md`, `ar-for-material-handling.md`.

## Draft-to-Publish Workflow

1. Copy the relevant Markdown template and assign a stable slug.
2. Write the first draft using only approved facts and non-confidential material.
3. Gather media in the matching `content/media/` folder.
4. Review engineering accuracy, terminology, confidentiality, and image permissions.
5. Edit for concise structure, accessibility, and descriptive image alt text.
6. Create the final HTML page from the matching template in `templates/`.
7. Add canonical, Open Graph, Twitter Card, breadcrumb, and page-specific structured data.
8. Move optimized production media into `assets/` and verify every reference.
9. Add the final page URL to `sitemap.xml` and connect it from the relevant index section.
10. Test desktop and mobile layouts, then publish.
