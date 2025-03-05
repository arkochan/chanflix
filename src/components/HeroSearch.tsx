"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import useSearchStore from '@/hooks/store';
import { ResultMetaData } from '@/types/ResultMetaData';
import { searchMovies } from '@/lib/api/search';

export default function HeroSearch({ className, topMovies }: { className?: string, topMovies: string[] }) {

  const [queryString, setQueryString] = useState("");
  var popular_show_titles = topMovies;

  // const searchResults = useSearchStore((state) => state.searchResult)
  const setSearchResults = useSearchStore((state) => state.setSearchResult)

  // HACK: 

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQueryString(e.target.value);
  }
  async function fetchSearchResults(query: string) {
    try {
      const response = await fetch(`/api?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const searchResult = await response.json();
      setSearchResults(searchResult);
    } catch (error) {
      console.error('Error fetching search results from local API:', error);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetchSearchResults(queryString);
  }

  return (
    <div className={cn("w-full", className)} >
      <div className='mb-8'>Search Movies, Tvs, Animes</div>
      <PlaceholdersAndVanishInput placeholders={popular_show_titles} onChange={onChange} onSubmit={onSubmit} />
    </div>);
}
