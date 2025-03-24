import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t"> 
      <div className="container mx-auto py-8 md:py-22 border-l border-r">
        <div className="h-full px-8 flex flex-col md:flex-row justify-between items-center">

          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-center">
            {/* <nav className="flex gap-4 md:gap-6 justify-center" > */}
              {/* <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Me
              </Link> */}
            {/* </nav> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
