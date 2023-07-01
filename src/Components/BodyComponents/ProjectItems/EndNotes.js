
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";



const EndNotes = () => {

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return <>
        <div className=" md:flex  md:justify-between" ref={ref}>
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
                <div className="mt-24" >
                    <h1 className="text-[#64F4AC] md:text-[1.2rem] font-mono font-semibold ">PROJECTS INFO</h1>
                    <p className="w-72  font-mono text-[1rem] ">The code base for the projects above can be seen in my
                        <a href='https://github.com/IsaacKusi' target='blank' className="text-[#64F4AC] mx-1 text-[1rem]">github public repository</a>
                        except the private ones which are not supposed to be shared publicly
                    </p>
                </div>
            </motion.div>
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
                <div className="mt-10 md:mt-28 font-mono text-[1rem] ">
                    <p>
                        <a href='mailto:kusiisaacimpact@yahoo.com' target='blank' className="mr-1 text-[1.3rem] font-mono text-[#64F4AC] ">Contact Me</a>
                        and Let's Build Something Amazing Together
                    </p>
                    <p >
                        kusiisaacimpact@yahoo.com
                    </p>
                    <p>
                        kusi642@gmail.com
                    </p>
                </div>
            </motion.div>
        </div>

    </>
}

export default EndNotes;