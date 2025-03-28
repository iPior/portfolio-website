import Image from "next/image";
import { clsx } from "clsx"

interface SkillCardProps {
  name: string;
  svg: string;
}

export default function SkillCard({ name, svg }:SkillCardProps){


  return (
    <div className="flex flex-col rounded-lg p-2 items-center bg-background">
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