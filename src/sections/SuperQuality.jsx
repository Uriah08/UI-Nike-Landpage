import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      <h2 className='mt-10 font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        We Provide You
        <br />
        <span className='text-coral-red inline-block mt-3'>Super Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Our commitment to high-quality sneakers and comfort is our top priority. We strive to provide our customers with the best possible experience, ensuring they have a comfortable, stylish, and safe shoe experience.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          <span className='text-coral-red font-bold'>Nike</span> is proud to be one of the world's most trusted brands in the sneaker industry.
        </p>
        <div className='mt-11'>
        <Button label="View Details"/>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality