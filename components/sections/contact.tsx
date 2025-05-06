import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { FadeUp } from "@/components/animations/fade-up"
import { ContactForm } from "@/components/contact-form"
import { MusicPremiumPackageCard } from "@/components/cards/music-premium-card"
import { MusicStandardPackageCard } from "@/components/cards/music-standard-card"

export function DjContact() {
  return (   
      <section id="contact" className="mx-auto w-full">
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