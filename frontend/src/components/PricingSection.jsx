import React from 'react'
import pc1 from '../assets/pc1.jpg'

const PricingSection = () => {
    return (
        <section id='pricing' className='min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24'>
            <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24'>
                
                {/* Image Section */}
                <div className="relative flex justify-center lg:justify-end" data-aos='fade-right'>
                    <div className='absolute -left-4 sm:left-6 -top-4 sm:-top-6 w-64 sm:w-full h-full max-w-xs sm:max-w-sm bg-blue-600 rounded-2xl' />
                    <img 
                        src={pc1} 
                        alt='Education Pricing'
                        className='relative w-full max-w-xs sm:max-w-sm shadow-2xl rounded-2xl object-cover z-10 transition-transform duration-500 hover:scale-105' 
                    /> 
                </div>

                {/* Content Section */}
                <div className='text-center lg:text-left' data-aos='fade-left'>
                    <p className='text-blue-600 font-bold uppercase tracking-widest text-sm mb-3'>
                        Course Packages
                    </p>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1a44] mb-8 sm:mb-10'>
                        Choice of Investment <br className='hidden sm:block' /> for Your Career
                    </h2>

                    {/* Card 1: Standard/Professional */}
                    <div className='bg-white border border-gray-100 text-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-xl hover:shadow-2xl transition-shadow duration-300'
                        data-aos='fade-up'
                        data-aos-delay='100'>
                        <div className='flex justify-between items-center mb-4'>
                            <div>
                                <h3 className='text-xl font-bold text-[#0a1a44]'>Professional Plan</h3>
                                <p className='text-sm text-gray-500'>Best for individual learners</p>
                            </div>
                            <div className='text-right'>
                                <span className='text-2xl sm:text-3xl font-bold text-blue-600'>$199</span>
                                <p className='text-xs text-gray-400'>/semester</p>
                            </div>
                        </div>
                        <ul className='text-sm space-y-2 text-gray-600'>
                            <li className='flex items-center gap-2'>✓ Access to 50+ Core Courses</li>
                            <li className='flex items-center gap-2'>✓ Digital Verified Certificates</li>
                            <li className='flex items-center gap-2'>✓ Standard Community Support</li>
                        </ul>
                    </div>

                    {/* Card 2: Unlimited (Featured) */}
                    <div className='bg-blue-600 text-white rounded-2xl p-6 sm:p-8 mb-6 shadow-blue-200 shadow-2xl transform lg:scale-105 relative overflow-hidden'
                        data-aos='fade-up'
                        data-aos-delay='200'>
                        {/* Tag Populer */}
                        <div className='absolute top-4 right-[-35px] bg-yellow-400 text-blue-900 text-[10px] font-bold py-1 px-10 rotate-45'>
                            BEST VALUE
                        </div>
                        
                        <div className='flex justify-between items-center mb-4'>
                            <div>
                                <h3 className='text-xl font-bold'>Unlimited Access</h3>
                                <p className='text-blue-100 text-sm'>Full career transformation</p>
                            </div>
                            <div className='text-right'>
                                <span className='text-2xl sm:text-3xl font-bold'>$999</span>
                                <p className='text-xs text-blue-200'>/one-time</p>
                            </div>
                        </div>
                        <ul className='text-sm space-y-2 text-blue-50'>
                            <li className='flex items-center gap-2'>✓ Lifetime Access to All Courses</li>
                            <li className='flex items-center gap-2'>✓ 1-on-1 Private Mentoring</li>
                            <li className='flex items-center gap-2'>✓ Job Placement Guarantee</li>
                            <li className='flex items-center gap-2'>✓ Exclusive Offline Workshops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection