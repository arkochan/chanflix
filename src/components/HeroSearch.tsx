"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import useSearchStore from '@/hooks/store';
import { MetaData } from '@/types/media';
import data from '@/lib/data.json';

export default function HeroSearch({ className }: { className?: string }) {

  const [queryString, setQueryString] = useState("");
  var popular_show_titles = ["Squid Game", "Money Heist", "Stranger Things", "Lupin", "The Witch"];

  // const searchResults = useSearchStore((state) => state.searchResult)
  const setSearchResults = useSearchStore((state) => state.setSearchResult)

  const dt = data.results as MetaData[]

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQueryString(e.target.value);
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    setSearchResults(dt)
  }

  return (
    <div className={cn("w-full", className)} >
      <div className='mb-8'>Search Movies, Tvs, Animes</div>
      <PlaceholdersAndVanishInput placeholders={popular_show_titles} onChange={onChange} onSubmit={onSubmit} />
    </div>);
}
