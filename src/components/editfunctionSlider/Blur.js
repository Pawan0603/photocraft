'use client';
import React from 'react'

const Blur = ({ handleBlur, blur, blurFaces, pixelate, pixelateFaces }) => {
    return (
        <div className='mx-4'>
            <h3 className='text-gray-700 dark:text-gray-300 mb-3'>Blur</h3>
            <div className='flex flex-col gap-4'>

                <section>
                    <label className='flex flex-row justify-between text-gray-700 dark:text-gray-300 mb-3'>
                        <h4 className=''>Blur Level</h4>
                        <input type='number' value={blur} className='outline-none border rounded-md w-12 h-fit px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input type='range' min='0' max='2000' value={blur} onChange={(e) => { handleBlur("blur", e.target.value) }} className='w-full' />
                </section>

                <section>
                    <label className='flex flex-row justify-between text-gray-700 dark:text-gray-300 mb-3'>
                        <h4>Blur Faces Level</h4>
                        <input type='number' value={blurFaces} className='outline-none border rounded-md w-12 h-fit px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input type='range' min='0' max='2000' value={blurFaces} onChange={(e) => { handleBlur("blurFaces", e.target.value) }} className='w-full' />
                </section>

                <section>
                    <label className='flex flex-row justify-between text-gray-700 dark:text-gray-300 mb-3'>
                        <h4>Pixelate Level</h4>
                        <input type='number' value={pixelate} className='outline-none border rounded-md w-12 h-fit px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input type='range' min='0' max='200' value={pixelate} onChange={(e) => { handleBlur("pixelate", e.target.value) }} className='w-full' />
                </section>

                <section>
                    <label className='flex flex-row justify-between text-gray-700 dark:text-gray-300 mb-3'>
                        <h4>Pixelate Level</h4>
                        <input type='number' value={pixelateFaces} className='outline-none border rounded-md w-12 h-fit px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input type='range' min='0' max='200' value={pixelateFaces} onChange={(e) => { handleBlur("pixelateFaces", e.target.value) }} className='w-full' />
                </section>
            </div>
        </div>
    )
}

export default Blur