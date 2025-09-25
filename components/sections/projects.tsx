import ProjectCard from "@/components/cards/project-card"
import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { SectionHeader } from "@/components/headers/section-header"
import { FadeUp } from "@/components/animations/fade-up"
import { FadeRight } from "../animations/fade-right"

import type { Payload } from "payload"
import { getPayload } from 'payload'
import config from '@payload-config'
import { Project } from "@/payload-types"


export async function Projects() {
  const payload = await getPayload({ config })
  const getPayloadPosts = async (payload:Payload) => {
    const posts = await payload.find({
      collection: 'projects',
      limit: 10,
      sort: '-id',
    })
    return posts.docs || null
  }
  const projects = await getPayloadPosts(payload)

  return (
    <section id="projects" className="scroll-mt-16">
      <FadeRight>
        <SectionHeader header="Personal Projects"/>
      </FadeRight>
      <BorderWrapper className="container mt-2 md:mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-4">
            {projects.map((project: Project, id) => (
              <FadeUp key={id}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.technologies}
                  slug={project.slug}
                  liveUrl={project.liveDemo}
                  githubUrl={project.sourceCode}
                />
              </FadeUp>
            ))}
        </div>
      </BorderWrapper>
    </section>
  )
}