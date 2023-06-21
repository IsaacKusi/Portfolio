import github from '../../images/Github.png'
import linkedin from '../../images/linkedin.png'
import yahoo from '../../images/yahoo.png'
import { FaArrowAltCircleDown } from 'react-icons/fa'
import './contact.css'

const Contacts = () => {
    return <>
        <main className='contact mt-4 md:mt-2  md:-skew-x-[4deg] md:skew-y-3 p-4 rounded'>
            <p className="contactext text-white border border-[#71E4DC] border-2 md:w-72 rounded-full text-center text-sm"> 
            <span className='anim_text'>Contact me through the links below</span> 
            <FaArrowAltCircleDown className='inline ml-2 mb-1 bg-[#71E4DC]  rounded-full'/></p>
            <div className="mt-12 flex justify-between">
                <a href='https://github.com/IsaacKusi'><img src={github} width='150px' height='50px' alt="sample.png" className='animate-pulse border border-white rounded-full' /></a>
                <a href='https://www.linkedin.com/in/isaac-kusi'><img src={linkedin} width='150px' height='50px' alt="sample.png" className='animate-bounce' /></a>
                <a href='mailto:kusiisaacimpact@yahoo.com'><img src={yahoo} width='150px' height='50px' alt="sample.png" className='animate-pulse border border-white rounded-full'/></a>
            </div>
        </main>
    </>
}

export default Contacts;