import ProfileCard from "@/components/cards/profile-card"
import EducationCard from "@/components/cards/education-card"
import PassionsCard from "@/components/cards/passions-card"
import { BorderWrapper } from "@/components/wrappers/border-wrapper";
import { SectionHeader } from "@/components/headers/section-header";

export function About() {

  return (
    <section id="about" className="scroll-mt-16">
        <SectionHeader header="About me"/>
        <BorderWrapper className="container mt-2 md:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 ">
          <ProfileCard />
          <EducationCard />
          <PassionsCard />
        </BorderWrapper>
    </section>
  )
}

