
import Typical from 'react-typical';
import './home.css'

const Home = () => {
    return <>
        <main className='home-animation '>
            <div className="container py-12 ">
                <p className='text-white text-3xl font-bold mt-36 font-sans md:text-4xl lg:text-6xl'>
                     <Typical
                        loop={ Infinity}
                        wrapper='l'
                        steps={['FULLSTACK DEVELOPER', 2000]}
                    />
                     </p>
                <div className='mt-44 text-white font-sans font-semibold'>
                    <p>Hey! I am Isaac</p>
                    <p> 
                        I build Interactive Websites and Web Applications 
                    </p>
                    <p> <span className=''><Typical
                        loop={Infinity}
                        wrapper='l'
                        steps={['that run across platforms and devices', 2000]}
                    /></span></p> 
                </div>
            </div>
        </main>
    </>
}

export default Home;