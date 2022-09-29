# Ping Poet Products Website

This is the source for the https://www.pingpoet.com website for Ping Poet Products, LLC.

## Todo

- [x] Style with bootstrap
- [x] Bundle with parcel like https://github.com/twbs/examples/tree/main/parcel Hmm? https://hiltonmeyer.com/articles/11ty-with-parcel.html
- [x] fix(home): make home only have "What we do" and "how we do it" and link those to two detailed feature pages
- [x] chore: Publish via github pages with https://github.com/actions/deploy-pages
- [x] fix: render markdown on features layout page (how-we-do-it has an example of failed render)
- [x] fix: add a "See something wrong?, [propose an edit]"
- [x] fix: add contact form
- [x] fix: add privacy policy & terms
- [x] fix: cookie warning: n/a; at least for now no cookies used, so no warning needed per https://gdpr.eu/cookies
- [x] fix: SEO og/twitter semantic tags (twenty-nine has good example)
  - https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
  - https://ogp.me/
- [ ] chore: verify seo with https://opengraph.dev/
- [ ] fix: ensure consistent default font.  https://github.com/rsms/inter/ ? See ff use at https://mozilla.design/firefox/typography/
- [ ] fix: Add "Selected Articles" and blog template based on blog from eleventy-base-blog
- [ ] fix: add comments to blog page template
- [x] fix: analytics from https://www.cloudflare.com/web-analytics/, https://plausible.io/ or https://matomo.org/
- [x] fix: update primary/secondary, etc. colors https://getbootstrap.com/docs/5.2/customize/color/
- [ ] chore: check everything with lighthouse https://web.dev/measure
  - [ ] chore: proxy with cloudflare for perf; why? ghp isn't slow is it? wait on lighthouse analysis
  - [ ] chore: optimize parcel bundling of css based on what's used in generated output; necessary? measure.
- [ ] chore: prevent npm start from leaving some processes running due to run-p

## Inspiration and Gratitude

- Layout, Style, & Voice:
  - https://getbootstrap.com/docs/5.2/examples/starter-template/
  - https://getbootstrap.com/docs/5.2/examples/cover/#
  - https://services.creative-tim.com/
  - https://www.filamentgroup.com/portfolio/
  - https://updivision.com/
  - https://www.tatianamac.com/
  - https://www.luxoft.com/services/cloud-solutions/
  - https://bluehawkconsulting.com/services/#technology_enablement
- Technology & Tools:
  - https://www.11ty.dev
    - https://github.com/11ty/eleventy-base-blog for structure, metadata, and layouts.
    - https://github.com/seancdavis/twenty-ninety for SEO setup
  - https://parceljs.org/ & https://github.com/twbs/examples/tree/main/parcel
