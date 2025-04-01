import { Card, CardContent } from "@/components/ui/card"
import {GraduationCap,  BookOpen } from "lucide-react"

export default function EducationCard(){

    const interests = [
        "WebSocket requests",
        "Optiziming web application performance", 
        "Intermediate Next.js and TypeScript concepts",
        "MongoDB and Prisma",
        "React Native and Electron",
      ]


  return (
    <Card className="h-full">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-bold">Education</h3>
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
          <h3 className="text-xl font-bold">Interested in Learning More About</h3>
        </div>
        <ul className="space-y-3 flex flex-col mt-2">
          {interests.map((item, index) => (
            <li key={index} className="flex items-start text-md">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
      </div>
      
    </CardContent>
  </Card>
  )
}