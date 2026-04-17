# ELITE AI SKILLS: ASTRO & INTELLIGENCE MIGRATION

This document defines the specialized "Skills" and "Mental Models" for **Claude Code** to adopt during the Polymath.Sys build.

---

## **1. THE BRUTALIST (Astro UI Engineering)**
**Objective**: Build a premium, high-density, dark-mode interface that communicates "Expertise."

- **Bento Grid Mastery**: 
    - Use `CSS Grid` with `grid-template-areas` for complex layouts. 
    - Information density is a feature. Do not waste space with "fluffy" gaps.
- **Glassmorphism**: 
    - Use `backdrop-filter: blur(20px)` for all navigation and popups to create a "layered" depth.
    - Border-colors must use the high-contrast `var(--card-border)` or `var(--card-border-hover)`.
- **Typography Integration**: 
    - Self-host fonts via `@fontsource`. 
    - Strictly use `Inter` for headings and `SF Mono` for technical metadata.
- **Micro-Animations**: 
    - Implement subtle `transform` scales (1.01) and `opacity` fades on all hover states. No bouncy or "playful" animations.
    - Use **Astro Transitions** for smooth page-to-page navigation.

---

## **2. THE AUTOMATOR (Data & Intelligence Layer)**
**Objective**: Architecture a zero-touch pipeline for research and industry news.

- **Content Collection Architecture**: 
    - Define precise **Zod schemas** in `src/content/config.ts`.
    - Use Markdown (`.md`) by default, and MDX (`.mdx`) only when interactive components (like Mermaid graphs) are required.
- **ArXiv & Blog Sync**: 
    - Integrate existing Python scrapers. The output must be valid Markdown with YAML frontmatter.
    - Metadata must include `authors`, `category`, `source_url`, and `timestamp`.
- **Momentum Scoring**: 
    - Implement build-time logic (via GitHub API) to fetch repository star velocity and contributor activity.
    - Display this as a "Momentum" indicator in the bento dashboard.

---

## **3. THE ARCHIVIST (Offline & Knowledge Sync)**
**Objective**: Ensure all knowledge is offline-ready and permanently searchable.

- **PDF Generation Pipeline**: 
    - Bridge the `generator.py` (FPDF-based) logic into the build process.
    - Every major update to the roadmaps should trigger a new PDF rebuild saved to `public/assets/`.
- **Keyword Linker Integration**: 
    - Build a post-processing script that scans generated Markdown and injects reference links based on the `LINKS` dictionary in `claude_config/LOGIC_BLUEPRINTS.md`.
- **Technical Accuracy**: 
    - Verify all research links and paper titles before committing to the content collection.

---

## **REQUIRED AGENT COMPETENCIES**
1. **Zero-Latency Interactions**: Favor native CSS and HTML over heavy JS libraries.
2. **Technical Mastery**: Ensure all paper citations are linked to their corresponding ArXiv IDs.
3. **Obsidian Consistency**: Adhere to the single-source-of-truth design variables in `src/styles/design-tokens.css`.
