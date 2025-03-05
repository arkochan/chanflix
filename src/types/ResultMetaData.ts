export interface SearchResult {
  page: number,
  results: ResultMetaData[],
  total_pages: number,
  total_results: number

}
interface BaseResultMetaData {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Enforce either `title` or `name`
type TitleOrName =
  | { title: string; name?: never }
  | { name: string; title?: never };

// ✅ Use `type` with an intersection (`&`)
export type ResultMetaData = BaseResultMetaData & TitleOrName;

// ✅ Extend using intersection (`&`)
export type ResultMetaDataExtended = ResultMetaData & {
  logo_path: string;
};
