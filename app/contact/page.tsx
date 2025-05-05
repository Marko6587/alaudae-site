"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <main className="min-h-screen py-24 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">{t("contact.title")}</h1>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{t("contact.info.title")}</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">{t("contact.address.title")}</h3>
                <p className="text-gray-700 whitespace-pre-line">Gdansk, Kolorowa 25, 80-180</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">{t("contact.phone.title")}</h3>
                <p className="text-gray-700">+ 48 500 540 421</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">{t("contact.email.title")}</h3>
                <p className="text-gray-700">info@alaudae.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">{t("contact.hours.title")}</h3>
                <p className="text-gray-700 whitespace-pre-line">{t("contact.hours.text")}</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{t("contact.form.title")}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.form.subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">{t("contact.form.subject.select")}</option>
                  <option value="Информационная безопасность">{t("service.infosec")}</option>
                  <option value="Loss Prevention">{t("service.lossPrevention")}</option>
                  <option value="Compliance">{t("service.compliance")}</option>
                  <option value="Audyt">{t("service.audit")}</option>
                  <option value="Lean Management">{t("service.leanManagement")}</option>
                  <option value="Risc Management">{t("service.riskManagement")}</option>
                  <option value="Другое">{t("contact.form.subject.other")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? t("contact.form.button.sending") : t("contact.form.button.send")}
              </motion.button>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">{t("contact.form.success")}</div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-800 rounded-md">{t("contact.form.error")}</div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
