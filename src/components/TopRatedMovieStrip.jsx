import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectSelectedGenres } from "../redux/reducers/selectedGenresSlice";


const TopRated = () => {

    const [movies, setMovies] = useState([]);

    const selectedGenres = useSelector(selectSelectedGenres)

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a34f06ec9cf86ce289f987ca6afeeaee&language=en-US&page=1&with_genres=${selectedGenres.toString()}`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error)=> {
                console.log(error);
            })

    }, [selectedGenres])

    return (

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

export default TopRated