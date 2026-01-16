function Navbar(){
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
                <div md:hidden hover:cursor-pointer>
                    <a href="#" className="text-4xl">&#8801;</a>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar