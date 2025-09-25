import { BorderWrapper } from "@/components/wrappers/border-wrapper"
import { Bungee } from "next/font/google";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

interface SectionHeaderProps {
    header: string;
    className?: string;
}

export function SectionHeader({header}: SectionHeaderProps) {

  return (
      <BorderWrapper className="mt-18 md:mt-24 px-4">
          <h1 className={`text-4xl md:text-6xl font-bold  ${bungee.className}`}>{header}</h1>
      </BorderWrapper>
  )
}