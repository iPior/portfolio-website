import { Card, CardContent } from "@/components/ui/card"

interface MusicCardProps {
  title: string;
  description: string;
  src: string;
}

export default function MixCard({ title, description, src }: MusicCardProps) {
  return (
    <Card className="bg-background pt-0">
      <div className="h-52 xl:h-72 rounded-t-2xl px-1 pt-1">
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

  );
}