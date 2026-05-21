export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-is-my-car-worth",
    title: "How much is my car worth in 2026?",
    excerpt:
      "A plain-English guide to how UK car valuations actually work — what affects price, why dealers and online buyers differ, and how to read a market estimate.",
    metaDescription:
      "How much is your car worth in 2026? A plain-English guide to UK car valuations, the factors that affect price, and how to get an accurate number.",
    date: "January 2026",
    readTime: "6 min read",
    category: "Valuation",
    author: "The SellMyCar team",
    sections: [
      {
        paragraphs: [
          "If you've ever Googled \"how much is my car worth\", you'll have noticed the answers vary wildly. WeBuyAnyCar might quote you £8,400, your local dealer £7,200 as part-exchange, AutoTrader's calculator £10,800 and a Facebook Marketplace listing £11,500. They're all looking at the same car. So which one is right?",
          "The honest answer is: all of them, and none of them. Each is calculated for a different purpose, and understanding what's actually driving the number is the only way to know what your car is genuinely worth right now.",
        ],
      },
      {
        heading: "What actually determines a car's value",
        paragraphs: [
          "There are around fifteen factors that move the needle on any UK valuation, but the four that matter most are mileage, age, condition and demand.",
          "Mileage and age work in tandem — a five-year-old car with 30,000 miles will outvalue a five-year-old car with 90,000 miles by 15–25%. Condition is the most subjective: a service history, two sets of keys, no warning lights and clean bodywork can add £500–£1,500 to most family cars.",
        ],
        list: [
          "Mileage — every 10,000 over the UK average (~7,400/year) knocks off ~£300",
          "Age — depreciation is steepest in years 1–3, then flattens",
          "Condition — service history, MOT, paint, interior, tyres",
          "Demand — fuel type, transmission, current market appetite",
        ],
      },
      {
        heading: "Why valuations from different places vary so much",
        paragraphs: [
          "A dealer's part-exchange offer is the lowest you'll typically see, because they're not just buying the car — they're buying it, prepping it, warranting it, advertising it and waiting for it to sell. They need to make a margin on top of all that.",
          "Online buyers like ourselves sit between trade and retail. We have lower overheads than a dealer (no showroom, no warranty obligations), so we can pay more for the car. But we don't pay retail, because we're not the end consumer.",
          "AutoTrader's online estimator gives you a retail asking price — what you might list the car for privately. The actual sale price is usually 5–10% lower, and you'll wait weeks (or months) to find a private buyer.",
        ],
      },
      {
        heading: "What 2026 looks like for used car values",
        paragraphs: [
          "The used market has settled after the chaos of 2021–2023. Prices for most petrol and diesel cars are roughly back to pre-pandemic levels, adjusted for inflation. Hybrids continue to hold value well, especially Toyota and Lexus.",
          "Used EVs have softened considerably since 2024 — battery degradation concerns and new-car subsidies have pushed three-year-old electric prices down 30–40% from their 2023 peak.",
          "Diesels are a mixed bag. Newer Euro 6 models still command strong prices outside the major cities, but anything ULEZ or CAZ non-compliant has dropped sharply.",
        ],
      },
      {
        heading: "How to get an accurate number for your car",
        paragraphs: [
          "The fastest way is to enter your reg plate on our homepage. We pull your vehicle details from the DVLA in seconds, and one of our buyers reviews the information and calls you back with a firm offer — usually within the hour during business hours.",
          "That offer is what we'll pay, not a starting point for negotiation. Free collection from anywhere in mainland UK is included, and payment lands in your bank the same day we collect.",
        ],
      },
    ],
  },
  {
    slug: "sell-or-trade-in",
    title: "Sell my car or trade it in — which is better?",
    excerpt:
      "Trade-in is fast but usually costs you money. We break down when part-exchange is the right call and when a private sale or buying service wins.",
    metaDescription:
      "Sell your car privately, trade it in, or use an online buyer? An honest comparison of all three routes — what you'll get paid, how long, what the catch is.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Selling tips",
    author: "The SellMyCar team",
    sections: [
      {
        paragraphs: [
          "Standing in a dealer showroom signing a deal for your next car, the question always comes up: do you want to trade in your old one? It's tempting — one signature and the old car becomes their problem. But that convenience usually costs you £1,000 or more.",
          "Here's when trade-in actually makes sense, and when you're better off selling separately.",
        ],
      },
      {
        heading: "When trade-in IS the right call",
        paragraphs: [
          "Trade-in is the right move when the convenience genuinely outweighs the cost — and there are a few situations where it does.",
        ],
        list: [
          "You're rolling negative equity from finance into a new deal and the dealer is settling the old finance directly",
          "Your car is older than ten years, mid-mileage, and a private sale would attract time wasters more than serious buyers",
          "You need a same-day handover and don't have time to wait for a sale to complete",
          "The dealer is offering a meaningful overallowance to win the new car sale",
        ],
      },
      {
        heading: "When trade-in is costing you money",
        paragraphs: [
          "Most of the time, the trade-in number a dealer quotes is roughly the trade value — what they'd pay an auction for an equivalent car. That's because the dealer isn't really buying your car for retail; they're buying it to flip.",
          "For the average UK family car (2–6 years old, average mileage, decent condition), the gap between dealer trade-in and what an online buyer like us will pay is typically £800–£2,000. On a £15,000 car, that's a 6–13% premium for the extra hour of admin.",
        ],
      },
      {
        heading: "Private sale: the highest price, the biggest hassle",
        paragraphs: [
          "If you've got the patience, listing privately on AutoTrader or Facebook Marketplace will usually get you 5–10% more than even an online buying service.",
          "The catch is the hassle. Tyre kickers. Test drives with strangers. Negotiation by text message at 11pm. Bounced bank transfers. The risk of an honest seller's mistake on the V5C that costs you a parking ticket six months later.",
          "If your time is worth £50 an hour and a private sale takes you eight hours of effort, you've spent £400 to gain maybe £600. The maths get worse if the car is hard to sell.",
        ],
      },
      {
        heading: "Online buying services: the middle ground",
        paragraphs: [
          "Online buying services exist for exactly this trade-off. You get more than trade-in, less than retail, with none of the hassle of a private sale. Collection is free, payment is same-day, and the price quoted is the price paid.",
          "We'd argue this is the right choice for most sellers most of the time. Use our reg lookup on the homepage to see what we'd pay for yours.",
        ],
      },
    ],
  },
  {
    slug: "documents-to-sell-a-car",
    title: "What documents do I need to sell my car?",
    excerpt:
      "V5C, service history, ID, finance settlement letters — exactly which papers you need, and what to do if any are missing.",
    metaDescription:
      "Selling your car? Here are the exact documents you need to have ready — V5C, service history, ID, and what to do if anything is missing.",
    date: "January 2026",
    readTime: "4 min read",
    category: "Paperwork",
    author: "The SellMyCar team",
    sections: [
      {
        paragraphs: [
          "Selling a car in the UK doesn't require much paperwork, but the few documents that matter REALLY matter. Get them ready before the sale and the whole process takes minutes. Forget one and you'll be delaying things by days or weeks.",
          "Here's the complete checklist.",
        ],
      },
      {
        heading: "The must-haves",
        list: [
          "V5C (logbook) — registered in your name, undamaged, with the green slip intact",
          "Photo ID — UK driving licence or passport, in date",
          "Both sets of keys (or all sets — many cars now come with three)",
          "Proof of address — utility bill or bank statement from the last 3 months",
        ],
      },
      {
        heading: "The nice-to-haves (they add value)",
        list: [
          "Full service history — main dealer is best, but any documented history helps",
          "MOT certificates and recent receipts",
          "Owner's handbook and locking wheel nut key",
          "Spare wheel kit, tyre repair kit, and any original accessories",
        ],
      },
      {
        heading: "What to do if your V5C is missing",
        paragraphs: [
          "Apply for a replacement from the DVLA right away. It costs £25 and takes around 5 working days to arrive. You can apply online at gov.uk/vehicle-log-book if your name and address haven't changed since your last log book was issued.",
          "Don't try to sell the car without it. No reputable buyer will complete the purchase, and any cash deal you do without one is almost certainly going to cause you problems with the DVLA later.",
        ],
      },
      {
        heading: "If your car is on finance",
        paragraphs: [
          "Get a settlement letter from your finance company first. It states how much you'd need to pay to own the car outright today. Most lenders will email it the same day.",
          "If you're selling to us, you don't need to settle the finance yourself — we'll pay your lender directly and give you any difference (the equity) on the same day we collect. You just need that settlement letter so we know the figure.",
        ],
      },
      {
        heading: "Anti-money-laundering checks",
        paragraphs: [
          "All UK car buyers (us included) have to verify your identity before paying out anything over a few thousand pounds. We do this on the day of collection — a quick photo of your ID against the V5C is all that's needed.",
          "Once that's done, payment goes by Faster Payments bank transfer and usually clears in your account within minutes.",
        ],
      },
    ],
  },
  {
    slug: "selling-with-outstanding-finance",
    title: "How to sell a car with outstanding finance",
    excerpt:
      "PCP, HP, lease — what the rules are, how to settle early, and how a buying service can handle the lender call for you.",
    metaDescription:
      "How to sell a car with outstanding finance in the UK — PCP, HP and lease explained, settlement figures, and how to sell without paying off first.",
    date: "January 2026",
    readTime: "7 min read",
    category: "Finance",
    author: "The SellMyCar team",
    sections: [
      {
        paragraphs: [
          "Roughly nine out of ten new cars in the UK are bought on finance, and a sizeable chunk of used ones too. So if you're looking to sell a car that still has finance on it — you're far from alone.",
          "The good news: it's straightforward. The bad news: you can't just hand the keys over and walk away. Here's exactly how it works.",
        ],
      },
      {
        heading: "Step 1 — Get a settlement figure",
        paragraphs: [
          "Call your finance company (or check their app) and ask for a current settlement figure. This is the amount you'd need to pay TODAY to clear the agreement and own the car outright.",
          "The settlement figure is usually less than \"total amount remaining\" because it has interest rebated. It's valid for 7–28 days depending on the lender.",
        ],
      },
      {
        heading: "Step 2 — Find out what the car is actually worth",
        paragraphs: [
          "Compare the settlement figure to the current market value. There are three possibilities:",
        ],
        list: [
          "Car is worth MORE than settlement — you have positive equity. The difference is yours after sale",
          "Car is worth THE SAME as settlement — you'll break even, the car goes for what you owe",
          "Car is worth LESS than settlement — you have negative equity. You'll need to pay the difference to clear it",
        ],
      },
      {
        heading: "Step 3 — Sell it",
        paragraphs: [
          "If you're selling to a private buyer, you'll typically need to settle the finance yourself first (with your own funds or a personal loan), then sell the car free and clear. This is risky if you don't have spare cash — most lenders won't release the V5C until the finance is cleared.",
          "If you're selling to a buying service (us included), the process is much simpler. We pay your lender directly for the settlement amount, and pay you any equity on the same day we collect. There's nothing for you to fund upfront.",
          "We do this several times a day, with every UK lender — Black Horse, Volkswagen Financial, Mercedes-Benz Financial, Santander Consumer, MotoNovo, Close Brothers and all the others.",
        ],
      },
      {
        heading: "What about PCP, HP and lease?",
        paragraphs: [
          "PCP and HP both work the way described above — there's a settlement figure, and once it's paid the car is yours (or, in your case, ours).",
          "Lease is different — you don't own the car at any point, so you can't sell it. You'd need to early-terminate the lease (often expensive) or transfer it to another driver through your lease company's transfer scheme.",
        ],
      },
      {
        heading: "Common pitfalls",
        list: [
          "Don't lie about whether the car is on finance — every buyer runs an HPI check and will spot it instantly",
          "Don't accept payment direct to your account from a private buyer thinking you'll settle later — the V5C is held by the lender until cleared",
          "Don't sell privately for less than the settlement figure unless you have funds to top up — you'll get caught short",
          "Do get a fresh settlement figure on the day of sale — it changes daily as interest accrues",
        ],
      },
    ],
  },
  {
    slug: "private-vs-dealer-vs-buying-service",
    title: "Sell my car privately, to a dealer, or to a buying service?",
    excerpt:
      "An honest comparison of the three routes — what you'll get paid, how long it'll take, and which way carries the most risk.",
    metaDescription:
      "Should you sell your car privately, trade in to a dealer, or use an online buying service? Honest comparison of price, speed, hassle and risk.",
    date: "January 2026",
    readTime: "8 min read",
    category: "Selling tips",
    author: "The SellMyCar team",
    sections: [
      {
        paragraphs: [
          "There are three main ways to sell a car in the UK: privately (AutoTrader, Facebook Marketplace, Gumtree), to a dealer (as part-exchange or outright purchase), or to an online buying service like ourselves.",
          "Each has trade-offs. Here's an honest comparison so you can pick the right one for your situation.",
        ],
      },
      {
        heading: "Private sale",
        paragraphs: [
          "Highest potential price. Typically 5–10% more than an online buying service, and 15–25% more than a dealer part-exchange.",
          "But: the most time, the most hassle, and the most risk. You'll deal with tyre kickers, time wasters, lowball offers and the occasional scammer. You'll need to handle the V5C transfer, the money handover (don't accept cheques, and verify bank transfers fully cleared before handing over keys), and the post-sale admin if the new owner doesn't notify the DVLA.",
          "Time investment: 5–30 hours over 1–8 weeks, depending on the car.",
        ],
      },
      {
        heading: "Dealer part-exchange",
        paragraphs: [
          "Fastest in terms of handover — you drive away in the new car the same day. Lowest price you'll typically see.",
          "The dealer is buying your car to flip it, so they need to leave room for prep, warranty, advertising and profit. That margin comes out of what they pay you.",
          "Time investment: minimal — the dealer handles everything as part of the new-car deal.",
          "Best for: drivers buying a new car the same day, drivers with awkward-to-sell cars, drivers rolling negative equity from finance.",
        ],
      },
      {
        heading: "Online buying service",
        paragraphs: [
          "Sits between the two. You get more than dealer part-exchange (typically £500–£2,000 more), less than a successful private sale.",
          "But the hassle and risk are dramatically lower. No strangers in your driveway. No bounced payments. Free collection. Same-day bank transfer. Usually done from valuation to bank transfer in under 48 hours.",
          "Time investment: 30 minutes total — typing the reg, taking the call, being home for collection.",
        ],
      },
      {
        heading: "Which one should you pick?",
        paragraphs: [
          "If your car is desirable and you have weeks to spare and you're confident handling buyers — sell privately and get the most money.",
          "If you're buying a new car and want one signature to handle both transactions — trade it in and accept the price difference as the cost of convenience.",
          "If you want the best balance of price, speed and hassle — use an online buying service.",
          "Most drivers, most of the time, are best served by option three. That's why services like ours exist.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
