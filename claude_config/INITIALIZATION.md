# INITIALIZATION: DAY 1 CHECKLIST

Follow this exact sequence to initialize the **Polymath.Sys** repository from zero. Do not deviate.

---

## **STEP 1: REPOSITORY HYGIENE**
1.  **Initialize Astro**: 
    ```bash
    npx create-astro@latest ./ --template minimal --no-install --no-git
    ```
2.  **Environment Setup**:
    -   Framework: Astro (Hybrid)
    -   TypeScript: Strict
    -   Tailwind: **NO** (Use Vanilla CSS)
3.  **Install Essential Deps**:
    ```bash
    npm install zod mermaid sharp
    ```

---

## **STEP 2: FOLDER SCAFFOLDING**
Create the following directory structure:
```text
/src/
  /components/
    /ui/       (BentoCard, ResourceItem)
    /nav/      (Navbar, Breadcrumbs)
    /content/  (Markdown Renderer wrappers)
  /layouts/
    MainLayout.astro
  /content/
    /roadmaps/ (Phase 1, 2, 3 .mdx files)
    /news/     (Daily ArXiv updates)
    /minds/    (Researcher profiles)
    config.ts  (Zod schema definitions)
  /styles/
    design-tokens.css
    global.css
/scripts/      (Python automation)
/public/
  /assets/
```

---

## **STEP 3: CONTENT COLLECTION SCHEMAS**
Define these in `src/content/config.ts` immediately:
- **Roadmap**: `title`, `phase`, `duration`, `lastUpdated`, `difficulty`.
- **News**: `title`, `authors`, `abstract`, `url`, `date`.
- **Minds**: `name`, `field`, `contribution`, `image`.

---

## **STEP 4: GLOBAL STYLING**
1.  **Tokens**: Transfer all CSS variables from `claude_config/DESIGN_SYSTEM.md` into `src/styles/design-tokens.css`.
2.  **Globals**: Setup the reset and `Inter` font imports in `src/styles/global.css`.
3.  **Layout**: Import `global.css` into `src/layouts/MainLayout.astro` and verify that the #000000 background is appearing.

---

## **STEP 5: THE FIRST PAGE**
- Rebuild the **Manifesto** section from the original `index.html` as your landing page in `src/pages/index.astro`.
- Test the layout responsiveness.
