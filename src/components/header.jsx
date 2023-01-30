import {logo} from '../assets/index'
import Searchbar from './searchbar';

const Header = () => {
    return(
        <div className="bg-black flex justify-start gap-x-12 items-center">
            <img src={logo} alt="header_logo" className='w-[160px] p-4 cursor-pointer'/>
            <Searchbar/>
        </div>
    )
}


export default Header;