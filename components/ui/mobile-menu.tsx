"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <>
      <Button variant="outline" size="sm" className="md:hidden" onClick={toggleMenu}>
        <Menu className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-white dark:bg-slate-900 md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="sm" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-6 text-center">
                <motion.a
                  href="#about"
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  onClick={toggleMenu}
                >
                  {t("nav.about")}
                </motion.a>
                <motion.a
                  href="#experience"
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  onClick={toggleMenu}
                >
                  {t("nav.experience")}
                </motion.a>
                <motion.a
                  href="#skills"
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  onClick={toggleMenu}
                >
                  {t("nav.skills")}
                </motion.a>
                <motion.a
                  href="#certifications"
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  onClick={toggleMenu}
                >
                  {t("nav.certifications")}
                </motion.a>
                <motion.a
                  href="#education"
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  onClick={toggleMenu}
                >
                  {t("nav.education")}
                </motion.a>
                <motion.a
                  href="#contact"
                  className="text-xl font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  variants={linkVariants}
                  onClick={toggleMenu}
                >
                  {t("nav.contact")}
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
