import Image from "next/image"
import BorderWrapper from "../border-wrapper"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Code, Laptop, GraduationCap, Heart, BookOpen, Clock, Speaker, Disc, Trees } from "lucide-react"

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

  const hobbies = [
    "Playing the guitar",
    "Hiking",
    "Photography",
    "Cooking",
    "Traveling",
  ]

  return (
    <section id="about">
        <BorderWrapper className="mt-24">
          <h1 className="text-6xl font-bold px-4">About Me</h1>
        </BorderWrapper>
        <BorderWrapper className="container mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">

          {/* Profile Image Column */}
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col justify-between items-center text-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary mb-4">
                  <Image src="/images/headshot.jpg" alt="Profile" fill className="object-cover" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Piotr Szaran</h3>
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
                  <h3 className="text-lg font-bold">Currently Learning</h3>
                </div>
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
                  <Laptop className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">Fun Facts</h3>
                </div>

                <ul className="space-y-3">
                {whatIDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              </div>
            </CardContent>
          </Card>
        </BorderWrapper>
    </section>
  )
}

