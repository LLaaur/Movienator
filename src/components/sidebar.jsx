import { useState, useEffect } from "react"
import SideTile from "./SideTile"

const SideBar = () => {

    const [genres, setGenres] = useState();

    useEffect(() => {
        setGenres(prevState => {
            return genresData.genres.map((genre) => {
                return <SideTile
                        key={genre.id}
                        genre={genre}/>
            })
        })
    }, [])

    return(
        <div className="bg-neutral-800 text-neutral-100 p-2 pr-0 h-auto drop-shadow-lg z-10 hidden md:flex">
            <ul className="cursor-pointer text-[0.99rem] space-y-2 w-[140px]">
                {genres}
            </ul>
        </div>
    )

}


export const genresData = {
    'genres':[
    { 
        'name': 'Action',
        'id': '28'
    },
    {   'name': 'Animation', 
        'id': '16' 
    },
    { 
        'name': 'Adventure', 
        'id': '12' 
    },
    { 
        'name': 'Comedy', 
        'id': '35' 
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
]
}

export default SideBar