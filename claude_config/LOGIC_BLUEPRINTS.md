# LOGIC BLUEPRINTS: CORE ALGORITHMS

This document translates the original Python and JS logic of **Polymath.Sys** into framework-agnostic algorithms. Use these to rebuild the automation features in the new Astro/TypeScript stack.

---

## **1. THE RESEARCH SCRAPER (ArXiv / News Pipe)**
**Goal**: Automate the collection of new research papers and blog posts.

### **Algorithm**
1.  **Feed Fetching**: Connect to the ArXiv API (using `arxiv` library) and industry RSS feeds (OpenAI, DeepMind).
2.  **Filtering**: 
    -   ArXiv Categories: `cs.LG` (Machine Learning), `cs.AI` (Artificial Intelligence), `quant-ph` (Quantum Physics).
    -   Keywords: "Transformer", "LLM", "QML", "Frontier".
3.  **Data Structuring**:
    -   `title`: Paper Title.
    -   `abstract`: Summary.
    -   `authors`: List of authors.
    -   `url`: Link to source.
    -   `date`: ISO Timestamp.
4.  **Metadata Extraction**: Generate a unique `SLUG` from the title.
5.  **Persistence**: Save as an Astro Markdown (`.md`) file in `src/content/news/{slug}.md` with YAML frontmatter.

---

## **2. THE KEYWORD LINKER (Auto-Hyperlinking)**
**Goal**: Automatically turn plain text into hyperlinked research references.

### **Algorithm**
1.  **Reference Hub**: Mantain a `LINKS` dictionary (key: `Keyword`, value: `URL`).
2.  **Pre-processing**: Scan all `.md` and `.mdx` content in `src/content/`.
3.  **Pattern Match**: Identify keywords that are *not* already within an `<a>` tag or Markdown link `[]()`.
4.  **Transformation**: Replace the matching keyword (case-insensitive) with `[Keyword](URL)`.
5.  **Output**: Write the transformed content back to the file.
6.  **Optional**: Add a "Reference Glyph" (e.g., `&nearr;`) to visually identify automated links.

---

## **3. THE KNOWLEDGE ARCHIVIST (PDF Engine)**
**Goal**: Generate a premium, dark-themed PDF for offline study from the live website content.

### **Algorithm**
1.  **Content Aggregation**: Flatten all files in the `src/content/roadmap/` collection into a single document stream.
2.  **PDF Layout**:
    -   **Background**: Full-page #0b0b0b fill.
    -   **Typography**: Helvetica/Roboto (Bold for headers).
    -   **Header**: Branding "POLYMATH.SYS // THE KNOWLEDGE BASE".
    -   **Footer**: Page numbers and "SYSTEM MEMORY CORE".
3.  **Sanitization**: Convert all Unicode glyphs and Mermaid blocks into ASCII or static images.
4.  **Rendering**: Use **Python FPDF2** or **Puppeteer** to generate the PDF buffer.
5.  **Public Hook**: Save the output to `public/assets/knowledge.latest.pdf`.

---

## **4. THE REPO VELOCITY RANKER**
**Goal**: Rank AI repositories based on real-time hype and momentum.

### **Algorithm**
1.  **Input**: A list of GitHub repository URLs (from the `Ecosystem` metadata).
2.  **API Hook**: Fetch `stargazers_count`, `subscribers_count`, and `pushed_at` via the GitHub REST API.
3.  **Calculation**:
    -   `Velocity` = New stars in the last 30 days.
    -   `MomentumScore` = `(Stars * 0.4) + (Velocity * 0.6)`.
4.  **Sorting**: Order by `MomentumScore` descending.
5.  **Integration**: Pass this data into the Astro `BentoGrid` during build-time (SSG).
