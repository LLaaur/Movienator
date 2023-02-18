import {logo} from '../assets/index'
import Searchbar from './SearchBar';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {

    return(
        <div className="bg-neutral-800 flex flex-col justify-start gap-x-12 items-center drop-shadow-2xl w-auto sm:flex-row">
            <Link to={'/'}>
            <img src={logo} alt="header_logo" className='w-[160px] p-4 cursor-pointer'/>
            </Link>
            <Searchbar/>
            <MobileMenu/>
        </div>
    )
}


export default Header;
