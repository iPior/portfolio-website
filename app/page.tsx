// import Image from "next/image";
import { Header } from "@/components/content/header"
import { Footer } from "@/components/content/footer"
import { FooterBasic } from "@/components/content/footer-simple"
import { Hero } from "@/components/content/hero"
import { ThemeProvider } from "@/context/theme-provider"
import { Skills } from "@/components/content/skills"
import { Projects } from "@/components/content/projects"
import { About } from "@/components/content/about"
import { Music } from "@/components/content/music"
import PatternWrapper from "@/components/wrappers/pattern-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t dark:bg-gradient-to-b from-blue-50 dark:from-gray-100/5 to-background">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <PatternWrapper>
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Music /> */}
        </PatternWrapper>
        <FooterBasic />
      </ThemeProvider>
    </main>
  )
}