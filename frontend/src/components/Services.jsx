import React from 'react'
import sv2 from '../assets/sv2.jpg'
import { CheckCircle2 } from 'lucide-react'

const Services = () => {
  return (
    <section id='services' className='bg-white w-full py-12 md:py-16'>
      {/* Banner Section */}
      <div className='w-full h-48 sm:h-64 md:h-80 lg:h-[450px] overflow-hidden shadow-inner'>
        <img 
          src={sv2} 
          alt='School Services Banner' 
          className='w-full h-full object-cover'
          data-aos='zoom-out' 
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        
        {/* KOLOM KIRI: Judul & Branding */}
        <div className='relative' data-aos='fade-right'>
          {/* Aksen Biru - Diubah menjadi garis vertikal tebal agar lebih modern */}
          <div className='absolute -left-4 top-0 w-2 h-full bg-blue-600 rounded-full hidden lg:block' />
          
          <div className='relative lg:pl-8'>
            <p className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-3'>
              Empowering Students
            </p>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1a44] leading-tight'>
              Excellence in <br className='hidden sm:block' /> School Services
            </h2>
            <div className='mt-6 h-1 w-20 bg-blue-600 rounded-full' />
          </div>
        </div>

        {/* KOLOM KANAN: Deskripsi & Keunggulan */}
        <div data-aos='fade-left' className='space-y-6'> 
          <h3 className='text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3'>
            Dedicated Academic Support
          </h3>
          <p className='text-gray-600 leading-relaxed text-base sm:text-lg'> 
            We offer a wide range of specialized academic support and extracurricular programs designed to nurture student potential and foster excellence in every discipline. Our focus is on creating a holistic environment for growth.
          </p>
          
          {/* Tambahan List Fitur agar tidak terlalu kosong */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4'>
            <div className='flex items-center gap-2 text-gray-700 font-medium'>
              <CheckCircle2 className='text-blue-600 w-5 h-5' />
              <span>Personalized Tutoring</span>
            </div>
            <div className='flex items-center gap-2 text-gray-700 font-medium'>
              <CheckCircle2 className='text-blue-600 w-5 h-5' />
              <span>Modern Library</span>
            </div>
          </div>
        </div> 

      </div>
    </section>
  )
}

export default Services