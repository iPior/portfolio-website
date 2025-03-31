import { ReactNode } from 'react';
import { cn } from '@/lib/utils'

interface PatternWrapperProps {
  children?: ReactNode;
  className?: string;
}

export default function PatternWrapper({ children, className }: PatternWrapperProps) {
  return (
    <div className="h-full overflow-hidden"> 
      <div className="container border-l border-r flex mx-auto h-full">
        <div className="w-1/20 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10"></div>
        <div className={cn("border-r border-l w-18/20", className)}>
          {children}
        </div>
        <div
          className="w-1/20 bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/10 md:block dark:[--pattern-fg:var(--color-white)]/10"
        ></div>
      </div>
    </div>
  );
}

{/* <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block dark:[--pattern-fg:var(--color-white)]/10 "></div> */}