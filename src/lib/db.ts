import movieDetail from "@/lib/MovieDetail.json";
import searchResult from "@/lib/MultiResult.json";
import seasonDetail from "@/lib/TVSeasonDetail.json";
import seriesDetail from "@/lib/TVSeriesDetail.json";
import { SearchResult } from "@/types/ResultMetaData";

export function getMovieDetail(id: number) {
  return movieDetail;
}

export function getTvDetail(id: number) {
  return seriesDetail;
}

export function getSearchResult(id: number): SearchResult {
  return searchResult as SearchResult;
}

export function getSeasonDetails(id: number) {
  return seasonDetail;
}

