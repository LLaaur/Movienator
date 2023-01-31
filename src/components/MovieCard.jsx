import { motion } from "framer-motion"

const getPosterUrl = (posterPath) => { return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}

const MovieCard = ({poster_path, original_title, release_date}) => {
    return (
        <motion.div
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
        >
            <div className="flex flex-col gap-2 border border-black w-[176px] h-[264px] rounded-lg border-none cursor-pointer">
                <img src={getPosterUrl(poster_path)} alt={original_title} className='w-[176px] h-[264px] rounded-t-lg'/>
                <div className="flex flex-col bg-neutral-900 mt-[-0.5rem] rounded-b-lg p-2">
                    <p className="font-bold text-white text-sm">{original_title}</p>
                    <p className="font-bold text-white text-xs">{release_date}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default MovieCard