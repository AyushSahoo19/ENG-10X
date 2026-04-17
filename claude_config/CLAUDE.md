# CLAUDE.SYS: MASTER OPERATIONAL RULES (v2.0)

This is the **primary memory and configuration file** for **Claude Code**. Use these rules to maintain the integrity of the **Polymath.Sys** ecosystem during the migration to Astro.

---

## **1. THE MENTAL MODEL (READING SEQUENCE)**
To build the site correctly, you MUST read these files in order:
1.  **`PARITY_BLUEPRINT.md`**: The Absolute Truth for 100% visual and content parity.
2.  **`MEMORY.md`**: Understand the 48-month curriculum and the "Polymath" vision.
3.  **`DESIGN_SYSTEM.md`**: Absorb the "Obsidian" tokens, grid math, and typography.
3.  **`TECH_STACK.md`**: Review the specific Astro, TS, and Zod configurations.
4.  **`LOGIC_BLUEPRINTS.md`**: Study the algorithms for research-syncing and PDF generation.
5.  **`PROMPTS.md`**: Activate the specific phase-based build instructions.
6.  **`INITIALIZATION.md`**: Execute the Day 1 checklist.

---

## **2. TECHNOLOGY STACK (FOUNDATIONS)**
- **Framework**: Astro v4.x (Hybrid Rendering). Use Static by default, SSR for dynamic news search.
- **Styling**: **Vanilla CSS** with a centralized `design-tokens.css`. Use CSS Variables for the Obsidian palette.
- **Data Layer**: **Astro Content Collections**. Use **Zod** for schema validation of all roadmap and news entities.
- **Logic**: **TypeScript** with strict null checks.
- **Automation**: **Python 3.10+** for ArXiv scraping and PDF generation (F-PDF2).

---

## **3. THE DEVELOPMENT SEQUENCE (STEP-BY-STEP)**
1.  **Phase 0: Research.** Absorb the `PARITY_BLUEPRINT.md` to ensure no visual gaps.
2.  **Phase 1: Environment.** Initialize Astro, install dependencies, and setup the folder structure (see `INITIALIZATION.md`).
2.  **Phase 2: Global UI.** Implement the `BaseLayout`, `DesignSystem`, and `Obsidian` typography.
3.  **Phase 3: The Data Core.** Define the Content Collection schemas (Roadmaps, News, Profiles).
4.  **Phase 4: Roadmap Migration.** Convert all HTML roadmaps into `.mdx` content files.
5.  **Phase 5: The Bento Dashboard.** Build the landing page using the Bento-grid math from `DESIGN_SYSTEM.md`.
6.  **Phase 6: The Research Pipe.** Integrate the Python scrapers into the GitHub Actions workflow.
7.  **Phase 7: Knowledge Sync.** Implement the automated PDF generation and keyword-linking systems.
8.  **Phase 8: Edge Polish.** Add 3D CSS transforms and Mermaid architecture diagrams.

---

## **4. CORE CONSTRAINTS**
- **Obsidian Aesthetic Only**: Never use vibrant colors. Border-radius strictly 4px.
- **Efficiency First**: No unnecessary JS libraries. Use Astro's `client:only` very sparingly.
- **Zero-Boring UI**: Every interaction must feel premium (subtle scale, glassmorphism, depth).
- **Archive Grade**: All content must be structured to survive long-term as static metadata.

---

## **5. BUILD & DEV COMMANDS**
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Scrape**: `python3 scripts/research_scraper.py`
- **PDF Gen**: `python3 scripts/generator.py`
