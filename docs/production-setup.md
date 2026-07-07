# Production Setup

This document covers webmaster verification and optional analytics integrations for `https://mishaslipych.com`.

Do not commit private credentials. Search verification tokens, the GA4 Measurement ID, and the Microsoft Clarity Project ID are site identifiers rather than passwords, but they should still be copied carefully from the official dashboards.

## Google Search Console

1. Open Google Search Console and add `https://mishaslipych.com` as a URL-prefix property, or use the domain-property workflow if DNS access is available.
2. Choose the HTML tag verification method.
3. Copy the complete verification `<meta>` tag supplied by Google.
4. Open `index.html`.
5. Find the comment marked `GOOGLE SEARCH CONSOLE VERIFICATION` near the top of `<head>`.
6. Insert the supplied meta tag directly below that comment. Do not alter its `name` or `content` values.
7. Deploy the site, open the production homepage, and confirm the tag is present in the page source.
8. Return to Search Console and select **Verify**.

After verification, keep the tag in `index.html`; removing it can cause ownership verification to be lost.

## Bing Webmaster Tools

1. Open Bing Webmaster Tools and add `https://mishaslipych.com`.
2. Choose the HTML meta tag verification method.
3. Copy the complete Bing verification tag.
4. Open `index.html`.
5. Find the comment marked `BING WEBMASTER TOOLS VERIFICATION` in `<head>`.
6. Insert the supplied tag directly below that comment.
7. Deploy the site and confirm the `msvalidate.01` meta tag appears in the production page source.
8. Complete verification in Bing Webmaster Tools.

Keep the Bing verification tag in the deployed page after verification.

## Google Analytics 4

Analytics is implemented in `analytics.js` and is disabled by default.

1. Create or select a GA4 property and Web data stream.
2. Copy its Measurement ID from the stream details.
3. Open `analytics.js`.
4. Set the `GA4_MEASUREMENT_ID` configuration variable:

   ```js
   const GA4_MEASUREMENT_ID = 'YOUR_MEASUREMENT_ID';
   ```

5. Deploy the site.

When the variable is empty, no Google Analytics script is requested and no analytics calls are made. Only this variable needs to change to enable or disable GA4.

To verify GA4:

- Open the production site in a browser without an analytics-blocking extension.
- In browser developer tools, confirm a request is made to `googletagmanager.com/gtag/js`.
- Use the GA4 Realtime report or DebugView to confirm the visit is received.
- Check that only one page-view stream is being recorded.

## Microsoft Clarity

Clarity is implemented in `analytics.js` and is disabled by default.

1. Create or select the site project in Microsoft Clarity.
2. Copy the Project ID from the setup screen.
3. Open `analytics.js`.
4. Set the `CLARITY_PROJECT_ID` configuration variable:

   ```js
   const CLARITY_PROJECT_ID = 'YOUR_PROJECT_ID';
   ```

5. Deploy the site.

When the variable is empty, no Clarity script is requested. Only this variable needs to change to enable or disable Clarity.

To verify Clarity:

- Open the production site in a browser without a tracking blocker.
- In browser developer tools, confirm a request is made to `clarity.ms/tag/` followed by the configured project ID.
- Check the Clarity dashboard after its processing delay for a new session.

## Production Verification Checklist

- Google verification tag is visible in the production homepage source.
- Bing verification tag is visible in the production homepage source.
- `analytics.js` loads successfully without console errors.
- Empty analytics configuration values create no third-party requests.
- GA4 appears in Realtime or DebugView when enabled.
- Clarity receives a session when enabled.
- Analytics and session recording comply with the privacy and consent requirements that apply to the site's visitors.
