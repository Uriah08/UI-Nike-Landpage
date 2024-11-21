import React from 'react'
import { reviews } from '../constant'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    
    <section className='max-container'>
      <h3 className='font-palanquin text-color text-4xl font-bold text-center'>What Our <span className='text-coral-red'>Customers</span> Say?</h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Our satisfied customers love our shoes, and they say they've been using them for years. Read what they've said about us and why they're so happy with our shoes.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews