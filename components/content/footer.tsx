'use client'

import Link from "next/link"
import { ArrowUp, Mail, MapPin, Frame } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t"> 
      <div className="container mx-auto p-8 md:py-22 border-l border-r">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* left section with contacat */}
            <div className="flex flex-col items-center md:items-start gap-2 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">Piotr Szaran</span>
              </div>
              <div className="space-y-2">
                <a
                  href="mailto:szaranpiotr@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  szaranpiotr@gmail.com
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Mississauga, Ontario, Canada
                </div>
              </div>
            </div>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-4 w-4 mr-1 animate-bounce" />
            Back to top
          </Button>

          {/* right section with navigation */}
          {/* <div className="grid grid-cols-1  gap-8"> */}
          <div className="flex flex-col items-center ">
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

            <div className="text-md text-muted-foreground mt-4">© {currentYear} Piotr Szaran. All rights reserved.</div>
          </div>
            

          {/* </div> */}
          
        </div>
      </div>
    </footer>
  )
}
