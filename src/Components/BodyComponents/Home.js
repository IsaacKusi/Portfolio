
import Typical from 'react-typical';
import './home.css'

const Home = () => {
    return <>
        <main className='home-animation '>
            <div className="container py-12 ">
                <div className='text-white text-3xl font-bold mt-36 font-sans md:text-4xl lg:text-6xl'>
                    <Typical
                        loop={Infinity}
                        steps={['SOFTWARE DEVELOPER', 2000]}
                    />
                </div>
                <div className='mt-44 text-white font-sans font-semibold'>
                    <p>Hey! I am Isaac</p>
                    <p>
                        I build Interactive Websites and Web Applications
                    </p>
                    <span className=''><Typical
                        loop={Infinity}
                        steps={['that run across platforms and devices', 2000]}
                    /></span>
                </div>
            </div>
        </main>
    </>
}

export default Home;