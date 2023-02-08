
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResults = () => {

    const [movies, setMovies] = useState([]);

    const {searchTerm} = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a34f06ec9cf86ce289f987ca6afeeaee&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
        .then((response) => {
            setMovies(response.data.results.slice(0, 5))
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return (

       <div className="flex flex-col">

            <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10"> Showing results for <span className="font-white" >{searchTerm}</span> </h2>

            <div className="flex gap-4 ml-4">
                    {movies.map((movie, i) => {
                        return (
                            <MovieCard
                                key={i}
                                {...movie}
                            />
                        )
                    })}
            </div>

       </div>

    )

}

export default SearchResults