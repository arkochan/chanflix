import { ResultMetaData } from "@/types/ResultMetaData";

interface MediaProps {
  backdrop_path: string;
  logo_path?: string;
  title?: string;
  name?: string;
  vote_average: number;
  overview: string;
  id: number;
}
import Link from "next/link";
import Button_WatchNow from "./Button_WatchNow";

export default function HeroSlides({ media }: { media: MediaProps }) {
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
          <Button_WatchNow mediaId={media.id} />
        </div>
      </div>
    </div>
  );
}


