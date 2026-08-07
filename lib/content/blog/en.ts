import type { BlogCopy } from "../types"

export const blogEn: BlogCopy = {
  title: "Insights",
  description:
    "Field notes from audits, investigations and incident rooms. Written for the people who have to make the decision, not for a search engine.",
  allLabel: "All topics",
  readMore: "Read article",
  backToIndex: "Back to insights",
  minRead: "min read",
  relatedLabel: "Related reading",
  notFound: "That article does not exist.",
  posts: [
    {
      slug: "nis2-what-actually-changes",
      category: "audits",
      categoryLabel: "Audits & Compliance",
      date: "2026-06-18",
      readingTime: 7,
      title: "NIS2: what actually changes for mid-sized operators",
      excerpt:
        "Most of the coverage focuses on fines. The harder shift is personal accountability for management bodies and the 24-hour early-warning clock.",
      body: [
        {
          paragraphs: [
            "NIS2 widened the scope of European cyber regulation far beyond the critical-infrastructure operators that NIS1 targeted. Manufacturing, food production, waste management, postal services and digital providers are now in scope at thresholds that catch companies with fifty employees. If you assumed the directive was written for utilities, check the annexes again.",
            "The parts that change day-to-day operations are not the penalty ceilings. They are the reporting clock, the requirement to secure the supply chain you depend on, and the fact that management bodies can be held personally responsible for failing to approve and oversee risk measures.",
          ],
        },
        {
          heading: "The 24-hour early warning is a process problem",
          paragraphs: [
            "You have 24 hours from becoming aware of a significant incident to submit an early warning, 72 hours to file a full notification, and one month to deliver a final report. Twenty-four hours sounds generous until you account for a Friday-evening detection, an on-call engineer who is not authorised to speak to a regulator, and a legal team that wants to review wording.",
            "The organisations that meet this deadline have decided in advance who declares an incident significant, who signs the submission and what the submission template says. That decision cannot be made during the incident.",
          ],
          bullets: [
            "Name a single accountable decision-maker and two deputies, with contact paths that do not depend on corporate email",
            "Pre-write the early-warning template so only facts need to be filled in",
            "Rehearse the declaration decision in a tabletop exercise, not on the night",
          ],
        },
        {
          heading: "Supply chain is now your problem, contractually",
          paragraphs: [
            "The directive requires you to address security risks in your supplier relationships, including the security practices of your direct suppliers and service providers. In practice that means tiering vendors by the access they hold, writing security obligations into contracts, and having evidence that you review them.",
            "Start with the vendors who hold administrative access to your systems or your customer data. That list is usually shorter than expected and disproportionately risky.",
          ],
        },
        {
          heading: "What a defensible position looks like",
          paragraphs: [
            "Supervisory authorities are not looking for perfection. They are looking for evidence that management understood the risk, approved proportionate measures, and can show when decisions were taken. Minutes, dated risk registers and completed exercises are worth more than a policy nobody has read.",
          ],
        },
      ],
    },
    {
      slug: "shrinkage-is-a-data-problem",
      category: "loss-prevention",
      categoryLabel: "Loss Prevention",
      date: "2026-05-27",
      readingTime: 6,
      title: "Shrinkage is a data problem before it is a theft problem",
      excerpt:
        "In most retail networks, a third of recorded shrink never left the building. Separating process error from theft changes where you spend the budget.",
      body: [
        {
          paragraphs: [
            "The instinct when shrink rises is to add cameras and guards. That instinct is expensive and usually misdirected, because a significant share of recorded loss is not theft at all — it is receiving errors, mis-scanned deliveries, unrecorded markdowns, damaged goods written off inconsistently and stock that exists but cannot be found.",
            "Until you separate those categories, every intervention is a guess. The first job of a loss-prevention programme is attribution, not enforcement.",
          ],
        },
        {
          heading: "Attribute before you intervene",
          paragraphs: [
            "Loss attribution means reconciling recorded shrink against the operational events that could explain it, at the smallest unit you have data for: site, shift, till, operator, product line. Patterns appear quickly. Theft clusters around specific people, times and high-value low-volume goods. Process error clusters around specific procedures and new staff.",
          ],
          bullets: [
            "Compare shrink per site against delivery reconciliation failures over the same period",
            "Look at void, refund and manual-discount rates per operator against peer averages",
            "Check whether high-shrink sites are also high-turnover sites — training gaps look like theft",
          ],
        },
        {
          heading: "Internal collusion has a signature",
          paragraphs: [
            "Where theft is internal, it is rarely a lone actor taking goods out under a coat. It is a refund processed to a known card, a delivery signed for short, a discount applied to a colleague, or a supplier invoicing for goods that never arrived. All of these leave transaction traces that exception reporting will surface if the rules are calibrated to your own baselines rather than a vendor default.",
          ],
        },
        {
          heading: "Then spend the money",
          paragraphs: [
            "Once losses are attributed, physical and procedural interventions can be targeted: tighter receiving controls where reconciliation fails, till procedure changes where exceptions cluster, and investigation where the transaction pattern is unambiguous. The same budget applied this way typically recovers several times what a uniform camera rollout achieves.",
          ],
        },
      ],
    },
    {
      slug: "phishing-training-that-changes-behaviour",
      category: "training",
      categoryLabel: "Training & Awareness",
      date: "2026-04-30",
      readingTime: 5,
      title: "Why your phishing training is measured wrong",
      excerpt:
        "Completion rates measure attendance. Click rates measure last quarter. The number that predicts your next incident is reporting speed.",
      body: [
        {
          paragraphs: [
            "Almost every awareness programme reports two numbers to the board: how many staff completed the training and what percentage clicked the simulated phish. Neither number tells you whether you would survive a real campaign.",
            "Completion is attendance. Click rate is a lagging indicator that falls naturally as staff learn to recognise the simulation platform rather than the attack. Neither captures the variable that actually decides an incident's severity.",
          ],
        },
        {
          heading: "Measure time-to-report",
          paragraphs: [
            "In a real credential-phishing campaign, someone will click. The question is how long it takes before a human tells the security team, because that interval is the attacker's uninterrupted working window. An organisation where the first report arrives in four minutes can revoke sessions and reset credentials before lateral movement begins. One where it arrives the next morning cannot.",
          ],
          bullets: [
            "Track median and worst-case time from first delivery to first internal report",
            "Track report rate as a share of recipients, not just of clickers",
            "Make reporting one click, with no possibility of being blamed for a false alarm",
          ],
        },
        {
          heading: "Train the response, not the recognition",
          paragraphs: [
            "Recognition training has a ceiling: a sufficiently targeted message will pass. Response training does not, because it works even when recognition fails. Staff who have clicked should know exactly what to do in the next thirty seconds, and should have learned from the programme that reporting a mistake is rewarded rather than punished.",
            "The fastest improvement most organisations can make is cultural rather than technical: remove every disincentive to reporting, then measure whether the reports arrive.",
          ],
        },
      ],
    },
    {
      slug: "fraud-controls-transaction-lifecycle",
      category: "anti-fraud",
      categoryLabel: "Anti-Fraud Systems",
      date: "2026-03-12",
      readingTime: 6,
      title: "Designing fraud controls around the transaction lifecycle",
      excerpt:
        "Adding rules to a monitoring engine treats symptoms. Mapping controls to each stage of a transaction removes the opportunity.",
      body: [
        {
          paragraphs: [
            "When fraud losses appear, the usual response is to write more detection rules. Detection matters, but it operates after the fact and inherits every weakness of the process that created the transaction. Durable fraud reduction comes from mapping controls across the whole lifecycle: onboarding, authorisation, execution, settlement and reconciliation.",
          ],
        },
        {
          heading: "Where opportunity concentrates",
          paragraphs: [
            "Most internal fraud exploits one of three structural weaknesses: a single person can both create and approve a transaction, a master-data change goes unreviewed, or a reconciliation break is cleared without independent evidence. Each of these is a control design decision, not a monitoring failure.",
          ],
          bullets: [
            "Segregate creation from approval for payments, refunds, credit notes and write-offs",
            "Treat vendor and payroll master-data changes as high-risk events requiring second-line review",
            "Require documented evidence before any reconciliation difference is written off",
          ],
        },
        {
          heading: "Calibrate detection against your own history",
          paragraphs: [
            "Once structural controls are in place, monitoring earns its keep. But rules tuned on vendor defaults produce alert volumes no team can triage, and a queue nobody reads is worse than no queue. Calibrate thresholds against your own confirmed cases, measure precision honestly, and retire rules that have never produced a true positive.",
          ],
        },
        {
          heading: "Give people a channel",
          paragraphs: [
            "Across published case data, tips from employees remain the single most productive source of fraud detection — ahead of internal audit and monitoring systems. A whistleblowing channel that is genuinely confidential, independently received and visibly acted upon is one of the cheapest controls available, and one of the most consistently underfunded.",
          ],
        },
      ],
    },
    {
      slug: "red-team-versus-penetration-test",
      category: "cybersecurity",
      categoryLabel: "Cybersecurity",
      date: "2026-02-04",
      readingTime: 5,
      title: "Red team or penetration test: choosing the right engagement",
      excerpt:
        "They answer different questions. Buying the wrong one wastes the budget and produces a report that reassures you incorrectly.",
      body: [
        {
          paragraphs: [
            "The two terms are used interchangeably in procurement documents and they should not be. A penetration test answers a coverage question: which vulnerabilities exist in this defined scope. A red team engagement answers a capability question: can a motivated adversary reach a specific objective without being detected and stopped.",
          ],
        },
        {
          heading: "Test first, red team later",
          paragraphs: [
            "If you have not systematically tested your external perimeter, internal network and applications, a red team is premature. It will succeed via the first unpatched service it finds, teaching you something you could have learned for a fraction of the cost, and it will not exercise your detection capability meaningfully.",
            "Penetration testing establishes the baseline. Red teaming validates whether the people, process and tooling around that baseline actually work under pressure.",
          ],
        },
        {
          heading: "What to specify when you buy",
          paragraphs: [
            "The quality of the engagement is set by the scope document more than by the vendor. Ambiguity about objectives, authorisation and rules of engagement produces reports full of findings nobody can act on.",
          ],
          bullets: [
            "State the objective in business terms: what data or capability must the adversary reach",
            "Define authorisation explicitly, including social engineering and physical entry if in scope",
            "Require a free retest of remediated findings and name who signs off closure",
          ],
        },
      ],
    },
    {
      slug: "executive-protection-starts-with-data",
      category: "corporate-security",
      categoryLabel: "Corporate Security",
      date: "2026-01-15",
      readingTime: 5,
      title: "Executive protection starts with a data footprint review",
      excerpt:
        "Before a protective detail, remove the information that lets someone plan against your leadership. It is cheaper and often more effective.",
      body: [
        {
          paragraphs: [
            "When a company decides its leadership needs protection, the conversation usually starts with personnel and vehicles. That is the visible end of the discipline, and for genuinely elevated threat levels it is necessary. But the cheapest and most consistently useful first step is reducing the information available to anyone planning an approach.",
          ],
        },
        {
          heading: "What is usually exposed",
          paragraphs: [
            "Home addresses in corporate registry filings and property records. Family members identifiable through social media. Predictable routines published in conference agendas. Vehicle registrations, gym memberships, school affiliations and travel patterns visible through fitness apps and photo metadata. Individually harmless, collectively a planning document.",
          ],
          bullets: [
            "Audit corporate filings and registry entries for residential addresses",
            "Review the digital footprint of family members, not only the principal",
            "Check whether published schedules make movements predictable weeks in advance",
          ],
        },
        {
          heading: "Then layer the physical response",
          paragraphs: [
            "With exposure reduced, protective measures can be proportionate: residential security assessment, secure transport for identified high-risk movements, travel briefings for specific destinations, and a rehearsed communication protocol for the family. Most organisations find they need far less standing protection than they initially assumed, and far more preparation.",
          ],
        },
      ],
    },
  ],
}
