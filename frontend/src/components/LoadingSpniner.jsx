import React from 'react'

const LoadingSpniner = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-linear-to-br from-blue-900 to-blue-900'>
        <div className="text-center">
            <div className="flex space-x-2 mb-4">
                <div className='w-6 h-6 bg-blue-400 rounded-full animate-bounce' />
                <div className='w-6 h-6 bg-blue-400 rounded-full animate-bounce' 
                    style={{animationDelay: '0.1s' }}/>

                <div className='w-6 h-6 bg-blue-400 rounded-full animate-bounce' 
                    style={{animationDelay: '0.2s' }}/>

                <div className='w-6 h-6 bg-blue-400 rounded-full animate-bounce' 
                    style={{animationDelay: '0.4s' }}/>

            
            </div>
        </div>
    </div>
  )
}

export default LoadingSpniner
