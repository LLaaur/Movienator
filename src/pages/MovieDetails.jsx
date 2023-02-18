import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { IoMdPlay } from "react-icons/io";
import Youtube from "react-youtube";
import { AiFillStar } from "react-icons/ai";
import apiKey from "../assets/API";


const MovieDetails = () => {

    const {movieId} = useParams();

    const [movieData, setMovieData] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey()}&append_to_response=videos`)
            .then(
                (response) => {
                    setMovieData(response.data);
                    const trailerId = response.data.videos.results.find(
                        (video) => video.name === 'Official Trailer'
                    );
                    setTrailer(trailerId ? trailerId : response.data.videos.results[0]);
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                })
    }, []);

    return (
        <div className="h-auto">
            <div className="absolute w-[-webkit-fill-available] h-[75vh]"></div>
                <img
                    src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path || movieData.poster_path}`}
                    alt="movie_cover"
                    className="w-full h-[70vh] object-cover"
                />
            <div className="flex justify-center pt-36 flex-wrap w-[100vw]">
                <div className="flex flex-col items-center">
                    <div className="h-auto w-[70%]">
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} 
                        alt="movie_cover"
                        className="rounded-lg" 
                        />
                    </div>
                </div>
                <div className="flex 2xl:items-start w-[70%] sm:flex flex-col items-center">
                    <p className="text-3xl mb-3 mt-3 text-white text-center 2xl:text-left">
                        {movieData.original_title}
                    </p>
                    <div className="flex flex-row items-center mr-5 pb-2">
                        <AiFillStar className="text-3xl mr-2" fill="gold"/>
                        <p className="text-4xl text-white">
                            {movieData?.vote_average?.toFixed(1)}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <div className="grid grid-flow-col auto-cols-max gap-4">
                            <p className="text-cyan-400 font-semibold">
                                Released: {movieData?.release_date}
                            </p>
                            <p className="text-cyan-400 font-semibold">
                                {movieData?.runtime} min
                            </p>
                        </div>

                        <div className="grid grid-flow-col auto-cols-max gap-4 mb-3 text-white items-center">
                            Genres:
                            {movieData.genres && movieData.genres.slice(0,5).map((genre, i) => 
                                <span key={i} className="text-base">{genre.name}</span>
                            )}
                        </div>
                    </div>

                    <p className="text-white mb-8 lg:w-[55%] leading-7 w-full text-center 2xl:text-left">{movieData.overview}</p>

                    <div className="flex flex-row items-center">
                        <button onClick={() => setShowModal(true)}
                            className="text-[#FFFDE3] border-2 p-4 flex flex-row items-center hover:bg-cyan-600 hover:border-cyan-300 rounded-md text-xl">
                            <IoMdPlay className="mr-3" />
                            Watch Trailer
                        </button>
                    </div>
                    {showModal ? (
                <>
                    <div className="items-center flex overflow-y-auto fiex inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent outline-none focus:outline-none">
                                <div className="flex items-start justify-between border-b p-2">
                                    <button className="p-1 bg-transparent border-0 text-white opacity-100 float-right text-xl font-bold outline-none w-full"
                                            onClick={() => setShowModal(false)}>
                                                <span className="bg-transparent text-white opacity-100 h-6 w-6 text-2xl block outline-none float-right hover:text-cyan-400">X</span>
                                    </button>
                                </div>
                                    <Youtube
                                        videoId={trailer.key}
                                        className="lg:w-[40vw] lg:h-[45vh] w-[80vw] h-[45vh]"
                                        opts={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset z-40 bg-black"></div>
                </>
            ) : null}

                </div>

            </div>
   
        </div>
    )



}




export default MovieDetails