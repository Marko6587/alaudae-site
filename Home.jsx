"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const serviceItems = [
  "Информационная безопасность",
  "Loss Prevention",
  "Compliance",
  "Audyt (wewnętrzny / zewnętrzny)",
  "Lean Management",
  "Risc Management",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-white to-gray-100">
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Image
            src="/Black-White-Minimalist-Simple-Monogram-Typography-Logo.png"
            alt="Alaudae Logo"
            width={120}
            height={120}
            className="mb-6"
          />
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Investing in security today is preventing losses tomorrow.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Это основа нашей корпоративной культуры и подхода к цифровой безопасности.
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Узнать больше
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Наши услуги
        </motion.h2>
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
              <p className="text-gray-600 text-sm">Подробности и описание каждой подуслуги будут отображены здесь.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12 px-6 md:px-16 lg:px-32 text-sm text-gray-500 text-center">
        © 2025 Alaudae. Все права защищены.
      </footer>
    </main>
  )
}
