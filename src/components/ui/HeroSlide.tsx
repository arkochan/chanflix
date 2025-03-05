import { ResultMetaData, ResultMetaDataExtended } from "@/types/ResultMetaData";
import Link from "next/link";

export default function HeroSlides({ media }: { media: ResultMetaDataExtended }) {
  // console.log("logo path is ", media.logo_path);
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${media.backdrop_path})`, backgroundPosition: 'center 10%' }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="max-w-sm flex flex-col items-center text-center text-white xl:-translate-x-72 md:-translate-x-36" >
          {media.logo_path && <img className="max-h-32 max-w-56" src={`https://image.tmdb.org/t/p/original${media.logo_path}`} />}
          {!media.logo_path && <h1 className="text-4xl font-bold">{media.title || media.name as string}</h1>}
          <div className="flex flex-row">
            ⭐ <span className="ml-2 font-bold">{media.vote_average.toFixed(1)}</span>
          </div>
          <div>
            <div className="text-sm line-clamp-3">{media.overview}</div>
          </div>

          <Link className="bg-slate-200 rounded-3xl px-4 py-2 shadow-current mt-4 text-black " href={`/player/movie/${media.id}`}>
            Watch Now
          </Link>
        </div>
      </div>
    </div>
  );
}


