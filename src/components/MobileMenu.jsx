import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import SideTile from './SideTile';
import { genresData } from './SideBar';

const MobileMenu = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [genres, setGenres] = useState();

    useEffect(() => {
        setGenres(prevState => {
            return genresData.genres.map((genre) => {
                return <SideTile
                        key={genre.id}
                        genre={genre}/>
            })
        })
    }, [])
    
    return(
        <div className="relative md:hidden block left-[0.35rem]">
            {mobileMenu ?
                <>
                <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenu(false)} />
                    <div className="bg-neutral-800 text-neutral-100 p-2 pr-0 h-auto drop-shadow-lg">
                        <ul className="cursor-pointer text-[0.99rem] space-y-2 w-[140px]">
                            {genres}
                        </ul>
                    </div>
                </>
                :
                <HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenu(true)} />
            }
        </div>
    )

}

export default MobileMenu