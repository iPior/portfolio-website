import Image from "next/image"
import BorderWrapper from "../border-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Code, Briefcase, GraduationCap, Heart, BookOpen, Clock, Speaker, Disc, Trees } from "lucide-react"

export function About() {
  // Quick facts about you
  const quickFacts = [
    { icon: <Code className="h-4 w-4" />, label: "Full-Stack Developer" },
    { icon: <Clock className="h-4 w-4" />, label: "1 Year of Experience" },
    { icon: <Disc className="h-4 w-4" />, label: "Drum and Bass Enthusiast" },
    { icon: <Speaker className="h-4 w-4" />, label: "DJ" },
    { icon: <Trees className="h-4 w-4" />, label: "Nature Lover" },
  ]

  // What you do
  const whatIDo = [
    "Build responsive web applications",
    "Create intuitive user interfaces",
    "Develop scalable backend systems",
    "Optimize for performance and SEO",
  ]

  // Things you love
  const passions = [
    "Open Source",
    "Problem Solving",
    "UI/UX Design",
    "New Technologies",
    "Teaching",
    "Continuous Learning",
  ]

  return (
    <section id="about">
        <BorderWrapper className="mt-24">
          <h1 className="text-5xl font-bold px-4">About Me</h1>
        </BorderWrapper>
        <BorderWrapper className="container mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-start p-4 ">

          {/* Profile Image Column */}
          {/* <div className="flex flex-col items-center text-center space-y-4"> */}
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between items-center text-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image src="/images/headshot.jpg" alt="Profile" fill className="object-cover" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Piotr Szaran</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {quickFacts.map((fact, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1 px-2 py-1">
                        {fact.icon}
                        <span>{fact.label}</span>
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="mt-2">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Contact Me
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
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">What I Do</h3>
              </div>

              <ul className="space-y-3">
                {whatIDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Currently Learning</h3>
                </div>

                {/* <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Senior Developer</span>
                    <span className="text-sm text-muted-foreground">2021 - Present</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Web Developer</span>
                    <span className="text-sm text-muted-foreground">2018 - 2021</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Junior Developer</span>
                    <span className="text-sm text-muted-foreground">2016 - 2018</span>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>

          {/* Passions Column */}
          <Card className="h-full">
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
              </div>

              {/* <div className="mt-6 pt-6 border-t text-sm text-muted-foreground italic">
                "I believe in creating technology that makes a positive impact on people's lives."
              </div> */}
            </CardContent>
          </Card>
        </BorderWrapper>
    </section>
  )
}

