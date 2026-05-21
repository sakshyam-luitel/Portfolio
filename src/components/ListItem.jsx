import { Link } from "react-router-dom"

function ListItem({name, to}){
             return(
            <>
            {
                <Link to={to || `/${name.toLowerCase()}`} className="w-full lg:w-auto">
                    <li className="w-full mt-2 text-center hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white px-5 py-2 transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400">{name}</li>
                </Link>
            }
            </>
        )
}

export default ListItem