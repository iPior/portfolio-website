import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Heart, Speaker, Disc3, Trees, Gamepad2, Dumbbell, BookA } from "lucide-react"

export default function PassionsCard(){
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

  return (
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
            {funFacts.map((fact, index) => (
                <li key={index} className="flex">
                <span className="text-primary mr-2">•</span>
                <span className="flex items-center">{fact.label}{fact.icon}</span>
                </li>
            ))}
            </ul>
            </div>
        </CardContent>
        </Card>
    )
}