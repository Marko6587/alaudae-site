import type { ServicesCopy } from "../types"

export const servicesEn: ServicesCopy = {
  title: "Services",
  description:
    "Six practice areas that cover the full perimeter of a modern organisation — from network packets to the loading dock. Engagements are scoped independently or combined into a single security programme.",
  categoriesLabel: "Practice areas",
  deliverablesLabel: "What you receive",
  ctaTitle: "Not sure where to start?",
  ctaText:
    "Most clients begin with a diagnostic audit. We map your exposure across all six areas and return a prioritised roadmap with cost estimates.",
  ctaButton: "Request a diagnostic",
  categories: [
    {
      id: "cybersecurity",
      label: "Cybersecurity",
      title: "Cybersecurity",
      tagline: "Offensive testing, continuous monitoring and incident response.",
      description:
        "We treat your infrastructure the way a motivated attacker would, then build the detection and response capability that stops them the second time. Coverage spans on-premise networks, cloud workloads, applications and endpoints.",
      items: [
        {
          id: "penetration-testing",
          title: "Penetration Testing & Red Teaming",
          description:
            "Goal-based adversary simulation against networks, web and mobile applications, APIs and wireless infrastructure. Red team engagements include social engineering and physical entry attempts where authorised.",
          deliverables: [
            "Executive summary with business-impact ranking",
            "Reproducible technical findings with proof of exploitation",
            "Remediation plan and free retest of fixed issues",
          ],
        },
        {
          id: "managed-detection",
          title: "Managed Detection & Response",
          description:
            "A 24/7 monitoring capability built on your existing telemetry. We tune detection rules to your environment, triage alerts and contain confirmed incidents before they spread laterally.",
          deliverables: [
            "SIEM/EDR deployment, tuning and use-case library",
            "Round-the-clock triage with defined escalation paths",
            "Monthly threat reporting and detection coverage metrics",
          ],
        },
        {
          id: "incident-response",
          title: "Incident Response & Digital Forensics",
          description:
            "Rapid containment of active breaches, ransomware and insider incidents, followed by forensically sound investigation that holds up in court and with insurers.",
          deliverables: [
            "Retained response team with contractual arrival times",
            "Forensic imaging, timeline reconstruction and attribution",
            "Regulator-ready incident report and lessons-learned workshop",
          ],
        },
        {
          id: "cloud-security",
          title: "Cloud & Application Security",
          description:
            "Architecture review and hardening for cloud estates and the software you ship — identity boundaries, secrets handling, pipeline integrity and secure-by-default configuration baselines.",
          deliverables: [
            "Cloud configuration and IAM privilege review",
            "Secure SDLC integration with automated pipeline checks",
            "Hardening baselines and infrastructure-as-code templates",
          ],
        },
      ],
    },
    {
      id: "corporate-security",
      label: "Corporate Security",
      title: "Corporate Security",
      tagline: "Physical protection, people risk and crisis readiness.",
      description:
        "Digital controls fail when someone walks through an unlocked door or a key hire turns out to be a plant. This practice covers the physical and human perimeter around your operations, staff and leadership.",
      items: [
        {
          id: "physical-security",
          title: "Physical Security & Access Control",
          description:
            "Site surveys and layered protection design for offices, plants, warehouses and data centres — perimeter, access control, intrusion detection and guard-force procedures.",
          deliverables: [
            "Site vulnerability survey with photographic evidence",
            "Layered protection design and equipment specification",
            "Guard-force procedures and post orders",
          ],
        },
        {
          id: "executive-protection",
          title: "Executive Protection & Travel Risk",
          description:
            "Discreet protection for executives and their families, plus pre-travel intelligence and in-country support for high-risk destinations.",
          deliverables: [
            "Individual threat and exposure assessment",
            "Protective detail planning and secure transport",
            "Country risk briefings and 24/7 travel support line",
          ],
        },
        {
          id: "due-diligence",
          title: "Due Diligence & Background Screening",
          description:
            "Verification of counterparties, investment targets, executives and sensitive hires across open sources, corporate registries, litigation records and sanctions lists.",
          deliverables: [
            "Integrity and reputational profile per subject",
            "Ownership structure and beneficial-owner mapping",
            "Sanctions, PEP and adverse-media screening",
          ],
        },
        {
          id: "crisis-management",
          title: "Crisis Management & Business Continuity",
          description:
            "Plans and rehearsals for the events that stop the business — cyber incidents, site loss, supply failure, extortion, kidnap and hostile media attention.",
          deliverables: [
            "Business impact analysis and recovery objectives",
            "Crisis playbooks, call trees and decision authority matrix",
            "Tabletop exercises for the executive team",
          ],
        },
      ],
    },
    {
      id: "audits",
      label: "Audits & Compliance",
      title: "Security Audits & Compliance",
      tagline: "Independent assessment against real threats and real regulations.",
      description:
        "An audit should tell you what an attacker can do and what a regulator will ask about. Ours produce evidence, prioritised gaps and a costed remediation path rather than a checklist score.",
      items: [
        {
          id: "comprehensive-audit",
          title: "Comprehensive Security Audit",
          description:
            "A single assessment across all six practice areas that establishes your true security baseline and how it compares to peers in your sector.",
          deliverables: [
            "Maturity scoring across technical, physical and human controls",
            "Prioritised gap register with effort and cost estimates",
            "Twelve-to-eighteen month remediation roadmap",
          ],
        },
        {
          id: "risk-assessment",
          title: "Risk & Vulnerability Assessment",
          description:
            "Structured identification of the assets that matter, the threats that realistically target them and the controls that currently stand in the way.",
          deliverables: [
            "Asset and data-flow inventory with owner mapping",
            "Threat modelling and quantified risk register",
            "Control effectiveness rating and residual risk statement",
          ],
        },
        {
          id: "compliance",
          title: "Regulatory & Standards Compliance",
          description:
            "Gap analysis, documentation and audit support for ISO 27001, NIS2, GDPR, DORA, PCI DSS and sector-specific supervisory requirements.",
          deliverables: [
            "Requirement-by-requirement gap analysis",
            "Policy set, records of processing and evidence pack",
            "Certification or supervisory audit accompaniment",
          ],
        },
        {
          id: "supply-chain-audit",
          title: "Third-Party & Supply Chain Audit",
          description:
            "Assessment of the vendors, contractors and logistics partners who hold your data or touch your goods, including on-site verification where it matters.",
          deliverables: [
            "Vendor tiering by criticality and access level",
            "On-site or remote assessment reports per supplier",
            "Contractual security clauses and ongoing review cadence",
          ],
        },
      ],
    },
    {
      id: "training",
      label: "Training & Awareness",
      title: "Employee Training & Awareness",
      tagline: "Turning staff from the widest attack surface into working sensors.",
      description:
        "Most incidents begin with a person, not a protocol. We build training that changes behaviour and is measured against incident data rather than completion rates.",
      items: [
        {
          id: "awareness-programme",
          title: "Security Awareness Programme",
          description:
            "A rolling annual curriculum covering phishing, credential hygiene, data handling, physical access and reporting duties, delivered in the languages your staff actually work in.",
          deliverables: [
            "Role-segmented curriculum with annual calendar",
            "In-person and e-learning modules in four languages",
            "Behaviour metrics dashboard tied to incident volume",
          ],
        },
        {
          id: "phishing-simulation",
          title: "Phishing & Social Engineering Simulation",
          description:
            "Controlled campaigns by email, phone and messaging that measure real susceptibility and reporting speed, followed by targeted coaching for the people who need it.",
          deliverables: [
            "Tailored campaign scenarios by department and seniority",
            "Click, credential-entry and report-rate benchmarking",
            "Just-in-time coaching for repeat-susceptible staff",
          ],
        },
        {
          id: "executive-briefings",
          title: "Executive & Board Briefings",
          description:
            "Short, non-technical sessions that give leadership the threat picture, their personal exposure and the decisions they will be expected to make during an incident.",
          deliverables: [
            "Sector-specific threat briefing for the board",
            "Executive digital-footprint and personal risk review",
            "Decision-making drill for the crisis scenario most likely to hit you",
          ],
        },
        {
          id: "technical-training",
          title: "Role-Based Technical Training",
          description:
            "Hands-on training for developers, administrators, security teams and guard forces — secure coding, hardening, detection engineering and incident handling.",
          deliverables: [
            "Secure development and code-review workshops",
            "Detection engineering and incident-handling labs",
            "Live incident drills with post-exercise debrief",
          ],
        },
      ],
    },
    {
      id: "loss-prevention",
      label: "Loss Prevention",
      title: "Loss Prevention",
      tagline: "Finding where margin leaves the business and closing the gap.",
      description:
        "Shrinkage is rarely one thief. It is a mix of internal collusion, process gaps, returns abuse and logistics blind spots — and it responds to analytics far better than to more cameras.",
      items: [
        {
          id: "retail-programme",
          title: "Retail Loss Prevention Programmes",
          description:
            "End-to-end programme design for store networks: shrink targets, floor procedures, point-of-sale controls, staff incentives and audit routines.",
          deliverables: [
            "Store-level shrink diagnostic and target setting",
            "Floor, till and cash-handling procedure set",
            "Regional audit routine and LP team operating model",
          ],
        },
        {
          id: "shrinkage-analytics",
          title: "Inventory Shrinkage Analytics",
          description:
            "Data-led identification of loss hotspots by site, shift, product line and operator, separating genuine theft from process error and system noise.",
          deliverables: [
            "Loss attribution model by site, shift and SKU",
            "Exception reporting on voids, refunds and discounts",
            "Ranked intervention list with expected recovery",
          ],
        },
        {
          id: "internal-theft",
          title: "Internal Theft Investigations",
          description:
            "Discreet, legally defensible investigation of employee theft and collusion with suppliers or customers, conducted so the outcome survives labour tribunals.",
          deliverables: [
            "Covert evidence gathering within legal boundaries",
            "Structured interviews and admission handling",
            "Case file prepared for disciplinary or criminal referral",
          ],
        },
        {
          id: "logistics-protection",
          title: "Supply Chain & Logistics Protection",
          description:
            "Protection of goods in transit and at rest across warehouses, cross-docks and last-mile delivery, including driver vetting and route risk analysis.",
          deliverables: [
            "Route and node risk assessment across the chain",
            "Seal, tracking and reconciliation control design",
            "Carrier and driver vetting standards",
          ],
        },
      ],
    },
    {
      id: "anti-fraud",
      label: "Anti-Fraud Systems",
      title: "Anti-Fraud Systems",
      tagline: "Detection logic, controls and investigations for financial crime.",
      description:
        "Fraud is a systems problem. We design the controls, the monitoring logic and the reporting channels that surface it early, then investigate what has already happened.",
      items: [
        {
          id: "fraud-risk-assessment",
          title: "Fraud Risk Assessment",
          description:
            "Mapping of every scheme that is realistically available to insiders, customers, suppliers and organised groups against the controls currently in place.",
          deliverables: [
            "Scheme-by-scheme fraud risk register",
            "Control gap analysis across the transaction lifecycle",
            "Board-level fraud exposure statement",
          ],
        },
        {
          id: "transaction-monitoring",
          title: "Transaction Monitoring & Scoring",
          description:
            "Rule and model design for payment, claims and order flows — calibrated so that genuine fraud surfaces without drowning your team in false positives.",
          deliverables: [
            "Detection rule set and risk-scoring logic",
            "Alert triage workflow and case management setup",
            "Precision and recall tuning against historical cases",
          ],
        },
        {
          id: "aml-kyc",
          title: "AML / KYC Programme Design",
          description:
            "Customer due diligence, sanctions screening, beneficial ownership verification and suspicious activity reporting built to withstand supervisory review.",
          deliverables: [
            "Risk-based customer due diligence framework",
            "Screening configuration and false-positive reduction",
            "Reporting procedures and staff certification",
          ],
        },
        {
          id: "forensic-accounting",
          title: "Forensic Accounting & Investigations",
          description:
            "Reconstruction of financial records to quantify losses, trace funds and support recovery actions, insurance claims and criminal complaints.",
          deliverables: [
            "Quantified loss calculation with supporting evidence",
            "Fund tracing and asset identification",
            "Expert report and litigation support",
          ],
        },
      ],
    },
  ],
}
