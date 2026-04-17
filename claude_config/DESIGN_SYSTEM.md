# THE OBSIDIAN DESIGN SYSTEM: POLYMATH.SYS CORE TOKENS

This document defines the visual language and layout math for the **Polymath.Sys** portal. Use these tokens for all CSS/Astro development to ensure 100% brand parity.

---

## **1. CORE COLOR PALETTE (CSS VARIABLES)**
```css
:root {
  /* BACKGROUNDS: PITCH BLACK / DEEP CHARCOAL */
  --bg-color: #000000;
  --card-bg: #0b0b0b;
  --panel-bg: #121212;
  
  /* BORDERS: SUBTLE SEPARATION */
  --card-border: #222222;
  --card-border-hover: #444444;
  --border-secondary: #333333;
  
  /* TEXT: HIGH CONTRAST / MUTED DATA */
  --text-primary: #ededed;
  --text-secondary: #888888;
  --text-muted: #666666;
  --accent: #ffffff;
}
```

---

## **2. TYPOGRAPHY SCALES**
- **Headings (Inter)**: 
  - `font-weight: 500` or `600`.
  - `letter-spacing: -0.02em`.
  - `font-size: 2.5rem` (Hero), `1.3rem` (Card Title), `1.1rem` (Subtitle).
- **Metadata (System Monospace)**:
  - `font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;`
  - `font-size: 0.8rem` (Card Meta), `0.85rem` (UI Links), `11px` (Tech Labels).
  - `letter-spacing: 0.05em`.
  - `text-transform: uppercase`.

---

## **3. LAYOUT MATH & SPACING**
- **Bento Grids**: 
  - `grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))`.
  - `gap: 1.5rem`.
- **Spacing Units**:
  - `sm: 0.5rem`, `md: 1rem`, `lg: 2rem`, `xl: 4rem`.
- **Card Padding**: `2rem` (Internal).
- **Border Radius**: Strictly `4px` (Small) or `6px` (Large). No rounder corners.

---

## **4. GLOBAL EFFECTS (THE PREMIUM FEEL)**
- **Glassmorphism Layer**:
  ```css
  .nav-header {
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--card-border);
  }
  ```
- **Obsidian Hover State**: 
  - Scale: `transform: translateY(-4px) scale(1.01)`.
  - Shadow: `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8)`.
  - Transition: `0.2s cubic-bezier(0.4, 0, 0.2, 1)`.

---

## **5. ICONOGRAPHY**
- **SVGs**: Use high-contrast, stroke-based icons (Feather/Lucide style).
- **Stroke Width**: `2px`.
- **Size**: `18px` to `24px` for UI actions.
- **Color**: Inherit `currentColor` (Target: `--text-secondary`).
