import { FiGithub } from "react-icons/fi";
import { HiOutlineLink } from "react-icons/hi";
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import SR from '../../images/projectimages/SR_light.png'

const SalesRecordApp = () => {
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
                    <p className="md:text-[1.2rem] font-bold font-mono">SALES RECORD APP</p>

                    <p className="w-auto py-4 px-4 mt-6 text-md text-[grey] bg-[#1e1f27] rounded-2xl font-mono max-[1024px]:hidden ">
                        This is an app that records sales with strict adherence to the time of recording. It was built it using React as my frontend
                        framework and Django as my backend framework. Authentication was done using JSON web tokens. One feature of it is the
                        possibility of switching between dark and light modes. There are more features to be added
                    </p>
                </motion.div>
                <div className='flex justify-between font-mono font-bold mt-2 max-[1024px]:hidden  '>
                    <p>React</p>
                    <p>Tailwind-css</p>
                    <p>Framer-Motion</p>
                </div>
                <div className="mt-4 flex row  max-[1024px]:hidden">
                <a href="https://github.com/IsaacKusi/sales_record_app_frontend"><FiGithub /></a>
                    <HiOutlineLink className="ml-5" />
                </div>
            </div>

            <img src={SR} alt="sample.png" className='img-bor w-[40rem] h-auto ml-2 rounded-xl max-[1024px]:ml-0 max-[1024px]:my-2' />
            <div className='flex justify-between text-[0.7rem] md:text-[1rem] font-mono font-bold mt-2 min-[1024px]:hidden  '>
                <p>React</p>
                <p>Tailwind-css</p>
                <p>Framer-Motion</p>
            </div>
            <div className="mt-4 flex row font-bold min-[1024px]:hidden">
               <a href="https://github.com/IsaacKusi/sales_record_app_frontend"> <FiGithub /></a>
                <HiOutlineLink className="ml-5" />
            </div>
        </main>
    </>
}

export default SalesRecordApp;