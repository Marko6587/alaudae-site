import type { BlogCopy, BlogPost, Locale, ServicesCopy } from "./types"

import { servicesEn } from "./services/en"
import { servicesUk } from "./services/uk"
import { servicesPl } from "./services/pl"
import { servicesDe } from "./services/de"

import { blogEn } from "./blog/en"
import { blogUk } from "./blog/uk"
import { blogPl } from "./blog/pl"
import { blogDe } from "./blog/de"

import { contactCopy } from "./contact"
import { homeCopy } from "./home"
import { siteCopy } from "./site"

export * from "./types"
export type { HomeCopy } from "./home"
export type { NavItem, SiteCopy } from "./site"
export { contactCopy, homeCopy, siteCopy }

const services: Record<Locale, ServicesCopy> = {
  en: servicesEn,
  uk: servicesUk,
  pl: servicesPl,
  de: servicesDe,
}

const blog: Record<Locale, BlogCopy> = {
  en: blogEn,
  uk: blogUk,
  pl: blogPl,
  de: blogDe,
}

function normalise(locale: string): Locale {
  return locale === "uk" || locale === "pl" || locale === "de" ? locale : "en"
}

export function getServices(locale: string): ServicesCopy {
  return services[normalise(locale)]
}

export function getBlog(locale: string): BlogCopy {
  return blog[normalise(locale)]
}

export function getContact(locale: string) {
  return contactCopy[normalise(locale)]
}

export function getHome(locale: string) {
  return homeCopy[normalise(locale)]
}

export function getSite(locale: string) {
  return siteCopy[normalise(locale)]
}

export function getPost(locale: string, slug: string): BlogPost | undefined {
  return getBlog(locale).posts.find((post) => post.slug === slug)
}

/** Every slug across locales, used for static generation of article routes. */
export function allPostSlugs(): string[] {
  return blogEn.posts.map((post) => post.slug)
}

/** Formats an ISO date for the given locale without pulling in a date library. */
export function formatPostDate(iso: string, locale: string): string {
  const tag = { en: "en-GB", uk: "uk-UA", pl: "pl-PL", de: "de-DE" }[normalise(locale)]
  return new Date(iso).toLocaleDateString(tag, { day: "numeric", month: "long", year: "numeric" })
}
