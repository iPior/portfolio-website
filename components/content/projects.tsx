import ProjectCard from "@/components/cards/project-card"
import BorderWrapper from "@/components/wrappers/border-wrapper"
// import spotidash from "@/public/images/spotidash1."

export function Projects() {
  const projects = [
    {
      title: "SpotiDash",
      description: "SpotiDash is a web application that provides users with a personalized dashboard for exploring their favorite music on Spotify.",
      image: "/images/spotidash.png",
      tags: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Spotify API", "NextAuth.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/iPior/nextjs-spotify-dashboard",
    },
    {
      title: "AI Tic-Tac-Toe",
      description: "A React-based Tic Tac Toe game that lets users challenge Anthropic's Claude AI. Features a clean, intuitive interface with real-time game feedback.",
      image: "/images/tictactoe.png",
      tags: ["React", "Node.js", "Tailwind CSS", "Anthropic API", "Prompt Engineering"],
      githubUrl: "https://github.com/iPior/react-tictactoe-game",
    },
    {
      title: "Microsoft Teams Clone",
      description: "A recreation of Microsoft's Teams Calendar using HTML, CSS, and JavaScript.",
      image: "/images/calendar.png",
      tags: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://ipior.github.io/teams-calendar/",
      githubUrl: "https://github.com/iPior/teams-calendar",
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16">
      <BorderWrapper className="mt-18 md:mt-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
      </BorderWrapper>
      <BorderWrapper className="container mt-2 md:mt-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-4">
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
      </BorderWrapper>
    </section>
  )
}