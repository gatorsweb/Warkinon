import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  return (
    <div className='container'>
        <div className='mb-[75px]'>
        <h2>Our Impressive Portfolio</h2>
        <p className='text-[18px]'>We believe scaling startups require a radically different kind of agency</p>
        </div>
        
        <div className='grid grid-cols-2 md:grid-flow-row gap-16'>

            <div className='text-center col-span-2 md:col-span-1'>
                <Link>
                <img src="images/portfolio01.png" alt="portfolio" />
                <h3 className='mt-3'>Website Design</h3>
                </Link> 
            </div>

            <div className='text-center col-span-2 md:col-span-1'>
                <Link>
                <img src="images/portfolio02.png" alt="portfolio" />
                <h3 className='mt-3'>Website Design</h3>
                </Link> 
            </div>

            <div className='text-center col-span-2 md:col-span-1'>
                <Link>
                <img src="images/portfolio03.png" alt="portfolio" />
                <h3 className='mt-3'>Website Design</h3>
                </Link> 
            </div>

            <div className='text-center col-span-2 md:col-span-1'>
                <Link>
                <img src="images/portfolio04.png" alt="portfolio" />
                <h3 className='mt-3'>Website Design</h3>
                </Link> 
            </div>

        </div>
    </div>
  )
}
