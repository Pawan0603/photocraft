"use client"
import { Ban, Check, Pipette, Sparkles, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Textarea } from '../ui/textarea'

const BackgroundMobile = ({ removeBackground, restoreBackground, setShowEffectCard, ReplaceBackground, replaceBackground }) => {
  const [prompt, setPrompt] = useState("");
  const [BtnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    setPrompt(replaceBackground?.prompt || "");
    // This effect runs when the component mounts and sets the initial prompt value
  }, []);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
    if (e.target.value.trim() === "" || e.target.value.length < 3 || e.target.value.trim() === replaceBackground?.prompt?.trim()) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }

  const handleReplaceBackground = () => {
    if (prompt.trim() === "" || prompt.length < 3 || prompt.trim() === removeBackground?.prompt?.trim()) {
      return;
    }
    ReplaceBackground({ prompt });
    setBtnDisable(true);
  }

  const cancel = () => {
    restoreBackground();
    setShowEffectCard(false);
  }
  return (
    <div className='mt-3'>

      <section>
        {/* <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Replace Background</h4> */}
        <div className='flex flex-col gap-2'>
          <Textarea placeholder="Describe the background you want to replace with..." value={prompt} onChange={handlePromptChange} />
          <Button variant="outline" size="sm" className="self-end" onClick={handleReplaceBackground} disabled={BtnDisable}>
            <Sparkles /> Do magic
          </Button>
        </div>
      </section>

      <section className='flex flex-row items-center mt-4 gap-2'>
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