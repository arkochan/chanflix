import React from 'react';
import { MetaData } from '@/types/media';
import Link from 'next/link';

interface CardProps {
  media: MetaData;
}

function Card({ media }: CardProps) {
  return (
    <Link href={`/media/${media.id}`} className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2" + media.poster_path} alt={media.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{media.title}</div>
        <p className="text-gray-700 text-base line-clamp-3 overflow-hidden">
          {media.overview}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {media.genre_ids.map((genre, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{genre}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
