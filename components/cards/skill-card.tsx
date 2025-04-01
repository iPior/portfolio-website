import SkillCardSmall from "@/components/badges/skill-badge-small";
import { Card, CardContent } from "@/components/ui/card"
import {Code} from "lucide-react"

export default function SkillCard(){

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
      ];

  return (
    <Card className="h-full">
        <CardContent className="p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Skills</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {
                iconsArray.map((icon, index) => (
                    <SkillCardSmall key={index} name={icon.name} svg={icon.svg}/>
                ))
                }
            </div>
        </CardContent>
    </Card>
  )
}