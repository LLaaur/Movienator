import { FiSearch } from "react-icons/fi";
import axios from 'axios'
import {useState } from "react";
import MovieCard from "./MovieCard";

const Searchbar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    function handleSubmit(e){

        e.preventDefault()

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a34f06ec9cf86ce289f987ca6afeeaee&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
        .then((response) => {
            setMovies(response.data.results.slice(0, 5))
        })
        .catch((error) => {
            console.log(error)
        })

    }

    return (
        <form autoComplete="on" className="p-4 text-white" onSubmit={handleSubmit}>
            <label htmlFor="search-field" className="sr-only">
                Search for a movie
            </label>

            <div className="flex justify-start items-center border-gray-400 border-2 rounded-3xl p-4 w-[700px]">
                <FiSearch className='w-5 h-5 mr-2'/>
                <input type='search' name='search-field' autoComplete='on' placeholder='Search for a movie' id='search-field' className='bg-transparent flex-1 placeholder-white text-base text-white outline-none' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>

            <div className="font-bold text-xl"> Search Results:
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
            </div>

        </form>
    )

};

export default Searchbar;