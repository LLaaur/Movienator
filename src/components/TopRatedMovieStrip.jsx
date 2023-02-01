import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";


const TopRated = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a34f06ec9cf86ce289f987ca6afeeaee&language=en-US&page=1')
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error)=> {
                console.log(error);
            })

    })

    return (

        <div className="flex p-5 gap-4 gap-y-20 flex-wrap">
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

export default TopRated