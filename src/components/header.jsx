import {logo} from '../assets/index'
import Searchbar from './SearchBar';

const Header = () => {
    return(
        <div className="bg-neutral-800 flex justify-start gap-x-12 items-center drop-shadow-2xl w-full">
            <img src={logo} alt="header_logo" className='w-[160px] p-4 cursor-pointer'/>
            <Searchbar/>
        </div>
    )
}


export default Header;