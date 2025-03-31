"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FooterBasic() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mx-auto px-8 md:pt-12 md:pb-12 border-l border-r space-y-8">

        <div className="border-border/60 flex flex-col md:flex-row items-center">
          <div className="text-xs text-muted-foreground text-start w-1/3">
            Made with <span className="text-red-400">♥</span> using Next.js, React, and Tailwind CSS
          </div>
          <div className="w-1/3 text-center">
            <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                <ArrowUp className="h-4 w-4 mr-1 animate-bounce" />
                Back to top
              </Button>
            </div>
              <div className="text-xs text-muted-foreground mb-2 md:mb-0 w-1/3 text-end">
                © {currentYear} Piotr Szaran. All rights reserved.
              </div>
        </div>
    </footer>
  )
}

