import React from 'react'
import texture from '../assets/christmas.jpg'
import blue from '../assets/blue.jpg'
import snow from '../assets/snow.jpg'

const Modal = () => {
   
    const  images = [
        {
            id: 1,
            img: texture
        },

        {
            id: 2,
            img: blue
        },


        {
            id: 3,
            img: snow
        },


    ];



  return (
    <div className='flex items-center gap-4'>
       {images.map((value) => (
         <div key={value.id} >
            <img src = {value.img} className='w-12 h-12 rounded-full shadow-gray-600 shadow-lg cursor-pointer border-2
       duration-500 ease hover:border-red-300' />
            </div>
       ))}
    </div>
  )
}

export default Modal
