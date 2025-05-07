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
  console.log(projects)

  // const projects = [
  //   {
  //     title: "SpotiDash",
  //     description: "SpotiDash is a web application that provides users with a personalized dashboard for exploring their favorite music on Spotify.",
  //     image: "/images/spotidash.png",
  //     tags: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Spotify API", "NextAuth.js"],
  //     githubUrl: "https://github.com/iPior/nextjs-spotify-dashboard",
  //   },
  //   {
  //     title: "AI Tic-Tac-Toe",
  //     description: "A React-based Tic Tac Toe game that lets users challenge Anthropic's Claude AI. Features a clean, intuitive interface with real-time game feedback.",
  //     image: "/images/tictactoe.png",
  //     tags: ["React", "Node.js", "Tailwind CSS", "Anthropic API", "Prompt Engineering"],
  //     githubUrl: "https://github.com/iPior/react-tictactoe-game",
  //   },
  //   {
  //     title: "Microsoft Teams Clone",
  //     description: "A recreation of Microsoft's Teams Calendar using HTML, CSS, and JavaScript.",
  //     image: "/images/calendar.png",
  //     tags: ["HTML", "CSS", "JavaScript"],
  //     liveUrl: "https://ipior.github.io/teams-calendar/",
  //     githubUrl: "https://github.com/iPior/teams-calendar",
  //   },
  // ]

  return (
    <section id="projects" className="scroll-mt-16">
      <FadeRight>
        <SectionHeader header="Projects"/>
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
                  liveUrl={project.liveDemo ? project.liveDemo : ""}
                  githubUrl={project.sourceCode}
                />
              </FadeUp>
            ))}
        </div>
      </BorderWrapper>
    </section>
  )
}