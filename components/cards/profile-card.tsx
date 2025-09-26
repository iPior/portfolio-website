import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Code,  Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    className?: string;
}

export default function ProfileCard({className}:ProjectCardProps){

    const badgeFacts = [
        { icon: <Code className="h-4 w-4" />, label: "Web Developer" },
        { icon: <Clock className="h-4 w-4" />, label: "2+ Year of Experience" },
        { icon: <MapPin className="h-4 w-4" />, label: "Toronto" },
    ]

  return (
    <Card className={cn("h-full bg-transparent md:bg-card md:hover:bg-muted/90 border-0 md:border p-0 md:py-6 shadow-none md:shadow-sm group", className)}>
        <CardContent className="p-2 md:p-6 flex flex-col justify-between md:items-center space-y-4">
        {/* <h3 className="text-4xl font-bold mb-4 md:block hidden">Piotr Szaran</h3> */}
        <div className="relative w-68 h-68 md:w-58 md:h-58 rounded-3xl overflow-hidden border shadow-2xl mb-4 group-hover:scale-105 transition-transform duration-200 ease-in-out">
            <Image src="/images/headshot.jpg" alt="Profile" fill className="object-cover" />
        </div>
        <h3 className="text-xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-200 ease-in-out">Piotr Szaran</h3>

        <div className="flex flex-wrap md:justify-center gap-2 w-4/5 md:w-2/3">
            {badgeFacts.map((fact, index) => (
            <Badge key={index} variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs md:text-sm">
                {fact.icon}
                <span>{fact.label}</span>
            </Badge>
            ))}
        </div>
        <div>

        <Button className="mr-2 text-md md:text-lg group-hover:scale-105 group-hover:translate-x-[-1] transition-transform duration-200 ease-in-out">
            <a href="mailto:szaranpiotr@gmail.com" target="_blank" rel="noopener noreferrer">
            Contact Me
            </a>
        </Button>
        <Button className="text-md md:text-lg group-hover:scale-105 group-hover:translate-x-1 transition-transform duration-200 ease-in-out">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
            </a>
        </Button>
        </div>

    </CardContent>
    </Card>
  )
}