import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';
import SideBar from './SideBar';

const MobileMenu = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    
    return(
        <div className="absolute md:hidden block top-6 right-3">
            {mobileMenu ?
                <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenu(false)} />
                :
                <HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenu(true)} />
            }
        </div>
    )


}

export default MobileMenu