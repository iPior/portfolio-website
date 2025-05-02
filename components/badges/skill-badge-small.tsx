import Image from "next/image";
import { clsx } from "clsx"

interface SkillCardProps {
  name: string;
  svg: string;
}

export default function SkillBadgeSmall({ name, svg }:SkillCardProps){


  return (
    <div className="relative p-1 flex flex-col items-center text-card-foreground hover:scale-110 transition-transform duration-200 ease-in-out">
        <Image 
          src={svg} 
          alt={name}
          height={90}
          width={90}
          className={clsx(name === 'Next.js' && "dark:invert", "mb-2")}
        />    
        <h2 className="text-sm text-center font-bold">{name}</h2>
    </div>
  )
}