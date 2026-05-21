import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/projectspage/Card";
import { createContext } from "react";
export const CardContext = createContext();

function ProjectsPage() {
 

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 dark:bg-slate-900 min-h-screen pb-12 transition-colors duration-300">
        <div className="text-center pt-8 md:pt-12 mb-12">
          <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-400 pb-2 tracking-tight">
            Projects
          </span>
        </div>
        <div className="flex justify-center md:justify-center gap-10 items-start flex-wrap md:mx-4">
          <CardContext value= "ecommerce.PNG">
            <Card
            projectName="Ecommerce Website"
            projectDescription="Basic CRUD Ecommerce Website using HTML CSS Javascript and Django"
            projectLink="https://amazon-clone-ofwr.onrender.com/"
          />
          </CardContext>
          {/* <Card
            projectName="Diet Recommendation System"
            projectDescription="Diet Recommendation System For Diseased as well as Healthy People"
          /> */}
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
            projectDescription="A Chatbot using React and LLAMA"
            projectLink= "https://chatbot-rho-two-97.vercel.app/"
          />
          </CardContext.Provider>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ProjectsPage;
