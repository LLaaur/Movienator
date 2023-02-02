import PopularMovieStrip from "./PopularMovieStrip";
import TopRated from "./TopRatedMovieStrip";
import UpcomingMovies from "./UpcomingMovieStrip";
import {AiFillForward, AiFillStar} from "react-icons/ai";
import {BiTrendingUp} from "react-icons/bi";

import { motion } from "framer-motion"


const MovieStrips = () => {

    return (

        <div className="flex flex-col gap-y-[5rem] pl-4 pt-4">
            <div className="flex bg-neutral-800 rounded-lg mb-[-4rem] p-1 items-center gap-x-2">
                <BiTrendingUp fill="red" size={30} />
                <h1 className="font-bold text-lg text-white">Popular</h1>
            </div>
            <motion.div drag='x' dragElastic={0.7} dragConstraints={{right:0, left:-2100}}>
                <PopularMovieStrip />
            </motion.div>
            <div className="flex bg-neutral-800 rounded-lg mb-[-4rem] p-1 items-center gap-x-2">
                <AiFillStar fill="gold" size={30} />
                <h1 className="font-bold text-lg text-white">Top Rated</h1>
            </div>
            <motion.div drag='x' dragElastic={0.7} dragConstraints={{right:0, left:-2100}}>
                <TopRated />
            </motion.div>
            <div className="flex bg-neutral-800 rounded-lg mb-[-4rem] p-1 items-center gap-x-2">
                <AiFillForward fill="lime" size={30} />
                <h1 className="font-bold text-lg text-white">Upcoming</h1>
            </div>
            <motion.div drag='x' dragElastic={0.7} dragConstraints={{right:0, left:-2100}}>
                <UpcomingMovies />
            </motion.div>
        </div>

    )

}

export default MovieStrips