import { TVDetail } from "@/types/TVDetail"

export async function getTvDetail(series_id: string): Promise<TVDetail> {
  try {
    const TMDB_API_KEY = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/tv/${series_id}?language=en-US`;
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
    const data = await response.json() as TVDetail;
    return data;
  } catch (error) {
    console.error(`Error fetching TV series details for series ID ${series_id} from TMDB:`, error);
    throw error;
  }
}

