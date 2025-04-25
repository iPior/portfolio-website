import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { AboutTwo } from "@/components/sections/about"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"


export default async function HomePage() {

  return (
    <main className="min-h-screen">
        <PatternWrapper>
            <Hero />
            <AboutTwo />
            <Projects />
        </PatternWrapper>
    </main>
  )
}
