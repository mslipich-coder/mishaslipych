# Production Readiness Report

Audit date: 2026-07-07  
Scope: static review of the live HTML, CSS, JavaScript, media, manifest, metadata, crawler files, templates, and content infrastructure.

## Critical issues

### 1. Optimize the hero image before launch

`assets/hero-facility.png` is 1536×1024 and 2.84 MB. It is the above-the-fold hero and likely Largest Contentful Paint element. The image also has no intrinsic `width` and `height`, `srcset`, `sizes`, preload, or `fetchpriority="high"` hint.

Before launch:

- Export appropriately compressed AVIF and WebP versions.
- Provide responsive source sizes rather than sending the full image to every viewport.
- Add intrinsic dimensions to reduce layout shift.
- Preload or assign high fetch priority to the selected hero source.
- Keep the hero eager-loaded; it should not use lazy loading.

### 2. Make 404-page assets root-relative

`404.html` references `styles.css` with a relative path. When a custom 404 is served for a nested missing URL, the browser may resolve this as `/missing/path/styles.css`, leaving the error page unstyled. Change the stylesheet reference to `/styles.css`. The favicon and analytics references are already root-relative.

### 3. Fix broken future case-study links

The hidden Case Studies section contains links to three HTML files that do not exist:

- `case-studies/pallet-rack-builder.html`
- `case-studies/rack-sign-generator.html`
- `case-studies/product-animation-pipeline.html`

The section is visually hidden behind `ENABLE_CASE_STUDIES = false`, but crawlers can still discover URLs from hidden markup. Remove or neutralize the `href` values until pages exist, render the cards only when enabled, or publish noindexed holding pages.

### 4. Correct small-text contrast on orange surfaces

White on the current orange accent measures approximately 3.11:1. Small text in `.discipline-card` uses this combination and does not meet WCAG AA's 4.5:1 requirement for normal text. Use a darker text color on orange or darken the orange specifically for text-bearing surfaces while preserving the brand accent elsewhere.

## Recommended improvements

### Performance

- Add explicit image dimensions and responsive media handling to future project, article, and case-study templates.
- Keep future below-the-fold images on `loading="lazy"` and `decoding="async"`.
- Compress `assets/og-image.png` (923 KB). It does not affect ordinary page load, but a smaller social image will be faster for crawlers and sharing services.
- Consider self-hosting the two font families for predictable caching and fewer third-party requests. Current Google Fonts usage already includes preconnect and `display=swap`.
- Remove legacy CSS before sustained content production. The 25.9 KB stylesheet still includes unused calculator, animation, filtering, legacy project-card, credential, and tool-panel rules.

### Accessibility

- Add intentional `:focus-visible` styles for links and buttons. Browser defaults have not been removed, but a consistent high-contrast focus treatment is needed across the custom controls.
- Update the theme toggle with state information such as `aria-pressed` or a state-specific accessible label.
- Support closing the mobile navigation with Escape and return focus to the menu button.
- Add a skip link to move keyboard users directly to the main content.
- Re-check all final media alt text when placeholders are replaced. The current hero image has meaningful alt text.

### UX and portfolio flow

- Featured project cards show an arrow and “Case study in preparation,” but the cards are not interactive. Either remove the interaction cue while unavailable or make the complete card a link once a destination exists.
- Keep status badges consistent as projects move from private or in-development states to published work.
- Replace CSS-generated placeholder visuals with optimized, approved media before treating a project as published.
- Confirm whether “Resume available on request” should remain disabled or become a contact action. The current empty state is clear but offers no next step.

### Security and production configuration

- Add production response headers through the hosting platform: Content-Security-Policy, Referrer-Policy, X-Content-Type-Options, Permissions-Policy, and a suitable Strict-Transport-Security policy.
- Use `rel="noopener noreferrer"` explicitly on new `target="_blank"` links. The existing `noreferrer` behavior also prevents opener access, but the explicit pair is clearer for maintenance.
- Complete consent and privacy review before enabling GA4 or Microsoft Clarity. Both are currently disabled and produce no third-party requests.
- Add real Google Search Console and Bing verification tags when the properties are created.

### Maintainability

- Reformat or split the highly minified stylesheet into documented sections before multiple project pages are added. The current file is difficult to review safely.
- Remove the duplicate root-level `favicon.svg`; it is byte-identical to `assets/favicon.svg` and is not referenced.
- Add a small automated validation script for internal links, JSON-LD, manifest icons, sitemap URLs, and asset existence.
- Ensure the project and case-study templates load the intended fonts. The article template includes Google Fonts; the project and case-study templates currently rely on fallbacks unless fonts are already cached.

## Nice-to-have improvements

- Add `og:image:secure_url` if a sharing platform later requires it; the current HTTPS `og:image` is valid.
- Add a lightweight `noscript` note only if future content becomes JavaScript-dependent. The current core content remains available without JavaScript.
- Consider a privacy page before analytics is enabled.
- Add sitemap entries only when real article, project, or case-study pages are published. The current single homepage entry is correct for the live content set.
- Add automated Lighthouse, HTML validation, and broken-link checks to the deployment workflow.
- Test the final site on real iOS Safari and Android Chrome devices, particularly the fixed header, mobile menu, viewport height, and dark/light theme transition.

## Verified strengths

- Homepage title length is 54 characters and the meta description is 125 characters.
- Canonical URL, robots.txt, sitemap.xml, Open Graph, Twitter Card, manifest, favicon set, and Apple Touch icon are present.
- The Open Graph image is correctly sized at 1200×630.
- Person, WebSite, WebPage, and Breadcrumb structured data parse successfully.
- Semantic structure has one primary heading, ordered section headings, labeled navigation, a main region, articles for featured projects, and meaningful section labels.
- The hero image has descriptive alt text.
- Dark-theme text, secondary text, and orange accent on the dark background meet normal-text contrast requirements; the exception is white small text on orange noted above.
- JavaScript syntax passes for `script.js` and `analytics.js`; empty analytics IDs remain safely disabled.
- No secrets, analytics IDs, webmaster tokens, or private credentials are hardcoded.
- The manifest and all currently referenced homepage assets exist.
- Responsive breakpoints exist at 900 px, 560 px, and 520 px, with single-column adaptations for navigation, projects, metrics, contact, and case studies.

## Overall readiness score

**78 / 100**

The project has a strong metadata, content-infrastructure, responsive, and deployment foundation. It is close to launch, but the hero payload, nested-path 404 styling, hidden broken case-study routes, and orange-surface contrast should be resolved first. After those fixes, the site should be suitable for an initial public release; the remaining items can be handled incrementally during content production.

> Note: This was a static code and asset audit. A final pre-launch pass should also include a deployed Lighthouse run, browser console/network inspection, screen-reader smoke test, and real-device responsive review.
