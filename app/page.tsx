"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Cloud,
  Database,
  Server,
  Shield,
  Code,
  BarChart,
  Brain,
  ChevronRight,
  ArrowDown,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechGrid } from "@/components/ui/tech-grid"
import { ParticleBackground } from "@/components/ui/particle-background"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageSelector } from "@/components/ui/language-selector"
import { useLanguage } from "@/contexts/language-context"

// Skill Card Component
function SkillCard({ icon, title, skills, delay = 0 }) {
  return (
    <AnimatedCard delay={delay} className="h-full">
      <Card className="h-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay + 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-blue-500 dark:text-blue-400"
            >
              {icon}
            </motion.div>
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="font-bold text-lg"
            >
              {title}
            </motion.h3>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.4 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="text-slate-700 dark:text-slate-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ScrollIndicator />
      <ParticleBackground />

      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-bold text-xl text-slate-800 dark:text-white"
          >
            Álifi Ralph
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {[
              { key: "about", label: t("nav.about") },
              { key: "experience", label: t("nav.experience") },
              { key: "skills", label: t("nav.skills") },
              { key: "certifications", label: t("nav.certifications") },
              { key: "education", label: t("nav.education") },
              { key: "contact", label: t("nav.contact") },
            ].map((item, i) => (
              <motion.a
                key={item.key}
                href={`#${item.key}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <MobileMenu />
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                AWS Certified Solutions Architect Associate 
              </Badge>
            </motion.div>
            <AnimatedText text={t("hero.title")} className="text-4xl md:text-5xl font-bold mb-4" />
            <AnimatedText text={t("hero.subtitle")} className="text-xl md:text-2xl text-slate-300 mb-6" once />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-slate-300 mb-8"
            >
              {t("hero.experience")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild className="bg-blue-600 hover:bg-blue-700 group relative overflow-hidden">
                <a href="#contact">
                  <span className="relative z-10">{t("hero.cta.contact")}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-slate-700 text-slate-800 hover:bg-slate-100 dark:border-white dark:text-white dark:hover:bg-white/10 transition-colors"
                asChild
              >
                <a href="#experience">{t("hero.cta.experience")}</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
              <Image src="/images/profile-.jpg" alt="Álifi Ralph" fill className="object-cover" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30"
              ></motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading>{t("about.title")}</SectionHeading>
          <div className="max-w-3xl mx-auto">
            <AnimatedText text={t("about.p1")} className="text-lg text-slate-700 dark:text-slate-300 mb-6" once />
            <AnimatedText text={t("about.p2")} className="text-lg text-slate-700 dark:text-slate-300 mb-6" once />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="https://linkedin.com/in/oalifiralph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Linkedin
                  size={20}
                  className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all group-hover:after:w-full">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/oalifiralph"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Github
                  size={20}
                  className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all group-hover:after:w-full">
                  GitHub
                </span>
              </a>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin size={20} className="text-blue-500" />
                <span>Campos dos Goytacazes, Rio de Janeiro, Brazil</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading>{t("experience.title")}</SectionHeading>

          <div className="max-w-4xl mx-auto">
            {/* VX Case */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 border-l-2 border-blue-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"
              />
              <div className="mb-2">
                <Badge className="mb-2">January 2022 - Present</Badge>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-100"
                >
                  {t("experience.vxcase.title")}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-blue-600 dark:text-blue-400"
                >
                  {t("experience.vxcase.company")}
                </motion.p>
              </div>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 space-y-3"
              >
                {[
                  t("experience.vxcase.p1"),
                  t("experience.vxcase.p2"),
                  t("experience.vxcase.p3"),
                  t("experience.vxcase.p4"),
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* RU Contabilidade */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"
              />
              <div className="mb-2">
                <Badge className="mb-2">January 2021 - December 2021</Badge>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-100"
                >
                  {t("experience.ru.title")}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-blue-600 dark:text-blue-400"
                >
                  {t("experience.ru.company")}
                </motion.p>
              </div>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 space-y-3"
              >
                {[t("experience.ru.p1"), t("experience.ru.p2"), t("experience.ru.p3")].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading>{t("skills.title")}</SectionHeading>

          <Tabs defaultValue="aws" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 bg-slate-100 dark:bg-slate-800">
              <TabsTrigger value="aws" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                {t("skills.aws")}
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                {t("skills.cloud")}
              </TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                {t("skills.data")}
              </TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                {t("skills.other")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aws" className="space-y-4">
              <TechGrid>
                <SkillCard
                  icon={<Server className="h-6 w-6 text-orange-500" />}
                  title="Computing"
                  skills={["EC2", "Lambda", "ECS", "EKS"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-blue-500" />}
                  title="Storage"
                  skills={["S3", "EBS", "EFS", "FSx", "Glacier"]}
                  delay={0.2}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-green-500" />}
                  title="Database"
                  skills={[
                    "RDS (MySQL, PostgreSQL, SQL Server)",
                    "Aurora",
                    "DocumentDB",
                    "MongoDB",
                    "DynamoDB",
                    "Redshift",
                  ]}
                  delay={0.3}
                />
                <SkillCard
                  icon={<Cloud className="h-6 w-6 text-purple-500" />}
                  title="Networks"
                  skills={["VPC", "PrivateLink", "VPN", "Route 53", "Direct Connect"]}
                  delay={0.4}
                />
                <SkillCard
                  icon={<Shield className="h-6 w-6 text-red-500" />}
                  title="Security"
                  skills={["IAM", "KMS", "Security Groups", "WAF", "Shield", "Security Hub", "Guard Duty"]}
                  delay={0.5}
                />
                <SkillCard
                  icon={<BarChart className="h-6 w-6 text-indigo-500" />}
                  title="Data Analysis"
                  skills={["Glue", "Athena", "Redshift", "EMR"]}
                  delay={0.6}
                />
              </TechGrid>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Cloud className="h-6 w-6 text-blue-500" />}
                  title="Cloud Solutions Architecture"
                  skills={["Architecture design", "Implementation", "Cost optimization", "Scalable solutions"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-green-500" />}
                  title="DevOps"
                  skills={["Infrastructure automation", "CI/CD", "Continuous deployment", "Continuous delivery"]}
                  delay={0.2}
                />
                <SkillCard
                  icon={<Server className="h-6 w-6 text-purple-500" />}
                  title="Containers & Orchestration"
                  skills={["Kubernetes", "EKS", "Docker", "Step Functions"]}
                  delay={0.3}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-orange-500" />}
                  title="Infrastructure as Code (IaC)"
                  skills={["Terraform", "CloudFormation"]}
                  delay={0.4}
                />
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Brain className="h-6 w-6 text-blue-500" />}
                  title="Machine Learning"
                  skills={["SageMaker", "Amazon Forecast", "Rekognition", "Comprehend"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-green-500" />}
                  title="Data Science Libraries"
                  skills={[
                    "Pandas",
                    "Polars",
                    "Numpy",
                    "PySpark",
                    "Dask",
                    "TensorFlow",
                    "Keras",
                    "Scikit-Learn",
                    "OpenCV",
                  ]}
                  delay={0.2}
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Code className="h-6 w-6 text-blue-500" />}
                  title="Programming Languages"
                  skills={["Python", "Bash"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-green-500" />}
                  title="Database"
                  skills={["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB"]}
                  delay={0.2}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading>{t("certifications.title")}</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                image: "/images/aws-certified.png",
                title: "AWS Certified Solutions Architect Associate",
                expiry: "Expires April 30, 2028",
                borderColor: "border-orange-100 dark:border-orange-900",
                hoverColor: "hover:border-orange-200 dark:hover:border-orange-800",
              },
              {
                image: "/images/aws-cloud-practitioner.png",
                title: "AWS Certified Cloud Practitioner",
                expiry: "Expires April 30, 2028",
                borderColor: "border-blue-100 dark:border-blue-900",
                hoverColor: "hover:border-blue-200 dark:hover:border-blue-800",
              },
              {
                image: "/images/tensorflow-developer.png",
                title: "TensorFlow Developer Certificate",
                expiry: "Expires May 15, 2027",
                borderColor: "border-green-100 dark:border-green-900",
                hoverColor: "hover:border-green-200 dark:hover:border-green-800",
              },
            ].map((cert, index) => (
              <AnimatedCard key={index} delay={0.1 * index} direction="up">
                <Card
                  className={`border-2 ${cert.borderColor} ${cert.hoverColor} transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg`}
                >
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center mb-4 h-16"
                    >
                      <Image src={cert.image || "/placeholder.svg"} alt={cert.title} width={100} height={100} />
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-center mb-2"
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center text-slate-500 dark:text-slate-400"
                    >
                      {cert.expiry}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              {t("certifications.additional")}
            </h3>
            <ul className="space-y-3">
              {[
                "ITIL 4 Foundation Certificate – Agile Unify",
                "Lei Geral de Proteção de Dados (LGPD) – Sest Senat",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-2"
                >
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading>{t("education.title")}</SectionHeading>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                period: "August 2024 - August 2028 (Studying)",
                title: "Software Engineering",
                subtitle: "",
                institution: "UNICSUL (University Cruzeiro do Sul)",
              },

            ].map((edu, index) => (
              <AnimatedCard key={index} delay={0.2 * index} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge className="mb-2">{edu.period}</Badge>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-2"
                    >
                      {edu.title}
                    </motion.h3>
                    {edu.subtitle && (
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-slate-600 dark:text-slate-400 mb-2"
                      >
                        {edu.subtitle}
                      </motion.p>
                    )}
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-slate-700 dark:text-slate-300"
                    >
                      {edu.institution}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading>{t("languages.title")}</SectionHeading>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { language: t("languages.portuguese"), level: t("languages.native") },
              { language: t("languages.english"), level: t("languages.advanced") },
              { language: t("languages.spanish"), level: t("languages.basic") },
            ].map((lang, index) => (
              <AnimatedCard key={index} delay={0.1 * index}>
                <Card className="border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-2"
                    >
                      {lang.language}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-slate-600 dark:text-slate-400"
                    >
                      {lang.level}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading className="text-white">{t("contact.title")}</SectionHeading>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-white" />,
                  title: t("contact.phone"),
                  content: "+55 22 99991-7174",
                  isLink: false,
                },
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  title: t("contact.email"),
                  content: "contatoalifiralph@gmail.com",
                  isLink: false,
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  title: t("contact.location"),
                  content: "Campos dos Goytacazes, Rio de Janeiro, Brazil",
                  isLink: false,
                },
                {
                  icon: <Linkedin className="h-6 w-6 text-white" />,
                  title: "LinkedIn",
                  content: "linkedin.com/in/oalifiralph",
                  href: "https://linkedin.com/in/oalifiralph",
                  isLink: true,
                },
                {
                  icon: <Github className="h-6 w-6 text-white" />,
                  title: "GitHub",
                  content: "github.com/oalifiralph",
                  href: "https://github.com/oalifiralph",
                  isLink: true,
                  colSpan: true,
                },
              ].map((item, index) => (
                <AnimatedCard key={index} delay={0.1 * index} className={item.colSpan ? "md:col-span-2" : ""}>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        {item.isLink ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-200 hover:text-blue-100 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-blue-200">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-blue-200">{t("contact.message")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-8 bg-slate-900 text-slate-400 text-center"
      >
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Álifi Ralph. {t("footer.rights")}
          </p>
        </div>
      </motion.footer>
    </main>
  )
}
