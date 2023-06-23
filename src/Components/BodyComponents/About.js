import Contacts from './AboutItems/Contacts';
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from 'react';
import image from '../images/IKe.jpg';
import './about.css'

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return <>
        <main className="bg-[#2a2b36] h-screen overflow-x-hidden" ref={ref} >
            <div className="container py-10">
                <div className="about p-4  mt-20  text-white leading-7 rounded  flex flex-col  md:flex-row md:skew-x-6 md:skew-y-3">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: -40 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial={'hidden'}
                        animate={mainControls}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 2, delay: 0.2 }}
                        className='inline flex place-content-center my-2 md:my-0 md:place-content-start md:w-screen'> <img src={image} alt="sample.png" className='md:animate-wiggle rounded-full w-60 h-45 md:rounded-3xl md:w-67 md:h-50 ' />
                    </motion.div>
                    <div className='ml-2 text-md font-sans text-justify'>
                        <span className='font-bold'>I am a Fullstack Developer based in Ghana</span>. <span className='text-semibold'>I aim to create efficient and innovative solutions
                            for real-world problems using programming languages like Javascript, Typescript and Python. As a Fullstack developer, I specialize in React for front-end development and
                            Python and Django are my go-to choices for backend development.
                            Creating user-friendly interfaces and paying attention to detail is my passion. I have worked on diverse projects,
                            ranging from small-scale applications to large enterprise systems, and easily collaborate with cross-functional teams.
                            In my sparetime, I love to contribute to open source projects and read technical blogs. </span> <span className='font-bold anim_text'><motion.p
                                variants={{
                                    hidden: { opacity: 0, y: -20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                initial={'hidden'}
                                animate={mainControls}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className='inline'> Driven by a desire to make a positive
                                impact through software engineering and contribute to the ever-evolving technological landscape,
                                I look forward to utilizing my skills and knowledge to create innovative software solutions and contribute to future projects.
                                If you are looking for a full stack developer, you have come to the right place. Let's build something amazing together!!!
                            </motion.p></span>
                    </div>
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </main>
    </>
}

export default About;