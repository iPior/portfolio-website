import ProfileCard from "@/components/cards/profile-card"
import EducationCard from "@/components/cards/education-card"
import SkillCard from "@/components/cards/skill-card"
import { BorderWrapper } from "@/components/wrappers/border-wrapper";
import { SectionHeader } from "@/components/headers/section-header";
import { FadeUp } from "@/components/animations/fade-up";
import { FadeRight } from "../animations/fade-right";

export function AboutTwo() {

  return (
    <section id="about" className="scroll-mt-16">
        <FadeRight>
          <SectionHeader header="About me"/>
        </FadeRight>
        <BorderWrapper className="container mt-2 md:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 ">
          <FadeUp>
            <ProfileCard  className="order-1 md:order-0"/>
          </FadeUp>
          <FadeUp>
            <EducationCard className="order-3 md:order-0" />
          </FadeUp>
          <FadeUp>
            <SkillCard className="order-2 md:order-0" />
          </FadeUp>
        </BorderWrapper>
    </section>
  )
}

