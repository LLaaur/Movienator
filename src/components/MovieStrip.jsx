import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";


const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // fetching

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a34f06ec9cf86ce289f987ca6afeeaee&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
        .then((response) => {
            setMovies(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    return(

        <div className="flex p-5 gap-4 gap-y-20 flex-wrap overflow-y-scroll">
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

export default MovieList