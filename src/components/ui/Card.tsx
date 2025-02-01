import React from 'react';
import { ResultMetaData } from '@/types/ResultMetaData';
import Link from 'next/link';

interface CardProps {
  media: ResultMetaData;
}

function Card({ media }: CardProps) {
  return (
    <Link href={`/media/${media.id}`} className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + media.poster_path} alt={media.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{media.title}{media.name}</div>
        <p className="text-gray-700 text-base line-clamp-3 overflow-hidden">
          {media.overview}
        </p>
      </div>
    </Link>
  );
};

export default Card;
