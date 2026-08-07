"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { formatPostDate, getBlog } from "@/lib/content"

export default function BlogPage() {
  const { language } = useLanguage()
  const copy = getBlog(language)
  const [filter, setFilter] = useState<string>("all")

  const categories = useMemo(() => {
    const seen = new Map<string, string>()
    copy.posts.forEach((post) => {
      if (!seen.has(post.category)) seen.set(post.category, post.categoryLabel)
    })
    return Array.from(seen, ([id, label]) => ({ id, label }))
  }, [copy.posts])

  const posts = filter === "all" ? copy.posts : copy.posts.filter((post) => post.category === filter)
  const [lead, ...rest] = posts

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-24">
        <header className="max-w-3xl mb-16 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">Alaudae</p>
          <h1 className="text-3xl md:text-4xl font-light mb-6 text-balance">{copy.title}</h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed text-pretty">{copy.description}</p>
        </header>

        {/* Category filter */}
        <div className="mb-16 flex flex-wrap gap-x-6 gap-y-3 border-y border-gray-100 py-5">
          {[{ id: "all", label: copy.allLabel }, ...categories].map((category) => {
            const isActive = filter === category.id
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                aria-pressed={isActive}
                className={`text-sm transition-colors duration-200 ${
                  isActive
                    ? "font-medium text-black underline decoration-1 underline-offset-8"
                    : "font-light text-gray-500 hover:text-black"
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Lead article */}
        {lead && (
          <Link
            href={`/blog/${lead.slug}`}
            className="group mb-20 block border-b border-gray-100 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">
              <span>{lead.categoryLabel}</span>
              <span aria-hidden="true" className="h-px w-6 bg-gray-300" />
              <time dateTime={lead.date}>{formatPostDate(lead.date, language)}</time>
              <span aria-hidden="true" className="h-px w-6 bg-gray-300" />
              <span>
                {lead.readingTime} {copy.minRead}
              </span>
            </div>
            <h2 className="max-w-3xl text-2xl md:text-3xl font-light mb-5 text-balance transition-colors duration-200 group-hover:text-gray-600">
              {lead.title}
            </h2>
            <p className="max-w-2xl text-gray-600 font-light leading-relaxed mb-7 text-pretty">{lead.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-sm font-light">
              {copy.readMore}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        )}

        {/* Remaining articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {rest.map((post, index) => (
            <article
              key={post.slug}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
                  <span>{post.categoryLabel}</span>
                  <span aria-hidden="true" className="h-px w-4 bg-gray-300" />
                  <span>
                    {post.readingTime} {copy.minRead}
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-3 text-balance transition-colors duration-200 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="mb-5 flex-1 text-sm text-gray-600 font-light leading-relaxed text-pretty">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <time dateTime={post.date} className="text-xs font-light text-gray-400">
                    {formatPostDate(post.date, language)}
                  </time>
                  <ArrowRight
                    className="h-4 w-4 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-black"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
