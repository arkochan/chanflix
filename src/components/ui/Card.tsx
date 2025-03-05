import React from 'react';
import { ResultMetaData } from '@/types/ResultMetaData';
import Link from 'next/link';

interface CardProps {
  media: ResultMetaData;
}
function Card({ media }: CardProps) {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2"
  const mediaType = media.media_type == undefined ? "movie" : media.media_type;
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg'>
      <Link href={`/detail/${mediaType}/${media.id}`} className="">
        <img className="w-full" src={posterBaseUrl + media.poster_path} alt={media.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{media.title}{media.name}</div>
          <p className="text-gray-700 text-base line-clamp-3 overflow-hidden">
            {media.overview}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
