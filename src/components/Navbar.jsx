import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu , X } from "lucide-react"

function Navbar(){
    const [isVisible , setIsVisible] = useState(false)

    function showDropdown(){
        setIsVisible(!isVisible)
    }

    return(<>
        <nav className="">
            <div className="flex justify-between my-2 md:my-4 mx-2 md:mx-4  border-b-1 border-red-600 items-center">
                <div>
                    <p className="text-2xl">Portfolio Website</p>
                </div>

                

                <ul className="flex md:flex hidden justify-around w-xl hover:cursor-pointer">
                    <li>About</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Education</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button className="cursor-pointer text-3xl md:hidden" onClick ={showDropdown}><Menu/></button>
                </div>

                <ul className={`fixed top-0 right-0 z-999  h-dvh w-full  ${!isVisible?'hidden':'flex' } md:hidden flex-col gap-10 items-start justify-start hover:cursor-pointer backdrop-blur-xl`}>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2  rounded-2xl " onClick ={showDropdown}><X/></li>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2  rounded-2xl">About</li>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2 rounded-2xl">Skills</li>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2 rounded-2xl">Experience</li>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2 rounded-2xl">Education</li>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2 rounded-2xl">Blogs</li>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2 rounded-2xl">Contact</li>
                </ul>
            </div>
        </nav>
    </>)
}

export default Navbar