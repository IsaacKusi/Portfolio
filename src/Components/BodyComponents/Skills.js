
import djrestFramework from '../images/skillImages/djrestFramework.png'
import Docker from '../images/skillImages/Docker.png'
import frontend from '../images/skillImages/frontend.png'
import postgres from '../images/skillImages/postgres.png'
import python from '../images/skillImages/python.png'
import reatctypescript from '../images/skillImages/React-Typescript.png'
import react from '../images/skillImages/React.png'
import redux from '../images/skillImages/ReactRedux.png'
import tailwind from '../images/skillImages/tailwind.png'
import websocket from '../images/skillImages/websocket.png'
import gitgif from '../images/skillImages/gitgif.gif'
import './skill.css'


const Skills = () => {
    return <>
        <main className="container mt-16 py-8 ">
            <div className='skill skillfl flex  items-center place-content-center md:flex md:justify-between md:px-40 py-2 rounded-2xl '>
                <div className='animate-pulse'>
                    <img src={frontend} alt="sample.png" width='150px' height='50px' className='skill rounded-2xl h-20 px-1' />
                    <img src={react} alt="sample.png" width='150px' className='skill mt-3 md:mt-9 h-[4.5rem] rounded-2xl' />
                    <img src={redux} alt="sample.png" width='150px' className='skill mt-3 md:mt-10 h-20 rounded-2xl' />
                    <img src={reatctypescript} alt="sample.png" width='150px' className='skill mt-3 md:mt-10 h-16 rounded-2xl' />
                    <img src={tailwind} alt="sample.png" width='150px' className='skill mt-3 md:mt-10 h-20 rounded-2xl' />
                </div>
                <div>
                    <img src={gitgif} alt="sample.png" width='150px'  className='skill mt-3 mb-3 md:mt-12 h-32 rounded-2xl md:animate-bounce' />
                </div>
                <div className='animate-pulse'>
                    <img src={python} alt="sample.png" width='150px' height='50px' className='skill rounded-2xl h-20 md:mt-2' />
                    <img src={djrestFramework} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-9 h-20 rounded-2xl' />
                    <img src={Docker} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-10 h-20 rounded-2xl' />
                    <img src={websocket} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-9 h-20 rounded-2xl' />
                    <img src={postgres} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-7 h-20 rounded-2xl' />
                </div>
            </div>
        </main>
    </>
}

export default Skills;