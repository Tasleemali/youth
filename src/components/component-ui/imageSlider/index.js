"use client"

import React, { useEffect, useState } from 'react'


const images = [
     'https://img.freepik.com/free-photo/travel-concept-close-up-portrait-young-beautiful-attractive-ginger-red-hair-girl-with-trendy-hat_1258-124917.jpg?t=st=1741101367~exp=1741104967~hmac=47b8a4237df2af4c7fe0c8c3b4b0dfa43667a03bc52a7554a92a5281bacaa83e&w=1380',
    "https://img.freepik.com/free-photo/tender-flirty-feminine-redhead-woman-playing-with-hair-tilting-head-shoulder-smiling-cute_1258-149403.jpg?t=st=1741101461~exp=1741105061~hmac=b36e12664768658d62d79f2b793f366401f8e357b3fd9c77f8c79524a02239af&w=1380",
    'https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-126800.jpg?ga=GA1.1.415168836.1738390941&semt=ais_hybrid',
     "https://img.freepik.com/free-photo/stylish-happy-girl-shopping-portrait-modern-woman-with-shop-bag-laughing-smiling-satisfied_1258-119361.jpg?t=st=1741101585~exp=1741105185~hmac=bacfb07f0cb7955130348bc362b861ce190e0f3c6f2f2d2fb23b26f88ccf2f91&w=1380"

]    
function ImageSlider() {
const [current ,setCurrent] = useState(0)
const slideinterval = 3000;

useEffect(()=>{
  const interval = setInterval(()=>{
    setCurrent((prev) => (prev + 1) % images.length);
  },slideinterval) ;
  return () => clearInterval(interval)
  

},[slideinterval])

  return (
    <div className='bg-white'>
      <div className='relative w-full mx-auto max-w-screen-2xl overflow-hidden h-auto lg:h-auto '>
<div className='flex   transition-transform duration-1000 ease-in-out relative w-full h-auto' >
   {images.map((img,index)=> (

    <img
    key={index}
    src={img}
    alt={`slide ${index+1}`}
    className={`w-full h-full bg-cover bg-center h-auto  rounded-lg transition-opacity duration-700 ${index === current? " translate-x-0  opacity-100": ' -translate-x-full opacity-0 absolute'}`}
    />
   ))}
</div>
{/* button */}
<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      </div>
    </div>
  )
}

export default ImageSlider
