import React from 'react'

export default function CompnayFeature() {
  return (
    <div className='bg-light py-24'>
        
        <div className='container'>
            <div className='text-center my-12'>
                <h1>I want company feature</h1>
                <p>We believe scaling startups require a radically different kind of agency</p>
            </div>
            <div className='grid grid-cols-3 md:grid-flow-row gap-4'>

                <div className='feature__card col-span-3 md:col-span-1'>
                    <img src="/images/featureImg01.png" alt="feature" />
                    <h4>Easy to purchase</h4>
                    <p>A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
                </div>

                <div className='feature__card bg-primary col-span-3 md:col-span-1'>
                    <img src="/images/featureImg02.png" alt="feature" />
                    <h4 className='text-[white]'>Easy to purchase</h4>
                    <p className='text-[white]'>A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
                </div>

                <div className='feature__card col-span-3 md:col-span-1'>
                    <img src="/images/featureImg03.png" alt="feature" />
                    <h4>Easy to purchase</h4>
                    <p>A complete set of tools to enable marketing teams to curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
                </div>


            </div>
        </div>
    </div>
  )
}
