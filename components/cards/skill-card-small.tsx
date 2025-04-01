import Image from "next/image";
import { clsx } from "clsx"

interface SkillCardProps {
  name: string;
  svg: string;
}

export default function SkillCardSmall({ name, svg }:SkillCardProps){


  return (
    <div className="relative p-1 flex flex-col items-center bg-card text-card-foreground hover:scale-105 transition-transform duration-200 ease-in-out hover:bg-card/90">
        <Image 
          src={svg} 
          alt={name}
          height={90}
          width={90}
          className={clsx(name === 'Next.js' && "dark:invert")}
        />    
        <h2 className="text-md text-center font-bold">{name}</h2>
    </div>
  )
}