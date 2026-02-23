function Card({projectName , projectDescription}){
    function redirectToWebsite(){

    }

    return(
        <>
            <div className="dark:bg-slate-700  flex flex-col w-60 lg:w-80 h-96
             border-1 border-purple-500 rounded-xl justify-start md:justify-start items-center md:align-center px-2 mx-2  mb-4 hover:cursor-pointer relative" onClick ={redirectToWebsite}>
                <div className="font-bold text-2xl border-purple-500 border-b-1 text-center">{projectName}</div>
                <img src="" alt="" />
                {/* <div>Project Description</div> */}
                <div className="absolute bottom-0 border-purple-500 border-t-1 p-2">{projectDescription}</div>
            </div>
        </>
    )
}

export default Card