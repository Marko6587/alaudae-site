"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ProjectSection {
  title: string
  content: string[]
}

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  sections: ProjectSection[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <div
        className="p-8 cursor-pointer bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">🛡 {project.title}</h2>
            <p className="text-lg text-gray-700">{project.subtitle}</p>
          </div>
          <ChevronDown size={24} className={`text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
        </div>
        <p className="mt-4 text-gray-600 font-medium">{project.description}</p>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-gray-50"
      >
        <div className="p-8 space-y-8">
          {project.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <div className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-gray-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
