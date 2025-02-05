"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const images = [
    {   
        id: 1,
        url: "https://images.pexels.com/photos/5710075/pexels-photo-5710075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {   
        id: 2,
        url: "https://images.pexels.com/photos/5413299/pexels-photo-5413299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {   
        id: 3,
        url: "https://images.pexels.com/photos/5413291/pexels-photo-5413291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {   
        id: 4,
        url: "https://images.pexels.com/photos/5413302/pexels-photo-5413302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]

const ProductImages = () => {

    const [index, setIndex] = useState(0)

  return (
    <div className=''>
      <div className='relative h-[500px]'>
        <Image src={images[index].url} alt="" fill sizes='50vw' className='object-cover rounded-md'/>
      </div>
      <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
        {images.map((img, i)=>(
            <div className='w-1/4 h-32 relative gap-4 mt-8' key={img.id} onClick={()=>setIndex(i)}>
            <Image src={img.url} alt="" fill sizes='30vw' className='object-cover rounded-md'/>
         </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
