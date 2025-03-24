import PatternWrapper from "@/components/pattern-wrapper"
import SkillCard from '@/components/cards/skill-card'
import BorderWrapper from "@/components/border-wrapper";

export function Skills() {

  const iconsArray = [
    {
      icon: "devicon-html5-plain colored",
      iconName: "HTML5",
    },
    {
      icon: "devicon-css3-plain colored",
      iconName: "CSS3",
    },
    {
      icon: "devicon-javascript-plain colored",
      iconName: "JavaScript",
    },
    {
      icon: "devicon-typescript-plain colored",
      iconName: "TypeScript",
    },
    {
      icon: "devicon-tailwindcss-original colored",
      iconName: "Tailwind CSS",
    },
    {
      icon: "devicon-python-plain colored",
      iconName: "Python",
    },
    {
      icon: "devicon-nextjs-plain",
      iconName: "Next.js",
    },
    {
      icon: "devicon-github-original",
      iconName: "GitHub",
    },
    {
      icon: "devicon-nodejs-plain colored ",
      iconName: "Node.js",
    },
  ];
  

  return (
    <section id="skills" className="">
      <BorderWrapper className="mt-24">
        <h1 className="text-6xl font-bold">Skills</h1>
      </BorderWrapper>
      <BorderWrapper className="mt-4">
        <div className="container flex justify-between p-2 text-9xl dark:bg-white/15">
          {
            iconsArray.map((icon, index) => (
              <SkillCard key={index} icon={icon.icon} iconName={icon.iconName} />
            ))
          }
        </div>
      </BorderWrapper>
    </section>
)
}
        
        {/* <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
            alt="HTML5"
            height={120}
            width={120}
          />
          <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
            alt="CSS"
            height={120}
            width={120}
          />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
          alt="JavaScript"
          height={120}
          width={120}
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
          alt="TypeScript"
          height={120}
          width={120}
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
          alt="TailwindCSS"
          height={120}
          width={120}
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
          alt="Python"
          height={120}
          width={120}
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
          alt="NextJS"
          height={120}
          width={120}
        />
        <Image 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" 
          alt="NextJS"
          height={120}
          width={120}
        /> */}    