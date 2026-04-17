# OPERATIONAL WORKFLOWS: POLYMATH.SYS SCALE

Use these guides to maintain the portal's intelligence and data integrity.

---

## **1. THE NEWS REFRESH (DAILY)**
1. **Trigger**: Run `python3 scripts/research_scraper.py`.
2. **Review**: Check the generated `.md` files in `src/content/news/`.
3. **Commit**: Use `git add` and `git commit -m "feat(news): sync research papers for [DATE]"`
4. **Deploy**: Push to GitHub to trigger the Vercel/Netlify build.

---

## **2. THE KNOWLEDGE ARCHIVE (MONTHLY)**
1. **Goal**: Synchronize the offline PDF with the current online curriculum.
2. **Action**: Run `python3 scripts/generator.py`.
3. **Link**: Move the generated `knowledge.pdf` into `public/assets/`.
4. **Update**: Ensure the "Download Archive" button on the portal points to the new file.

---

## **3. THE LINK REPLACEMENT (POST-MIGRATE)**
1. **Context**: Old HTML files used inline links; Astro uses markdown.
2. **Action**: Run a scan of `src/content/**/*.md`.
3. **Regex**: Identify key research terms that lack links.
4. **Inject**: Use the `LINKS` dictionary in `AI Research Eng/updater.py` to automatically inject markdown links (`[Term](URL)`) into the content.

---

## **4. THE PERFORMANCE VERIFICATION (POST-BUILD)**
1. **Build**: Run `npm run build`.
2. **Preview**: Run `npm run preview`.
3. **Audit**: Use **Astro Dev Overlay** or Lighthouse.
4. **Optimization**: Check that large research papers are correctly paginated or lazy-loaded.

---

## **5. THE GITHUB ACTION DEPLOYMENT**
1. **File**: `.github/workflows/daily-sync.yml`
2. **Logic**:
    - Trigger: `cron: "0 0 * * *"` (Midnight UTC).
    - Job: Checkout repo -> Setup Python -> Run Scrapers -> Commit changes.
3. **Secret**: Ensure the `GITHUB_TOKEN` has write permissions to allow the bot to commit new content.
