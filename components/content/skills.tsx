import SkillCard from '@/components/cards/skill-card'
import BorderWrapper from "@/components/border-wrapper";

export function Skills() {

  const iconsArray = [
    {
      icon: "devicon-html5-plain colored",
      iconName: "HTML5",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      icon: "devicon-css3-plain colored",
      iconName: "CSS3",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      icon: "devicon-javascript-plain colored",
      iconName: "JavaScript",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      icon: "devicon-typescript-plain colored",
      iconName: "TypeScript",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      icon: "devicon-tailwindcss-original colored",
      iconName: "Tailwind CSS",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      icon: "devicon-python-plain colored",
      iconName: "Python",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      icon: "devicon-nextjs-plain",
      iconName: "Next.js",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      icon: "devicon-github-original",
      iconName: "GitHub",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      icon: "devicon-nodejs-plain colored ",
      iconName: "Node.js",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
  ];

  return (
    <section id="skills" className="scroll-mt-16">
      <BorderWrapper className="mt-24">
        <h1 className="text-6xl font-bold">Skills</h1>
      </BorderWrapper>
      <BorderWrapper className="mt-4">
        <div className="container flex p-2 text-9xl bg-foreground/5 gap-2">
          {
            iconsArray.map((icon, index) => (
              <SkillCard key={index} icon={icon.icon} iconName={icon.iconName} svg={icon.svg}/>
            ))
          }
        </div>
      </BorderWrapper>
    </section>
)
}