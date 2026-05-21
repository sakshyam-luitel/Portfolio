function ListItem({name}){
             return(
            <>
            {
                <li className="w-100% mt-2 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white px-5 py-2 transition-all duration-300 rounded-2xl border-2 border-transparent hover:border-indigo-700 dark:hover:border-indigo-400">{name}</li>
            }
            </>
        )
}

export default ListItem