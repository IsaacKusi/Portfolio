import { FiGithub } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi"
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import music from '../../images/projectimages/mplay1.png'

const Music = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])
    return <>
        <main className="mt-20 flex row description " ref={ref}>
            <div className="  width-auto  ">
            <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                >
                <p className="text-[1rem] md:text-[1.1rem] text-[#64F4AC] font-mono">Featured Project</p>
                <p className="md:text-[1.2rem] font-bold font-mono">MUSIC PLAYER</p>
               
                    <p className="w-auto py-4 px-4 mt-6 text-md text-[grey] bg-[#1e1f27] rounded-2xl font-mono max-[1024px]:hidden ">
                        This software is a music player with a limited amount of tracks and control buttons for switching
                        between songs as well as pausing, playing, and shuffling music. The player also provides information
                        about the currently playing music. Specifically, the artist's name, song title, and picture.
                        This system was built with Tailwindcss and React.js, making use of React Hooks and React Context API.
                    </p>
                </motion.div>

                <div className='flex justify-between font-mono font-bold mt-2 max-[1024px]:hidden  '>
                    <p>React</p>
                    <p>Tailwind-css</p>
                    <p>Framer-Motion</p>
                </div>
                <div className="mt-4 flex row  max-[1024px]:hidden">
                <a href="https://github.com/IsaacKusi/music_player_react"> <FiGithub /> </a>
                    <HiOutlineLink className="ml-5" />
                </div>
            </div>
            <img src={music} alt="sample.png" className='img-bor w-[40rem] h-auto ml-2 rounded-xl max-[1024px]:ml-0 max-[1024px]:my-2' />
            <div className='flex justify-between text-[0.7rem] md:text-[1rem] font-mono font-bold mt-2 min-[1024px]:hidden  '>
                <p>React</p>
                <p>Tailwind-css</p>
                <p>Framer-Motion</p>
            </div>
            <div className="mt-4 flex row font-bold min-[1024px]:hidden">
              <a href="https://github.com/IsaacKusi/music_player_react"> <FiGithub /> </a> 
                <HiOutlineLink className="ml-5" />
            </div>
        </main>
    </>
}

export default Music;