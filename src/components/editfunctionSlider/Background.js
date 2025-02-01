"use client"
import { Ban, Pipette } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function Background({ removeBackground, restoreBackground }) {

  return (
    <div className='mx-4'>
      <h3 className='text-gray-700 dark:text-gray-300 mb-3'>Background</h3>
      <div className='flex flex-col gap-4'>
        <section className='flex gap-4'>
          <button onClick={()=>{restoreBackground()}} className='border rounded-lg p-4 hover:shadow-md'>
            <Ban size={30} color='red' />
          </button>
          <button onClick={()=>{removeBackground()}} className='border rounded-lg h-[63px] w-[63px] hover:shadow-md'>
            <Image src='/bgremove.webp' width={50} height={50} alt='bgremove image' className='h-full w-full' />
          </button>
        </section>

        <section>
          <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Background Color</h4>
          <div className='gap-2 grid grid-cols-5'>
            <button className='flex items-center justify-center border rounded-lg h-[30px] w-[30px] hover:shadow-md hover:cursor-pointer'>
              <label htmlFor='color' className='text-black dark:text-white flex items-center justify-center'><Pipette size={20} /></label>
              <input id='color' type='color' className='border rounded-lg h-[30px] w-[30px] hover:shadow-md hidden' />
            </button>

            <button onClick={()=>{removeBackground("white")}} className='border rounded-lg h-[30px] w-[30px] bg-white ver:shadow-md'></button>
            <button onClick={()=>{removeBackground("red")}} className='border rounded-lg h-[30px] w-[30px] bg-[red] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("blue")}} className='border rounded-lg h-[30px] w-[30px] bg-[blue] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("green")}} className='border rounded-lg h-[30px] w-[30px] bg-[green] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("yellow")}} className='border rounded-lg h-[30px] w-[30px] bg-[yellow] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("purple")}} className='border rounded-lg h-[30px] w-[30px] bg-[purple] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("pink")}} className='border rounded-lg h-[30px] w-[30px] bg-[pink] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("orange")}} className='border rounded-lg h-[30px] w-[30px] bg-[orange] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("teal")}} className='border rounded-lg h-[30px] w-[30px] bg-[teal] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("indigo")}} className='border rounded-lg h-[30px] w-[30px] bg-[indigo] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("gray")}} className='border rounded-lg h-[30px] w-[30px] bg-[gray] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("black")}} className='border rounded-lg h-[30px] w-[30px] bg-black hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("lime")}} className='border rounded-lg h-[30px] w-[30px] bg-[lime] hover:shadow-md'></button>
            <button onClick={()=>{removeBackground("cyan")}} className='border rounded-lg h-[30px] w-[30px] bg-[cyan] hover:shadow-md'></button>
          </div>
        </section>

        <section>
          <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Background Image</h4>
          <div className='flex gap-4'>
            <button className='border rounded-lg hover:shadow-md'>
              <Image src='/bgremove.webp' width={50} height={50} alt='bgremove image' />
            </button>
            <button className='border rounded-lg hover:shadow-md'>
              <Image src='/bgremove.webp' width={50} height={50} alt='bgremove image' />
            </button>
            <button className='border rounded-lg hover:shadow-md'>
              <Image src='/bgremove.webp' width={50} height={50} alt='bgremove image' />
            </button>
            </div>
        </section>

      </div>
    </div>
  )
}

export default Background