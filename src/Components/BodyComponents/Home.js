
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import ReactNode from '../images/Reactnode.jpg'
import './home.css'


const Home = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return <>
        <main className='home-animation bg-image min-h-screen overflow-hidden ' ref={ref}>
            <div className="container py-12 ">
                <div className='flex justify-between'>
                    <div>
                        <div className='flex col'>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: -600 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                initial={'hidden'}
                                animate={mainControls}
                                exit={{ opacity: 0, x: -600 }}
                                transition={{ duration: 0.9, delay: 0.2 }}
                            >
                                <div>
                                    <p className='text-[#64F4AC] text-[1rem]  md:text-[1.3rem] font-bold font-mono mt-20'>Hi, my name is</p>
                                    <p className='text-white mt-6 text-xl font-mono  md:text-4xl lg:text-6xl' >Isaac Kusi, <span className='mr-2 text-[#64F4AC] text-[1rem] lg:text-[1.5rem]'>a</span></p>
                                    <p className='text-white text-xl font-bold md:mt-2 lg:mt-4 font-mono md:text-4xl lg:text-6xl'>
                                        SOFTWARE DEVELOPER,
                                    </p>
                                    <p className='text-white md:mt-2 lg:mt-6 text-md md:text-xl lg:text-3xl font-mono '>who has a penchant in turning ideas</p>
                                    <p className='text-white md:mt-2 lg:mt-6 text-md md:text-xl lg:text-3xl font-mono '>into real life <span className='text-[#64F4AC]'>Products.</span></p>
                                </div>
                            </motion.div>
                        </div>
                        <div className='mt-40 text-white font-sans font-semibold'>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 600 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                initial={'hidden'}
                                animate={mainControls}
                                exit={{ opacity: 0, x: 600 }}
                                transition={{ duration: 0.9, delay: 0.2 }}
                            >
                                <p className='text-white md:text-2xl text-xl font-mono '>Experience
                                    (<span className='text-[1rem]'>years</span>)
                                    <span className='text-[#64F4AC] border border-[#64F4AC] ml-2 rounded-full p-2'>2+</span></p>
                                <p className='text-[#64F4AC] font-mono border border-[#64F4AC] mt-4 w-32 flex place-content-center rounded-lg'>
                                    <a href='mailto:kusiisaacimpact@yahoo.com'> Contact Me !! </a>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: -200 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            initial={'hidden'}
                            animate={mainControls}
                            exit={{ opacity: 0, y: -200 }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                        >
                            <img src={ReactNode} alt="react.png" className='h-72 w-72 max-[478px]:hidden lg:h-96 lg:w-96 ' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    </>
}

export default Home;