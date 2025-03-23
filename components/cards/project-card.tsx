import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  key: number;
  image: string;
  title: string;
  description: string;
  tags: Array<string>;
  liveUrl: string;
  githubUrl: string;
}

export default function SkillCard({ id, image, title, description, tags, liveUrl, githubUrl  }:ProjectCardProps){


  return (
    // <div className="flex flex-col rounded p-2 bg-foreground text-background items-center justify-between">
        <Card  className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
            />
            </div>
            <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {tags?.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-full">
                    {tag}
                </span>
                ))}
            </div>

            <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                </Link>
                </Button>
            </div>
            </CardContent>
        </Card>
// </div>
  )
}