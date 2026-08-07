"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight, Minus } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { getServices } from "@/lib/content"
import type { SymbolId } from "@/lib/roman-symbols"

// Three.js scene is client-only and kept out of the initial bundle.
const RomanSymbolScene = dynamic(() => import("@/components/RomanSymbolScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden="true" />,
})

// Each practice area assembles from its own Roman symbol.
const SYMBOL_BY_CATEGORY: Record<string, SymbolId> = {
  cybersecurity: "cyber",
  "corporate-security": "corporate",
  audits: "audits",
  training: "training",
  "loss-prevention": "loss",
  "anti-fraud": "fraud",
}

export default function ServicesPage() {
  const { language } = useLanguage()
  const copy = getServices(language)
  const [active, setActive] = useState(copy.categories[0].id)

  const current = copy.categories.find((category) => category.id === active) ?? copy.categories[0]
  const symbol = SYMBOL_BY_CATEGORY[current.id] ?? "cyber"

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-24">
        <header className="max-w-3xl mb-20 animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">Alaudae</p>
          <h1 className="text-3xl md:text-4xl font-light mb-6 text-balance">{copy.title}</h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed text-pretty">{copy.description}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-20">
          {/* Practice area rail */}
          <nav aria-label={copy.categoriesLabel} className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">{copy.categoriesLabel}</h2>
            <ul className="flex flex-col border-t border-gray-100">
              {copy.categories.map((category, index) => {
                const isActive = category.id === active
                return (
                  <li key={category.id} className="border-b border-gray-100">
                    <button
                      type="button"
                      onClick={() => setActive(category.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex w-full items-baseline gap-3 py-4 text-left text-sm transition-colors duration-200 ${
                        isActive ? "font-medium text-black" : "font-light text-gray-500 hover:text-black"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                      <span className="flex-1">{category.label}</span>
                      {isActive && <Minus className="h-4 w-4 shrink-0 text-black" aria-hidden="true" />}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Active practice area */}
          <section key={current.id} className="animate-in fade-in duration-500 fill-mode-both">
            {/* Line particles assemble into this category's Roman symbol */}
            <div className="relative mb-14 h-[340px] overflow-hidden border border-gray-100 bg-[radial-gradient(circle_at_center,#fafafa_0%,#ffffff_70%)] md:h-[460px]">
              <RomanSymbolScene symbol={symbol} className="absolute inset-0" />
              <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400">
                {current.label}
              </span>
            </div>

            <div className="mb-14 border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-balance">{current.title}</h2>
              <p className="text-base text-black font-light mb-4 text-pretty">{current.tagline}</p>
              <p className="text-gray-600 font-light leading-relaxed max-w-2xl text-pretty">{current.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
              {current.items.map((item, index) => (
                <article
                  key={item.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <h3 className="text-lg font-medium mb-3 text-balance">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 text-pretty">{item.description}</p>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">{copy.deliverablesLabel}</h4>
                  <ul className="flex flex-col gap-2">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3 text-sm font-light text-gray-700">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gray-300" />
                        <span className="leading-relaxed">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Closing CTA */}
        <div className="mt-28 border-t border-gray-100 pt-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-light mb-4 text-balance">{copy.ctaTitle}</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8 text-pretty">{copy.ctaText}</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-black px-8 py-4 text-sm font-light transition-colors duration-200 hover:bg-black hover:text-white"
            >
              {copy.ctaButton}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
