
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
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
        <main className='home-animation min-h-screen overflow-hidden ' ref={ref}>
            <div className="container py-12 ">
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
                    <p className='text-white text-xl font-bold mt-36 font-sans md:text-4xl lg:text-6xl'>
                        SOFTWARE DEVELOPER
                    </p>
                </motion.div>
                </div>
                <div className='mt-44 text-white font-sans font-semibold'>
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
                        <p>Hey! I am Isaac</p>
                        <p>
                            I build Interactive Websites and Web Applications
                        </p>
                        <span className=''>
                            that run across platforms and devices. 
                        </span>
                        </motion.div>
                </div>
            </div>
        </main>
    </>
}

export default Home;