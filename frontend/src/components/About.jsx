import React from 'react'
import ab1 from '../assets/ab1.jpg'

const About = () => {
  return (
    <section id='about' className='w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16'>
          
          {/* Image Section */}
          <div className='relative flex justify-center lg:justify-end' data-aos='fade-right'>
            {/* Dekoratif kotak biru di belakang gambar */}
            <div className='absolute -left-4 top-1/2 -translate-y-1/2 w-16 md:w-20 lg:w-24 h-4/5 bg-blue-600 rounded-r-2xl hidden md:block z-0' />
            
            <img 
              src={ab1} 
              alt='About Our Institution' 
              className='relative w-full max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-2xl shadow-2xl z-10 transition-transform duration-500 hover:scale-[1.02]'
            />
          </div>

          {/* Text Content Section */}
          <div className='text-center lg:text-left' data-aos='fade-left'>
            <p className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-3'>
              About Us
            </p>
            
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1a44] leading-tight mb-6'>
              Empowering Minds for a <br className='hidden sm:block' /> 
              <span className='text-blue-600'>Brighter</span> Future
            </h2>
            
            <p className='text-gray-600 leading-relaxed mb-8 text-base sm:text-lg'>
              Established with a vision to bridge the gap between traditional education and modern technology. 
              We provide a comprehensive learning ecosystem designed to foster creativity, 
              innovation, and practical skills for the next generation of global leaders.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
              <button className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-200 hover:-translate-y-1'
                data-aos='fade-up'
                data-aos-delay='200'>
                Discover More
              </button>
              
              <div className='flex items-center gap-2 text-[#0a1a44] font-semibold cursor-pointer group'>
                <span className='group-hover:text-blue-600 transition-colors'>Learn our values</span>
                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About