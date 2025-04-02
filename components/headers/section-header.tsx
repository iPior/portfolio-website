import { BorderWrapper } from "@/components/wrappers/border-wrapper"

interface SectionHeaderProps {
    header: string;
    className?: string;
}

export function SectionHeader({header}: SectionHeaderProps) {

  return (
      <BorderWrapper className="mt-18 md:mt-24 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">{header}</h1>
      </BorderWrapper>
  )
}