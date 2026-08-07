export type Locale = "en" | "uk" | "pl" | "de"

export const LOCALES: Locale[] = ["en", "uk", "pl", "de"]

/** A single concrete offering inside a category. */
export interface ServiceItem {
  id: string
  title: string
  description: string
  deliverables: string[]
}

/** A top-level practice area, e.g. Cybersecurity or Loss Prevention. */
export interface ServiceCategory {
  id: string
  /** Short label used in the category rail / anchor navigation. */
  label: string
  title: string
  tagline: string
  description: string
  items: ServiceItem[]
}

export interface ServicesCopy {
  title: string
  description: string
  categoriesLabel: string
  deliverablesLabel: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  categories: ServiceCategory[]
}

export interface BlogSection {
  heading?: string
  paragraphs: string[]
  bullets?: string[]
}

export interface BlogPost {
  slug: string
  /** Matches a ServiceCategory id so posts can be tied to a practice area. */
  category: string
  categoryLabel: string
  date: string
  readingTime: number
  title: string
  excerpt: string
  body: BlogSection[]
}

export interface BlogCopy {
  title: string
  description: string
  allLabel: string
  readMore: string
  backToIndex: string
  minRead: string
  relatedLabel: string
  notFound: string
  posts: BlogPost[]
}

export interface ContactChannel {
  label: string
  value: string
  href?: string
  note?: string
}

export interface ContactFormCopy {
  heading: string
  name: string
  email: string
  company: string
  interest: string
  interestPlaceholder: string
  message: string
  consent: string
  submit: string
  success: string
  successNote: string
}

export interface ContactCopy {
  title: string
  description: string
  form: ContactFormCopy
  channelsLabel: string
  officesLabel: string
  hoursLabel: string
  hours: string
  emergencyLabel: string
  emergencyText: string
  channels: ContactChannel[]
  offices: { city: string; country: string; address: string; focus: string }[]
}
