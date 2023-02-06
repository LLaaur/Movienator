import { useState } from "react"
import { useDispatch } from "react-redux"
import { addGenre, removeGenre } from "../redux/reducers/selectedGenresSlice"
import {motion} from 'framer-motion'

const SideTile = (props) => {

    const [highlight, setHighlight] = useState(false);
    const dispatch = useDispatch();

    function toggleHighlight(){
        setHighlight(prevState => !prevState);
        if (!highlight){
            dispatch(addGenre(props.genre.id));
        }
        else{
            dispatch(removeGenre(props.genre.id))
        }
    }

    return(
        <motion.div
            initial="empty"
            animate="fadeIn"
            whileTap={{scale:0.92}}
            whileHover={{scale: 1.05}}

        >
            <li
                key={props.genre.id}
                id={props.genre.id}
                className={
                    highlight
                        ?
                        "p-3 bg-[#0055AA] rounded-xl duration-200 select-none tracking-widest"
                        :
                        "p-3 hover:bg-[#0055AA] rounded-xl duration-200 select-none"
                }
                onClick={toggleHighlight}
            >
                {props.genre.name}
            </li>
        </motion.div>
    );


}

export default SideTile