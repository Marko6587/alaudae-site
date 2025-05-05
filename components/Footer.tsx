"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t py-12 px-6 md:px-16 lg:px-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <Image src="/alaudae-logo-new.png" alt="Alaudae Logo" width={40} height={40} />
              <span className="ml-2 text-lg font-semibold">Alaudae</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">{t("hero.title")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-black transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  {t("service.infosec")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  {t("service.lossPrevention")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  {t("service.compliance")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  {t("service.audit")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">{t("footer.contacts")}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@alaudae.com</li>
              <li>{t("footer.phone")}</li>
              <li>{t("footer.address")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-gray-500 text-center">{t("footer.rights")}</div>
      </div>
    </footer>
  )
}
