import { DjHero } from "@/components/sections/dj-hero";
import { Music } from "@/components/sections/music";
import { DjContact } from "@/components/sections/contact";
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"

export default async function DJPage() {
  return (
    <main className="h-full">
      <PatternWrapper>
        <DjHero />
        <DjContact />
        <Music />
      </PatternWrapper>
    </main>
  )
}
