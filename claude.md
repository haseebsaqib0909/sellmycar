# Project Overview

Build a modern, SEO-optimised car buying website for the UK market. The site lets a customer enter their registration plate and details, pulls their vehicle data from the DVLA, and sends the full enquiry to the client by email.

The site buys cars from UK sellers. A visitor enters their reg plate, sees their vehicle confirmed, submits their contact details, and that enquiry lands in the client's inbox. The site must be fast, look trustworthy, work perfectly on mobile, and be fully set up for Google to find and rank it.

Each feature does one thing, the code is easy to follow, and the site is easy to run locally and deploy.

---

# Goal

Generate leads. The site captures car sellers and passes their details to the client. The valuation and offer are handled by a human afterwards — the site's job is to capture the lead, not to price the car.

---

# Design

Build a premium, modern, sleek interface with a car-focused feel — clean, confident, professional. Use subtle animations, proper spacing, and clear visual hierarchy. The design must build instant trust, because visitors compare against competitors in seconds.

- No emoji icons
- No generic gradients
- Mobile-first — most visitors are on a phone
- The registration plate input should look like a real UK number plate (yellow, GB badge)
- Plenty of high-quality car photography

---

# Design Reference — Motorway.co.uk

Motorway.co.uk is the benchmark for layout and structure. Build the site to a similar standard. Study their structure and follow this pattern.

**Homepage section order (top to bottom):**

1. **Slim header** — logo left, minimal nav (How It Works, Help, Tools dropdown, More dropdown), contact link right. Clean and uncluttered.
2. **Hero section** — large bold headline focused on the customer benefit (e.g. "Sell your car for more"), a short supporting line with a concrete benefit, the reg plate input front and centre with a single clear call-to-action button, a review count for trust, and a high-quality car image.
3. **How it works** — three simple steps with images: get a valuation, choose the offer, get paid. Each step is one short sentence.
4. **Customer stories** — real testimonials with names, photos and what they sold. Builds trust.
5. **Social proof band** — a strong number (e.g. "Over X people have used..."), then a live-feel grid of recently sold vehicles with prices.
6. **Closing call-to-action** — one more reg plate input or button before the footer.
7. **Footer** — full navigation, tools, legal links, social icons.

**Design principles taken from Motorway:**

- The reg plate input is the single most important element on the page — it appears in the hero and again lower down
- One primary action per screen — do not give the visitor competing choices
- Trust signals everywhere — review counts, real names, real photos, real sold prices
- Generous white space, large readable type, calm and confident — not cluttered or loud
- The mobile layout is just as polished as desktop — Motorway is mobile-first and so are we

**Useful tool pages Motorway has that can be added later** (not required at launch, but good for organic traffic): MOT checker, tax checker, car value tracker, ULEZ checker. These are simple lookup tools that bring in search traffic. Treat them as a phase-two opportunity.

Do NOT copy Motorway's content, images, or branding directly. Match the structure and quality, not the exact text or assets.

---

# How to Respond

Always explain like you're talking to a 15 year old with no coding background. The person running this project is a developer but wants clear, simple direction.

For every response, include:

- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it

When a task involves external tools (Vercel, DVLA API portal, DNS settings, localhost:3000, etc.):

- Walk through exactly where to find what they need (e.g. "go to your dashboard → Settings → API")
- Describe what each key or setting does in one plain sentence
- If there's a config or folder to create manually, explain what it is and why it exists
- Be as concise as possible. Do not ramble. Less is more

---

# Development Rules

**Rule 1: Always read first** — before any action, read `CLAUDE.md` and the relevant files in the codebase.

**Rule 2: Define before you build** — no code before the spec is clear. If unsure what's being asked, ask first.

**Rule 3: Look before you create** — check existing files before creating new ones. Don't duplicate what already exists.

**Rule 4: Test before you respond** — run `npm run build` and verify in the browser before saying "done".

**Rule 5: Build reusable** — keep the reg lookup, header, footer and enquiry form as clean reusable components. The same core may be reused for other sites later.

**Core Rule** — do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.

---

# Tech Stack

- **Language:** TypeScript
- **Framework:** Next.js 14+ (App Router) — must be Next.js, not a static HTML site
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

Add a database, auth provider, payment processor, or any other third-party service ONLY when the project actually needs it. Do not pre-install integrations that aren't required. This site does not need user accounts or a database to start — enquiries go out by email.

---

# Rendering Strategy

This matters for SEO and speed. Follow this exactly.

**Default to static (SSG).** Every content page is the same for every visitor, so it should be statically generated at build time. This is the fastest option and the best for SEO.

| Page type | Rendering |
|-----------|-----------|
| Homepage, About, FAQ, How It Works | Static (SSG) |
| Location pages, car make/model pages | Static (SSG) |
| Blog posts | Static (SSG), or ISR if updated often |
| Reg lookup feature | Static page + API Route for the lookup |
| Contact / enquiry form | Static page + API Route for submission |

**Do not use full SSR.** None of the content is personalised, so SSR would only make the site slower and more expensive with no benefit. Static-first is the correct choice.

The reg lookup is an interaction, not a page load — the page stays static, and the lookup runs through an API route when the customer clicks the button.

---

# DVLA Reg Plate API

The core feature. The customer enters a reg plate and gets their vehicle details instantly.

**API:** DVLA Vehicle Enquiry Service (VES) — free UK government API.

**Endpoint:** `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`

**How it works:**

- It is a POST request with the registration number in the body: `{ "registrationNumber": "AB12CDE" }`
- Authentication is a single header: `x-api-key: YOUR_KEY`
- It returns make, colour, fuel type, year, engine size, MOT status, tax status and more

**Important rules:**

- An API key must be applied for at `https://register-for-ves.driver-vehicle-licensing.api.gov.uk` — it takes 1 to 2 working days
- There is a test environment at `https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles` with test reg plates — use this while building before the live key arrives
- The API key is SECRET. It must NEVER appear in browser-side code

**How to implement it:**

- Create a Next.js API Route (`/app/api/vehicle/route.ts`)
- The browser sends the reg plate to this route
- The route adds the `x-api-key` header server-side and calls the DVLA API
- The route returns the vehicle data to the browser
- The API key lives only in `.env.local` — never in the front-end
- Add caching so the same reg plate looked up twice does not waste an API call (DVLA has rate limits — a 429 error means too many requests)

---

# Enquiry Flow

This is how a lead is captured. Build it exactly like this.

1. Customer enters their reg plate on the homepage
2. The reg lookup API route returns the vehicle details from DVLA
3. The vehicle details are displayed on screen so the customer can confirm them
4. The customer enters their mileage and contact details (name, phone, email)
5. On submit, an API route packages the vehicle data plus the customer details
6. That enquiry is sent as a formatted email to the client
7. A confirmation email is also sent to the customer so they know it worked

The valuation itself is NOT automated. The client reviews the enquiry and contacts the customer with an offer.

---

# SEO — Build This Into Every Page

On-page SEO is part of the code, not an afterthought. Every page must have it. Cover every aspect below.

## On-Page SEO

Every page needs:

- A unique, keyword-targeted `<title>` (50–60 characters)
- A unique meta description (140–160 characters)
- A canonical tag
- A proper heading structure — one H1, multiple H2s, H3s where needed
- At least 800 words of original content (homepage and location pages: 1,200–1,500)
- Keyword used naturally in the title, first paragraph, at least one H2, and the meta description — never stuffed
- Internal links connecting related pages so Google can crawl the whole site
- All images using the Next.js `<Image>` component with descriptive, keyword-aware alt text
- Readable, clean URLs that match the page topic (`/sell-my-bmw`, not `/page?id=12`)

## Technical SEO

- `sitemap.xml` generated automatically and submitted to Google Search Console
- `robots.txt` in place and correctly configured
- `llms.txt` in the public folder so AI search engines can understand the site
- `lang` attribute set in the root layout
- Mobile viewport set in the root layout
- HTTPS enforced (handled by Vercel)
- Fast load times — target Largest Contentful Paint under 2.5 seconds on mobile
- Pass Google Core Web Vitals — LCP, CLS and INP all in the green
- Images compressed and served in modern formats automatically via the Next.js Image component
- No JavaScript errors on load
- No broken links or redirect chains
- A custom 404 page

## Schema Markup (JSON-LD)

Add structured data to the relevant pages:

- `LocalBusiness` — name, phone, address, opening hours, service area
- `Organization` — full brand identity, logo, social profiles
- `FAQPage` — on every FAQ section
- `WebSite` — site-level, with a search action if relevant
- `BreadcrumbList` — on deeper pages so Google shows breadcrumb navigation
- `Vehicle` or `Product` — on make/model pages where relevant

## Local SEO

- A Google Business Profile is created and verified for the brand (done outside the code)
- `LocalBusiness` schema matches the Google Business Profile details exactly
- Location pages target specific UK cities
- Name, address and phone number are consistent everywhere they appear

## Social and Sharing

- Open Graph tags on every page (title, description, image, URL) so it previews correctly when shared on Facebook, WhatsApp and LinkedIn
- Twitter Card tags on every page
- A default share image set, plus page-specific ones where it adds value
- Links to the brand's social profiles in the footer and in the Organization schema

## Off-Page SEO

Backlinks, directory listings and the Google Business Profile are NOT part of the code — they happen on other websites and are handled manually after launch. The code only covers on-page, technical, schema and social SEO. Off-page work (directories, automotive forums, outreach, press) is a separate gradual effort once the site is live.

---

# Page Structure

The site gets these pages as a minimum. Each page has its own SEO setup and original content.

- **Homepage** — hero with reg lookup, how it works, customer stories, social proof, closing call-to-action
- **How It Works** — the selling process explained step by step
- **Sell My Car** — full detail on the process, what cars are bought, condition guide
- **Car make pages** — individual pages for the most-searched makes (e.g. sell my BMW, sell my Audi, sell my Ford, sell my Vauxhall, sell my Mercedes, sell my Volkswagen, sell my Nissan, sell my Toyota)
- **Location pages** — individual pages for the top UK cities (e.g. sell my car London, Manchester, Birmingham, Leeds, Glasgow)
- **FAQ** — common questions with FAQPage schema
- **About** — trust and credibility
- **Contact** — enquiry form, no plain-text email address
- **Privacy Policy** and **Terms**
- **Blog** — 5 to 8 articles at launch (see Blog section)

---

# Keywords

More organic keywords will be added later as keyword research is done. For now, use the precise, specific keywords below. Each is tied to a clear search intent so it maps directly to a page.

Target three levels of intent. High intent converts fastest. Long-tail is easiest to rank for and the searcher is highly motivated.

**High intent — ready to sell now:**

- sell my car
- sell my car fast
- sell my car for cash
- sell my car online
- we buy any car
- car buyers UK
- sell my car today
- sell car for cash near me
- instant car valuation

**Medium intent — thinking about selling:**

- how much is my car worth
- car valuation
- value my car free
- what is my car worth UK
- free car valuation online
- check my car value

**Long-tail and specific — easy to rank, highly motivated searchers:**

- sell my car with high mileage
- sell my car without MOT
- sell my non runner car
- sell my damaged car
- sell my car same day payment
- sell my car free collection
- sell my car with outstanding finance
- sell my scrap car
- sell my car [city] — e.g. sell my car London, sell my car Manchester
- sell my [make] — e.g. sell my BMW, sell my Audi, sell my Ford
- sell my [make] [model] — e.g. sell my Ford Fiesta, sell my BMW 3 Series

**Keyword mapping rule:**

- Homepage targets the main high-intent term
- The Sell My Car page targets the broad selling terms
- Location pages target "sell my car [city]"
- Make pages target "sell my [make]"
- Blog posts target the medium-intent and question-style searches

---

# Blog

The blog is required — it captures people who are thinking about selling but not yet searching the direct terms.

- Write 5 to 8 strong posts at launch, not dozens of weak ones
- Each post targets a real search term and has the reg lookup tool embedded in it
- Example topics: "How much is my car worth in 2025", "Sell my car or trade it in — which is better", "What documents do I need to sell my car", "How to sell a car with outstanding finance", "Sell my car privately or to a dealer"

---

# Running the Project

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in the DVLA API key and email settings
3. `npm run dev` — opens on `http://localhost:3000`
4. To ship: `npm run build`

---

# File Structure

- `/app` — pages users see, and API routes under `/app/api`
- `/components` — reusable UI building blocks (reg lookup, header, footer, enquiry form)
- `/lib` — shared helper code (DVLA call, email sending, SEO helpers)
- `/public` — images, favicon, `robots.txt`, `llms.txt`
- `.env.local` — secret keys (DVLA API key, email credentials) — never commit to GitHub
- `CLAUDE.md` — these instructions

**Organisation rules:**

- One component per file
- Co-locate page-specific components with the page they belong to
- Don't create new top-level folders without asking first

---

# How to Write Code

- Write simple, readable code — clarity beats cleverness
- Make one change at a time
- Don't touch code unrelated to the current task
- Don't over-engineer — build exactly what's needed, nothing more
- Add a `console.log` at the start and end of each API route so the flow is easy to follow

If a large structural change is needed, explain why before making it.

---

# Secrets & Safety

- Never put API keys or passwords directly in the code
- The DVLA API key and email credentials live only in `.env.local`
- Never commit `.env.local` to GitHub
- The DVLA key must never appear in browser-side code — it stays in API routes only
- Ask before deleting or renaming any important files

---

# Testing

Before marking any task as done:

- Run `npm run build` and fix any TypeScript or build errors
- Start the dev server with `npm run dev` and check the browser console for errors
- Manually verify the feature works end-to-end in the browser
- Check that existing features weren't broken by the change

When building a new page or feature:

- Test the happy path (everything works as expected)
- Test the error path (what happens when something goes wrong)

For the reg lookup specifically:

- Test with a valid reg plate — vehicle details should appear
- Test with an invalid reg plate — a clear error message should show, not a crash
- Test with the DVLA test environment plates before going live

Never say "done" if:

- The build is failing
- There are console errors
- The feature hasn't been tested in the browser

---

# Scope

Only build what is requested. If anything is unclear, ask before starting.

The build order is: build the site in Next.js, integrate the DVLA reg lookup, deploy to Vercel, then ads go live, then SEO is gradually strengthened through backlinks and off-page work. Stick to this order.