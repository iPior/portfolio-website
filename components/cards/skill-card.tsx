import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: string;
  iconName: string;
}

export default function SkillCard({ icon, iconName }:SkillCardProps){


  return (
    <div className="flex flex-col rounded p-2 bg-foreground text-background items-center justify-between">
        <i className={`${icon} mb-2`}></i>
        <h2 className="text-lg text-center">{iconName}</h2>
    </div>
  )
}