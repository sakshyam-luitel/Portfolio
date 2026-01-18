import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

function ProjectsPage(){
    return(
        <>
            <Navbar/>
                <div className="ml-2 text-4xl text-center">Projects</div>
                <div className="flex justify-center md:justify-between items-center absolute top-30 md:top-35 flex-wrap">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </>
    )
}

export default ProjectsPage