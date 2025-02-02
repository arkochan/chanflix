import movieDetail from "@/lib/MovieDetail.json";
import searchResult from "@/lib/MultiResult.json";
import seasonDetail from "@/lib/TVSeasonDetail.json";
import seriesDetail from "@/lib/TVSeriesDetail.json";
import { MovieDetail } from "@/types/MovieDetail";
import { SearchResult } from "@/types/ResultMetaData";
import { TVDetail } from "@/types/TVDetail";

export function getMovieDetail(id: number): MovieDetail {
  return movieDetail as MovieDetail;
}

export function getTvDetail(id: number): TVDetail {
  return seriesDetail as TVDetail;
}

export function getSearchResult(id: number): SearchResult {
  return searchResult as SearchResult;
}

export function getSeasonDetails(id: number) {
  return seasonDetail;
}

