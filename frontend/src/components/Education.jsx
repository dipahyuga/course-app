import React from 'react'
import ec1 from '../assets/ec1.jpg'

const Education = () => {
  return (
    <section id='education' className='w-full min-h-screen bg-white flex items-center justify-center py-16 lg:py-24 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 w-full'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20'>
                
                {/* Text Content Section */}
                <div className='max-w-xl text-center lg:text-left order-2 lg:order-1'
                    data-aos='fade-right'>
                    <p className='text-blue-600 font-semibold mb-4 text-sm sm:text-base uppercase tracking-widest'>
                        Academic Excellence
                    </p>       
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1a44] leading-tight mb-4 lg:mb-6'>
                        High-Quality Education <br className='hidden sm:block' /> for Your Bright Future
                    </h2> 
                    <p className='text-gray-600 leading-relaxed mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg'>
                        We are dedicated to providing an innovative learning environment, combining a global standard curriculum with real-world industry practices to produce graduates who are ready to compete.
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-white px-8 sm:px-10 py-3 rounded-full font-bold shadow-lg shadow-blue-200 text-sm sm:text-base'>
                            Explore Programs
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className='relative flex items-center justify-center order-1 lg:order-2'
                    data-aos='fade-left'>
                        {/* Blue Decorative Box */}
                        <div className='absolute left-1/2 lg:left-40 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-80 h-32 sm:h-40 lg:h-52 bg-blue-600 hidden md:block -translate-x-1/2 lg:translate-x-0 rounded-2xl opacity-10' />
                        
                        <div className='relative'>
                            {/* Main Circular Image */}
                            <img 
                                src={ec1} 
                                alt='Learning Environment' 
                                className='w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-full border-[12px] border-gray-50 shadow-2xl relative z-10' 
                            />

                            {/* Floating Badge 1: Courses */}
                            <div className='absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white p-3 sm:p-5 rounded-2xl shadow-xl z-20 border border-gray-100'>
                                <div className='text-center'>
                                    <div className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 leading-none'>100+</div>
                                    <div className='text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-tighter'>Courses</div>
                                </div>
                            </div>

                            {/* Floating Badge 2: Students */}
                            <div className='absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white p-3 sm:p-5 rounded-2xl shadow-xl z-20 border border-gray-100'>
                                <div className='text-center'>
                                    <div className='text-xl sm:text-2xl lg:text-3xl font-black text-blue-600 leading-none'>5K+</div>
                                    <div className='text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-tighter'>Students</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education