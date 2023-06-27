import AyaEMS from "./ProjectItems/AyaEMS";
import SalesRecordApp from "./ProjectItems/SalesRecordApp";
import NetFlix from "./ProjectItems/NetFlix";
import Music from "./ProjectItems/Music";
import EndNotes from "./ProjectItems/EndNotes";

const Projects = () => {
    return <>
        <main className="container mt-20 py-12 text-white overflow-x-hidden">
            <h1 className=" text-[1.3rem] md:text-[1.5rem] font-mono">Latest Projects</h1>
            <p className=" text-sm md:text-[1rem] text-[grey] font-mono">ideal solutions for a digital Experience</p>
            <AyaEMS />
            <SalesRecordApp />
            <NetFlix />
            <Music />
            <EndNotes />
        </main>
    </>
}

export default Projects;

