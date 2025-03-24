import ProjectCard from "@/components/cards/project-card"
import BorderWrapper from "../border-wrapper"

export function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and Tailwind CSS.",
      image: "https://placehold.co/400x600",
      tags: ["Next.js", "React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with payment integration and user authentication.",
      image: "https://placehold.co/400x600",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Three",
      description: "A mobile-responsive dashboard with data visualization.",
      image: "https://placehold.co/400x600",
      tags: ["TypeScript", "Chart.js", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="">
      <BorderWrapper className="mt-24">
        <h1 className="text-6xl font-bold">Projects</h1>
      </BorderWrapper>
      <BorderWrapper className="mt-4">
        <div className="container bg-white/15">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
            {projects.map((project, id) => (
              <ProjectCard 
                key={id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                See More on GitHub
              </Link>
            </Button>
          </div> */}
        </div>
      </BorderWrapper>
    </section>
  )
}