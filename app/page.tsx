import { Header } from "@/components/headers/header"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { AboutTwo } from "@/components/sections/about-two"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"
import { FooterBasic } from "@/components/headers/footer-simple"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t dark:bg-gradient-to-b from-blue-50 dark:from-gray-100/5 to-background">
        <Header />
        <PatternWrapper>
            <Hero />
            <AboutTwo />
            <Projects />
        </PatternWrapper>
        <FooterBasic/>
    </main>
  )
}