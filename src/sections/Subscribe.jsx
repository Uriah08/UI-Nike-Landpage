import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10 ' id='contact us'>

      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>Sign Up from <span className='text-coral-red'>Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-s-slate-gray justify-between rounded-full'>
        <input type="text" className='input' placeholder='subscribenike@gmail.com'/>
      <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <Button label={'Sign Up'} fullWidth/>
      </div>
      </div>
    </section>
  )
}

export default Subscribe