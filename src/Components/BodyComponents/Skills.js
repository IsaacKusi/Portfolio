
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
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import './skill.css'


const Skills = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])
    return <>
        <main className="container mt-16 py-8 overflow-x-hidden" ref={ref}>
            <div className='skill skillfl flex  items-center place-content-center md:flex md:justify-between md:px-40 py-2 rounded-2xl '>
                <div className='md:animate-wiggle'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial={'hidden'}
                        animate={mainControls}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >  <img src={frontend} alt="sample.png" width='150px' height='50px' className='skill rounded-2xl h-20 px-1' />
                        <img src={react} alt="sample.png" width='150px' className='skill mt-3 md:mt-9 h-[4.5rem] rounded-2xl' />
                        <img src={redux} alt="sample.png" width='150px' className='skill mt-3 md:mt-10 h-20 rounded-2xl' />
                        <img src={reatctypescript} alt="sample.png" width='150px' className='skill mt-3 md:mt-10 h-16 rounded-2xl' />
                        <img src={tailwind} alt="sample.png" width='150px' className='skill mt-3 md:mt-10 h-20 rounded-2xl' />
                    </motion.div>

                </div>
                <div className="w-full md:w-[50%] flex justify-center items-center">
                    <TagCloud
                        options={(w) => ({
                            radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                            maxSpeed: "normal",
                        })}
                        onClick={(tag, ev) => alert(tag)}
                        onClickOptions={{ passive: true }}
                        className="text-[#64F4AC]"
                    >
                        {[
                            "JavaScript",
                            "TypeScript",
                            "React",
                            "Tailwindcss",
                            "Django Channels",
                            "Django Signals",
                            "Django_RestFramework",
                            "Python",
                            "Git",
                            "Git hub",
                            "HTML5",
                            "CSS3",
                            "Jest",
                            "AI",
                            "Web_Scraping",
                            "docker",
                            "React-Redux",
                        ]}
                    </TagCloud>
                </div>
                <div className='md:animate-wiggle'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial={'hidden'}
                        animate={mainControls}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >   <img src={python} alt="sample.png" width='150px' height='50px' className='skill rounded-2xl h-20 md:mt-2' />
                        <img src={djrestFramework} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-9 h-20 rounded-2xl' />
                        <img src={Docker} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-10 h-20 rounded-2xl' />
                        <img src={websocket} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-9 h-20 rounded-2xl' />
                        <img src={postgres} alt="sample.png" width='150px' height='50px' className='skill mt-3 md:mt-7 h-20 rounded-2xl' />
                    </motion.div>
                </div>
            </div>
        </main>
    </>
}

export default Skills;