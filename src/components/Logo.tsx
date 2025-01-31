import React from 'react';
import { cn } from '@/lib/utils/cn';

export default function Logo({ className }: { className?: string }) {
  return (<div className={cn("text-white flex items-center text-center justify-center flex-row size-fit", className)} >
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 82 150" height={70}>
      <path d="M9.594 46.257c-10.573-10.58-10.573-27.748 0-38.32 10.573-10.58 27.747-10.58 38.32 0L76.66 36.674v38.32l-38.32.006L9.594 46.257Z"
      />
      <path d="M28.752 142.07.007 113.327l.006-38.314 38.315-.006 28.744 28.744c10.573 10.574 10.573 27.748 0 38.32-10.573 10.58-27.747 10.58-38.32 0Z" />
    </svg>
    <span className="text-white text-4xl font-extrabold ">ChanFlix</span>
  </div>);
}
