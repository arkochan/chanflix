import HeroSearch from "@/components/HeroSearch";
import SearchResults from "@/components/SearchResults";

export default function Home() {
  return (
    <div className="m-10 flex flex-col  bg-black text-white font-extrabold flex h-dvh text-4xl" style={{}}>
      <HeroSearch className="mt-10 max-w-[700]" />
      <SearchResults SearchResults={["SANIC"]} />
    </div>);
}
