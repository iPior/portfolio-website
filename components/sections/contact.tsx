import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { FadeRight } from "@/components/animations/fade-right"
import { FadeUp } from "@/components/animations/fade-up"
import { SectionHeader } from "@/components/headers/section-header"
import { ContactForm } from "@/components/contact-form"
import { MusicCard } from "@/components/cards/music-card"
import { MusicPremiumPackageCard } from "@/components/cards/music-premium-card"
import { MusicStandardPackageCard } from "@/components/cards/music-standard-card"

export function DjContact() {
  return (   
      <section id="contact" className="mx-auto w-full">
        {/* <BorderWrapper className="px-3 py-2 xs:pb-3 sm:pb-4 lg:px-1 lg:pb-6 text-7xl xs:text-8xl sm:text-9xl lg:text-hero"> */}
            {/* <FadeRight>
                <SectionHeader header="Contact"/>
            </FadeRight> */}
        {/* </BorderWrapper> */}
            <BorderWrapper className="mt-2 md:mt-4 grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
                <div className="space-y-4">
                  <FadeUp>
                    <MusicPremiumPackageCard />
                  </FadeUp>
                  <FadeUp>
                    <MusicStandardPackageCard />
                  </FadeUp>
                </div>
                <FadeUp>
                  <ContactForm />
                </FadeUp>
            </BorderWrapper>
      </section>
  )
}