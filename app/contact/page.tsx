"use client"

import { useState, type FormEvent } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { getContact, getServices } from "@/lib/content"

export default function Contact() {
  const { language } = useLanguage()
  const copy = getContact(language)
  const services = getServices(language)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const fieldClass =
    "w-full border-b border-gray-200 bg-transparent py-2.5 font-light transition-colors duration-200 focus:border-black focus:outline-none"

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-24">
        <header className="mb-20 max-w-3xl animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-both">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-400">Alaudae</p>
          <h1 className="mb-6 text-3xl font-light text-balance md:text-4xl">{copy.title}</h1>
          <p className="text-lg font-light leading-relaxed text-gray-600 text-pretty">{copy.description}</p>
        </header>

        {/* Incident notice */}
        <div className="mb-20 border-l-2 border-black pl-6 py-1">
          <h2 className="mb-2 text-xs uppercase tracking-[0.2em] text-gray-400">{copy.emergencyLabel}</h2>
          <p className="max-w-2xl font-light leading-relaxed text-gray-700 text-pretty">{copy.emergencyText}</p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          {/* Form */}
          <section className="animate-in fade-in slide-in-from-left-4 duration-500 delay-200 fill-mode-both">
            <h2 className="mb-10 text-xs uppercase tracking-[0.2em] text-gray-400">{copy.form.heading}</h2>

            {submitted ? (
              <div className="border border-gray-200 px-8 py-14 text-center">
                <CheckCircle className="mx-auto mb-6 h-10 w-10 text-gray-400" aria-hidden="true" />
                <p className="mb-3 text-xl font-light text-balance">{copy.form.success}</p>
                <p className="mx-auto max-w-sm text-sm font-light leading-relaxed text-gray-500 text-pretty">
                  {copy.form.successNote}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-light text-gray-500">
                      {copy.form.name}
                    </label>
                    <input type="text" id="name" name="name" required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1 block text-sm font-light text-gray-500">
                      {copy.form.company}
                    </label>
                    <input type="text" id="company" name="company" className={fieldClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-light text-gray-500">
                    {copy.form.email}
                  </label>
                  <input type="email" id="email" name="email" required className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="interest" className="mb-1 block text-sm font-light text-gray-500">
                    {copy.form.interest}
                  </label>
                  <select id="interest" name="interest" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      {copy.form.interestPlaceholder}
                    </option>
                    {services.categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-light text-gray-500">
                    {copy.form.message}
                  </label>
                  <textarea id="message" name="message" rows={5} required className={fieldClass} />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-black"
                  />
                  <label htmlFor="consent" className="text-sm font-light leading-relaxed text-gray-500 text-pretty">
                    {copy.form.consent}
                  </label>
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center border border-black bg-black px-8 py-3.5 font-light text-white transition-colors duration-300 hover:bg-gray-900 sm:w-auto sm:justify-start"
                >
                  {copy.form.submit}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </section>

          {/* Channels, offices, hours */}
          <aside className="flex flex-col gap-14 animate-in fade-in slide-in-from-right-4 duration-500 delay-200 fill-mode-both">
            <section>
              <h2 className="mb-8 text-xs uppercase tracking-[0.2em] text-gray-400">{copy.channelsLabel}</h2>
              <ul className="flex flex-col">
                {copy.channels.map((channel) => (
                  <li key={channel.value} className="border-t border-gray-100 py-5 first:border-t-0 first:pt-0">
                    <p className="mb-1.5 text-sm font-light text-gray-500">{channel.label}</p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="text-base transition-colors duration-200 hover:text-gray-600 underline decoration-gray-300 underline-offset-4"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-base">{channel.value}</p>
                    )}
                    {channel.note && <p className="mt-1.5 text-sm font-light text-gray-400">{channel.note}</p>}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-8 text-xs uppercase tracking-[0.2em] text-gray-400">{copy.officesLabel}</h2>
              <ul className="flex flex-col gap-7">
                {copy.offices.map((office) => (
                  <li key={office.city}>
                    <p className="mb-1 text-base">
                      {office.city}
                      <span className="font-light text-gray-400">, {office.country}</span>
                    </p>
                    <p className="text-sm font-light text-gray-600">{office.address}</p>
                    <p className="text-sm font-light text-gray-400">{office.focus}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-400">{copy.hoursLabel}</h2>
              <p className="font-light leading-relaxed text-gray-600 text-pretty">{copy.hours}</p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
