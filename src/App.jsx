import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MovieStrip from './components/MovieStrip'

const App = () => {

    const apiUrl = 'https://api.themoviedb.org/3'
    
    return(
        <div className='flex flex-col w-full h-screen'>
            <Header/>
            <div className="flex bg-neutral-800">
                <SideBar/>
                <MovieStrip/>
            </div>
        </div>
    )
}

export default App