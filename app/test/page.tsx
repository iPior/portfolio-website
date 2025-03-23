// import Image from "next/image";
import { Header } from "@/components/content/header"
import { Footer } from "@/components/content/footer"
import { Hero } from "@/components/content/hero"
import { ThemeProvider } from "@/context/theme-provider"
import { Skills } from "@/components/content/skills"
import { Projects } from "@/components/content/projects"
import { About } from "@/components/content/about"
// import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100/5 to-background">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        <div
          className="bg-blue-100 w-20 absolute h-screen z-[-10]"
        >
        </div>
        <div className="z-10">

          <Hero />
          {/* <About /> */}
          {/* <Skills /> */}
          {/* <Projects /> */}
        </div>
        {/* <Footer /> */}
      </ThemeProvider>
    </main>
  )
}