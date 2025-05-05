"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen py-24 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col items-center mb-8">
          <Image src="/alaudae-logo-new.png" alt="Alaudae Logo" width={100} height={100} className="mb-4" />
          <h1 className="text-4xl font-bold text-center">{t("about.title")}</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <Image
              src="/about-image.jpg"
              alt="Alaudae team"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{t("about.mission.title")}</h2>
            <p className="text-gray-700 mb-4">{t("about.mission.text1")}</p>
            <p className="text-gray-700">{t("about.mission.text2")}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">{t("about.history.title")}</h2>
          <p className="text-gray-700 mb-4">{t("about.history.text1")}</p>
          <p className="text-gray-700">{t("about.history.text2")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{t("about.values.title")}</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>{t("about.values.item1")}</li>
            <li>{t("about.values.item2")}</li>
            <li>{t("about.values.item3")}</li>
            <li>{t("about.values.item4")}</li>
            <li>{t("about.values.item5")}</li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  )
}
