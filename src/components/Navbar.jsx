import { Link } from "react-router-dom"
import { useState , useEffect } from "react"
import { Menu , X, Sun, Moon } from "lucide-react"
import ListItem from "./ListItem"

function Navbar(){
    const [isVisible , setIsVisible] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    function showDropdown(){
        setIsVisible(!isVisible)
    }

    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode)
    }

    return(<>
        <nav className=" border-b-4 border-indigo-200 dark:border-indigo-900 bg-slate-50 dark:bg-slate-900 h-auto hover:h-auto sticky top-0 z-50 shadow-md transition-colors duration-300">
            <div className="flex justify-between my-2 md:my-5 mx-2 md:mx-6 items-center">
                <div className="hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
                    <Link to ="/" ><p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight font-playfair italic">Portfolio Website</p></Link>
                </div>

                

                <ul className="hidden lg:flex justify-around w-full max-w-2xl mx-4 hover:cursor-pointer text-slate-700 dark:text-slate-300 font-bold text-lg">
                    {/* <ListItem name = "About" /> */}
                    <ListItem name = "Skills" />
                    <ListItem name = "Experience" />
                    <ListItem name = "Education"/>
                    <ListItem name = "Blogs" />
                    <ListItem name = "Contacts" />
                </ul>
                <div className="flex items-center gap-4">
                    <button onClick={toggleDarkMode} className="p-2 rounded-full border-2 border-indigo-200 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-300 transition-all shadow-sm">
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button className="cursor-pointer text-3xl lg:hidden text-indigo-600 dark:text-indigo-400" onClick ={showDropdown}><Menu/></button>
                </div>

                <ul className={`fixed top-0 right-0 z-999 h-dvh w-full ${!isVisible?'hidden':'flex' } lg:hidden flex-col gap-10 items-start justify-start hover:cursor-pointer text-slate-700 dark:text-slate-300 font-bold bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xl transition-colors duration-300`}>
                    <li className="w-100% mt-2 hover:bg-indigo-100 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 px-5 py-2 rounded-2xl" onClick ={showDropdown}><X/></li>
                    {/* <ListItem name = "About"/> */}
                    <ListItem name = "Skills"/>
                    <ListItem name = "Experience"/>
                    <ListItem name = "Education"/>
                    <ListItem name = "Blogs"/>
                    <ListItem name = "Contacts"/>
                </ul>
            </div>
        </nav>
    </>)
}

export default Navbar