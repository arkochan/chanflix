import { SearchResult } from "@/types/ResultMetaData";

export async function searchMovies(query: string): Promise<SearchResult> {
  try {
    const TMDB_API_KEY = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_KEY}`
      }
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json() as SearchResult;
    return data;
  } catch (error) {
    console.error(`Error searching movies with query "${query}" from TMDB:`, error);
    throw error;
  }
}

