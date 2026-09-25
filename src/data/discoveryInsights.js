// ============================================================
// DISCOVERY ASSESSMENT — INSIGHTS LIBRARY
// ============================================================
// For each block × tier, an insight paragraph is defined.
// The insight shown on the result screen = the block the user
// scored LOWEST on, rendered for the tier of their answer.
// ============================================================

export const discoveryInsights = {
  // ============================================================
  // BLOCK 1 — ACCESS TO SUPPORT
  // ============================================================
  "access-to-support": {
    reactive: {
      title: "Entrepreneurs can't find what already exists.",
      body: "You rely on general public announcements to inform entrepreneurs about funding programs. The reality is that information alone doesn't produce applications — especially for entrepreneurs who have less time, smaller networks, or less experience navigating public systems. Programs that should reach hundreds often reach dozens.",
      leadingPractice:
        "Leading communities assign a single point of contact for every funding opportunity, proactively reach eligible entrepreneurs, and offer hands-on application support. This simple change commonly doubles the number of qualified applicants.",
    },
    emerging: {
      title: "Information is out there, but support isn't.",
      body: "You distribute information about grant programs, but entrepreneurs often struggle with the application process itself and don't know where to turn for help. The result is that programs with good intent produce fewer awards than they could — not because the entrepreneurs aren't qualified, but because the guidance isn't easy to find.",
      leadingPractice:
        "Leading communities embed application support into the outreach — pairing announcements with open office hours, one-on-one navigation, and checklist-based guidance. This converts awareness into completed applications.",
    },
    developing: {
      title: "You guide entrepreneurs — now formalize the follow-through.",
      body: "You actively share information and provide basic guidance to entrepreneurs seeking funding. The opportunity now is consistency: follow-up isn't formalized, so the quality of support depends on who happens to answer the phone. Formalizing the process ensures every entrepreneur receives the same level of help.",
      leadingPractice:
        "Leading communities create a documented referral and follow-up workflow — with named owners, response-time targets, and tracked outcomes — so no entrepreneur falls through the cracks.",
    },
    leading: {
      title: "You've built a real support pipeline.",
      body: "Entrepreneurs in your community receive clear information about funding programs and dedicated, consistent support through the application process. This is exactly what separates communities that award grants from those that award them equitably and at scale.",
      leadingPractice:
        "Keep it strong by publishing application outcomes, tracking conversion by demographic, and refining outreach where participation lags. Leading communities revisit this every cycle.",
    },
  },

  // ============================================================
  // BLOCK 2 — SCALING SUPPORT
  // ============================================================
  "scaling-support": {
    reactive: {
      title: "Your ecosystem stops at the starting line.",
      body: "Your local support is strong for start-ups but largely absent for businesses ready to scale. This is one of the most common gaps in emerging ecosystems — and one of the most costly. Businesses that could add significant jobs and revenue leave for communities that have later-stage support.",
      leadingPractice:
        "Leading communities build dedicated scaling pathways — growth-stage accelerators, access to growth capital, and CEO-level mentorship specifically for minority and women entrepreneurs. These pathways keep high-potential businesses local.",
    },
    emerging: {
      title: "Generic scaling programs miss the point.",
      body: "You have scaling programs, but they're not tailored to the specific barriers minority and women entrepreneurs face at the growth stage — access to growth capital, larger contract opportunities, and networks that open doors. Generic programs help everyone a little; specialized programs move the businesses that need it most.",
      leadingPractice:
        "Leading communities design growth-stage tracks that address capital access, procurement readiness, and executive networks specifically for minority and women entrepreneurs. Programs are co-designed with the entrepreneurs they serve.",
    },
    developing: {
      title: "Good programs — but entrepreneurs can't navigate them.",
      body: "You offer several growth-focused programs, but entrepreneurs report difficulty finding the right one at the right time, or connecting with the specific expertise they need. The programs exist; the connection doesn't. This is a navigation problem, not a program problem.",
      leadingPractice:
        "Leading communities build a single front door for growth-stage support — a navigator role, a curated pathway, or an intake process that matches each business to the right resource. Navigation is the unlock.",
    },
    leading: {
      title: "You've built a true scaling pathway.",
      body: "Businesses in your community have access to specialized resources, mentorship, and capital designed for the unique challenges of minority and women entrepreneurs at the growth stage. This is a hallmark of a mature ecosystem.",
      leadingPractice:
        "Track business growth outcomes over time — revenue, jobs, capital raised — and publish the results. Leading communities use outcome data to attract more capital and more entrepreneurs.",
    },
  },

  // ============================================================
  // BLOCK 3 — LOCAL PARTNER CONNECTIONS
  // ============================================================
  // TODO: Fill in with the same 4-tier pattern
  // ============================================================

  // ============================================================
  // BLOCK 4 — ENTREPRENEUR INPUT
  // ============================================================
  // TODO: Fill in with the same 4-tier pattern
  // ============================================================

  // ============================================================
  // BLOCK 5 — POLICY BARRIERS
  // ============================================================
  // TODO: Fill in with the same 4-tier pattern
  // ============================================================
};

export default discoveryInsights;
