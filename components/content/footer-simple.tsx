"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FooterBasic() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mx-auto p-8 md:p-12 border-l border-r">
        <div className="border-border/60 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

          <div className="text-xs text-muted-foreground text-center md:text-start order-2 md:order-0">
            Made with <span className="text-red-400">♥</span> using Next.js, React, and Tailwind CSS
          </div>

          <div className="text-center order-1 md:order-0">
            <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                <ArrowUp className="h-4 w-4 md:mr-1 animate-bounce" />
                Back to top
              </Button>
            </div>

            <div className="text-xs text-muted-foreground text-center md:text-end order-3 md:order-0">
              © {currentYear} Piotr Szaran. All rights reserved.
            </div>

          </div>
    </footer>
  )
}

