import BorderWrapper from "../border-wrapper"
import ProfileCard from "@/components/cards/profile-card"
import EducationCard from "@/components/cards/education-card"
import SkillCard from "@/components/cards/skill-card"

export function AboutTwo() {

  return (
    <section id="about" className="scroll-mt-16">
        <BorderWrapper className="mt-24">
          <h1 className="text-6xl font-bold px-4">About Me</h1>
        </BorderWrapper>
        <BorderWrapper className="container mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">
          <ProfileCard />
          <EducationCard />
          <SkillCard />
        </BorderWrapper>
    </section>
  )
}

