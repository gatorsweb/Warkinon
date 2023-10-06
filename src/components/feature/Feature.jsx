import React from 'react'

export default function Feature() {
  return (
    <div className='section-margin'>
        <div className='container'>
            <div className='grid grid-cols-2 md:grid-flow-row gap-8'>
                <div className='col-span-2 md:col-span-1'>
                    <img src="/images/feature.png" alt="" />
                </div>
                <div className='col-span-2 md:col-span-1 flex flex-col justify-center'>
                    <h1>Let your visitors know about your features.</h1>
                    <p className='py-4'>We develop enjoyable consumer experiences, from digital strategy and content to media and analysis. Leading to meaningful results and satisfied clients.</p>
                    <button className='btn-primary'>Our Process</button>
                </div>
            </div>
        </div>
    </div>
  )
}
