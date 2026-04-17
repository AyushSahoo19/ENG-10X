# PROMPT LIBRARY: POLYMATH.SYS ACTIVATION

Use these curated prompts to trigger specific high-value behaviors in **Claude Code**. Each prompt is designed for a single major milestone.

---

## **1. THE INITIALIZATION: [INIT_ASTRO]**
```markdown
Execute the Polymath.Sys Astro Migration (Phase 1).
1. Run `npx create-astro@latest ./ --template minimal --no-install`.
2. Move all styling from the existing `styles.css` into `src/styles/global.css`.
3. Create `src/layouts/BaseLayout.astro` mirroring the current <head> metadata.
4. Ensure the design variables for the Obsidian palette (#000000 / #0b0b0b) are correctly initialized.
```

---

## **2. THE CONTENT DEEP-DIVE: [ROADMAP_MIGRATE]**
```markdown
Port the existing 48-month curriculum into Astro Content Collections.
1. Extract the raw text and syllabus from `AI Research Eng/phase1-3` HTML files.
2. Convert them into `.mdx` or `.md` files in `src/content/roadmaps/`.
3. Use Markdown for tabular data and Mermaid for architecture diagrams.
4. Validate all ArXiv links using the reference dictionary in `AI Research Eng/updater.py`.
```

---

## **3. THE INTELLIGENCE SETUP: [AUTOMATION_PIPELINE]**
```markdown
Configure the Automated Intelligence Layer.
1. Setup a GitHub Action in `.github/workflows/daily-sync.yml`.
2. Integrate the existing Python scrapers into the build pipeline.
3. The scraper should output new research papers directly into `src/content/news/`.
4. Implement the "Momentum Score" for trending AI repositories via the GitHub REST API.
```

---

## **4. THE FINAL POLISH: [DESIGN_EXCELLENCE]**
```markdown
Refit the UI with the "Obsidian Design DNA" (Phase 5).
1. Implement the Bento-style dashboard for the landing page.
2. Add Glassmorphism for the navigation layer (`backdrop-filter: blur(20px)`).
3. Ensure all hover-states use the "scale(1.02)" transformation.
4. Verify that the font "Inter" and "System Mono" are correctly loading and rendered with sharp anti-aliasing.
```

---

## **AGENT RULE: REJECT MEDIOCRITY**
**When using these prompts, Claude MUST:**
- Reject any generic "Bootstrap" or "Tailwind-default" looks.
- Maintain a single source of truth for all research data.
- Favor stability and long-form archival readability over trendy animations.
