// import Image from "next/image";
import { Header } from "@/components/headers/header"
import { Hero } from "@/components/sections/hero"
import { ThemeProvider } from "@/context/theme-provider"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { About } from "@/components/sections/about"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t dark:bg-gradient-to-b from-blue-50 dark:from-gray-100/5 to-background">
        <Header />
        <PatternWrapper>
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Music /> */}
        </PatternWrapper>
    </main>
  )
}