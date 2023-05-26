import logo from '../images/IKe.jpg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return <>
        <main className={`bg-transparent bg-cover bg-center fixed top-5 left-0 right-0 `} >
            <div className="container flex justify-between">
                <div className='flex items-center mt-1'>
                    <img src={logo} alt="" width='40px' height='40px' className='rounded-3xl' />
                    <p className='ml-2 font-semibold text-white text-lg'>Isaac Kusi</p>
                </div>
                <div className='flex justify-between items-center font-semibold mt-1 text-white'>
                  <Link to= '/'> <p className='px-1 h-8 '> Home </p></Link> 
                  <Link to= '/about'> <p className='ml-1 px-1  h-8'> About </p></Link>
                  <Link to= '/skills'><p className='ml-1 px-1  h-8'> Skills </p></Link>
                  <Link to= '/projects'><p className='ml-1 px-1  h-8'> Projects </p></Link>
                </div>
            </div>
        </main>
    </>
}

export default Nav; 