import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, Github, Globe } from "lucide-react";

function Contacts(){
    return(
        <>
            <Navbar/>
            <main className="bg-slate-50 dark:bg-slate-900 min-h-screen py-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-400 pb-2 tracking-tight">
                            Contact Me
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Email */}
                        <a href="mailto:sakshyam.luitel@gmail.com" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg flex flex-col items-center text-center">
                            <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
                                <Mail size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Email</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">sakshyam.luitel@gmail.com</p>
                        </a>

                        {/* Phone */}
                        <a href="tel:9863200303" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg flex flex-col items-center text-center">
                            <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
                                <Phone size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Phone</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">+977 9863200303</p>
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/sakshyam-luitel" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg flex flex-col items-center text-center">
                            <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
                                <Github size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">GitHub</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">github.com/sakshyam-luitel</p>
                        </a>

                        {/* Location */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg flex flex-col items-center text-center cursor-default">
                            <div className="bg-indigo-50 dark:bg-slate-700 p-4 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
                                <Globe size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Location</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Contacts