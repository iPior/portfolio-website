import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Headphones, Radio } from "lucide-react"

export function MusicCard() {
   // Music preferences
  const musicGenres = ["Indie Rock", "Alternative", "Electronic", "Hip Hop", "Jazz"]
  const favoriteArtists = ["Arctic Monkeys", "Tame Impala", "Kendrick Lamar", "Daft Punk", "The Strokes"]
  return (
        <Card className="mt-8 text-sm w-full">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Music className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold">My Music Taste</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Genres Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Radio className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Favorite Genres</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {musicGenres.map((genre, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Artists Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Headphones className="h-4 w-4 text-primary" />
                  <h4 className="font-medium">Favorite Artists</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {favoriteArtists.map((artist, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {artist}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Currently Listening Section */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center gap-2 mb-4">
                <Music className="h-4 w-4 text-primary" />
                <h4 className="font-medium">Currently On Repeat</h4>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-4">
                <div className="relative w-16 h-16 min-w-16 rounded-md overflow-hidden">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Album cover" fill className="object-cover" />
                </div>
                <div>
                  <h5 className="font-medium">Song Title</h5>
                  <p className="text-sm text-muted-foreground">Artist Name</p>
                  <p className="text-xs text-muted-foreground mt-1">Album Name (Year)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

  );
}