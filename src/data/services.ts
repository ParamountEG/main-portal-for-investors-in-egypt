export interface Service {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  detail: string;
  capabilities: string[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "entity-formation",
    number: "01",
    title: "Entity Formation",
    tagline: "The right legal structure from day one.",
    category: "Corporate",
    description:
      "Company registration, corporate structuring, and regulatory compliance for all major entity types available to foreign investors in Egypt.",
    detail:
      "We navigate GAFI — the General Authority for Free Zones and Investment — and ensure your structure is optimised for your capital profile, operational intent, and repatriation requirements. From initial consultation through commercial registration, we manage every filing, stamp, and approval.",
    capabilities: [
      "Egyptian Joint Stock Companies (SAE)",
      "Limited Liability Companies (LLC)",
      "Branch and Representative Offices",
      "Free Zone Entities — GAFI, SCZone, EFZA",
      "Special Purpose Vehicles",
      "Joint Venture structuring and documentation",
    ],
    relatedSlugs: ["regulatory-navigation", "banking-setup"],
  },
  {
    slug: "investment-advisory",
    number: "02",
    title: "Investment Advisory",
    tagline: "Structured entry into Egyptian capital.",
    category: "Advisory",
    description:
      "Sector analysis, opportunity identification, and investment structuring advisory for international investors entering Egypt.",
    detail:
      "We provide independent guidance on market timing, sectoral exposure, and capital structure — unencumbered by brokerage interests. Our advisers have direct operating experience across Egyptian real estate, industrials, technology, and agribusiness.",
    capabilities: [
      "Sector and market analysis",
      "Investment structure advisory",
      "Capital deployment strategy",
      "Return modelling and scenario analysis",
      "Co-investment facilitation",
    ],
    relatedSlugs: ["market-entry", "entity-formation"],
  },
  {
    slug: "regulatory-navigation",
    number: "03",
    title: "Regulatory Navigation",
    tagline: "Clear passage through Egyptian compliance.",
    category: "Compliance",
    description:
      "Licensing, sector-specific regulatory approvals, and ongoing compliance management for internationally owned entities.",
    detail:
      "Egypt's regulatory landscape is substantive and evolving. We track legislative changes, manage ongoing filing requirements, and maintain relationships with the relevant authorities — so your operations remain clean and your management bandwidth stays focused on growth.",
    capabilities: [
      "GAFI investment licensing",
      "Sector-specific permits and approvals",
      "Central Bank of Egypt financial licensing",
      "Ongoing compliance monitoring and reporting",
      "Regulatory change briefings",
    ],
    relatedSlugs: ["entity-formation", "tax-optimisation"],
  },
  {
    slug: "banking-setup",
    number: "04",
    title: "Banking & Finance Setup",
    tagline: "Operational banking from day one.",
    category: "Finance",
    description:
      "Corporate banking establishment, currency management, and finance facility introductions for internationally owned entities in Egypt.",
    detail:
      "Opening a corporate account in Egypt as a foreign-owned entity requires navigating know-your-customer requirements, Central Bank directives, and internal bank approvals. We have established relationships with the primary commercial banks and can significantly accelerate this process.",
    capabilities: [
      "Corporate bank account opening",
      "Multi-currency account structures",
      "FX and profit repatriation planning",
      "Trade finance and credit facility introductions",
      "Payment and treasury setup",
    ],
    relatedSlugs: ["entity-formation", "tax-optimisation"],
  },
  {
    slug: "tax-optimisation",
    number: "05",
    title: "Tax Optimisation",
    tagline: "Structured for efficiency, not exposure.",
    category: "Tax",
    description:
      "Egyptian corporate tax structuring, treaty mapping, and ongoing compliance for internationally owned entities.",
    detail:
      "We work alongside your home-country advisers to ensure cross-border efficiency. Egypt has double tax treaties with over 50 jurisdictions — many are underutilised. Free zone and investment zone incentives are significant but require qualifying structures to access.",
    capabilities: [
      "Egyptian corporate tax planning",
      "Double tax treaty analysis (50+ jurisdictions)",
      "Transfer pricing structuring",
      "Free zone and incentive qualification",
      "VAT and indirect tax compliance",
    ],
    relatedSlugs: ["entity-formation", "regulatory-navigation"],
  },
  {
    slug: "market-entry",
    number: "06",
    title: "Market Entry Strategy",
    tagline: "From intelligence to execution.",
    category: "Strategy",
    description:
      "End-to-end market entry planning: competitive landscape, go-to-market strategy, local partnership identification, and launch execution.",
    detail:
      "We take you from first analysis to first revenue. That means competitive mapping, distribution channel assessment, partnership identification and due diligence, and hands-on launch support. We do not hand you a report and leave — we build the path and walk it with you.",
    capabilities: [
      "Market sizing and competitive analysis",
      "Go-to-market strategy development",
      "Distribution and partnership identification",
      "Local management recruitment support",
      "Launch planning and execution oversight",
    ],
    relatedSlugs: ["investment-advisory", "entity-formation"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
