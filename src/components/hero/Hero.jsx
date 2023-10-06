import React from 'react'

export default function Hero() {
  return (
    <div className='hero-section'>
        <div className='container'>
            <div className='grid grid-cols-2'>
                <div className='col-span-2 md:col-span-1'>
                    <h1 className='large-text'>The Better Way To Success In Your Business</h1>
                    <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <button className='btn-primary uppercase'>Hire Me</button>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <img src="/images/HeroImg.png" alt="hero img" />
                </div>
            </div>
        </div>
    </div>
  )
}
