// ============================================================
// DISCOVERY ASSESSMENT — QUESTIONS
// ============================================================
// 5 blocks × 4 options. Each option has a score 1–4.
// Options are ordered from lowest maturity (A=1) to highest (D=4).
// DO NOT reorder options without updating the scoring logic.
// ============================================================

export const discoveryQuestions = [
  {
    id: "access-to-support",
    order: 1,
    blockTitle: "Access to Support",
    blockDescription:
      "How your community connects entrepreneurs to funding opportunities.",
    question:
      "A new local grant program is announced for minority and women entrepreneurs. What is the usual process for informing and guiding eligible businesses to apply?",
    options: [
      {
        id: "A",
        score: 1,
        text: "We rely on general public announcements and expect entrepreneurs to find information themselves.",
      },
      {
        id: "B",
        score: 2,
        text: "Information is distributed, but support to help entrepreneurs with the application process is limited or hard to find.",
      },
      {
        id: "C",
        score: 3,
        text: "We actively share information and offer basic guidance, but consistent follow-up is not formalized.",
      },
      {
        id: "D",
        score: 4,
        text: "We have clear channels to inform entrepreneurs and provide dedicated, consistent support throughout the application process.",
      },
    ],
  },

  {
    id: "scaling-support",
    order: 2,
    blockTitle: "Scaling Support",
    blockDescription:
      "How your community supports minority and women entrepreneurs at the growth stage.",
    question:
      "A minority or woman-owned business is ready to scale up significantly. Which best describes the local support available for this growth stage?",
    options: [
      {
        id: "A",
        score: 1,
        text: "Our local support primarily focuses on start-ups; later-stage growth resources are largely absent.",
      },
      {
        id: "B",
        score: 2,
        text: "Some programs exist for scaling, but they are general and not specifically tailored to the unique challenges of minority and women entrepreneurs.",
      },
      {
        id: "C",
        score: 3,
        text: "We have several programs targeting growth, but entrepreneurs report difficulty navigating them or finding specific expertise.",
      },
      {
        id: "D",
        score: 4,
        text: "We offer a clear pathway of specialized resources and mentorship designed to support minority and women entrepreneurs through significant scaling.",
      },
    ],
  },

  {
    id: "local-partner-connections",
    order: 3,
    blockTitle: "Local Partner Connections",
    blockDescription:
      "How well organizations coordinate to serve entrepreneurs together.",
    question:
      "When a local entrepreneur needs support that crosses multiple organizations (e.g., city, university, chamber), how often do those organizations actively coordinate to provide a seamless referral or joint service?",
    options: [
      {
        id: "A",
        score: 1,
        text: "Organizations mostly operate independently, and entrepreneurs are expected to connect the dots themselves.",
      },
      {
        id: "B",
        score: 2,
        text: "Some organizations have informal relationships, but systematic cross-referrals or joint programs are rare.",
      },
      {
        id: "C",
        score: 3,
        text: "Key organizations share contact lists and occasionally refer entrepreneurs, but there is no formal, active coordination.",
      },
      {
        id: "D",
        score: 4,
        text: "Partner organizations regularly meet, share information, and have established processes for warm hand-offs and joint initiatives.",
      },
    ],
  },

  {
    id: "entrepreneur-input",
    order: 4,
    blockTitle: "Entrepreneur Input",
    blockDescription:
      "How you involve minority and women entrepreneurs in program design.",
    question:
      "Before launching or redesigning an entrepreneur support program, how do you typically gather input from minority and women entrepreneurs?",
    options: [
      {
        id: "A",
        score: 1,
        text: "We base decisions on internal assessments or what we perceive as their needs.",
      },
      {
        id: "B",
        score: 2,
        text: "We might conduct general surveys or hold infrequent public meetings that may or may not reach these groups.",
      },
      {
        id: "C",
        score: 3,
        text: "We hold occasional focus groups or invite a small, informal group of entrepreneurs to provide feedback.",
      },
      {
        id: "D",
        score: 4,
        text: "We regularly engage diverse groups of minority and women entrepreneurs through structured channels to co-design and refine support programs.",
      },
    ],
  },

  {
    id: "policy-barriers",
    order: 5,
    blockTitle: "Policy Barriers",
    blockDescription:
      "How local regulations support or hinder emerging business models.",
    question:
      "A new business seeks to operate from a home office or in a less conventional space, common for emerging entrepreneurs. What process do they typically encounter regarding local zoning or licensing?",
    options: [
      {
        id: "A",
        score: 1,
        text: "They face complex, outdated regulations that often make non-traditional setups difficult or impossible to permit.",
      },
      {
        id: "B",
        score: 2,
        text: "Regulations are somewhat flexible, but the process is confusing, requires multiple approvals, and lacks clear guidance for new business types.",
      },
      {
        id: "C",
        score: 3,
        text: "There are some provisions for flexible business models, but inconsistencies in interpretation or enforcement create hurdles for entrepreneurs.",
      },
      {
        id: "D",
        score: 4,
        text: "Our policies are regularly reviewed and adapted to support flexible business models, with clear, streamlined processes for permits and licenses.",
      },
    ],
  },
];

export default discoveryQuestions;
