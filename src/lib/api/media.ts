
export async function getMovieLogoPath(id: number) {
  try {
    const TMDB_API_KEY = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}/images?language=en`;
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
    const data = await response.json()
    if (data.logos && data.logos.length > 0 && data.logos[0].file_path) {
      console.log(id, data.logos[0].file_path);
      return data.logos[0].file_path;
    } else {
      console.warn(`No logos found for movie ID: ${id}`);
      return null;
    }

  } catch (error) {
    console.error('Error fetching movie logo path from TMDB:', error);
    throw error;
  }
}
