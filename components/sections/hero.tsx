import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { FadeRight } from "@/components/animations/fade-right"

export function Hero() {
  return (   
      <section id="hero" className="mx-auto w-full">
        <p className="text-md md:text-xl text-muted-foreground w-full font-bold mt-18 md:mt-24 px-4">Hi, I&apos;m</p>
        <BorderWrapper className="px-3 py-2 xs:pb-3 sm:pb-4 lg:px-1 lg:pb-6 font-extrabold text-7xl xs:text-8xl sm:text-9xl lg:text-hero uppercase">
          <FadeRight>
            <h1 className="tracking-tight flex items-center leading-15 xs:leading-20 sm:leading-25 lg:leading-35">Piotr</h1>
          </FadeRight>
          <FadeRight>
            <h1 className="tracking-tight flex items-center leading-15 xs:leading-20 sm:leading-25 lg:leading-35">Szaran</h1>
          </FadeRight>
        </BorderWrapper>
        <BorderWrapper className="mt-2 md:mt-4 px-4">
          <p className="text-md sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
            A <span className="text-accent animate-pulse">Web Developer</span> based in <span className="">Toronto</span>.
          </p>
        </BorderWrapper>
      </section>
  )
}