import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { FadeRight } from "@/components/animations/fade-right"
import { FadeUp } from "@/components/animations/fade-up"
import { SectionHeader } from "@/components/headers/section-header"
import { ContactForm } from "@/components/contact-form"

export function DjContact() {
  return (   
      <section id="contact" className="mx-auto w-full">
        <BorderWrapper className="px-3 py-2 xs:pb-3 sm:pb-4 lg:px-1 lg:pb-6 font-extrabold text-7xl xs:text-8xl sm:text-9xl lg:text-hero uppercase">
            <FadeRight>
                <SectionHeader header="Book me as a DJ"/>
            </FadeRight>
            <BorderWrapper className="mt-2 md:mt-4">
              <FadeUp>
                <ContactForm />
              </FadeUp>
            </BorderWrapper>
        </BorderWrapper>
      </section>
  )
}