import { Ban, Check, Pipette, X } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const BackgroundMobile = ({ removeBackground, restoreBackground, setShowEffectCard }) => {

    const cancel = () => {
        restoreBackground();
        setShowEffectCard(false);
    }
    return (
        <div className='mt-3'>
            <section className=''>
                <div className='flex flex-row gap-2 mb-2'>
                    <button onClick={() => { restoreBackground() }} className='border rounded-lg p-2 hover:shadow-md'>
                        <Ban size={20} color='red' />
                    </button>
                    <button onClick={() => { removeBackground() }} className='border rounded-lg h-[43px] w-[43px] hover:shadow-md'>
                        <Image src='/bgremove.webp' width={50} height={50} alt='bgremove image' className='h-full w-full' />
                    </button>
                </div>

                <div className='grid grid-flow-col overflow-auto gap-2 no-scrollbar'>
                    <button className='flex items-center justify-center border rounded-lg h-[30px] w-[30px] hover:shadow-md hover:cursor-pointer'>
                        <label htmlFor='color' className='text-black dark:text-white flex items-center justify-center'><Pipette size={20} /></label>
                        <input id='color' type='color' className='border rounded-lg h-[30px] w-[30px] hover:shadow-md hidden' />
                    </button>

                    <button onClick={() => { removeBackground("white") }} className='border rounded-lg h-[30px] w-[30px] bg-white hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("red") }} className='border rounded-lg h-[30px] w-[30px] bg-[red] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("blue") }} className='border rounded-lg h-[30px] w-[30px] bg-[blue] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("green") }} className='border rounded-lg h-[30px] w-[30px] bg-[green] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("yellow") }} className='border rounded-lg h-[30px] w-[30px] bg-[yellow] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("purple") }} className='border rounded-lg h-[30px] w-[30px] bg-[purple] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("pink") }} className='border rounded-lg h-[30px] w-[30px] bg-[pink] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("orange") }} className='border rounded-lg h-[30px] w-[30px] bg-[orange] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("teal") }} className='border rounded-lg h-[30px] w-[30px] bg-[teal] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("indigo") }} className='border rounded-lg h-[30px] w-[30px] bg-[indigo] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("gray") }} className='border rounded-lg h-[30px] w-[30px] bg-[gray] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("black") }} className='border rounded-lg h-[30px] w-[30px] bg-black hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("lime") }} className='border rounded-lg h-[30px] w-[30px] bg-[lime] hover:shadow-md'></button>
                    <button onClick={() => { removeBackground("cyan") }} className='border rounded-lg h-[30px] w-[30px] bg-[cyan] hover:shadow-md'></button>
                </div>
            </section>

            <section className='flex flex-row justify-between items-center mt-4'>
                <Button variant="outline" onClick={cancel}><X /></Button>
                <div>Background</div>
                <Button variant="outline" onClick={() => { setShowEffectCard(false) }}><Check /></Button>
            </section>
        </div>
    )
}

export default BackgroundMobile