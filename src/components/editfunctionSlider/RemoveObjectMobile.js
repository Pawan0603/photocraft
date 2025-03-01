'use client';
import { Check, X } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

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
      <section className='flex flex-col gap-4'>
        <form onSubmit={RemoveObj} className='flex flex-col gap-3 place-items-end'>
          <label className='text-gray-700 dark:text-gray-300 text-sm self-start' htmlFor='text'>Enter prompt to remove object.</label>
          <input
            className="w-full bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
            autoComplete="off"
            placeholder="Example: remove glass"
            name="text"
            type="text"
            value={text}
            onChange={handleChange}
            required
          />
          <button disabled={text === ''} type='submit' className="bg-rose-400 text-white font-semibold rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500 disabled:opacity-50">Remove</button>

        </form>

        <section>
          <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Remove Object</h4>
          <div className='flex flex-row gap-2 overflow-auto no-scrollbar'>
            {removeObject !== null && removeObject.map((obj, index) => {
              return (<div key={index} className='flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 text-zinc-600 font-mono rounded-md px-4 py-2 hover:shadow-md dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-purple-500 gap-2'>
                <p>{obj}</p>
                <button onClick={() => { handleDeleteRemoveObject(obj) }} className=""><X size={18}/></button>
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