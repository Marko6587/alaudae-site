"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ProjectCard({ id, title, description, sections }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { language } = useLanguage()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const getButtonText = () => {
    if (isExpanded) {
      return language === "uk"
        ? "Згорнути"
        : language === "en"
          ? "Collapse"
          : language === "pl"
            ? "Zwiń"
            : language === "de"
              ? "Einklappen"
              : "Свернуть"
    } else {
      return language === "uk"
        ? "Дізнатися більше"
        : language === "en"
          ? "Learn more"
          : language === "pl"
            ? "Dowiedz się więcej"
            : language === "de"
              ? "Mehr erfahren"
              : "Узнать больше"
    }
  }

  return (
    <div className="bg-white border-b border-gray-100 pb-8 mb-8">
      <div className="flex-grow">
        <h2 className="text-xl font-light mb-2">{title}</h2>
        <p className="text-gray-600 mb-4 font-light">{description}</p>

        <button
          onClick={toggleExpand}
          className="flex items-center text-gray-500 hover:text-black font-light text-sm transition duration-300"
        >
          {getButtonText()}
          {isExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              {sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-sm font-medium mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-300 mr-2">—</span>
                        <span className="text-gray-600 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
