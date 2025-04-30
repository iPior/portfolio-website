import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { FadeRight } from "@/components/animations/fade-right"
import Image from "next/image"

export function DjHero() {
  return (   
      <section id="djhero" className="mx-auto w-full">
        <p className="text-md md:text-xl text-muted-foreground w-full font-bold mt-18 md:mt-24 px-4">Hi, I&apos;m</p>
        <BorderWrapper className="px-3 lg:px-4 py-4 font-extrabold text-7xl xs:text-8xl sm:text-9xl lg:text-[14rem] uppercase">
          <FadeRight>
            <div className="flex w-full">

              <div className="h-full w-full relative">
                <Image 
                  width={800}
                  height={800}
                  src="/images/dj-logo-2.svg"
                  alt="DJ Pior"
                  className=""
                  />
              </div>
              {/* <div className="py-4">
                <h1 className="flex items-center font-[CubaoWide] leading-15 xs:leading-20 sm:leading-25 lg:leading-40">DJ</h1>
                <h1 className="flex items-center font-[CubaoWide] leading-15 xs:leading-20 sm:leading-25 lg:leading-40">Pior</h1>
              </div> */}
            </div>
          </FadeRight>
        </BorderWrapper>
        <BorderWrapper className="mt-2 md:mt-4 px-4">
          <p className="text-md sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
            A <span className="text-accent animate-pulse">Drum and Bass</span> enthusiast.
          </p>
        </BorderWrapper>
      </section>
  )
}