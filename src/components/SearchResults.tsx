"use client";
import React from 'react';
import { cn } from '@/lib/utils/cn';
import useSearchStore from '@/hooks/store';
import Link from 'next/link';
import Card from './ui/Card';


export default function SearchResults({ className }: { className?: string, SearchResults: string[] }) {
  const searchResults = useSearchStore((state) => state.searchResult)
  return (
    <div className={cn("mt-10 flex flex-wrap items-center justify-center gap-8", className)}>
      {searchResults.map((result, index) => (
        <div key={index}>
          <Card media={result} />
        </div>
      ))

      }
    </div >
  );
}
