"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  children: ReactNode
  className?: string
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`relative mb-12 text-center ${className}`}>
      <motion.h2
        className="text-3xl font-bold text-slate-800 dark:text-slate-100 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h2>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 96, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  )
}
