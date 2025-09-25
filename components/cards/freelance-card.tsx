import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
// import Link from "next/link"
import { Media } from "@/payload-types";

interface FreelanceCardProps {
  image: Media | string | number | null; // for Payload media;

}

export default function FreelanceCard({ image }:FreelanceCardProps){
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
            
        </CardContent>
    </Card>
  )
}