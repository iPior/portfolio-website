import { ReactNode } from 'react';
import { cn } from '@/lib/utils'

interface BorderWrapperProps {
  children: ReactNode;
  className?: string
}

export function BorderWrapper({ children, className }: BorderWrapperProps) {
  return (
      <div className={cn("relative", 
      "before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-foreground/10 before:-left-[100vw]", 
      "after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-foreground/10 after:-left-[100vw]",
      className)}
      >
        {children}
      </div>
  );
} 

// <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]">