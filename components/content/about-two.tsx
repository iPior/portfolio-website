import Image from "next/image"
import BorderWrapper from "../border-wrapper"
import SkillCardSmall from '@/components/cards/skill-card-small'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Code, Laptop, GraduationCap, Heart, BookOpen, Clock, Speaker, Disc3, Trees, Gamepad2, Dumbbell, BookA, Palette, MapPin } from "lucide-react"

export function AboutTwo() {

  const badgeFacts = [
    { icon: <Code className="h-4 w-4" />, label: "Full-Stack Developer" },
    { icon: <Clock className="h-4 w-4" />, label: "1 Year of Experience" },
    { icon: <MapPin className="h-4 w-4" />, label: "Toronto" },
  ]

  const interests = [
    "WebSocket requests",
    "Optiziming web application performance", 
    "Intermediate Next.js and TypeScript concepts",
    "MongoDB and Prisma",
    "React Native and Electron",
  ]

  const passions = [
    "Problem Solving",
    "UI/UX Design",
    "New Technologies",
    "Continuous Learning",
    "Music",
    "Nature and Hikes",
    "Gym",
    "Gaming",
    "Fashion",
    "Travelling"
  ]

  const funFacts = [
    {
      label: "I collect Ontario provincial park badges",
      icon: <Trees className="ml-2"/>,
    },
    {
      label: "I DJ and have produced a song before",
      icon: <Speaker className="ml-2 "/>,
    },
    {
      label: "I rank in the top 0.6% of Rocket League players",
      icon: <Gamepad2 className="ml-2 "/>,
    },
    {
      label: "My heaviest gym lift was a 365lbs back squat",
      icon: <Dumbbell className="ml-2 "/>,
    },
    {
      label: "Drum and bass is my favorite genre of music",
      icon: <Disc3 className="ml-2 "/>,
    },
    {
      label: "I fluently speak, read, and write in Polish",
      icon: <BookA className="ml-2 "/>,
    },
  ];

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
    <section id="about" className="scroll-mt-16">
        <BorderWrapper className="mt-24">
          <h1 className="text-6xl font-bold px-4">About Me</h1>
        </BorderWrapper>
        <BorderWrapper className="container mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">

          {/* Profile Image Column */}
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between items-center text-center space-y-4">
              <h3 className="text-3xl font-bold mb-4">Piotr Szaran</h3>

                <div className="relative w-48 h-48 md:w-58 md:h-58 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image src="/images/headshot.jpg" alt="Profile" fill className="object-cover" />
                </div>
                  
                <div className="flex flex-wrap justify-center gap-2 w-2/3">
                  {badgeFacts.map((fact, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1 px-2 py-1">
                      {fact.icon}
                      <span>{fact.label}</span>
                    </Badge>
                  ))}
                </div>
                <div>

                <Button className="mr-2">
                  <a href="mailto:szaranpiotr@gmail.com" target="_blank" rel="noopener noreferrer">
                    Contact Me
                  </a>
                </Button>
                <Button >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
                </div>

            </CardContent>
          </Card>
          {/* </div> */}

          {/* What I Do Column */}
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Honors Bachelor of Science</h4>
                  <p className="text-sm text-muted-foreground">University of Toronto, 2023</p>
                  <ul className="mt-2">
                    <li>
                      <span className="text-primary text-md mr-2">•</span>
                      <span className="text-sm">Statistics Major</span>
                    </li>
                    <li>
                      <span className="text-primary text-md mr-2">•</span>
                      <span className="text-sm">Computer Science Minor</span>
                    </li>
                    <li>
                      <span className="text-primary text-md mr-2">•</span>
                      <span className="text-sm">Mathematics Major</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Interested in Learning More About</h3>
                </div>
                <ul className="space-y-3 flex flex-col mt-2">
                  {interests.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
              
            </CardContent>
          </Card>

          {/* Skills Column */}
          <Card className="h-full">
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Skills</h3>
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

          {/* Passions Column */}
          {/* <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">Things I Love</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {passions.map((passion, index) => (
                  <Badge key={index} className="px-3 py-1">
                    {passion}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <Laptop className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Fun Facts</h3>
                </div>

                <ul className="space-y-3">
                {funFacts.map((fact, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-2">•</span>
                    <span className="flex items-center">{fact.label}{fact.icon}</span>
                  </li>
                ))}
              </ul>
              </div>
            </CardContent>
          </Card> */}
        </BorderWrapper>
    </section>
  )
}

