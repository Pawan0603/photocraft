import { Ban, Ratio, RectangleHorizontal, Square } from 'lucide-react'
import React from 'react'
import { ScrollArea } from '../ui/scroll-area';

function AspectRatio({ handleAspectRatio, aspectRatio }) {

    const handelClick = (Ratio) => {
        if (Ratio === aspectRatio) return
        if (Ratio === null) {
            handleAspectRatio(false, null);
        } else {
            handleAspectRatio(true, Ratio)
        }
    }
    return (
        <div className='mx-4 h-full'>
            <h3 className='text-gray-700 dark:text-gray-300 mb-5'>Color Correction</h3>
            <ScrollArea className="flex flex-row justify-between w-full h-[calc(100%-44px)]">
                <section className='flex flex-col gap-3'>
                    <button onClick={() => { handelClick(null) }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === null ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <Ban color='red' />
                        <span>None</span>
                    </button>
                    <button onClick={() => { handelClick("1:1") }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === "1:1" ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <div className='w-[23px] border-[2.4px] border-neutral-500 dark:border-neutral-200 rounded-sm aspect-[1/1]' />
                        <span>1:1 ( Square )</span>
                    </button>
                    <button onClick={() => { handelClick("4:3") }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === "4:3" ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <div className='w-[23px] border-[2.4px] border-neutral-500 dark:border-neutral-200 rounded-sm aspect-[4/3]' />
                        <span>4:3 ( standard )</span>
                    </button>
                    <button onClick={() => { handelClick("16:9") }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === "16:9" ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <div className='w-[23px] border-[2.4px] border-neutral-500 dark:border-neutral-200 rounded-sm aspect-[16/9]' />
                        <span>16:9 ( Widescreen )</span>
                    </button>
                    <button onClick={() => { handelClick("9:16") }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === "9:16" ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <div className='h-[23px] border-[2.4px] border-neutral-500 dark:border-neutral-200 rounded-sm aspect-[9/16]' />
                        <span>9:16 ( Mobile Screen )</span>
                    </button>
                    <button onClick={() => { handelClick("3:2") }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === "3:2" ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <div className='w-[23px] border-[2.4px] border-neutral-500 dark:border-neutral-200 rounded-sm aspect-[3/2]' />
                        <span>3:2 ( Classic photo )</span>
                    </button>
                    <button onClick={() => { handelClick("21:9") }} className={`flex flex-row items-center p-3 border rounded-md w-full gap-2 text-neutral-600 dark:text-neutral-200 hover:shadow-md ${aspectRatio === "21:9" ? "bg-neutral-100 dark:bg-neutral-800 border-[1px] border-blue-500 dark:border-blue-900" : ""}`}>
                        <div className='w-[23px] border-[2.4px] border-neutral-500 dark:border-neutral-200 rounded-sm aspect-[21/9]' />
                        <span>21:9 Ultra widescreen</span>
                    </button>
                </section>
            </ScrollArea>
        </div>
    )
}

export default AspectRatio