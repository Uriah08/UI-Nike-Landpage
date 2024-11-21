import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center  max-xl:flex-col-reverse'>
      <div className='flex-1 mt-11'>
        <img src={offer} alt="offer" width={773} height={678} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className='mt-10 font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        <span className='text-coral-red inline-block mt-3'>Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Our commitment to high-quality sneakers and comfort is our top priority. We strive to provide our customers with the best possible experience, ensuring they have a comfortable, stylish, and safe shoe experience.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          <span className='text-coral-red font-bold'>Nike</span> is proud to be one of the world's most trusted brands in the sneaker industry.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop now" iconURL={arrowRight}/>
        <Button label='Learn More' backgroundColor="bg-white" borderColor='border-slate-gray'
        textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer