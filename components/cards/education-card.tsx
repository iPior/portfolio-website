import { Card, CardContent } from "@/components/ui/card"
import {GraduationCap,  BookOpen } from "lucide-react"
import { cn } from "@/lib/utils";

interface EducationCardProps {
  className?: string;
}

export default function EducationCard({className}:EducationCardProps){

    const interests = [
        "WebSocket requests",
        "Optimizing web application performance", 
        "Intermediate Next.js and TypeScript concepts",
        "MongoDB and Prisma",
        "React Native and Electron",
      ]


  return (
    <Card className={cn("h-full bg-transparent md:bg-card md:border border-0 p-0 md:py-6 shadow-none md:shadow-sm", className)}>
    <CardContent className="p-4 md:p-6">
      <div className="flex items-center gap-2 mb-4 border-t md:border-t-0 pt-6 md:pt-0">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-xl md:text-2xl font-bold">Education</h3>
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
              <span className="text-sm">Mathematics Minor</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-xl md:text-2xl font-bold"> Learning About</h3>
        </div>
        <ul className="space-y-3 flex flex-col mt-2">
          {interests.map((item, index) => (
            <li key={index} className="flex items-start text-sm lg:text-md">
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