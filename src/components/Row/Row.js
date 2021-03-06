import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./style.css";

const base_url = " https://image.tmdb.org/t/p/original/";

function Row({ tittle, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]); // empty movie array
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // if [], run once when the row loads , and dont run again

  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log("this is setup");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{tittle}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      {/* trailerUrl */}
      {/* container -> poster*/}
    </div>
  );
}

export default Row;
