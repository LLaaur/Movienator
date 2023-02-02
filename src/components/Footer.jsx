import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {

    return (

        <div className="flex bg-neutral-900 justify-center text-white font-semibold p-2">
            <footer className='flex gap-x-1'> <p> Copyright by LLaaur </p>
                <a href="https://github.com/LLaaur" target="_blank">
                    <AiFillGithub size={25}/>
                </a>
            </footer>
        </div>

    )

}

export default Footer