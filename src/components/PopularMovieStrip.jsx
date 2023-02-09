import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { selectSelectedGenres } from "../redux/reducers/selectedGenresSlice";
import { useSelector } from "react-redux";
import apiKey from "../assets/API";

const PopularMovieStrip = () => {
    const [movies, setMovies] = useState([]);

    const selectedGenres = useSelector(selectSelectedGenres)

    useEffect(() => {
        // fetching

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey()}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${selectedGenres.toString()}`)
        .then((response) => {
            setMovies(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [selectedGenres]);

    return(

            <div className="flex gap-4">
                {movies.map((movie, i) => {
                    return (
                        <MovieCard
                            key={i}
                            {...movie}
                        />
                    )
                })}

            </div>
    )
}

export default PopularMovieStrip