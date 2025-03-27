import Link from "next/link"
import { Frame } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Frame className="h-6 w-6" />
          <span className="font-bold text-lg">Portfolio</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <nav className="flex gap-4 md:gap-6">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="text-sm text-muted-foreground">© {currentYear} Your Name. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

