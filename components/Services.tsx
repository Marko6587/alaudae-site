"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function Services() {
  const { t } = useLanguage()

  // Получаем переведенные названия услуг
  const serviceItems = [
    t("service.infosec"),
    t("service.lossPrevention"),
    t("service.compliance"),
    t("service.audit"),
    t("service.leanManagement"),
    t("service.riskManagement"),
  ]

  // Краткие описания услуг для главной страницы
  const serviceDescriptions = [
    t("service.infosec.short"),
    t("service.lossPrevention.short"),
    t("service.compliance.short"),
    t("service.audit.short"),
    t("service.leanManagement.short"),
    t("service.riskManagement.short"),
  ]

  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-4">{t("services.our")}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{t("services.subtitle")}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {serviceItems.map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-600 text-sm mb-4">{serviceDescriptions[i]}</p>
            <Link href="/services">
              <motion.button
                className="text-sm font-medium text-black hover:underline"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {t("services.button.more")} →
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link href="/services">
          <motion.button
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("services.button.all")}
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}
