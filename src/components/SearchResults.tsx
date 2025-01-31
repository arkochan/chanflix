"use client";
import React from 'react';
import { cn } from '@/lib/utils/cn';
import useSearchStore from '@/hooks/store';
import Link from 'next/link';


export default function SearchResults({ className }: { className?: string, SearchResults: string[] }) {
  const searchResults = useSearchStore((state) => state.searchResult)
  return (
    <div className={cn("text-white mt-12", className)}>

      {searchResults.map((result, index) => (
        <div key={index} className='flex flex-row space-x-2'>
          <Link href="/show">
            <div className='text-base'>{result.title}</div>
          </Link>
        </div>
      ))
      }
    </div >
  );
}
