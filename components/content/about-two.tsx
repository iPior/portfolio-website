import BorderWrapper from "../wrappers/border-wrapper"
import ProfileCard from "@/components/cards/profile-card"
import EducationCard from "@/components/cards/education-card"
import SkillCard from "@/components/cards/skill-card"

export function AboutTwo() {

  return (
    <section id="about" className="scroll-mt-16">
        <BorderWrapper className="mt-18 md:mt-24 px-2 md:px-4">
          <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>
        </BorderWrapper>
        <BorderWrapper className="container mt-2 md:mt-4 grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 p-2 md:p-4 ">
          <ProfileCard />
          <EducationCard />
          <SkillCard />
        </BorderWrapper>
    </section>
  )
}

