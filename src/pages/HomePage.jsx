import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserPhoto from '../assets/photo.jpg'
import {Download,Eye} from 'lucide-react'
import {Link} from 'react-router-dom'

function HomePage(){
    return(
        <>
            <Navbar/>
            <main className="bg-slate-50 dark:bg-slate-900 min-h-screen py-6 transition-colors duration-300">
                <div className='flex flex-col-reverse lg:flex-row mx-2 md:mx-6 border-indigo-200 dark:border-indigo-900/40 border-4 p-4 lg:object-contain lg:pr-4 rounded-4xl justify-between min-w-0 bg-white dark:bg-slate-800 shadow-xl'>
                    <div className='flex flex-col gap-4 md:gap-6 lg:max-w-2xl border-4 border-indigo-100 dark:border-indigo-800/50 rounded-2xl p-4 md:p-8 shadow-md bg-indigo-50/30 dark:bg-slate-800/50'>
                        <div className='text-indigo-600 dark:text-indigo-400 font-extrabold text-3xl md:text-5xl tracking-tight'><h1>Sakshyam Luitel</h1></div>
                        <div><h2 className='text-slate-700 dark:text-slate-300 text-2xl md:text-3xl font-bold'>Student Of Computer Engineering</h2></div>
                        <div><p className='text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-4 font-medium leading-relaxed'>Hi I am Sakshyam Luitel currently pursuing the bachelor's degree from Tribhuvan University IOE Pulchowk Campus, Kathmandu Nepal.</p></div>
                        <div className='flex justify-start gap-4 flex-wrap'>
                            <a href='/Resume.pdf' target='_blank' rel='noopener noreferrer' download="Sakshyam_Luitel_Resume.pdf" className='flex bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-sm md:text-xl px-3 py-2 md:px-6 md:py-3 rounded-2xl items-center shadow-lg font-bold'>
                                <div className='p-0.5 hover:cursor-pointer mr-2'><Download/></div>
                                <span className='hover:cursor-pointer'>Download Resume</span>
                            </a>
                            <Link to="/projects" className='flex border-4 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors px-3 py-2 text-sm md:text-xl md:px-6 md:py-3 rounded-2xl items-center shadow-md font-bold'>
                                <div className='p-0.5 hover:cursor-pointer mr-2'><Eye/></div>
                                <span className='hover:cursor-pointer'>View Projects</span>
                            </Link>
                            
                        </div>
                    </div>
                    <div className='flex justify-center items-center lg:justify-center md:mx-6 md:border-0 border-indigo-200 dark:border-indigo-900 border-b-4 pb-6 md:mb-0 mb-6 w-full lg:w-auto'><img src={UserPhoto} alt="user photo" className=' h-50 w-50 lg:h-64 lg:w-64 rounded-full border-[6px] border-indigo-200 dark:border-indigo-500 shadow-2xl object-cover' /></div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage