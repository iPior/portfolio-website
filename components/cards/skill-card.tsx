import Image from "next/image";

interface SkillCardProps {
  icon: string;
  iconName: string;
  svg: string;
}

export default function SkillCard({ icon, iconName, svg }:SkillCardProps){


  return (
    <div className="flex flex-col rounded-lg p-2 items-center bg-background">
        {/* <i className={`${icon} mb-2`}></i> */}
        {/* <div className="relative mb-2"> */}
          <Image 
            src={svg} 
            alt={iconName}
            width={120}
            height={120}
            />    
        {/* </div> */}
        <h2 className="text-lg text-center font-bold">{iconName}</h2>
    </div>
  )
}