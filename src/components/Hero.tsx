import React from 'react';
import { cn } from '@/lib/utils/cn';
import { getMovieLogoPath, } from '@/lib/api/media'
import { getTopMovies, } from '@/lib/api/movies'
import Image from 'next/image';
import { ResultMetaData, ResultMetaDataExtended } from '@/types/ResultMetaData';
import { Carousel } from "flowbite-react";
import HeroSlides from './ui/HeroSlide';

export default async function Hero({ className }: { className?: string }) {
  const topmovies = await getTopMovies() as ResultMetaData[];
  const topMoviesExtended = await Promise.all(
    topmovies.map(async (movie: ResultMetaData) => {
      return {
        ...movie,
        logo_path: await getMovieLogoPath(movie.id),
      };
    })
  );

  return (
    <div className="h-96 xl:h-[700px] 2xl:[900px]">
      <Carousel>
        {topMoviesExtended.map((movie: ResultMetaDataExtended) => (
          <HeroSlides media={movie} key={movie.id} />
        ))}
      </Carousel>
    </div>
  );
}
