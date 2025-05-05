"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-b from-white to-gray-100 mt-16">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Image src="/alaudae-logo-new.png" alt="Alaudae Logo" width={150} height={150} className="mb-6" />
      </motion.div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t("hero.title")}
      </motion.h1>
      <motion.p
        className="mt-6 text-lg text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t("hero.subtitle")}
      </motion.p>
      <motion.div
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link href="/services">
          <motion.button
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("hero.button.learnMore")}
          </motion.button>
        </Link>
        <Link href="/projects">
          <motion.button
            className="px-6 py-3 bg-white text-black border border-black rounded-full hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("nav.projects")}
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button
            className="px-6 py-3 bg-white text-black border border-black rounded-full hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("hero.button.contactUs")}
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}
