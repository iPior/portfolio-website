import SkillCard from '@/components/badges/skill-badge'
import BorderWrapper from "@/components/wrappers/border-wrapper";

export function Skills() {

  const iconsArray = [
    {
      name: "HTML5",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    // {
    //   iconName: "GitHub",
    //   svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    // }, 
  ];

  return (
    <section id="skills" className="scroll-mt-16">
      <BorderWrapper className="mt-18 md:mt-24 px-2 md:px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Skills</h1>
      </BorderWrapper>
      <BorderWrapper className="container mt-2 md:mt-4">
        <div className=" lg:flex text-xl md:text-9xl gap-2 md:gap-4 p-2 md:p-4 grid xl:justify-center grid-cols-2 sm:grid-cols-3">
          {
            iconsArray.map((icon, index) => (
              <SkillCard key={index} name={icon.name} svg={icon.svg}/>
            ))
          }
        </div>
      </BorderWrapper>
    </section>
)
}