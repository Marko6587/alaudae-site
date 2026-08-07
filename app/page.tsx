"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { formatPostDate, getBlog, getHome, getServices } from "@/lib/content"

// Cinematic WebGL hero, client-only and off the critical path.
const RomanLineCinematic = dynamic(() => import("@/components/RomanLineCinematic"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" aria-hidden="true" />,
})

export default function Home() {
  const { language } = useLanguage()
  const copy = getHome(language)
  const services = getServices(language)
  const blog = getBlog(language)
  const featured = blog.posts.slice(0, 3)

  return (
    <div className="bg-white text-black">
      {/* Cinematic black hero: a glowing bronze line draws a Roman scutum, then a gladius and crossed spears */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-black">
        <RomanLineCinematic className="absolute inset-0 z-0" />

        {/* legibility gradient over the lower portion */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent"
        />

        <div className="container relative z-20 mx-auto px-6 pb-16 md:pb-20">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            <div className="mb-8 animate-in fade-in zoom-in-95 duration-1000 delay-200 fill-mode-both">
              <Image
                src="/logo.png"
                alt="Alaudae Secure Consulting"
                width={132}
                height={132}
                className="h-auto opacity-90 [filter:invert(1)]"
                priority
              />
            </div>

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c8862f]">{copy.eyebrow}</p>
            <h1 className="mb-6 text-3xl font-light leading-tight text-balance text-white md:text-4xl lg:text-5xl">
              {copy.headline}
            </h1>
            <p className="mb-4 max-w-xl text-lg font-light text-gray-300 text-pretty">{copy.subtitle}</p>
            <p className="mb-10 max-w-xl text-base font-light text-gray-400 text-pretty">{copy.description}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/services">
                <button className="group flex items-center border border-white bg-white px-8 py-3 font-light text-black transition-colors duration-300 hover:bg-gray-200">
                  {copy.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/blog">
                <button className="group flex items-center border border-white/30 bg-transparent px-8 py-3 font-light text-white transition-colors duration-300 hover:border-white">
                  {copy.insightsCta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Practice areas, driven by the same data as the services page */}
      <section className="border-t border-gray-100 bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-400">{copy.practicesLabel}</p>
            <h2 className="mb-6 text-2xl font-light text-balance md:text-3xl">{copy.practicesTitle}</h2>
            <p className="font-light leading-relaxed text-gray-600 text-pretty">{copy.practicesText}</p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {services.categories.map((category, index) => (
              <Link
                key={category.id}
                href="/services"
                className="group flex flex-col border-t border-gray-200 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="mb-3 text-lg font-medium text-balance transition-colors duration-200 group-hover:text-gray-600">
                  {category.title}
                </h3>
                <p className="mb-5 flex-1 font-light leading-relaxed text-gray-600 text-pretty">{category.tagline}</p>
                <span className="inline-flex items-center gap-2 text-sm font-light text-gray-500 transition-colors duration-200 group-hover:text-black">
                  {copy.practicesCta}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-400">{copy.approachLabel}</p>
            <h2 className="text-2xl font-light text-balance md:text-3xl">{copy.approachTitle}</h2>
          </div>

          <ol className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {copy.approachSteps.map((step, index) => (
              <li
                key={step.title}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-[10px] text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="mb-3 text-lg font-medium">{step.title}</h3>
                <p className="font-light leading-relaxed text-gray-600 text-pretty">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Latest insights */}
      <section className="border-t border-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-400">{copy.insightsLabel}</p>
              <h2 className="text-2xl font-light text-balance md:text-3xl">{copy.insightsTitle}</h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-light text-gray-500 transition-colors duration-200 hover:text-black"
            >
              {copy.insightsCta}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
            {featured.map((post, index) => (
              <article
                key={post.slug}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
                    <span>{post.categoryLabel}</span>
                    <span aria-hidden="true" className="h-px w-4 bg-gray-300" />
                    <time dateTime={post.date}>{formatPostDate(post.date, language)}</time>
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-balance transition-colors duration-200 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-gray-600 text-pretty">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-light">
                    {copy.insightsLink}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-2xl font-light text-balance md:text-3xl">{copy.contact.title}</h2>
            <p className="mb-10 font-light leading-relaxed text-gray-600 text-pretty">{copy.contact.description}</p>
            <Link href="/contact">
              <button className="group flex items-center border border-black bg-black px-8 py-3 font-light text-white transition-colors duration-300 hover:bg-gray-900">
                {copy.contact.button}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
