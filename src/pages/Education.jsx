import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Education(){
    return(
        <>
            <Navbar/>
            <main className="bg-slate-50 dark:bg-slate-900 min-h-screen py-10 transition-colors duration-300">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-12">
                        <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 border-b-4 border-indigo-600 dark:border-indigo-400 pb-2 tracking-tight">
                            Education
                        </span>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Bachelor's */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-indigo-600 dark:bg-indigo-500 text-white font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">Current</div>
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Bachelor of Engineering in Computer Engineering</h3>
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-2">Institute of Engineering (IOE), Pulchowk Campus</h4>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mt-1">Lalitpur, Nepal</p>
                            <p className="text-slate-700 dark:text-slate-300 font-bold mt-4">Result: Pending</p>
                        </div>

                        {/* 10+2 */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">10+2 (Higher Secondary Education)</h3>
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-2">Kathmandu Bernhardt College</h4>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mt-1">Kathmandu, Nepal</p>
                            <p className="text-slate-700 dark:text-slate-300 font-bold mt-4">GPA: 3.64</p>
                        </div>

                        {/* SEE */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/60 shadow-lg">
                            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">Secondary Education Examination (SEE)</h3>
                            <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mt-2">Shree Navin Jyoti English School</h4>
                            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg mt-1">Nagarjun-08, Kathmandu, Nepal</p>
                            <p className="text-slate-700 dark:text-slate-300 font-bold mt-4">GPA: 3.75</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Education