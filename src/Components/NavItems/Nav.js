import logo from '../images/IKe.jpg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return <>
        <main className={`bg-logo bg-cover bg-center fixed top-0 left-0 right-0 `} >
            <div className="container flex justify-between">
                <div className='flex items-center mt-1'>
                    <img src={logo} alt="" width='40px' height='40px' className='rounded-2xl' />
                    <p className='ml-1 font-bold'>Isaac Kusi</p>
                </div>
                <div className='flex justify-between items-center font-bold mt-1'>
                  <Link to= '/'> <p className='px-1 h-8'> Home </p></Link> 
                  <Link to= '/about'> <p className='ml-1 px-1  h-8'> About </p></Link>
                  <Link to= '/skills'><p className='ml-1 px-1  h-8'> Skills </p></Link>
                  <Link to= '/projects'><p className='ml-1 px-1  h-8'> Projects </p></Link>
                </div>
            </div>
        </main>
    </>
}

export default Nav; 