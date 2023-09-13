import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '537b9a5585a30e006c200a33f280f965'

export async function requestTopMovies() {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    );
     return data;
  }

  export async function requesMovieDetails(movieId) {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
     return data;
  }


  export async function requesCast(movieId) {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
     return data;
  }

  export async function requesReviews(movieId) {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );  
     return data;
  }

  export async function requesSearchMovies(film) {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${film}`,
    );
     return data;
  }