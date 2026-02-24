import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/projectspage/Card";
import { createContext } from "react";
export const CardContext = createContext();

function ProjectsPage() {
 

  return (
    <>
      <Navbar />
      <main>
        <div className="text-center">
          <span className="text-2xl text-center border-b-1 border-cyan-500">
            Projects
          </span>
        </div>
        <div className="flex justify-center md:justify-between items-center absolute top-30 md:top-35 flex-wrap md:mx-4">
          <Card
            projectName="Ecommerce Website"
            projectDescription="Basic CRUD Ecommerce Website using Javascript and Django"
          />
          <Card
            projectName="Diet Recommendation System"
            projectDescription="Diet Recommendation System For Diseased as well as Healthy People"
          />
          <CardContext value="rps.jfif">
            <Card
              projectName="Rock Paper Scissors"
              projectDescription="A Rock Paper Scissors Game using HTML CSS and Vanilla Javascript"
              projectLink = "https://rock-paper-scissors-nu-tawny.vercel.app/"
            />
          </CardContext>
          <CardContext.Provider value = "chatbot.PNG">
          <Card
            projectName="Chatbot"
            projectDescription="A Chatbot using React and OpenAI API"
            projectLink= "https://chatbot-rho-two-97.vercel.app/"
          />
          </CardContext.Provider>
        </div>
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default ProjectsPage;
