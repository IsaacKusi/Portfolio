import logo from '../images/IKe.jpg'
import { Link, withRouter } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';
import { useContext } from 'react';
import NavFocusContext from '../../context/NavFocusContext';
import './nav.css'


const Nav = () => {
    const [showModal, setShowModal] = useState(false)
    const { state, aboutFocusHandler, skillFocusHandler, projectFocusHandler, homeFocusHandler } = useContext(NavFocusContext)


    return <>
        <main className="bg-transparent fixed top-5 left-0 right-0">
            <div className="container flex justify-between">
                <div className='flex items-center mt-1'>
                    <img src={logo} alt="" width='40px' height='40px' className='rounded-3xl' />
                    <p className='ml-2 font-semibold text-white text-lg'>Isaac Kusi</p>
                </div>
                <div className=' hidden md:flex md:justify-between md:items-center font-semibold mt-1 text-white '>
                    <Link to='/'> <p className={`px-1 h-8 ${state.homeActive} `} onClick={homeFocusHandler}> Home </p></Link>
                    <Link to='/about'> <p className={`ml-3 px-1  h-8 ${state.aboutActive}`} onClick={aboutFocusHandler} > About </p></Link>
                    <Link to='/skills'><p className={`ml-3 px-1  h-8 ${state.skillActive}`} onClick={skillFocusHandler}> Skills </p></Link>
                    <Link to='/projects'><p className={`ml-3 px-1  h-8 ${state.projectActive}`} onClick={projectFocusHandler}> Projects </p></Link>
                </div>
                <FaBars className='text-white  font-semibold mt-3 md:hidden text-xl w-15 cursor-pointer' onClick={() => setShowModal(!showModal)} />
            </div>
            {showModal && <div className=' container  flex place-content-end '>
                <div className=' bg-white ml-1 font-semibold mt-1  text-black text-center fixed z-30  rounded shadow-2xl md:hidden ' onClick={() => setShowModal(!showModal)}>
                    <Link to='/'> <p className='px-1 h-8 ' onClick={homeFocusHandler}> Home </p></Link>
                    <Link to='/about'> <p className='ml-1 px-1  h-8' onClick={aboutFocusHandler}> About </p></Link>
                    <Link to='/skills'><p className='ml-1 px-1  h-8' onClick={skillFocusHandler}> Skills </p></Link>
                    <Link to='/projects'><p className='ml-1 px-1  h-8' onClick={projectFocusHandler} > Projects </p></Link>
                </div>
            </div>}
        </main>
    </>
}

export default withRouter(Nav); 