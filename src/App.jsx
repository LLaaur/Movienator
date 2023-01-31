import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import SideBar from './components/SideBar'

const App = () => {
    return(
        <div className='flex flex-col w-full h-screen overflow-hidden'>
            <Header/>
            <SideBar/>
        </div>
    )
}

export default App