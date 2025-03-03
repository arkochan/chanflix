import HeroSearch from "@/components/HeroSearch";
import SearchResults from "@/components/SearchResults";
import { getTopMovies } from "@/lib/api/movies";

export default async function Home() {
  let topMovies = await getTopMovies();
  const popular_show_titles = topMovies.map((movie) => movie.title || movie.name || "");
  return (
    <div className="m-10 flex-col  bg-black text-white font-extrabold flex h-dvh text-4xl" style={{}}>
      <HeroSearch topMovies={popular_show_titles} className="mt-10 max-w-[700]" />
      <SearchResults />
    </div>);
}
