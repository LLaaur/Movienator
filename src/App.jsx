import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SideBar from './components/SideBar';
import PopularMovieStrip from './components/PopularMovieStrip';
import TopRated from './components/TopRatedMovieStrip';
import UpcomingMovies from './components/UpcomingMovieStrip';
import MovieStrips from './components/MovieStrips';
import Footer from './components/Footer';

const App = () => {
    
    return(
        <div className='flex flex-col'>
            <Header/>
            <div className="flex bg-[#373737] overflow-hidden h-fit">
                <SideBar className='z-50'/>       
                <MovieStrips/>
            </div>
            <Footer className='mt-[5rem]'/>
        </div>
    )
}

export default App