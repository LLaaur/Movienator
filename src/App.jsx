import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SideBar from './components/SideBar';
import MovieStrip from './components/MovieStrip'

const App = () => {
    
    return(
        <div className='flex flex-col w-full h-screen'>
            <Header/>
            <div className="flex bg-neutral-800 overflow-y-scroll">
                <SideBar/>
                <MovieStrip/>
            </div>
        </div>
    )
}

export default App