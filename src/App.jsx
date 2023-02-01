import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SideBar from './components/SideBar';
import PopularMovieStrip from './components/PopularMovieStrip';
import TopRated from './components/TopRatedMovieStrip';
import UpcomingMovies from './components/UpcomingMovieStrip';
import MovieStrips from './components/MovieStrips';

const App = () => {
    
    return(
        <div className='flex flex-col w-full'>
            <Header/>
            <div className="flex bg-[#373737]">
                <SideBar/>       
                <MovieStrips/>
            </div>
        </div>
    )
}

export default App