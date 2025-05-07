import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { FadeDown } from "@/components/animations/fade-down"
import Image from "next/image"

export function DjHero() {
  return (   
      <section id="djhero" className="mx-auto w-full">
        <BorderWrapper className="px-3 lg:px-4 py-4 mt-18 font-extrabold text-7xl xs:text-8xl sm:text-9xl lg:text-[14rem] uppercase">
          <FadeDown>
            <div className="flex w-full">

              <div className="h-full w-full relative">
                <Image 
                  width={900}
                  height={900}
                  src="/images/dj-logo-2.svg"
                  alt="DJ Pior"
                  className="filter invert dark:invert-0"
                  />
              </div>
            </div>
          </FadeDown>
        </BorderWrapper>
      </section>
  )
}