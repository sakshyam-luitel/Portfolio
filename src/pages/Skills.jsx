import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Skills(){
    return(
        <>
            <Navbar/>
            <main className="bg-slate-50 dark:bg-slate-900 min-h-screen py-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-400 pb-2 tracking-tight">
                            Technical Skills
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Section 1 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 border-b-2 border-indigo-100 dark:border-indigo-900/60 pb-2">Languages</h3>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-lg font-medium">
                                <li>JavaScript (ES6+)</li>
                                <li>Python</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>

                        {/* Section 2 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 border-b-2 border-indigo-100 dark:border-indigo-900/60 pb-2">Frontend</h3>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-lg font-medium">
                                <li>React.js</li>
                                <li>Tailwind CSS</li>
                                <li>Responsive Web Design</li>
                                <li>DOM Manipulation</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 border-b-2 border-indigo-100 dark:border-indigo-900/60 pb-2">Backend</h3>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-lg font-medium">
                                <li>Django</li>
                                <li>Django REST Framework</li>
                                <li>RESTful API Design</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 border-b-2 border-indigo-100 dark:border-indigo-900/60 pb-2">Databases</h3>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 text-lg font-medium">
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg md:col-span-2">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 border-b-2 border-indigo-100 dark:border-indigo-900/60 pb-2">Tools, Platforms & Concepts</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside text-slate-700 dark:text-slate-300 text-lg font-medium">
                                <li>Git & GitHub</li>
                                <li>Vercel Deployment</li>
                                <li>Third-Party API Integration</li>
                                <li>VS Code</li>
                                <li>Data Structures & Algorithms</li>
                                <li>Object-Oriented Programming</li>
                                <li>MVC Architecture</li>
                                <li>Asynchronous Programming</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Skills