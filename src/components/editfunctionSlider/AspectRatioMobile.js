import React from 'react'
import { Button } from '../ui/button';
import { Ban, Check, X } from 'lucide-react';

const AspectRatioMobile = ({ handleAspectRatio, aspectRatio, setShowEffectCard }) => {

  const handelClick = (Ratio) => {
    if (Ratio === aspectRatio) return
    if (Ratio === null) {
      handleAspectRatio(false, null);
    } else {
      handleAspectRatio(true, Ratio)
    }

    setShowEffectCard(false)
  }

  const cancel = () => {
    setShowEffectCard(false);
  }
  return (
    <div className='mt-3'>
      <section className='flex flex-col gap-3 h-52 overflow-auto'>
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

      <section className='flex flex-row justify-between items-center mt-4'>
        <Button variant="outline" onClick={cancel}><X /></Button>
        <div>Aspect Ratio</div>
        <Button variant="outline" onClick={() => { setShowEffectCard(false) }}><Check /></Button>
      </section>
    </div>
  )
}

export default AspectRatioMobile