import { ResultMetaData, ResultMetaDataExtended, SearchResult, } from "@/types/ResultMetaData";
import { MovieDetail } from "@/types/MovieDetail";

export async function getTopMovies(): Promise<ResultMetaData[]> {
  try {
    const TMDB_API_KEY = process.env.TMDB_API_KEY;
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_KEY}`
      },
      next: { revalidate: 1800 } // 1800 seconds = 30 minutes
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json() as SearchResult;
    return data.results;
  } catch (error) {
    console.error('Error fetching top movies from TMDB:', error);
    throw error;
  }
}

export async function getMovieDetail(movie_id: string): Promise<MovieDetail> {
  try {
    const TMDB_API_KEY = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
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
    const data = await response.json() as MovieDetail;
    return data;
  } catch (error) {
    console.error(`Error fetching movie details for movie ID ${movie_id} from TMDB:`, error);
    throw error;
  }
}
