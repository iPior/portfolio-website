"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="flex container border-l border-r h-16 items-center justify-between mx-auto px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Piotr Szaran
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

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
          {/* <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link> */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://github.com/ipior" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
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

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Link href="#contact">Hire Me</Link>
              </Button>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

