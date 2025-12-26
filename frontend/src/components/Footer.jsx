
import ft1 from '../assets/ft1.jpg'

const Footer = () => {
  return (
    <footer className="relative bg-center bg-cover text-white"
        style={{backgroundImage: `url(${ft1})`}}>
            <div className="absolute inset-0 bg-blue-950/80" />
                <div className="relative max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                Academic Excellence
                            </h3>
                            <p className='text-gray-300 leading-relaxed'>
                                Providing world-class education with a focus on innovation, character building, and preparing students for global success. 
                            </p>
                        </div>
                        {/* links */}
                        <div>
                            <h4 className='text-lg font-semibold m-4'> Quick Links </h4>
                            <ul className='space-y-2 text-gray-300'>
                                <li className='hover:text-white cursor-pointer'>Home</li>
                                <li className='hover:text-white cursor-pointer'>About</li>
                                <li className='hover:text-white cursor-pointer'>Services</li>
                                <li className='hover:text-white cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                        {/* services */}
                        <div>
                            <h4 className='text-lg font-semibold m-4'> Services </h4>
                            <ul className='space-y-2 text-gray-300'>
                                <li className='hover:text-white cursor-pointer'>Online Classes</li>
                                <li className='hover:text-white cursor-pointer'>Libary Access</li>
                                <li className='hover:text-white cursor-pointer'>Certified Teachers</li>
                                <li className='hover:text-white cursor-pointer'>24/7 Support</li>
                            </ul>
                        </div>
                        {/* contact */}
                        <div>
                            <h4 className='text-lg font-semibold m-4'> Contact </h4>
                            <ul className='space-y-2 text-gray-300'>
                                <li className='hover:text-white cursor-pointer'>info@academic.edu</li>
                                <li className='hover:text-white cursor-pointer'>+62 812 3456 7890</li>
                                <li className='hover:text-white cursor-pointer'>123 San Martin, Miramar</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-white/20 mt-16 pt-6 text-center text-gray-400 text-sm'>
                        @ {new Date().getFullYear()} Academic Exellence.
                    </div>
                </div>
            
    </footer>
  )
}

export default Footer
