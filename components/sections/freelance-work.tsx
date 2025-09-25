import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { SectionHeader } from "@/components/headers/section-header"
// import { FadeUp } from "@/components/animations/fade-up"
import { FadeRight } from "../animations/fade-right"

// import type { Payload } from "payload"
// import { getPayload } from 'payload'
// import config from '@payload-config'
// import { Project } from "@/payload-types"


export async function FreelanceWork() {

  return (
    <section id="freelance-work" className="scroll-mt-16">
      <FadeRight>
        <SectionHeader header="Freelance Work"/>
      </FadeRight>
      <BorderWrapper className="container mt-2 md:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-4">
        
        </div>
      </BorderWrapper>
    </section>
  )
}