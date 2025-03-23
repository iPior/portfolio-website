import { ReactNode } from 'react';
import { cn } from '@/lib/utils'

interface BorderWrapperProps {
  children: ReactNode;
  className?: string
}

export default function BorderWrapper({ children, className }: BorderWrapperProps) {
  return (

    <div className={cn("border-b border-t w-screen mx-auto", className)}> 
        {children}
    </div>
  );
} 
