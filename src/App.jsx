import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './pages/SearchResults';
import Discover from './pages/Discover';


const App = () => {

    return(
        <div className='flex flex-col'>
            <Header/>
            <div className="flex bg-[#373737] overflow-hidden h-fit">
                <SideBar className='z-50'/>   
                <div className="flex flex-col">
                    <Routes>
                        <Route path='/' element={<Discover />}></Route>
                        <Route path='/search/:searchTerm' element={<SearchResults />}></Route>
                    </Routes>
                </div> 
            </div>
            <Footer className='mt-[5rem]'/>
        </div>
    )

}

export default App