import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PenTool } from "lucide-react";

function Blogs(){
    return(
        <>
            <Navbar/>
            <main className="bg-slate-50 dark:bg-slate-900 min-h-screen py-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 md:px-8 h-[60vh] flex flex-col justify-center items-center">
                    <div className="bg-white dark:bg-slate-800 p-10 md:p-16 rounded-3xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-xl flex flex-col items-center text-center">
                        <div className="bg-indigo-100 dark:bg-indigo-900/40 p-6 rounded-full mb-6 text-indigo-600 dark:text-indigo-400">
                            <PenTool size={64} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 tracking-tight mb-4">
                            Blogs
                        </h2>
                        <p className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 bg-indigo-50 dark:bg-indigo-900/30 px-6 py-3 rounded-2xl">
                            Coming Soon!
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Blogs