function Card(){
    return(
        <>
            <div className="bg-slate-700  flex flex-col w-60 lg:w-64 h-96
             border-1 border-purple-500 rounded-xl justify-center md:justify-start pl-4 mx-2  mb-4">
                <div className="font-bold text-2xl">Project Name</div>
                <div>Project Description</div>
                <div>Redirect</div>
            </div>
        </>
    )
}

export default Card