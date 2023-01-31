import { FiSearch } from "react-icons/fi";

const Searchbar = () => {

    return (
        <form autoComplete="on" className="p-4 text-white">
            <label htmlFor="search-field" className="sr-only">
                Search for a movie
            </label>

            <div className="flex justify-start items-center border-gray-400 border-2 rounded-3xl p-4 w-[700px]">
                <FiSearch className='w-5 h-5 mr-2'/>
                <input type='search' name='search-field' autoComplete='on' placeholder='Search for a movie' id='search-field' className='bg-transparent flex-1 placeholder-white text-base text-white outline-none'/>
            </div>
        </form>
    )

};

export default Searchbar;