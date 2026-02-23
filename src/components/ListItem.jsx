function ListItem({name}){
             return(
            <>
            {
                //<li className="hover:border-b-1 hover:border-cyan-500">{name}</li> 
                <li className="w-100% mt-2 hover:bg-gray-300 px-5 py-2  rounded-2xl">{name}</li>
            }
            </>
        )
}

export default ListItem