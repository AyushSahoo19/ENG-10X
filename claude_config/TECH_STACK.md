# TECH STACK: POLYMATH.SYS DEEP FOUNDATIONS

This document defines the specific versions, configurations, and mental models for the **Astro**-based rebuild of **Polymath.Sys**.

---

## **1. ASTRO V4.X (HYBRID CORE)**
- **Rendering Strategy**: 
  - **SSG (Static Site Generation)**: Default for `roadmaps`, `minds`, and `index`.
  - **SSR (Server Side Rendering)**: Enable for `research/search` and `live-news` updates.
- **Islands Architecture**: 
  - `client:load`: Only for **Mermaid Diagrams** and **Inter-active Filters**.
  - `client:idle`: For **Search Index** pre-loading.
  - No client-side JS for the core layout (Keep it light).

---

## **2. DATA STRUCTURES (ZOD + CONTENT COLLECTIONS)**
- **Type Safety**: Astro Content Collections with **Zod** schema validation.
- **Roadmap Schema**:
  ```typescript
  export const roadmapSchema = z.object({
    title: z.string(),
    phase: z.number().min(1).max(3),
    duration: z.string(),
    difficulty: z.enum(['Intro', 'Intermediate', 'Frontier']),
    lastUpdated: z.date(),
    tags: z.array(z.string()).default([]),
  });
  ```
- **News Schema**: 
  - Includes `arxiv_id`, `authors`, and `category` fields.

---

## **3. TYPOGRAPHY & ASSETS**
- **Fonts**: 
  - **Inter**: Self-hosted via `@fontsource/inter` (No Google Fonts runtime calls).
  - **System Mono**: Use native stack `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`.
- **Images**: 
  - Process via **Astro <Image /> component** for automatic WebP conversion and lazy-loading.
  - Quality: `80` (High performance).

---

## **4. AUTOMATION (PYTHON 3.10+)**
- **Library Stack**:
  - `arxiv`: Fetching paper metadata.
  - `fpdf2`: Generating premium dark-mode PDFs.
  - `feedparser`: Monitoring DeepMind/OpenAI blogs.
  - `requests`: General API calls.
- **Integration**: 
  - Scripts execute via CLI and output directly to the `src/content/` folder as `.md` files.

---

## **5. DEPLOYMENT & CI/CD**
- **Hosting**: **Vercel** or **Cloudflare Pages** (Edge optimized).
- **GitHub Actions**: 
  - Daily build trigger for the `research_scraper.py`.
  - Automatic deployment on `push` to `main`.
  - Pull-request previews enabled.
