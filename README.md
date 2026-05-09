# Nutramore Health Foods — Digital Product & UX Intern Assignment

A fully structured React application presenting my UX audit and redesign for Nutramore's Product Detail Page.

---

## Folder Structure

```
nutramore-assignment/
├── public/
│   └── index.html              ← HTML shell (fonts loaded here)
│
├── src/
│   ├── index.js                ← React entry point
│   ├── App.jsx                 ← Root component — wires all sections together
│   │
│   ├── styles/
│   │   └── global.css          ← CSS variables (colours, fonts, radius tokens)
│   │
│   ├── data/
│   │   └── assignmentData.js   ← ALL content/data (Part 1–3 + Bonus answers)
│   │
│   └── components/
│       ├── ui/                 ← Reusable, stateless UI primitives
│       │   ├── UIComponents.jsx    ← Section, Card, PartLabel, BonusCard, etc.
│       │   └── NutritionPanel.jsx  ← The redesigned Nutrition Facts component
│       │
│       └── sections/           ← One file per page section
│           ├── Cover.jsx       ← Hero / title slide
│           ├── Part1.jsx       ← User & UX Thinking
│           ├── Part2.jsx       ← Redesigned PDP mockup + annotations
│           ├── Part3.jsx       ← Product & Conversion Thinking
│           ├── Bonus.jsx       ← Speed + Mobile UX suggestions
│           └── Footer.jsx      ← Closing footer
│
└── package.json
```

---

##  How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start

# 3. Open in browser
# http://localhost:3000
```

---

##  What's Inside

| Section | What it covers |
|---------|---------------|
| **Part 1** | User profile, primary goal, critical friction (missing nutrition data), conversion impact |
| **Part 2** | Full high-fidelity Product Detail Page redesign with interactive Nutrition Facts panel, rounded components, trust pills, star ratings, tabs, and 6 annotated design decisions |
| **Part 3** | Trust analysis, A/B test metric (PDP → Cart rate), and a prioritised 2-week roadmap |
| **Bonus** | 5 page speed improvements + 5 mobile UX improvements |

---

##  Core Design Decision

The current Nutramore PDP **does not show a Nutrition Facts panel**. For a health-conscious working professional who tracks macros, this is the single biggest friction point before purchase. The redesign places a structured, visual Nutrition Facts table (with per-nutrient progress bars) **above the Add to Cart button** — because the user needs this information to decide, not after they've already committed.

---

*Designed with user empathy, product thinking, and conversion mindset.*
