import ProjectCard from "@/components/cards/project-card"
import BorderWrapper from "../border-wrapper"

export function Projects() {
  const projects = [
    {
      title: "SpotiDash",
      description: "SpotiDash is a web application that provides users with a personalized dashboard for exploring their favorite music on Spotify.",
      image: "https://placehold.co/400x600",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Spotify API", "NextAuth.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/iPior/nextjs-spotify-dashboard",
    },
    {
      title: "AI Tic-Tac-Toe",
      description: "A React-based Tic Tac Toe game that lets users challenge Anthropic's Claude AI. Features a clean, intuitive interface with real-time game feedback.",
      image: "https://placehold.co/400x600",
      tags: ["React", "Node.js", "Tailwind CSS", "Anthropic API", "Prompt Engineering"],
      githubUrl: "https://github.com/iPior/react-tictactoe-game",
    },
    {
      title: "Microsoft Teams Clone",
      description: "A recreation of Microsoft's Teams Calendar using HTML, CSS, and JavaScript.",
      image: "https://placehold.co/400x600",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ipior.github.io/teams-calendar/",
      githubUrl: "https://github.com/iPior/teams-calendar",
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16">
      <BorderWrapper className="mt-24">
        <h1 className="text-6xl font-bold">Projects</h1>
      </BorderWrapper>
      <BorderWrapper className="mt-4">
        <div className="container bg-foreground/5 dark:bg-foreground/15">

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