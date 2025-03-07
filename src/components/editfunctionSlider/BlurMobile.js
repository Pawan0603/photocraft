import React from 'react'
import { Button } from '../ui/button';
import { Check, X } from 'lucide-react';

const BlurMobile = ({ handleBlur, blur, blurFaces, pixelate, pixelateFaces, setShowEffectCard }) => {
    const cancel = () => {
        setShowEffectCard(false);
    }
    return (
        <div className='mt-3'>
            <section className='mx-4 flex flex-col gap-y-2 h-40 overflow-auto'>
                <div>
                    <label htmlFor='blur' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                        <span>Blur Level</span>
                        <input type='number' value={blur} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input
                        onChange={(e) => { handleBlur("blur", e.target.value) }}
                        defaultValue={blur}
                        id='blur'
                        name='blur'
                        type={'range'}
                        min={0}
                        max={2000}
                        className='w-full outline-none'
                    />
                </div>
                <div>
                    <label htmlFor='blurFaces' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                        <span>Blur Faces Level</span>
                        <input type='number' value={blurFaces} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input
                        onChange={(e) => { handleBlur("blurFaces", e.target.value) }}
                        defaultValue={blurFaces}
                        id='blurFaces'
                        name='blurFaces'
                        type={'range'}
                        min={0}
                        max={2000}
                        className='w-full outline-none'
                    />
                </div>
                <div>
                    <label htmlFor='pixelate' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                        <span>Pixelate Level</span>
                        <input type='number' value={pixelate} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input
                        onChange={(e) => { handleBlur("pixelate", e.target.value) }}
                        defaultValue={pixelate}
                        id='pixelate'
                        name='pixelate' type={'range'}
                        min={0} max={200}
                        className='w-full outline-none' />
                </div>
                <div>
                    <label htmlFor='pixelateFaces' className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'>
                        <span>Pixelate Faces Level</span>
                        <input type='number' value={pixelateFaces} className='outline-none border rounded-md w-10 px-1 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield]' readOnly></input>
                    </label>
                    <input
                        onChange={(e) => { handleBlur("pixelateFaces", e.target.value) }}
                        defaultValue={pixelateFaces}
                        id='pixelateFaces'
                        name='pixelateFaces'
                        type={'range'}
                        min={0}
                        max={200}
                        className='w-full outline-none'
                    />
                </div>
            </section>

            <section className='flex flex-row justify-between items-center mt-4'>
                <Button variant="outline" onClick={cancel}><X /></Button>
                <div>Blur</div>
                <Button variant="outline" onClick={() => { setShowEffectCard(false) }}><Check /></Button>
            </section>
        </div>
    )
}

export default BlurMobile