import { Link } from "react-router-dom"
import { useState } from "react"
import { Menu , X } from "lucide-react"
import ListItem from "./ListItem"

function Navbar(){
    const [isVisible , setIsVisible] = useState(false)

    function showDropdown(){
        setIsVisible(!isVisible)
    }

    return(<>
        <nav className=" border-b-1 border-red-600 mb-4 h-auto hover:h-auto">
            <div className="flex justify-between my-2 md:my-4 mx-2 md:mx-4  items-center">
                <div className="hover:border-b-1 hover:border-cyan-500">
                    <Link to ="/" ><p className="text-2xl">Portfolio Website</p></Link>
                </div>

                

                <ul className="flex md:flex hidden justify-around w-xl hover:cursor-pointer">
                    <ListItem name = "About" />
                    <ListItem name = "Skills" />
                    <ListItem name = "Experience" />
                    <ListItem name = "Education"/>
                    <ListItem name = "Blogs" />
                    <ListItem name = "Contacts" />
                </ul>
                <div>
                    <button className="cursor-pointer text-3xl md:hidden" onClick ={showDropdown}><Menu/></button>
                </div>

                <ul className={`fixed top-0 right-0 z-999  h-dvh w-full  ${!isVisible?'hidden':'flex' } md:hidden flex-col gap-10 items-start justify-start hover:cursor-pointer backdrop-blur-xl`}>
                    <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2  rounded-2xl " onClick ={showDropdown}><X/></li>
                    <ListItem name = "About"/>
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