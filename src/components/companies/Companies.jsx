import React from 'react'

export default function Companies() {
  return (
    <div className='section-margin'>
        <div className='max-w-[1082px] m-auto'> 
            <h5 className='text-center mb-[40px]'>Trusted by the world's best companies</h5>
            <div className='grid grid-cols-6 md:grid-flow-row gap-6'>
                <div className='col-span-6 md:col-span-1 flex justify-center'>
                    <img src="/images/Nike.png" alt="nike" />
                </div>
                <div className='col-span-6 md:col-span-1 flex justify-center'>
                    <img src="/images/Spotify.png" alt="nike" />
                </div>
                <div className='col-span-6 md:col-span-1 flex justify-center'>
                    <img src="/images/Google.png" alt="nike" />
                </div>
                <div className='col-span-6 md:col-span-1 flex justify-center'>
                    <img src="/images/Apple.png" alt="nike" />
                </div>
                <div className='col-span-6 md:col-span-1 flex justify-center'>
                    <img src="/images/Amazon.png" alt="nike" />
                </div>
                <div className='col-span-6 md:col-span-1 flex justify-center'>
                    <img src="/images/Airbnb.png" alt="nike" />
                </div>

            </div>
        </div>
    </div>
  )
}
