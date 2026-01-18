import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserPhoto from '../assets/photo.jpg'
import {Download,Eye} from 'lucide-react'
import {Link} from 'react-router-dom'

function HomePage(){
    return(
        <>
            <Navbar/>
            <main>
                <div className='flex flex-col-reverse lg:flex-row mx-2 md:mx-4 border-cyan-500 border-1 p-4 lg:object-contain lg:pr-4 rounded-4xl justify-between min-w-0'>
                    <div className='flex flex-col gap:3 md:gap-4 lg:max-w-2xl border-1 border-violet-500 rounded-2xl  p-2 md:p-8'>
                        <div className='text-sky-500 text-2xl md:text-4xl'><h1>Sakshyam Luitel</h1></div>
                        <div><h2 className=' text-xl md:text-3xl'>Student Of Computer Engineering</h2></div>
                        <div><p className=' text-0.5xl md:text-xl mb-4'>Hi I am Sakshyam Luitel currently pursuing the bachelor's degree from Tribhuvan University IOE Pulchowk Campus, Kathmandu Nepal.</p></div>
                        <div className='flex justify-between'>
                            <a href='./Resume.pdf' download><div className='flex bg-emerald-500 text-sm md:text-xl px-1 py-1 md:px-4 md:py-2 rounded-2xl items-center'>
                                <div className='p-0.5 hover:cursor-pointer'><Download/></div>
                                <button className='hover:cursor-pointer'>Download Resume </button>
                            </div></a>
                            <Link to = "/projects"><div className='flex border-1 border-sky-500 px-1 py-1 text-sm md:text-xl md:px-4 md:py-2 rounded-2xl items-center '>
                                <div className='p-0.5 hover:cursor-pointer'><Eye/></div>
                                <button className='hover:cursor-pointer'>View Projects</button>
                            </div>
                            </Link>
                            
                        </div>
                    </div>
                    <div className='flex justify-center lg:block md:mx-6 md:border-0 border-red-600 border-b-1 pb-4 md:mb-0 mb-4'><img src={UserPhoto} alt="user photo" className=' h-50 w-50 lg:h-60 lg:w-60 rounded-full ' /></div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default HomePage