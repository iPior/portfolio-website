import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Media } from "@/payload-types";

interface ProjectCardProps {
  image: Media | string | number | null; // for Payload media;
  title: string;
  description: string;
  tags: string;
  slug: string;
  liveUrl?: string;
  githubUrl: string;
}

export default function ProjectCard({ image, title, description, tags, slug, liveUrl, githubUrl  }:ProjectCardProps){
    const parsedTags = tags.split(',').map((item) => item.trim().replace(/^"|"$/g, ''));

    return (
    <Card className=" md:h-150 pt-0 group hover:bg-muted/90">
        <Image
            src={image && typeof image === 'object' && 'url' in image ? image.url || '/fallback-image.jpg' : '/fallback-image.jpg'}
            alt={image && typeof image === "object" && "alt" in image ? image.alt || "Project image" : "Project image"}
            width={600}
            height={400}
            className="h-60 md:h-1/2 object-cover object-top overflow-hidden justify-start rounded-t-xl "
        />

        <CardContent className="md:h-1/2 px-4 flex flex-col justify-between">
            
            <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:scale-110 group-hover:translate-x-5 transition-transform duration-200 ease-in-out">{title}</h3>
                <p className="mb-4 text-foreground/70 ">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {parsedTags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="px-2 py-1 text-xs md:text-sm">
                        {tag}
                    </Badge>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
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
                <Button variant="default" size="sm" asChild>
                <Link href={`/blogs/${slug}`} target="_blank" rel="noopener noreferrer">
                    <Newspaper className="h-4 w-4 mr-2" />
                    Read More
                </Link>
                </Button>
            </div>
        </CardContent>
    </Card>
  )
}