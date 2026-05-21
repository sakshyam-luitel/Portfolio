import Image from "./Image"


function Card({projectName , projectDescription, projectLink}){
    function redirectToWebsite(){
        window.location.href = projectLink;
    }

    return(
        <>
            <div className="bg-white dark:bg-slate-800 flex flex-col w-64 lg:w-80 h-auto min-h-96
             border-4 border-indigo-200 dark:border-indigo-900/60 rounded-2xl justify-start md:justify-start items-center md:align-center px-2 mx-2 mb-6 hover:cursor-pointer relative shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300" onClick ={redirectToWebsite}>
                <div className="font-extrabold text-2xl text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/60 border-b-4 text-center py-4 w-full">{projectName}</div>
                <Image/>
                <div className="absolute bottom-0 w-full border-indigo-200 dark:border-indigo-900/60 border-t-4 p-4 text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900/50 rounded-b-xl text-center transition-colors">{projectDescription}</div>
            </div>
        </>
    )
}

export default Card