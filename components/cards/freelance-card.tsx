
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Media } from "@/payload-types";
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Newspaper } from "lucide-react"



interface FreelanceCardProps {
  image: Media | string | number | null; // for Payload media;
  title: string;
  description: string;
  technologies: string;
  liveUrl?: string | null;
  slug?: string | null;
}

export default function FreelanceCard({ image, title, description, technologies, liveUrl, slug }:FreelanceCardProps){
  const parsedTechnologies = technologies.split(',').map((item) => item.trim().replace(/^"|"$/g, ''));

  return (
    <div className="bg-card border-2 rounded-xl group">
      <div className="relative bg-muted/80 rounded-t-2xl">
        <Image
            src={image && typeof image === 'object' && 'url' in image ? image.url || '/fallback-image.jpg' : '/fallback-image.jpg'}
            alt={image && typeof image === "object" && "alt" in image ? image.alt || "Project image" : "Project image"}
            width={1200}
            height={1200}
            className="w-full h-full object-cover object-top justify-start py-4 group-hover:scale-110 transition-transform duration-200 ease-in-out"
        />
      </div>
      <div className="bg-card rounded-b-xl p-6 border-t">
        <h3 className="text-xl md:text-2xl font-extrabold mb-2">{title}</h3>
        <p className="mb-4 text-foreground/70 ">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {parsedTechnologies?.map((tag) => (
            <Badge key={tag} variant="outline" className="px-2 py-1 text-xs md:text-sm">
              {tag}
          </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {liveUrl && <Button variant="default" size="sm" asChild>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View
          </Link>
          </Button>}
          {slug && <Button variant="default" size="sm" asChild>
          <Link href={`/blogs/${slug}`} target="_blank" rel="noopener noreferrer">
              <Newspaper className="h-4 w-4" />
              Read More
          </Link>
          </Button>}
      </div>
      </div>
    </div>
  )
}