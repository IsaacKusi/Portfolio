
import { FiGithub } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi"
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import aya from '../../images/projectimages/AyaYear.jpg'
import './ayaEms.css'

const AyaEMS = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])
    return <>
        <main className="mt-16 flex row description " ref={ref}>
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
                    <p className="md:text-[1.2rem] font-bold font-mono">AYA DATA.AI</p>

                    <p className="w-auto py-4 px-4 mt-6 text-md text-[grey] bg-[#1e1f27] rounded-2xl font-mono max-[1024px]:hidden ">This is an Employee Management System for AYA DATA.AI,
                        an Artificial Intelligence company in Ghana. It is an ongoing project which is being built using React and Golang. It showcases the TL dasboard, HR dasboard,
                        COO and CEO dashboard.
                    </p>
                </motion.div>
                <div className='flex justify-between font-mono font-bold mt-2 max-[1024px]:hidden  '>
                    <p>React</p>
                    <p>Tailwind-css</p>
                    <p>Framer-Motion</p>
                </div>
                <div className="mt-4 flex row  max-[1024px]:hidden">
                    <FiGithub />
                    <HiOutlineLink className="ml-5" />
                </div>
            </div>

            <img src={aya} alt="sample.png" className='img-bor w-[40rem] h-auto ml-2 rounded-xl max-[1024px]:ml-0 max-[1024px]:my-2' />
            <div className='flex justify-between text-[0.7rem] md:text-[1rem] font-mono font-bold mt-2 min-[1024px]:hidden  '>
                <p>React</p>
                <p>Tailwind-css</p>
                <p>Framer-Motion</p>
            </div>
            <div className="mt-4 flex row font-bold min-[1024px]:hidden">
                <FiGithub />
                <HiOutlineLink className="ml-5" />
            </div>
        </main>
    </>
}

export default AyaEMS;

