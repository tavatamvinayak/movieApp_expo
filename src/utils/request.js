const API_KEY ='119459bb9eb7b105439655ecd7f9d1b1';
const BASE_URL="https://api.themoviedb.org/3";


const requests = {
    fetchTrending:`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchMoviePoster:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-USwith_genres=28`,
    fetchComedyMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-USwith_genres=35`,
    fetchHorrorMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchTvShows:`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTvShowsRated:`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,

    
};

export {API_KEY , BASE_URL};
export default requests ;

"https://api.themoviedb.org/3/movie/12345?api_key=119459bb9eb7b105439655ecd7f9d1b1&language=en-us&append_to_response=videos"