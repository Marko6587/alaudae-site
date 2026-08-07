"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { formatPostDate, getBlog, getPost } from "@/lib/content"

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>()
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug
  const { language } = useLanguage()
  const copy = getBlog(language)
  const post = slug ? getPost(language, slug) : undefined

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-6 py-32">
          <p className="mb-8 text-lg font-light text-gray-600">{copy.notFound}</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-light hover:text-gray-600">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {copy.backToIndex}
          </Link>
        </div>
      </div>
    )
  }

  const related = copy.posts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2)

  return (
    <div className="min-h-screen bg-white text-black">
      <article className="container mx-auto px-6 py-24">
        <Link
          href="/blog"
          className="group mb-14 inline-flex items-center gap-2 text-sm font-light text-gray-500 transition-colors duration-200 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
          {copy.backToIndex}
        </Link>

        <header className="mx-auto max-w-3xl animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
          <div className="mb-7 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
            <span>{post.categoryLabel}</span>
            <span aria-hidden="true" className="h-px w-6 bg-gray-300" />
            <time dateTime={post.date}>{formatPostDate(post.date, language)}</time>
            <span aria-hidden="true" className="h-px w-6 bg-gray-300" />
            <span>
              {post.readingTime} {copy.minRead}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light leading-tight mb-7 text-balance">{post.title}</h1>
          <p className="border-l border-black pl-6 text-lg font-light leading-relaxed text-gray-600 text-pretty">
            {post.excerpt}
          </p>
        </header>

        <div className="mx-auto mt-16 max-w-3xl">
          {post.body.map((section, index) => (
            <section
              key={index}
              className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {section.heading && (
                <h2 className="mb-5 text-xl font-medium text-balance">{section.heading}</h2>
              )}
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-5 font-light leading-relaxed text-gray-700 text-pretty">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 font-light text-gray-700">
                      <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-gray-300" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {related.length > 0 && (
          <aside className="mx-auto mt-24 max-w-3xl border-t border-gray-100 pt-14">
            <h2 className="mb-10 text-xs uppercase tracking-[0.2em] text-gray-400">{copy.relatedLabel}</h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="group flex flex-col">
                  <h3 className="mb-3 text-lg font-medium text-balance transition-colors duration-200 group-hover:text-gray-600">
                    {item.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm font-light leading-relaxed text-gray-600 text-pretty">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-light">
                    {copy.readMore}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </article>
    </div>
  )
}
