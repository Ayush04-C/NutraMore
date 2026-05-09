// ── Part 1: User & UX Thinking ──────────────────────────────────────────────
export const part1Cards = [
  {
    icon: "👤",
    type: "orange",
    tag: null,
    title: "Who is this user?",
    body: `A 25–40 year old working professional — likely a software engineer, consultant, or office worker — who is actively trying to eat better. They track calories or macros (protein, carbs, fats), read labels before buying, and are skeptical of "health" claims that aren't backed by data. They browse online between meetings and make quick decisions on their phone.`,
  },
  {
    icon: "🎯",
    type: "orange",
    tag: null,
    title: "Their primary goal on the website",
    body: `They want to quickly validate that a product fits their nutritional targets. Before hitting "Add to Cart" they need to answer: How much protein is in one serving? What are the carbs? Is the calorie count worth it? They treat food as functional fuel — not just a treat.`,
  },
  {
    icon: "⚠️",
    type: "orange",
    tag: "friction",
    title: "The friction they face",
    body: `The current Product Detail Page does not display a Nutrition Facts panel. The description says "Rich in High Quality Protein" and "3g protein per serving" — buried in bullet points, with no structured table, no calorie count, and no daily value percentages. The "Additional Information" tab shows only the product weight (0.3 kg). For a science-backed health brand, this is a significant credibility gap.`,
  },
  {
    icon: "📈",
    type: "green",
    tag: "impact",
    title: "Why solving this matters for conversion",
    body: `Health-conscious buyers do not buy what they cannot verify. Without a clear nutrition label, Nutramore's biggest selling point — being science-backed — goes unproven at the most critical decision moment. The user simply moves on to a competitor whose website shows the numbers upfront. Adding a structured Nutrition Facts panel directly on the PDP eliminates this doubt, reduces "I'll think about it" abandonment, and signals that Nutramore has nothing to hide. Trust = conversion.`,
  },
];

// ── Part 2: Nutrition Data for the Redesigned PDP ───────────────────────────
export const nutritionFacts = {
  servingSize: "Per serving (30g)",
  servingsPerBox: "~10 servings / box",
  calories: 132,
  rows: [
    { name: "Total Fat",           amount: "5.4g",  dv: "7%",  pct: 42, green: false, bold: true,  indent: false },
    { name: "Saturated Fat",       amount: "2.1g",  dv: "11%", pct: 55, green: false, bold: false, indent: true  },
    { name: "Trans Fat",           amount: "0g",    dv: "—",   pct: 0,  green: true,  bold: false, indent: true  },
    { name: "Total Carbohydrates", amount: "19.8g", dv: "7%",  pct: 35, green: false, bold: true,  indent: false },
    { name: "Dietary Fiber",       amount: "1.8g",  dv: "6%",  pct: 30, green: true,  bold: false, indent: true  },
    { name: "Total Sugars",        amount: "4.2g",  dv: "—",   pct: 21, green: false, bold: false, indent: true  },
    { name: "⚡ Protein",          amount: "3g",    dv: "6%",  pct: 30, green: true,  bold: true,  indent: false, highlight: true },
    { name: "Calcium",             amount: "38mg",  dv: "3%",  pct: 15, green: true,  bold: true,  indent: false },
    { name: "Iron",                amount: "1.1mg", dv: "6%",  pct: 30, green: true,  bold: true,  indent: false },
  ],
};

export const trustPills = [
  "✅ Gluten-Free",
  "🌿 Zero Maida",
  "🍯 Jaggery Sweetened",
  "🔬 Nutritionist-Crafted",
];

export const guaranteeItems = [
  { icon: "🚚", label: "Free Delivery", sub: "above ₹499" },
  { icon: "↩️", label: "Easy Returns",  sub: "" },
  { icon: "🔒", label: "Secure Payment", sub: "" },
  { icon: "🌱", label: "100% Natural",  sub: "" },
];

export const ingredients = [
  "Jowar Flour", "Green Gram", "Fresh Butter", "Desiccated Coconut",
  "Jaggery", "Rice Flour", "Ragi", "Bajra", "Salt",
];

export const descriptionPoints = [
  { title: "Rich in Protein & Fibre", body: "3g protein per serving from Jowar & Green Gram (Moong), ensuring a complete amino acid profile." },
  { title: "Expertly Crafted",        body: "Developed by a nutritionist with 35+ years of experience for efficient nutrient absorption." },
  { title: "Gluten-Free & Clean",     body: "Made with Jowar, Moong, and fresh butter. Zero additives, zero Maida." },
  { title: "Naturally Sweetened",     body: "Only pure, chemical-free jaggery. No refined sugar." },
  { title: "Perfect Anytime Snack",   body: "Guilt-free for tiffin, mid-day breaks, or on-the-go snacking." },
];

// ── Part 2: Design Annotations ───────────────────────────────────────────────
export const annotations = [
  {
    num: "Change 01",
    title: "Nutrition Facts Panel — above the CTA",
    body: "Placed before 'Add to Cart' so the health-conscious user answers their key question (Is the protein/calorie balance worth it?) before being asked to buy. This reduces hesitation and abandonment.",
  },
  {
    num: "Change 02",
    title: "Visual progress bars per nutrient",
    body: "Each nutrient row includes a mini bar showing % Daily Value. A user skimming on mobile can instantly see 'protein is moderate, fat is low, zero trans fat' without reading numbers.",
  },
  {
    num: "Change 03",
    title: "Rounded corners & softer layout",
    body: "The current site uses sharp-edged components. Replaced with rounded cards (12px radius), which feel more approachable — especially important for a health & wellness brand.",
  },
  {
    num: "Change 04",
    title: "Trust pills above the price",
    body: "Gluten-Free, Zero Maida, Jaggery Sweetened — presented as scannable pills instead of buried bullets. Trust signals appear before the price.",
  },
  {
    num: "Change 05",
    title: "Rating + review count added",
    body: "Social proof near the top of the right panel. The current PDP has no visible star rating — a major trust builder that was missing for first-time visitors.",
  },
  {
    num: "Change 06",
    title: "Ingredient chips in Description tab",
    body: "Each ingredient is a visual chip instead of a plain text list. More premium feel and makes it easy to scan for allergens or preferred ingredients.",
  },
];

// ── Part 3: Conversion Thinking ──────────────────────────────────────────────
export const metrics = [
  {
    icon: "📊",
    label: "Primary Metric",
    value: "PDP → Cart Rate",
    desc: "% of users who view a product page and click 'Add to Cart'. Compare products with nutrition panel vs without.",
    primary: true,
  },
  {
    icon: "⏱️",
    label: "Supporting Signal",
    value: "Time on PDP",
    desc: "If users spend longer on pages with nutrition info, they are engaging — not bouncing from confusion.",
    primary: false,
  },
  {
    icon: "🔁",
    label: "Long-term Signal",
    value: "Repeat Purchase Rate",
    desc: "Users who bought based on accurate nutritional info are more likely to return when results match expectations.",
    primary: false,
  },
];

export const roadmap = [
  {
    week: "Week 1 · Priority 1",
    title: "Fix the search functionality",
    body: "When a user searches 'Bajra', results show unrelated products. The keyword matching logic needs improvement — ideally with tag-based filtering, not just title matching. A broken search kills discovery and trust.",
  },
  {
    week: "Week 1 · Priority 2",
    title: "Round edges across all components",
    body: "The entire site uses sharp-edged cards, buttons, and input fields. Updating border-radius globally (8–12px) would modernise the look — a one-line CSS change with high visual impact.",
  },
  {
    week: "Week 2 · Priority 3",
    title: "Page speed & lazy loading",
    body: "The website loads slowly — blog posts and product images take too long. Implement image lazy loading, serve WebP format images, and use CDN caching for repeat visitors.",
  },
  {
    week: "Week 2 · Priority 4",
    title: "Personalised product recommendations",
    body: "Use browser localStorage to track viewed products and display 'You might also like' based on previous visits. A basic version requires only frontend session tracking — no backend needed.",
  },
];

// ── Bonus ─────────────────────────────────────────────────────────────────────
export const bonusPageSpeed = [
  { title: "Cache-first strategy", body: "Service Worker to serve cached HTML + CSS on repeat visits. The first load fetches from server; subsequent visits load from cache and update silently." },
  { title: "Image optimisation", body: "Convert all product images to WebP with lazy loading (loading='lazy'). Alone this can cut page weight by 30–50%." },
  { title: "Preload hero assets", body: "Add <link rel='preload'> for main product image and fonts. Users perceive the page as faster when the hero loads first." },
  { title: "Reduce unused JavaScript", body: "Use code-splitting to defer non-critical JS until after the page renders. The current site may load all scripts upfront." },
  { title: "CDN for static assets", body: "Serve product images and CSS from a CDN (Cloudflare, Bunny.net) so assets load from a server geographically close to the user." },
];

export const bonusMobileUX = [
  { title: "Sticky 'Add to Cart' bar", body: "On mobile, the CTA gets pushed down by the nutrition panel. Add a sticky bottom bar with price and 'Add to Cart' that follows as users scroll." },
  { title: "Collapsible nutrition panel", body: "On small screens, the nutrition table is tall. Make it collapsible — show Calories + Protein upfront with a 'Show full nutrition info ↓' toggle." },
  { title: "Redesign footer for mobile", body: "Current footer stacks all columns requiring lots of scrolling. Collapse each section (Contact, Quick Links) into an accordion on mobile." },
  { title: "Hamburger nav", body: "The nav bar has 5+ links that are invisible on mobile. Replace with a proper slide-in hamburger menu with touch-friendly tap targets (min 44px height)." },
  { title: "Card grid for product listings", body: "Product cards should be a 2-column grid on mobile with rounded corners and properly truncated names — currently some names overflow their cards." },
];
