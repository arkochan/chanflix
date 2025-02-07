export interface SearchResult {
  page: number,
  results: ResultMetaData[],
  total_pages: number,
  total_results: number

}
export interface ResultMetaData {
  "adult": boolean,
  "backdrop_path": string,
  "id": number,
  "title"?: string,
  "name"?: string,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "poster_path": string,
  "media_type": string,
  "genre_ids": number[],
  "popularity": number,
  "release_date": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number,
}
export interface ResultMetaDataExtended extends ResultMetaData {
  logo_path: string
}
