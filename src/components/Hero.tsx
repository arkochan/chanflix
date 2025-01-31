import React from 'react';
import { cn } from '@/lib/utils/cn';
import HeroSearch from './HeroSearch';

export default function Hero({ className }: { className?: string }) {
  return (
    <div
      className={cn("bg-black text-white font-extrabold flex h-dvh text-4xl", className)}
      style={{
      }}
    >
      {/* <HeroSearch /> */}

    </div>);

}
