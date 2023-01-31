import { motion} from "framer-motion";
import React from "react";
import { genres } from "../assets/constants";

const SideBar = () => {

    const genreList = genres.map((genre) => (
        <motion.div 
        initial='empty'
        animate='fadeIn'
        whileTap={{scale:0.92}}
        whileHover={{scale: 1.05}}>
            <li className="cursor-pointer text-neutral-200 font-normal p-2 hover:bg-[#103281] rounded-lg" 
            key={genre.name}>
                {genre.name}
            </li>
        </motion.div>
    ))

    return (
        <>
            <ul className="w-[200px] bg-neutral-800 h-screen p-4 drop-shadow-lg">
                    {genreList}
            </ul>
        </>
    )

}


export default SideBar