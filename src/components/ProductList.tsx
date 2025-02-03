import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className='mt-14 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
       <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
       <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'/>
        <Image src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
       </div>
       <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$45</span>
       </div>
       <div className='text-sm text-gray-500'>My Describtion</div>
       <button className='w-max rounded-2xl ring-1 ring-ozia text-ozia py-2 px-4 text-xs hover:bg-ozia hover:text-white'>Add to Cart</button>
       </Link>
       <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
       <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'/>
        <Image src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
       </div>
       <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$45</span>
       </div>
       <div className='text-sm text-gray-500'>My Describtion</div>
       <button className='w-max rounded-2xl ring-1 ring-ozia text-ozia py-2 px-4 text-xs hover:bg-ozia hover:text-white'>Add to Cart</button>
       </Link>
       <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
       <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'/>
        <Image src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
       </div>
       <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$45</span>
       </div>
       <div className='text-sm text-gray-500'>My Describtion</div>
       <button className='w-max rounded-2xl ring-1 ring-ozia text-ozia py-2 px-4 text-xs hover:bg-ozia hover:text-white'>Add to Cart</button>
       </Link>
       <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
       <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500'/>
        <Image src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'/>
       </div>
       <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$45</span>
       </div>
       <div className='text-sm text-gray-500'>My Describtion</div>
       <button className='w-max rounded-2xl ring-1 ring-ozia text-ozia py-2 px-4 text-xs hover:bg-ozia hover:text-white'>Add to Cart</button>
       </Link>
    </div>
  )
}

export default ProductList
