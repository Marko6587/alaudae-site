"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { getContact, getSite } from "@/lib/content"

export default function Footer() {
  const { language } = useLanguage()
  const site = getSite(language)
  const contact = getContact(language)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white py-16 text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company */}
          <div className="md:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <div className="relative h-6 w-6">
                <Image src="/logo.png" alt="Alaudae Logo" fill className="object-contain" />
              </div>
              <span className="text-sm font-light tracking-wide">ALAUDAE</span>
            </div>
            <p className="mb-8 max-w-sm text-sm font-light leading-relaxed text-gray-500 text-pretty">
              {site.tagline}
            </p>
            <p className="text-xs font-light text-gray-400">
              © {year} Alaudae. {site.rights}
            </p>
          </div>

          {/* Practice areas */}
          <div>
            <h2 className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">{site.servicesLabel}</h2>
            <ul className="flex flex-col gap-2.5">
              {site.practices.map((practice) => (
                <li key={practice.label}>
                  <Link
                    href={practice.href}
                    className="text-sm font-light text-gray-500 transition-colors duration-200 hover:text-black"
                  >
                    {practice.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links + contact */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">{site.companyLabel}</h2>
              <ul className="flex flex-col gap-2.5">
                {site.nav
                  .filter((item) => item.path !== "/" && item.path !== "/services")
                  .map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="text-sm font-light text-gray-500 transition-colors duration-200 hover:text-black"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-400">{site.contactLabel}</h2>
              <ul className="flex flex-col gap-2.5">
                {contact.channels.slice(0, 2).map((channel) => (
                  <li key={channel.value}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="text-sm font-light text-gray-500 transition-colors duration-200 hover:text-black"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span className="text-sm font-light text-gray-500">{channel.value}</span>
                    )}
                  </li>
                ))}
                <li className="text-sm font-light text-gray-500">
                  {contact.offices[0].city}, {contact.offices[0].country}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
