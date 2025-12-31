'use client';
import { Check, Sparkles, X } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input';

function RemoveObjectMobile({ handleRemoveObject, handleDeleteRemoveObject, removeObject, setShowEffectCard }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const RemoveObj = (e) => {
    e.preventDefault();
    handleRemoveObject(text);
    setText('');
  }

  const cancel = () => {
    restoreBackground();
    setShowEffectCard(false);
  }

  return (
    <div className='mt-3'>
      <section className='flex flex-col'>
        <form onSubmit={RemoveObj} className='flex flex-col gap-3 place-items-end'>
          <label className='text-gray-700 dark:text-gray-300 text-sm self-start' htmlFor='text'>Enter prompt to remove object.</label>
          <Input type="text" placeholder="Example: glass" value={text} onChange={handleChange} required />
          <Button variant="outline" size="sm" className="self-end" type="submit" disabled={text === ''}>
            <Sparkles /> Do magic
          </Button>
        </form>

        <section>
          <h4 className='text-sm text-neutral-700 dark:text-neutral-400 mb-3'>Remove Object</h4>
          <div className='flex flex-row gap-2 overflow-auto no-scrollbar'>
            {removeObject !== null && removeObject.map((obj, index) => {
              return (<div key={index} className='flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 text-zinc-600 font-mono rounded-full px-4 py-2 hover:shadow-md dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-black gap-2'>
                <p className='text-sm'>{obj}</p>
                <button onClick={() => { handleDeleteRemoveObject(obj) }} className=""><X size={14} /></button>
              </div>)
            })}
          </div>
        </section>
      </section>

      <section className='flex flex-row justify-between items-center mt-4'>
        <Button variant="outline" onClick={cancel}><X /></Button>
        <div>Remove</div>
        <Button variant="outline" onClick={() => { setShowEffectCard(false) }}><Check /></Button>
      </section>
    </div>
  )
}

export default RemoveObjectMobile