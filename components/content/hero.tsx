import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import PatternWrapper from "@/components/PatternWrapper"
import BorderWrapper from "@/components/border-wrapper"

export function Hero() {
  return (
    // <PatternWrapper>
    //   <section id="hero" className="relative p-20 md:py-32 flex">
    //     <div className="w-1/3 border-b">
    //       <Image
    //         src={"https://placehold.co/400x400"}
    //         alt={"Profile picture"}
    //         unoptimized
    //         width={400}
    //         height={400}
    //         className="mx-auto"
    //         />
    //     </div>
    //     <div className="w-2/3 flex flex-col items-center justify-center text-center">
    //       <h1 className="text-4xl md:text-6xl font-bold mb-6">
    //         Hi, I'm <span className="text-accent underline underline-offset-8 text-7xl">Piotr Szaran</span>
    //       </h1>
    //       <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
    //         I'm a <span className="text-accent-muted">full-stack</span> developer based in <span className="text-accent-muted">Mississauga, Ontario</span>.
    //       </p>

    //       {/* <div className="flex flex-col sm:flex-row gap-4">
    //         <Button asChild size="lg">
    //         <Link href="#projects">View My Work</Link>
    //         </Button>
    //         <Button variant="outline" size="lg" asChild>
    //         <Link href="#contact">Contact Me</Link>
    //         </Button>
    //         </div> */}
    //       <div className="grid grid-cols-2 gap-4">
    //           <Card>
    //             <CardContent>
    //               <h3 className="font-bold text-lg mb-1">Education</h3>
    //               <p className="text-sm text-muted-foreground">Honours Bachelor's in Science</p>
    //             </CardContent>
    //           </Card>
    //           <Card>
    //             <CardContent>
    //               <h3 className="font-bold text-lg mb-1">Experience</h3>
    //               <p className="text-sm text-muted-foreground">1 Year in Development</p>
    //             </CardContent>
    //           </Card>
    //         </div>

    //     </div>
    //   </section>
    // </PatternWrapper>

      // <section id="hero" className="relative p-20 md:py-32 flex">
      <>
        {/* <PatternWrapper> */}
        {/* </PatternWrapper> */}
        {/* <PatternWrapper> */}
        {/* </PatternWrapper> */}
        {/* <PatternWrapper> */}
        {/* </PatternWrapper> */}
        
        {/* <PatternWrapper className="pt-20  "> */}
          <section className="container mx-auto border my-2">
          <h1 className="text-xl text-muted-foreground w-full font-bold mt-24 indent-1">Hi, I'm</h1>
          <BorderWrapper>
            <h1 className=" tracking-tight font-bold text-9xl indent-[-8]">Piotr Szaran</h1>
          </BorderWrapper>
          <BorderWrapper className="mt-4">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl indent-1">
              I'm a <span className="underline hover:text-accent animate-pulse">full-stack</span> developer based in <span className="underline hover:text-accent animate-pulse">Mississauga</span>, Ontario.
            </p>
          </BorderWrapper>
          </section>
        {/* </PatternWrapper> */}
        </>
  )
}

