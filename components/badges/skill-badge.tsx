import Image from "next/image";
import { clsx } from "clsx"

interface SkillCardProps {
  name: string;
  svg: string;
}

export default function SkillBadge({ name, svg }:SkillCardProps){


  return (
    <div className="flex flex-col p-2 items-center bg-card text-card-foreground rounded-xl border shadow-sm hover:scale-105 transition-transform duration-200 ease-in-out hover:bg-card/90">
        <Image 
          src={svg} 
          alt={name}
          width={120}
          height={120}
          className={clsx(name === 'Next.js' && "dark:invert")}
        />    
        <h2 className="text-lg text-center font-bold">{name}</h2>
    </div>
  )
}