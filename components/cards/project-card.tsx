import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  liveUrl?: string;
  githubUrl: string;
}

export default function SkillCard({ image, title, description, tags, liveUrl, githubUrl  }:ProjectCardProps){
  return (
    <Card className="h-150 pt-0 ">
        <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-1/2 object-cover object-top overflow-hidden justify-start rounded-t-xl"
        />

        <CardContent className="h-1/2 px-4 flex flex-col justify-between">

            <div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="mb-4 text-foreground/70">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="px-2 py-1 text-sm">
                        {tag}
                    </Badge>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <Button variant="default" size="sm" asChild>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                </Link>
                </Button>
                {liveUrl &&   <Button variant="default" size="sm" asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                </Link>
                </Button>}
            </div>
        </CardContent>
    </Card>
  )
}