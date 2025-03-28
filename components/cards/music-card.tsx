import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface MusicCardProps {
  title: string;
  description: string;
  src: string;
}

export default function MusicCard({ title, description, src }: MusicCardProps) {
  return (
    <Card className="bg-background pt-0">
      <div className="h-72 rounded-t-2xl px-1 pt-1">
          <iframe
            width="100%"
            height="100%"
            src={src}
            style={{ borderTopLeftRadius: "0.625rem", borderTopRightRadius: "0.625rem" }}
            ></iframe>
        </div>
        <CardContent className="px-4 flex flex-col justify-between">

            <div className="">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="  text-md">{description}</p>
            </div>
        </CardContent>
    </Card>

    // <div className="rounded-2xl h-32">
    //   <iframe
    //     width="100%"
    //     height="100%"
    //     src={src}
    //     style={{ borderRadius: "0.625rem", borderTopRightRadius: "0.625rem", padding: "0.5rem", background: "transparent" }}
    //     ></iframe>
    //   </div>

  );
}