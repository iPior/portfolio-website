// import Image from "next/image";
import { Header } from "@/components/headers/header"
import { FooterBasic } from "@/components/headers/footer-simple"
import { Hero } from "@/components/sections/hero"
import { Music } from "@/components/sections/music"
import { AboutTwo } from "@/components/sections/about-two"
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t dark:bg-gradient-to-b from-blue-50 dark:from-gray-100/5 to-background">
        <Header />
        <PatternWrapper>
            <Hero />
            <AboutTwo />
            <Music />
        </PatternWrapper>
    </main>
  )
}