import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

function ProjectsPage(){
    return(
        <>
            <Navbar/>
            <main>
                <div className="text-center"><span className="text-2xl text-center border-b-1 border-cyan-500">Projects</span></div>
                <div className="flex justify-center md:justify-between items-center absolute top-30 md:top-35 flex-wrap md:mx-4">
                    <Card projectName="Ecommerce Website" projectDescription="Basic CRUD Ecommerce Website using React and Django"/>
                    <Card projectName= "Diet Recommendation System" projectDescription="Diet Recommendation System For Diseased as well as Healthy People"/>
                    <Card projectName="Rock Paper Scissors" projectDescription="A Rock Paper Scissors Game using HTML CSS and Vanilla Javascript"/>
                    <Card projectName="Chatbot" projectDescription="A Chatbot using React and OpenAI API" />
                </div>
            </main>
            {/* <Footer/> */}
        </>
    )
}

export default ProjectsPage