"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TechGridProps {
  children: ReactNode
  className?: string
}

export function TechGrid({ children, className = "" }: TechGridProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  )
}
