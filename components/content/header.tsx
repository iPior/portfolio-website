"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import BorderWrapper from "@/components/border-wrapper"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <BorderWrapper>
        <div className="container mx-auto border-r border-l flex h-16 items-center justify-between px-8">
            <Link href="/" className="font-bold text-xl">
              Piotr Szaran
            </Link>

          

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About Me
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-accent transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-accent transition-colors">
              Projects
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" asChild className="h-9 w-9">
                <a href="https://github.com/ipior" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="h-9 w-9">
                <a
                  href="https://linkedin.com/in/piotrszaran/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <ThemeToggle/>
            </div>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
          </Button>

          {isMenuOpen && (
            <div className="absolute bg-background container mx-auto top-16 left-0 right-0 border-b border-r border-l md:hidden">
              <nav className="flex text-xs sm:text-sm py-4 items-center justify-between px-8 font-medium">
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Me
                </Link>
                {/* <span>•</span> */}
                <Link
                  href="#skills"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                {/* <span>•</span> */}
                <Link
                  href="#projects"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                {/* <span>•</span> */}
                <Link
                  href="#https://linkedin.com/in/piotrszaran/"
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LinkedIn
                </Link>
                {/* <span>•</span> */}
                <Link
                  href="#https://github.com/ipior"
                  className="hover:text-primary transition-colors pr-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Github
                </Link>
              </nav>
            </div>
          )} 
         

          {/* {isMenuOpen && (
            <div className="absolute container mx-auto top-16 left-0 right-0 md:hidden flex justify-end">
              <nav className="flex flex-col p-4 items-end justify-center pl-10 gap-4 px-12 bg-background border-b border-r border-l">
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Me
                </Link>
                <Link
                  href="#skills"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#https://linkedin.com/in/piotrszaran/"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LinkedIn
                </Link>
                <Link
                  href="#https://github.com/ipior"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Github
                </Link>
              </nav>
            </div>
          )} */}
        </div>
      </BorderWrapper>
    </header>
  )
}

