export const KEYWORDS = [
  'leadership',
  'initiative',
  'optimization',
  'customer',
  'service',
  'team',
  'research',
  'oriented',
  'achievement',
  'communication'
];

export const LEADERSHIP = [
  "leadership",
  "chaired",
  "controlled",
  "coordinated",
  "executed",
  "headed",
  "operated",
  "orchestrated",
  "organized",
  "oversaw",
  "planned",
  "produced",
  "programmed",
  "aligned",
  "cultivated",
  "directed",
  "enabled",
  "facilitated",
  "fostered",
  "guided",
  "hired",
  "inspired",
  "mentored",
  "mobilized",
  "motivated",
  "recruited",
  "regulated",
  "shaped",
  "supervised",
  "taught",
  "trained",
  "unified",
  "united"
];

export const INITIATIVE = [
  "initiative",
  "administered",
  "built",
  "charted",
  "created",
  "designed",
  "developed",
  "devised",
  "founded",
  "engineered",
  "established",
  "formalized",
  "formed",
  "formulated",
  "implemented",
  "incorporated",
  "initiated",
  "instituted",
  "introduced",
  "launched",
  "pioneered",
  "spearheaded"
];

export const OPTIMIZATION = [
  "optimization",
  "conserved",
  "consolidated",
  "decreased",
  "deducted",
  "diagnosed",
  "lessened",
  "reconciled",
  "reduced",
  "yielded",
  "accelerated",
  "achieved",
  "advanced",
  "amplified",
  "boosted",
  "capitalized",
  "delivered",
  "enhanced",
  "expanded",
  "expedited",
  "furthered",
  "gained",
  "generated",
  "improved",
  "lifted",
  "maximized",
  "outpaced",
  "stimulated",
  "sustained",
  "centralized",
  "clarified",
  "converted",
  "customized",
  "cnfluenced",
  "cntegrated",
  "merged",
  "modified",
  "overhauled",
  "redesigned",
  "refined",
  "refocused",
  "rehabilitated",
  "remodeled",
  "reorganized",
  "replaced",
  "restructured",
  "revamped",
  "revitalized",
  "simplified",
  "standardized",
  "streamlined",
  "strengthened",
  "updated",
  "upgraded",
  "transformed",
  "secured"
];

export const CUSTOMER_SERVICE = [
  "customer",
  "advised",
  "advocated",
  "arbitrated",
  "coached",
  "consulted",
  "educated",
  "fielded",
  "informed"
];

export const TEAM_ORIENTED = [
  "teamwork",
  "aligned",
  "cultivated",
  "directed",
  "enabled",
  "facilitated",
  "fostered",
  "guided",
  "hired",
  "inspired",
  "mentored",
  "mobilized",
  "motivated",
  "recruited",
  "regulated",
  "shaped",
  "supervised",
  "taught",
  "trained",
  "unified",
  "united",
  "resolved",
  "navigated",
  "negotiated",
  "partnered"
];

export const RESEARCH_ORIENTED = [
  "research",
  "analyzed",
  "assembled",
  "assessed",
  "audited",
  "calculated",
  "discovered",
  "evaluated",
  "examined",
  "explored",
  "forecasted",
  "identified",
  "interpreted",
  "investigated",
  "mapped",
  "measured",
  "qualified",
  "quantified",
  "surveyed",
  "tested",
  "tracked"
];

export const ACHIEVEMENT = [
  "achieve",
  "attained",
  "awarded",
  "completed",
  "demonstrated",
  "earned",
  "exceeded",
  "outperformed",
  "reached",
  "showcased",
  "succeeded",
  "surpassed",
  "targeted"
];

export const COMMUNICATION = [
  "communicate",
  "authored",
  "briefed",
  "campaigned",
  "co-authored",
  "composed",
  "conveyed",
  "convinced",
  "corresponded",
  "counseled",
  "critiqued",
  "defined",
  "documented",
  "edited",
  "illustrated",
  "lobbied",
  "persuaded",
  "promoted",
  "publicized",
  "reviewed",
  "acquired",
  "forged"
];

// Stop Words //
export function getStopWords() {
  Algorithmia.client("simCnX5SgvLeu7IMGCGgT0GWnE41")
  .algo("algo://nlp/RetrieveStopWords/0.1.1")
  .pipe([])
  .then(function(output) {
    window.stopWords = output.result;
  });
}
