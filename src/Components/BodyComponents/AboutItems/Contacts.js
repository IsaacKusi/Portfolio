import github from '../../images/Github.png'
import linkedin from '../../images/linkedin.png'
import yahoo from '../../images/yahoo.png'

const Contacts = () => {
    return <>
        <p className="text-white bg-red">Contact me</p>
        <div className="mt-16 flex justify-between">
            <a href='https://github.com/IsaacKusi'><img src={github} alt="sample.png" className='border border-white rounded-full' /></a>
           <a href='https://www.linkedin.com/in/isaac-kusi'><img src={linkedin} width='210px' height='50px' alt="sample.png"/></a>
            <img src={yahoo} width='210px' height='50px' alt="sample.png" className='border border-white rounded-full' />
        </div>
    </>
}

export default Contacts;