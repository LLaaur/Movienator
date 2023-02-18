import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Searchbar = () => {

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        navigate(`/search/${searchTerm}`);
    };

    return (

        <form autoComplete="on" className="p-4 text-white" onSubmit={handleSubmit}>
            <label htmlFor="search-field" className="sr-only">
                Search for a movie
            </label>

            <div className="flex justify-start items-center border-gray-400 border-2 rounded-3xl p-4 lg:w-[700px]">
                <FiSearch className='w-5 h-5 mr-2'/>
                <input type='search' name='search-field' autoComplete='on' placeholder='Search for a movie' id='search-field' className='bg-transparent flex-1 placeholder-white text-base text-white outline-none' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>


        </form>
    )

};

export default Searchbar;
