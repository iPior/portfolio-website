import { DjHero } from "@/components/sections/dj-hero";
import { Music } from "@/components/sections/music";
import { DjContact } from "@/components/sections/contact";
import { PatternWrapper } from "@/components/wrappers/pattern-wrapper"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ Pior - Music & Mixes | Piotr Szaran",
  description: "Listen to DJ Pior's latest mixes featuring drum & bass, house music, and electronic beats. High-energy sets and freestyle mixes from Toronto-based DJ.",
  keywords: ["DJ Pior", "drum and bass", "house music", "electronic music", "mixes", "Toronto DJ", "freestyle mix"],
  openGraph: {
    title: "DJ Pior - Music & Mixes",
    description: "Listen to DJ Pior's latest mixes featuring drum & bass, house music, and electronic beats.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Pior - Music & Mixes",
    description: "Listen to DJ Pior's latest mixes featuring drum & bass, house music, and electronic beats.",
    images: ["https://www.piotrszaran.com/images/dj-pior.png"],
  },
  alternates: {
    canonical: "https://www.piotrszaran.com/music",
  },
};

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
