'use client';
import { X } from 'lucide-react'
import React, { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area';

const RemoveObject = ({ handleRemoveObject, handleDeleteRemoveObject, removeObject }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const RemoveObj = (e) => {
        e.preventDefault();
        handleRemoveObject(text);
        setText('');
    }


    return (
        <div className='mx-4 h-full'>
            <h3 className='text-gray-700 dark:text-gray-300 mb-3'>Remove</h3>
            <div className='flex flex-col gap-4 h-full'>
                <form onSubmit={RemoveObj} className='flex flex-col gap-3 place-items-end'>
                    <label className='text-gray-700 dark:text-gray-300 text-sm self-start' htmlFor='text'>Enter prompt to remove object.</label>
                    <input
                        className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
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

                <section className='h-full'>
                    <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Remove Object</h4>
                    <ScrollArea className="flex flex-col w-full h-[calc(100%-196px)] mt-3">
                        <div className="flex flex-col gap-2">
                            {removeObject !== null && removeObject.map((obj, index) => {
                                return (<div key={index} className='flex justify-between items-center bg-neutral-50 hover:bg-neutral-100 text-zinc-600 font-mono rounded-md px-4 py-2 hover:shadow-md dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-purple-500'>
                                    <p>{obj}</p>
                                    <button onClick={() => { handleDeleteRemoveObject(obj) }} className=""><X /></button>
                                </div>)
                            })}
                        </div>
                    </ScrollArea>
                </section>
            </div>
        </div>
    )
}

export default RemoveObject