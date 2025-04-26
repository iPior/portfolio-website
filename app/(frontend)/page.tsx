import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { About } from "@/components/sections/about"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"


export default async function HomePage() {

  return (
    <main className="min-h-screen">
        <PatternWrapper>
            <Hero />
            <About />
            <Projects />
        </PatternWrapper>
    </main>
  )
}
