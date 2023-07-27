import { useEffect, useState } from "react";
import requests from "../utils/request";
import MovieContext from "./MovieContext";

const StateProvider = ({ children }) => {
  const [MoviePoster, setMoviePoster] = useState([]);
  const [TrandingNow, setTrandingNow] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [ActionMovies, setActionMovies] = useState([]);
  const [ComedyMovies, setComedyMovies] = useState([]);
  const [HorrorMovies, setHorrorMovies] = useState([]);
  const [RomanceMovies, setRomanceMovies] = useState([]);
  const [Document, setDocument] = useState([]);
  const [TVSHOWS, setTVSHOWS] = useState([]);
  const [TVSHOWS_RATED, setTVSHOWS_RATED] = useState([]);

  useEffect(() => {
    fetch(requests.fetchMoviePoster)
      .then((resp) => resp.json())
      .then((json) => {
        setMoviePoster(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchTrending)
      .then((resp) => resp.json())
      .then((json) => {
        setTrandingNow(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchTopRated)
      .then((resp) => resp.json())
      .then((json) => {
        setTopRated(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchActionMovies)
      .then((resp) => resp.json())
      .then((json) => {
        setActionMovies(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchComedyMovies)
      .then((resp) => resp.json())
      .then((json) => {
        setComedyMovies(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchHorrorMovies)
      .then((resp) => resp.json())
      .then((json) => {
        setHorrorMovies(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchRomanceMovies)
      .then((resp) => resp.json())
      .then((json) => {
        setRomanceMovies(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchDocumentaries)
      .then((resp) => resp.json())
      .then((json) => {
        setDocument(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(requests.fetchTvShows)
      .then((resp) => resp.json())
      .then((json) => {
        setTVSHOWS(json.results);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    fetch(requests.fetchTvShowsRated)
      .then((resp) => resp.json())
      .then((json) => {
        setTVSHOWS_RATED(json.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <MovieContext.Provider
      value={{
        MoviePoster,
        TrandingNow,
        TopRated,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Document,
        TVSHOWS,
        TVSHOWS_RATED,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default StateProvider;
