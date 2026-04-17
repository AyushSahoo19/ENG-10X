# THE 100% PARITY BLUEPRINT: POLYMATH.SYS MIGRATION

This document is the **Ultimate Strategic Reference** for the "Zero-Gap" migration of the Polymath website into Astro. It contains every structural detail, design token, and content block required to replicate the original site with absolute precision.

---

## **1. VISUAL DNA & ANIMATION CONSTANTS**

### **Core Colors (The Obsidian Palette)**
- **Backgrounds**: `#000000` (Pitch Black), `#0b0b0b` (Deep Charcoal - Navbar/Section), `#121212` (Card surfaces).
- **Accents**: `#ffffff` (Primary), `#ededed` (Secondary Text), `#888888` (Muted Data).
- **Borders**: `1px solid #1f1f1f` (Subtle), `1px solid #222222` (Card), `1px solid #444444` (Hover).

### **Typography**
- **Inter**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold).
- **System Monospace**: Used for all headers, numbering (`[M.01]`), and metadata tags.

### **Signature Animations**
- **3D File Stack**: `.stack-3d-wrapper` with `perspective: 1200px` and `rotateX(60deg) rotateZ(-45deg)`.
- **Typewriter Mask**: Pure CSS animation using a mask box with `wordCycle` and `typingMask` at 8s intervals.
- **Quote Fade**: 5s cycle using JS `opacity: 0 -> 1` and `translateY(6px -> 0)`.
- **Card Entrance**: Staggered `slide-up` (0.6s) with incremental delays (0.1s to 0.4s).

---

## **2. COMPONENT ARCHITECTURE (ASTRO MAPPING)**

### **Layouts**
- **`HomeLayout.astro`**: Full-width, textured `hero-stage` support, bento-grid skeleton.
- **`PhaseLayout.astro`**: 900px centered `layout` container, `back-link`, `phase-header-nav`.

### **Components**
- **`BentoCard.astro`**: Used for Manifesto, Blog, and Industry grids. Must support `card-meta` and `view-link`.
- **`BookCard.astro`**: The specialized index card with `.bc-spine` and `.bc-pages` (Spine title must be vertical/bold).
- **`TimelineBar.astro`**: The Phase timeline (`.tw` / `.tc`) with grid-template-columns proportional to months.
- **`AccordionStep.astro`**: The interactive curriculum steps (`.step-head` / `.step-body`).
- **`ResourceItem.astro`**: List items with SVG icon support and metadata tags (`.rtag`).

---

## **3. THE CONTENT DICTIONARY (SECTION-BY-SECTION)**

### **Header & Hero**
- **Brand**: `POLYMATH.SYS`
- **Nav Links**: Curriculum (#curriculum), Methodology (#methodology), Resources (#resources).
- **Hero Title**: "The Full AI Circular"
- **Hero Desc**: "We shape individuals capable of identifying effective techniques, pitfalls, and unique strategies..."

### **The Curriculum (Book Index Content)**
1.  **Master Blueprint**: "Months 1–48 • The Grand Arc" (Interlinking Math/Software, Consistency, Scaling Research).
2.  **Phase I: Foundations**: "Months 1–12 • Core Engineering" (Linear Algebra, DSA, Classical ML, Java).
3.  **Phase II: Deep AI**: "Months 13–24 • Architecture Building" (PyTorch, Transformers, Cloud Infra, MLOps).
4.  **Phase III: The Frontier**: "Months 25–48 • Quantum & Research" (Quantum Theory, QML, Quant Fin, Publications).

### **Methodology Appendix**
- [M.01] **Spaced Repetition**: Retention Protocol.
- [M.02] **Interleaved Practice**: Synthesis Protocol.
- [M.03] **Feynman Diagnostics**: Output Protocol.

---

## **4. INTERACTION LOGIC (CODE MIRRORING)**

### **The Quote Engine (script.js Logic)**
```javascript
const quotes = [
  { text: "What I cannot create, I do not understand.", author: "— Richard Feynman" },
  { text: "Imagination is more important than knowledge...", author: "— Albert Einstein" },
  // ... see index.html line 577 for full list
];
// Cycle interval: 5000ms. Animation: Opacity + TranslateY.
```

### **The Tab Controller (`show(index)`)**
- Primary selector: `.ntab` (The button) and `.panel` (The content).
- Logic: Remove `.active` from all, apply to `[index]`. Update `pbar.style.width` based on `(index+1)/total * 100`.

### **The Accordion Tog (`tog(id)`)**
- Pattern: `s0` (Head) triggers `b-s0` (Body) and `a-s0` (Arrow).
- Effect: Toggle `.open` class. CSS handles display and rotation.

---

## **5. MIGRATION INSTRUCTIONS FOR CLAUDE CODE**
1.  **Don't Re-Invent**: Use the exact CSS classes from the original `styles.css`.
2.  **Asset Logic**: Move all SVG icons into a `src/components/icons/` folder as individual `.astro` components.
3.  **Content Porting**: Port the metadata from `AI Research Eng/phase1_learning_roadmap.html` directly into the `roadmap` content collection schemas.
4.  **Verification**: After building each section, compare it against the original `index.html` structure to ensure no containers were simplified.

## **PROMPT ACTIVATION**
"Use the `claude_config/PARITY_BLUEPRINT.md` as the absolute specification for the site structure and design. Your mission is 100% visual and functional parity with the original Polymath portal."
