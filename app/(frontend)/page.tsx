import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
// import { FreelanceWork } from "@/components/sections/freelance-work"
import { About } from "@/components/sections/about"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"


export default async function HomePage() {

  return (
    <main className="h-min-screen">
        <PatternWrapper>
            <Hero />
            <About />
            {/* <FreelanceWork /> */}
            <Projects />
        </PatternWrapper>
    </main>
  )
}
