import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: string;
  iconName: string;
  svg?: string;
}

export default function SkillCard({ icon, iconName }:SkillCardProps){


  return (
    <div className="flex flex-col rounded-lg p-2 items-center justify-between bg-background">
        <i className={`${icon} mb-2`}></i>
        <h2 className="text-lg text-center font-bold">{iconName}</h2>
    </div>
  )
}