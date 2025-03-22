import PatternWrapper from "@/components/PatternWrapper"
import Image from "next/image"


export function Skills() {
  // const skillCategories = [
  //   {
  //     id: 1,
  //     title: "Frontend Development",
  //     icon: <Layout className="h-8 w-8 text-primary" />,
  //     skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
  //   },
  // ]

  return (
    <>
      <PatternWrapper>
          <div className="mt-24"></div>
      </PatternWrapper>
      <PatternWrapper>
          <h1 className="text-6xl font-bold">Skills</h1>
      </PatternWrapper>
      <PatternWrapper>
          <div className="mt-4"></div>
      </PatternWrapper>
      <PatternWrapper>
        <section id="skills" className="">
          <div className="container flex items-center py-2">

            

            <Image 
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
          />

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



          
          
          </div>
        </section>
      </PatternWrapper>
    </>
  )
}

