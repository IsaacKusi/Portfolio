import Contacts from './AboutItems/Contacts'
import image from '../images/IKe.jpg'
import './about.css'

const About = () => {
    return <>
        <main className="bg-[#2a2b36] h-screen">
            <div className="container py-10">
                <div className="about mt-20 text-white rounded bg-[#11121a] flex flex-col  md:flex-row">
                    <div className='flex place-content-center my-2 md:my-0 md:place-content-start md:w-screen'>
                        <img src={image} alt="sample.png" className='rounded-full w-60 h-45 md:rounded md:w-67 md:h-50 ' />
                    </div>
                    <p className='ml-2 text-md font-sans text-justify'>
                        I am a Fullstack Developer based in Ghana. I aim to create efficient and innovative solutions
                        for real-world problems using programming languages like Javascript, Typescript and Python. I have a deep understanding
                        of software development methodologies, including agile practices, enabling me to deliver high-quality code while meeting project deadlines.
                        Creating user-friendly interfaces and paying attention to detail is my passion. I have worked on diverse projects,
                        ranging from small-scale applications to large enterprise systems, and collaborate with cross-functional teams.
                        <span className='mt-1' >
                            In my sparetime, I love to contribute to open source projects and read technical blogs. Driven by a desire to make a positive
                            impact through software engineering and contribute to the ever-evolving technological landscape,
                            I look forward to utilizing my skills and knowledge to create innovative software solutions and contribute to future projects.
                            If you have any questions or need assistance, feel free to reach out. Let's build something amazing together!
                        </span>
                    </p>
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </main>
    </>
}

export default About;