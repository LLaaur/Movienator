
const getPosterUrl = (posterPath) => { return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}

const MovieCard = ({poster_path, original_title, release_date}) => {
    return (
        <div className="flex flex-col gap-2 border border-black w-[176px] h-[264px]">
            <img src={getPosterUrl(poster_path)} alt={original_title} className='w-[176px] h-[264px]'/>
            <div className="flex flex-col">
                <p className="font-bold text-white">{original_title}</p>
                <p className="font-bold text-white">{release_date}</p>
            </div>
        </div>

    )
}

export default MovieCard