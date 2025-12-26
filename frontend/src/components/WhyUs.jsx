import { BookOpen, ShieldCheck, Trophy, Users } from 'lucide-react'
import React from 'react'

const WhyUs = () => {

    const items = [
        {
            icon: <BookOpen />,
            title: 'Modern Curriculum',
            desc: 'We implement a global-standard curriculum designed to foster critical thinking and practical skills for the future.'
        },
        {
            icon: <Users />,
            title: 'Expert Educators',
            desc: 'Our faculty consists of certified professionals dedicated to mentoring students in a supportive learning environment.'
        },
        {
            icon: <Trophy />,
            title: 'Proven Achievement',
            desc: 'A consistent track record of academic and non-academic excellence at both national and international levels.'
        },
        {
            icon: <ShieldCheck />,
            title: 'Character Building',
            desc: 'We prioritize ethics and integrity, ensuring students grow into responsible and well-rounded individuals.'
        }
    ]

  return (
    <section id='whyus' className='bg-white py-12 sm:py-16 lg:pt-2 lg:pb-20 px-4 sm:px-6'>
        <div className='max-w-6xl mx-auto'>
            <div className='texte-center mb-12 sm:mb-16 lg:mb-20' 
                data-aos='fade-up'>
                    <p className='text-gray-400 mb-3 text-sm sm:text-base'>
                        Why Choose Us
                    </p>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black'>
                        Excellence in Education
                    </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16'>
                {items.map((item, index) => (
                    <div key={index}
                        className='flex items-start fap-4 sm:gap-6'
                        data-aos='fade-up'
                        data-aos-delay={index * 100}>
                            <div className='flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-blue-600 text-white shrink-0 p-3 sm:p-4'>
                                <div className='w-6 h-6 sm:w-8 sm:h-8'>
                                    {React.cloneElement(item.icon, {size: '100%'})}
                                </div>
                            </div>
                            <div>
                                <h3 className='texte-lg sm:text-xl font-semibold text-gray-900 mb-2'>
                                    {item.title}
                                </h3>    
                                <p className='text-gray-500 leading-relaxed text-sm sm:text-base'>
                                    {item.desc}
                                </p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyUs
