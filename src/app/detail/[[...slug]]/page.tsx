import HeroSlides from "@/components/ui/HeroSlide";
import { getMovieLogoPath } from "@/lib/api/media";
import { getMovieDetail } from "@/lib/api/movies";
import { getTvDetail } from "@/lib/api/tv";
import { MovieDetail } from "@/types/MovieDetail";
import { TVDetail } from "@/types/TVDetail";
import { Play } from "next/font/google";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const imageBasePath = "https://image.tmdb.org/t/p/w500";
  const [mediaType, mediaId] = (await params).slug;
  console.log(mediaType, mediaId);
  if (mediaType === "movie") {
    const mediaDetail: MovieDetail = await getMovieDetail(mediaId);
    let mediaDetailExtended = {
      ...mediaDetail,
      logo_path: await getMovieLogoPath(mediaDetail.id) as string,
    }
    if (!mediaDetail) {
      return <div>Media not found</div>;
    }
    return (
      <div>
        <HeroSlides media={mediaDetailExtended} />

        {/* play button */}

      </div>
    );
  }
  else if (mediaType === "tv") {
    const mediaDetail: TVDetail = await getTvDetail(mediaId);
    return (
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto ">
          <img
            className="aspect-auto object-cover"
            src={imageBasePath + "/" + mediaDetail.poster_path}
            alt={mediaDetail.name}
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{mediaDetail.name}</h1>
            <p className="text-gray-700 text-base line-clamp-3 overflow-hidden">
              {mediaDetail.overview}
            </p>
            {/* <div className="mt-4"> */}
            {/*   <span className="font-semibold">Release Date:</span>{" "} */}
            {/*   {mediaDetail.release_date} */}
            {/* </div> */}
            <div className="mt-2">
              <span className="font-semibold">Rating:</span>{" "}
              {mediaDetail.vote_average} ({mediaDetail.vote_count} votes)
            </div>

            {/* <div className="mt-2"> */}
            {/*   <span className="font-semibold">Genres:</span>{" "} */}
            {/*   {mediaDetail.genre_ids.join(", ")} */}
            {/* </div> */}
          </div>
        </div>
        <div className="text-xl text-white"> Seasons </div>
        {mediaDetail.seasons.map((season) => (
          season.name !== "Specials" &&

          <div key={season.id} className="text-white flex flex-row p-4 border-b border-gray-400">
            <div>
              <Link className="" href={`/detail/season/${season.id}`} >
                <div className="w-32 h-48 overflow-hidden">
                  <img src={imageBasePath + "/" + season.poster_path} alt={season.name} className="w-full h-full object-cover object-center" />
                </div>
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{season.name}</h2>
              <p>{season.overview}</p>
            </div>
          </div>
        ))
        }

      </div >
    );
  }
}
